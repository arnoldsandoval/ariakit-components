"use client";

import {
  Disclosure,
  DisclosureContent,
  DisclosureProvider,
} from "@ariakit/react";
import { ChevronDownIcon } from "lucide-react";
import * as React from "react";

import { cn } from "@/lib/utils";

interface AccordionContextValue {
  type?: "single" | "multiple";
  collapsible?: boolean;
  disabled?: boolean;
  value?: string | string[];
  onValueChange?: (value: string | string[]) => void;
  defaultValue?: string | string[];
  openItem?: string;
  setOpenItem?: (value: string | null) => void;
}

const AccordionContext = React.createContext<AccordionContextValue | null>(
  null
);

function useAccordionContext() {
  const context = React.useContext(AccordionContext);
  if (!context) {
    throw new Error("Accordion components must be used within an Accordion");
  }
  return context;
}

function Accordion({
  type = "single",
  collapsible = false,
  disabled = false,
  value,
  onValueChange,
  defaultValue,
  className,
  ...props
}: {
  type?: "single" | "multiple";
  collapsible?: boolean;
  disabled?: boolean;
  value?: string | string[];
  onValueChange?: (value: string | string[]) => void;
  defaultValue?: string | string[];
} & React.HTMLAttributes<HTMLDivElement>) {
  const [openItem, setOpenItem] = React.useState<string | null>(() => {
    if (type === "single" && typeof defaultValue === "string") {
      return defaultValue;
    }
    return null;
  });

  const contextValue = React.useMemo(
    () => ({
      type,
      collapsible,
      disabled,
      value,
      onValueChange,
      defaultValue,
      openItem: openItem || undefined,
      setOpenItem: (value: string | null) => setOpenItem(value),
    }),
    [type, collapsible, disabled, value, onValueChange, defaultValue, openItem]
  );

  return (
    <AccordionContext.Provider value={contextValue}>
      <div data-slot="accordion" className={className} {...props} />
    </AccordionContext.Provider>
  );
}

function AccordionItem({
  value,
  className,
  ...props
}: {
  value: string;
} & React.HTMLAttributes<HTMLDivElement>) {
  const accordionContext = useAccordionContext();

  // Calculate default open state for multiple mode
  const defaultOpen = React.useMemo(() => {
    if (accordionContext.defaultValue !== undefined) {
      return (
        Array.isArray(accordionContext.defaultValue) &&
        accordionContext.defaultValue.includes(value)
      );
    }
    return false;
  }, [accordionContext.defaultValue, value]);

  if (accordionContext.type === "single") {
    // For single mode, use controlled state
    const isOpen = accordionContext.openItem === value;

    const handleOpenChange = (open: boolean) => {
      if (open) {
        accordionContext.setOpenItem?.(value);
      } else if (accordionContext.collapsible) {
        accordionContext.setOpenItem?.(null);
      }
    };

    return (
      <DisclosureProvider open={isOpen} setOpen={handleOpenChange}>
        <div
          data-slot="accordion-item"
          className={cn("border-b last:border-b-0", className)}
          {...props}
        />
      </DisclosureProvider>
    );
  } else {
    // For multiple mode, use uncontrolled state
    return (
      <DisclosureProvider defaultOpen={defaultOpen}>
        <div
          data-slot="accordion-item"
          className={cn("border-b last:border-b-0", className)}
          {...props}
        />
      </DisclosureProvider>
    );
  }
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof Disclosure>) {
  const accordionContext = useAccordionContext();

  return (
    <div className="flex">
      <Disclosure
        data-slot="accordion-trigger"
        disabled={accordionContext.disabled || props.disabled}
        className={cn(
          "focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[aria-expanded=true]>svg]:rotate-180",
          className
        )}
        {...props}
      >
        {children}
        <ChevronDownIcon className="text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200" />
      </Disclosure>
    </div>
  );
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof DisclosureContent>) {
  return (
    <DisclosureContent
      data-slot="accordion-content"
      className={cn(
        "grid overflow-hidden text-sm transition-all duration-200 ease-out",
        "grid-rows-[0fr] data-[enter]:grid-rows-[1fr]"
      )}
      {...props}
    >
      <div className={cn("overflow-hidden")}>
        <div className={cn("pt-0 pb-4", className)}>{children}</div>
      </div>
    </DisclosureContent>
  );
}

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger };
