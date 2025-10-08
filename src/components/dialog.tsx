"use client";

import { buttonVariants } from "@/components/button";
import { cn } from "@/lib/utils";
import {
  DialogDescription as AriakitDialogDescription,
  Dialog as AriakitDialog,
  DialogDisclosure,
  DialogDismiss,
  DialogHeading,
  DialogProvider,
  useDialogStore,
  type DialogProviderProps,
} from "@ariakit/react";
import { type VariantProps } from "class-variance-authority";
import { XIcon } from "lucide-react";
import * as React from "react";

function Dialog({ children, ...props }: DialogProviderProps) {
  const dialog = useDialogStore(props);
  return (
    <DialogProvider store={dialog} data-slot="dialog">
      {children}
    </DialogProvider>
  );
}

function DialogTrigger({
  ...props
}: React.ComponentProps<typeof DialogDisclosure>) {
  return <DialogDisclosure data-slot="dialog-trigger" {...props} />;
}

function DialogClose({
  className,
  variant,
  size,
  ...props
}: React.ComponentProps<typeof DialogDismiss> &
  VariantProps<typeof buttonVariants>) {
  return (
    <DialogDismiss
      data-slot="dialog-close"
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}

function DialogOverlay({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="dialog-overlay"
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

function DialogContent({
  className,
  children,
  showCloseButton = true,
  ...props
}: React.ComponentProps<typeof AriakitDialog> & {
  showCloseButton?: boolean;
}) {
  return (
    <AriakitDialog
      data-slot="dialog-content"
      className={cn(
        "bg-background fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg sm:max-w-lg",
        "opacity-0 scale-95 transition-all duration-200",
        "data-[enter]:opacity-100 data-[enter]:scale-100",
        className
      )}
      backdrop={<DialogOverlay />}
      {...props}
    >
      {children}
      {showCloseButton && (
        <DialogDismiss
          data-slot="dialog-close"
          className="ring-offset-background focus:ring-ring absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
        >
          <XIcon />
          <span className="sr-only">Close</span>
        </DialogDismiss>
      )}
    </AriakitDialog>
  );
}

function DialogHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="dialog-header"
      className={cn("flex flex-col gap-2 text-center sm:text-left", className)}
      {...props}
    />
  );
}

function DialogFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="dialog-footer"
      className={cn(
        "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
        className
      )}
      {...props}
    />
  );
}

function DialogTitle({
  className,
  ...props
}: React.ComponentProps<typeof DialogHeading>) {
  return (
    <DialogHeading
      data-slot="dialog-title"
      className={cn("text-lg leading-none font-semibold", className)}
      {...props}
    />
  );
}

function DialogDescription({
  className,
  ...props
}: React.ComponentProps<typeof AriakitDialogDescription>) {
  return (
    <AriakitDialogDescription
      data-slot="dialog-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  );
}

export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
  DialogTrigger,
}
