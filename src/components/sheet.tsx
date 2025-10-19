"use client";

import * as Ariakit from "@ariakit/react";
import { XIcon } from "lucide-react";
import * as React from "react";

import { cn } from "@/lib/utils";

function Sheet({
  children,
  ...props
}: Ariakit.DialogProviderProps & { children: React.ReactNode }) {
  const dialog = Ariakit.useDialogStore(props);
  return (
    <Ariakit.DialogProvider store={dialog} data-slot="sheet">
      {children}
    </Ariakit.DialogProvider>
  );
}

function SheetTrigger({
  ...props
}: React.ComponentProps<typeof Ariakit.DialogDisclosure>) {
  return <Ariakit.DialogDisclosure data-slot="sheet-trigger" {...props} />;
}

function SheetClose({
  ...props
}: React.ComponentProps<typeof Ariakit.DialogDismiss>) {
  return <Ariakit.DialogDismiss data-slot="sheet-close" {...props} />;
}

function SheetPortal({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

function SheetOverlay({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sheet-overlay"
      className={cn(
        "fixed inset-0 z-50 bg-black/50",
        "opacity-0 transition-opacity duration-200",
        "data-[enter]:opacity-100",
        className
      )}
      {...props}
    />
  );
}

function SheetContent({
  className,
  children,
  side = "right",
  ...props
}: React.ComponentProps<typeof Ariakit.Dialog> & {
  side?: "top" | "right" | "bottom" | "left";
}) {
  return (
    <SheetPortal>
      <Ariakit.Dialog
        data-slot="sheet-content"
        backdrop={<SheetOverlay />}
        className={cn(
          "bg-background fixed z-50 flex flex-col gap-4 shadow-lg",
          "data-[enter]:animate-in data-[leave]:animate-out",
          "data-[leave]:duration-300 data-[enter]:duration-500",
          side === "right" &&
            "inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm translate-x-full data-[enter]:translate-x-0 data-[leave]:slide-out-to-right data-[enter]:slide-in-from-right",
          side === "left" &&
            "inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm -translate-x-full data-[enter]:translate-x-0 data-[leave]:slide-out-to-left data-[enter]:slide-in-from-left",
          side === "top" &&
            "inset-x-0 top-0 h-auto border-b -translate-y-full data-[enter]:translate-y-0 data-[leave]:slide-out-to-top data-[enter]:slide-in-from-top",
          side === "bottom" &&
            "inset-x-0 bottom-0 h-auto border-t translate-y-full data-[enter]:translate-y-0 data-[leave]:slide-out-to-bottom data-[enter]:slide-in-from-bottom",
          className
        )}
        {...props}
      >
        {children}
        <Ariakit.DialogDismiss className="ring-offset-background focus:ring-ring data-[enter]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none">
          <XIcon className="size-4" />
          <span className="sr-only">Close</span>
        </Ariakit.DialogDismiss>
      </Ariakit.Dialog>
    </SheetPortal>
  );
}

function SheetHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sheet-header"
      className={cn("flex flex-col gap-1.5 p-4", className)}
      {...props}
    />
  );
}

function SheetFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sheet-footer"
      className={cn("mt-auto flex flex-col gap-2 p-4", className)}
      {...props}
    />
  );
}

function SheetTitle({
  className,
  ...props
}: React.ComponentProps<typeof Ariakit.DialogHeading>) {
  return (
    <Ariakit.DialogHeading
      data-slot="sheet-title"
      className={cn("text-foreground font-semibold", className)}
      {...props}
    />
  );
}

function SheetDescription({
  className,
  ...props
}: React.ComponentProps<typeof Ariakit.DialogDescription>) {
  return (
    <Ariakit.DialogDescription
      data-slot="sheet-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  );
}

export {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
};
