import * as Ariakit from "@ariakit/react";
import { CheckIcon, ChevronRightIcon, CircleIcon } from "lucide-react";
import * as React from "react";

import { cn } from "@/lib/utils";

interface ContextMenuContextValue {
  anchorRect: { x: number; y: number } | null;
  setAnchorRect: (rect: { x: number; y: number }) => void;
  store: Ariakit.MenuStore;
}

const ContextMenuContext = React.createContext<ContextMenuContextValue | null>(
  null
);

interface ContextMenuProps {
  children: React.ReactNode;
  defaultOpen?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  values?: Record<string, string | string[]>;
  setValues?: (values: Record<string, string | string[]>) => void;
}

function ContextMenu({
  children,
  defaultOpen = false,
  open,
  onOpenChange,
  values,
  setValues,
}: ContextMenuProps) {
  const [anchorRect, setAnchorRect] = React.useState<{
    x: number;
    y: number;
  } | null>(null);
  const store = Ariakit.useMenuStore({
    defaultOpen,
    open,
    setOpen: onOpenChange,
    values,
    setValues,
  });

  return (
    <ContextMenuContext.Provider value={{ anchorRect, setAnchorRect, store }}>
      <Ariakit.MenuProvider store={store}>
        <div data-slot="context-menu">{children}</div>
      </Ariakit.MenuProvider>
    </ContextMenuContext.Provider>
  );
}

function useContextMenuContext() {
  const context = React.useContext(ContextMenuContext);
  if (!context) {
    throw new Error(
      "ContextMenu components must be used within a ContextMenu provider"
    );
  }
  return context;
}

const ContextMenuTrigger = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ className, onContextMenu, ...props }, ref) => {
  const { setAnchorRect, store } = useContextMenuContext();

  const handleContextMenu = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    setAnchorRect({ x: event.clientX, y: event.clientY });
    store.show();
    onContextMenu?.(event);
  };

  return (
    <div
      ref={ref}
      data-slot="context-menu-trigger"
      className={className}
      onContextMenu={handleContextMenu}
      {...props}
    />
  );
});
ContextMenuTrigger.displayName = "ContextMenuTrigger";

function ContextMenuGroup({
  ...props
}: React.ComponentPropsWithoutRef<typeof Ariakit.MenuGroup>) {
  return <Ariakit.MenuGroup data-slot="context-menu-group" {...props} />;
}

function ContextMenuSub({
  children,
  defaultOpen = false,
  open,
  onOpenChange,
}: {
  children: React.ReactNode;
  defaultOpen?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}) {
  const menu = Ariakit.useMenuStore({
    defaultOpen,
    open,
    setOpen: onOpenChange,
  });

  return (
    <Ariakit.MenuProvider store={menu}>
      <div data-slot="context-menu-sub">{children}</div>
    </Ariakit.MenuProvider>
  );
}

const ContextMenuSubTrigger = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof Ariakit.MenuItem> & {
    inset?: boolean;
  }
>(({ className, inset, children, ...props }, ref) => {
  const context = Ariakit.useMenuContext();

  return (
    <Ariakit.MenuItem
      ref={ref}
      data-slot="context-menu-sub-trigger"
      data-inset={inset}
      className={cn(
        "focus:bg-accent focus:text-accent-foreground data-[active-item]:bg-accent data-[active-item]:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      render={
        <Ariakit.MenuButton
          store={context}
          showOnHover
          render={(props) => <div {...props} />}
        />
      }
      {...props}
    >
      {children}
      <ChevronRightIcon className="ml-auto" />
    </Ariakit.MenuItem>
  );
});
ContextMenuSubTrigger.displayName = "ContextMenuSubTrigger";

const ContextMenuSubContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof Ariakit.Menu>
>(({ className, ...props }, ref) => {
  return (
    <Ariakit.Menu
      ref={ref}
      data-slot="context-menu-sub-content"
      modal={false}
      portal
      shift={-4}
      gutter={4}
      className={cn(
        "bg-popover text-popover-foreground opacity-0 scale-95 data-[enter]:opacity-100 data-[enter]:scale-100 data-[leave]:opacity-0 data-[leave]:scale-95 transition-all duration-150 z-50 min-w-[8rem] overflow-hidden rounded-md border p-1 shadow-lg",
        className
      )}
      {...props}
    />
  );
});
ContextMenuSubContent.displayName = "ContextMenuSubContent";

const ContextMenuContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof Ariakit.Menu>
>(({ className, ...props }, ref) => {
  const { anchorRect } = useContextMenuContext();

  return (
    <Ariakit.Menu
      ref={ref}
      data-slot="context-menu-content"
      modal
      portal
      getAnchorRect={() => anchorRect}
      className={cn(
        "bg-popover text-popover-foreground opacity-0 scale-95 data-[enter]:opacity-100 data-[enter]:scale-100 data-[leave]:opacity-0 data-[leave]:scale-95 transition-all duration-150 z-50 min-w-[8rem] overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md",
        className
      )}
      {...props}
    />
  );
});
ContextMenuContent.displayName = "ContextMenuContent";

const ContextMenuItem = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof Ariakit.MenuItem> & {
    inset?: boolean;
    variant?: "default" | "destructive";
  }
>(({ className, inset, variant = "default", ...props }, ref) => {
  return (
    <Ariakit.MenuItem
      ref={ref}
      data-slot="context-menu-item"
      data-inset={inset}
      data-variant={variant}
      className={cn(
        "focus:bg-accent focus:text-accent-foreground data-[active-item]:bg-accent data-[active-item]:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    />
  );
});
ContextMenuItem.displayName = "ContextMenuItem";

const ContextMenuCheckboxItem = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof Ariakit.MenuItemCheckbox> & {
    name: string;
  }
>(({ className, children, name, ...props }, ref) => {
  return (
    <Ariakit.MenuItemCheckbox
      ref={ref}
      name={name}
      data-slot="context-menu-checkbox-item"
      className={cn(
        "focus:bg-accent focus:text-accent-foreground data-[active-item]:bg-accent data-[active-item]:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    >
      <span className="absolute inset-y-0 left-2 flex items-center justify-center">
        <Ariakit.MenuItemCheck className="flex items-center justify-center">
          <CheckIcon className="size-4" />
        </Ariakit.MenuItemCheck>
      </span>
      {children}
    </Ariakit.MenuItemCheckbox>
  );
});
ContextMenuCheckboxItem.displayName = "ContextMenuCheckboxItem";

function ContextMenuRadioGroup({
  ...props
}: React.ComponentPropsWithoutRef<typeof Ariakit.MenuGroup> & {
  value?: string;
  onValueChange?: (value: string) => void;
}) {
  return <Ariakit.MenuGroup data-slot="context-menu-radio-group" {...props} />;
}

const ContextMenuRadioItem = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof Ariakit.MenuItemRadio> & {
    name: string;
    value: string;
  }
>(({ className, children, name, value, ...props }, ref) => {
  return (
    <Ariakit.MenuItemRadio
      ref={ref}
      name={name}
      value={value}
      data-slot="context-menu-radio-item"
      className={cn(
        "focus:bg-accent focus:text-accent-foreground data-[active-item]:bg-accent data-[active-item]:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    >
      <span className="absolute inset-y-0 left-2 flex items-center justify-center">
        <Ariakit.MenuItemCheck className="flex items-center justify-center">
          <CircleIcon className="size-2 fill-current" />
        </Ariakit.MenuItemCheck>
      </span>
      {children}
    </Ariakit.MenuItemRadio>
  );
});
ContextMenuRadioItem.displayName = "ContextMenuRadioItem";

const ContextMenuLabel = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof Ariakit.MenuHeading> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => {
  return (
    <Ariakit.MenuHeading
      ref={ref}
      data-slot="context-menu-label"
      data-inset={inset}
      className={cn(
        "text-foreground px-2 py-1.5 text-sm font-medium data-[inset]:pl-8",
        className
      )}
      {...props}
    />
  );
});
ContextMenuLabel.displayName = "ContextMenuLabel";

const ContextMenuSeparator = React.forwardRef<
  HTMLHRElement,
  React.ComponentPropsWithoutRef<typeof Ariakit.MenuSeparator>
>(({ className, ...props }, ref) => {
  return (
    <Ariakit.MenuSeparator
      ref={ref}
      data-slot="context-menu-separator"
      className={cn("bg-border -mx-1 my-1 h-px", className)}
      {...props}
    />
  );
});
ContextMenuSeparator.displayName = "ContextMenuSeparator";

function ContextMenuShortcut({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"span">) {
  return (
    <span
      data-slot="context-menu-shortcut"
      className={cn(
        "text-muted-foreground ml-auto text-xs tracking-widest",
        className
      )}
      {...props}
    />
  );
}

// These are kept for API compatibility but are not needed with Ariakit
function ContextMenuPortal({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

export {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuPortal,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
};
