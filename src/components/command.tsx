"use client";

import { cn } from "@/lib/utils";
import {
  Combobox as AriakitCombobox,
  ComboboxGroup as AriakitComboboxGroup,
  ComboboxGroupLabel as AriakitComboboxGroupLabel,
  ComboboxItem as AriakitComboboxItem,
  ComboboxList as AriakitComboboxList,
  ComboboxProvider,
  useComboboxStore,
  useDialogStore,
  type ComboboxProviderProps,
  type DialogStore,
} from "@ariakit/react";
import { SearchIcon } from "lucide-react";
import {
  Children,
  ComponentProps,
  Dispatch,
  ReactElement,
  ReactNode,
  SetStateAction,
  createContext,
  isValidElement,
  startTransition,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/dialog";

interface CommandContextValue {
  search: string;
  setSearch: (search: string) => void;
  visibleCount: number;
  setVisibleCount: Dispatch<SetStateAction<number>>;
}

const CommandContext = createContext<CommandContextValue | undefined>(
  undefined
);

// Context for passing dialog store from CommandDialog to Command
const CommandDialogContext = createContext<DialogStore | undefined>(undefined);

function useCommandContext() {
  const context = useContext(CommandContext);
  if (!context) {
    throw new Error("Command components must be used within Command");
  }
  return context;
}

function Command({
  className,
  children,
  onValueChange,
  ...props
}: Omit<ComboboxProviderProps, "store"> & {
  className?: string;
  onValueChange?: (value: string) => void;
}) {
  const [search, setSearch] = useState("");
  const [visibleCount, setVisibleCount] = useState(0);

  // Get dialog store if Command is inside CommandDialog
  const dialog = useContext(CommandDialogContext);

  const handleSearchChange = useCallback((value: string) => {
    setSearch(value);
    setVisibleCount(0); // Reset count when search changes
  }, []);

  const combobox = useComboboxStore({
    ...props,
    setValue: (value) => {
      startTransition(() => {
        onValueChange?.(value);
        props.setValue?.(value);
      });
    },
  });

  const contextValue = useMemo(
    () => ({
      search,
      setSearch: handleSearchChange,
      visibleCount,
      setVisibleCount,
    }),
    [search, handleSearchChange, visibleCount]
  );

  return (
    <CommandContext.Provider value={contextValue}>
      <ComboboxProvider
        store={combobox}
        {...(dialog && { disclosure: dialog })}
        focusLoop={false}
        includesBaseElement={false}
      >
        <div
          data-slot="command"
          className={cn(
            "bg-popover text-popover-foreground flex h-full w-full flex-col overflow-hidden rounded-md",
            className
          )}
        >
          {children}
        </div>
      </ComboboxProvider>
    </CommandContext.Provider>
  );
}

function CommandDialog({
  title = "Command Palette",
  description = "Search for a command to run...",
  children,
  className,
  showCloseButton = true,
  open,
  onOpenChange,
  ...props
}: ComponentProps<typeof Dialog> & {
  title?: string;
  description?: string;
  className?: string;
  showCloseButton?: boolean;
}) {
  const dialog = useDialogStore({ open, setOpen: onOpenChange });

  return (
    <CommandDialogContext.Provider value={dialog}>
      <Dialog store={dialog} {...props}>
        <DialogHeader className="sr-only">
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <DialogContent
          className={cn("overflow-hidden p-0", className)}
          showCloseButton={showCloseButton}
        >
          {children}
        </DialogContent>
      </Dialog>
    </CommandDialogContext.Provider>
  );
}

function CommandInput({
  className,
  ...props
}: ComponentProps<typeof AriakitCombobox>) {
  const { setSearch } = useCommandContext();

  return (
    <div
      data-slot="command-input-wrapper"
      className="flex items-center gap-2 border-b px-3"
    >
      <SearchIcon className="size-4 shrink-0 opacity-50" />
      <AriakitCombobox
        data-slot="command-input"
        className={cn(
          "placeholder:text-muted-foreground flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-hidden disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        onChange={(e) => {
          setSearch(e.target.value);
          props.onChange?.(e);
        }}
        {...props}
      />
    </div>
  );
}

function CommandList({
  className,
  children,
  ...props
}: ComponentProps<typeof AriakitComboboxList>) {
  return (
    <AriakitComboboxList
      data-slot="command-list"
      alwaysVisible
      className={cn(
        "max-h-[300px] scroll-py-1 overflow-x-hidden overflow-y-auto",
        className
      )}
      {...props}
    >
      {children}
    </AriakitComboboxList>
  );
}

function CommandEmpty({
  children = "No results found.",
  className,
  ...props
}: ComponentProps<"div">) {
  const { search, visibleCount } = useCommandContext();

  if (!search || visibleCount > 0) return null;

  return (
    <AriakitComboboxGroup data-slot="command-empty-wrapper">
      <div
        role="option"
        aria-hidden="true"
        data-slot="command-empty"
        className={cn("py-6 text-center text-sm", className)}
        {...props}
      >
        {children}
      </div>
    </AriakitComboboxGroup>
  );
}

function CommandGroup({
  className,
  heading,
  children,
  ...props
}: ComponentProps<typeof AriakitComboboxGroup> & {
  heading?: ReactNode;
}) {
  const { search, setVisibleCount } = useCommandContext();

  // Filter children and calculate count
  const { filteredChildren, itemCount } = useMemo(() => {
    if (!search) {
      return { filteredChildren: children, itemCount: 0 };
    }

    let count = 0;

    const filtered = Children.map(children, (child: ReactNode) => {
      if (!isValidElement(child)) return child;

      // Check if child's text content matches search
      const childText = getTextContent(child);
      const matches = childText.toLowerCase().includes(search.toLowerCase());

      if (matches) count++;

      return matches ? child : null;
    });

    return { filteredChildren: filtered, itemCount: count };
  }, [children, search]);

  // Update parent count in effect, not during render
  useEffect(() => {
    if (search && itemCount > 0) {
      setVisibleCount((prev: number) => prev + itemCount);
    }
  }, [search, itemCount, setVisibleCount]);

  if (search && itemCount === 0) return null;

  return (
    <AriakitComboboxGroup
      data-slot="command-group"
      className={cn("text-foreground overflow-hidden p-1", className)}
      {...props}
    >
      {heading && (
        <AriakitComboboxGroupLabel className="text-muted-foreground px-2 py-1.5 text-xs font-medium">
          {heading}
        </AriakitComboboxGroupLabel>
      )}
      {filteredChildren}
    </AriakitComboboxGroup>
  );
}

function CommandSeparator({ className, ...props }: ComponentProps<"div">) {
  const { search } = useCommandContext();

  // Hide separator when filtering
  if (search) return null;

  return (
    <div
      data-slot="command-separator"
      className={cn("bg-border -mx-1 h-px", className)}
      {...props}
    />
  );
}

function CommandItem({
  className,
  children,
  disabled,
  onSelect,
  value,
  ...props
}: ComponentProps<typeof AriakitComboboxItem> & {
  onSelect?: (value: string) => void;
}) {
  return (
    <AriakitComboboxItem
      data-slot="command-item"
      value={value}
      disabled={disabled}
      setValueOnClick={false}
      className={cn(
        "data-[active-item]:bg-accent data-[active-item]:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      onClick={() => onSelect?.(value || "")}
      {...props}
    >
      {children}
    </AriakitComboboxItem>
  );
}

function CommandShortcut({ className, ...props }: ComponentProps<"span">) {
  return (
    <span
      data-slot="command-shortcut"
      className={cn(
        "text-muted-foreground ml-auto text-xs tracking-widest",
        className
      )}
      {...props}
    />
  );
}

// Helper to extract text content from React elements for filtering
function getTextContent(element: ReactElement): string {
  if (typeof element.props.children === "string") {
    return element.props.children;
  }
  if (Array.isArray(element.props.children)) {
    return element.props.children
      .map((child: any) => {
        if (typeof child === "string") return child;
        if (isValidElement(child)) return getTextContent(child);
        return "";
      })
      .join("");
  }
  if (isValidElement(element.props.children)) {
    return getTextContent(element.props.children);
  }
  return "";
}

export {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
};
