"use client";

import { buttonVariants } from "@/components/button";
import { cn } from "@/lib/utils";
import {
  DialogDescription as AriakitDialogDescription,
  Dialog,
  DialogDisclosure,
  DialogDismiss,
  DialogHeading,
  DialogProvider,
  useDialogStore,
  type DialogProviderProps,
} from "@ariakit/react";
import { type VariantProps } from "class-variance-authority";
import * as React from "react";

function AlertDialog({ children, ...props }: DialogProviderProps) {
  const dialog = useDialogStore(props);
  return (
    <DialogProvider store={dialog} data-slot="alert-dialog">
      {children}
    </DialogProvider>
  );
}

function AlertDialogTrigger({
  ...props
}: React.ComponentProps<typeof DialogDisclosure>) {
  return <DialogDisclosure data-slot="alert-dialog-trigger" {...props} />;
}

function AlertDialogOverlay({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-dialog-overlay"
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

function AlertDialogContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof Dialog>) {
  return (
    <Dialog
      role="alertdialog"
      data-slot="alert-dialog-content"
      className={cn(
        "bg-background fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg sm:max-w-lg",
        "opacity-0 scale-95 transition-all duration-200",
        "data-[enter]:opacity-100 data-[enter]:scale-100",
        className
      )}
      backdrop={<AlertDialogOverlay />}
      {...props}
    >
      {children}
    </Dialog>
  );
}

function AlertDialogHeader({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-dialog-header"
      className={cn("flex flex-col gap-2 text-center sm:text-left", className)}
      {...props}
    />
  );
}

function AlertDialogFooter({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-dialog-footer"
      className={cn(
        "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
        className
      )}
      {...props}
    />
  );
}

function AlertDialogTitle({
  className,
  ...props
}: React.ComponentProps<typeof DialogHeading>) {
  return (
    <DialogHeading
      data-slot="alert-dialog-title"
      className={cn("text-lg font-semibold", className)}
      {...props}
    />
  );
}

function AlertDialogDescription({
  className,
  ...props
}: React.ComponentProps<typeof AriakitDialogDescription>) {
  return (
    <AriakitDialogDescription
      data-slot="alert-dialog-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  );
}

// AlertDialogAction - closes dialog and performs action
function AlertDialogAction({
  className,
  variant,
  size,
  ...props
}: React.ComponentProps<typeof DialogDismiss> &
  VariantProps<typeof buttonVariants>) {
  return (
    <DialogDismiss
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}

// AlertDialogCancel - closes dialog without action
function AlertDialogCancel({
  className,
  ...props
}: React.ComponentProps<typeof DialogDismiss>) {
  return (
    <DialogDismiss
      className={cn(buttonVariants({ variant: "outline" }), className)}
      {...props}
    />
  );
}

export {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  AlertDialogTitle,
  AlertDialogTrigger,
};
