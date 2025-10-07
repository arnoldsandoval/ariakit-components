import { cn } from "@/lib/utils";
import * as React from "react";

// Context to manage avatar state
interface AvatarContextValue {
  imageLoadingStatus: "idle" | "loading" | "loaded" | "error";
  setImageLoadingStatus: (status: "idle" | "loading" | "loaded" | "error") => void;
}

const AvatarContext = React.createContext<AvatarContextValue | null>(null);

function useAvatarContext() {
  const context = React.useContext(AvatarContext);
  if (!context) {
    throw new Error("Avatar components must be used within Avatar");
  }
  return context;
}

function Avatar({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [imageLoadingStatus, setImageLoadingStatus] = React.useState<"idle" | "loading" | "loaded" | "error">("idle");

  return (
    <AvatarContext.Provider value={{ imageLoadingStatus, setImageLoadingStatus }}>
      <div
        data-slot="avatar"
        className={cn(
          "relative flex size-8 shrink-0 overflow-hidden rounded-full",
          className
        )}
        {...props}
      />
    </AvatarContext.Provider>
  );
}

function AvatarImage({
  src,
  alt,
  className,
  ...props
}: React.ComponentProps<"img">) {
  const { imageLoadingStatus, setImageLoadingStatus } = useAvatarContext();

  React.useEffect(() => {
    if (!src) {
      setImageLoadingStatus("error");
      return;
    }

    setImageLoadingStatus("loading");

    const img = new Image();
    img.onload = () => setImageLoadingStatus("loaded");
    img.onerror = () => setImageLoadingStatus("error");
    img.src = src;

    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [src, setImageLoadingStatus]);

  if (imageLoadingStatus !== "loaded") {
    return null;
  }

  return (
    <img
      src={src}
      alt={alt}
      data-slot="avatar-image"
      className={cn("aspect-square size-full object-cover", className)}
      {...props}
    />
  );
}

function AvatarFallback({
  className,
  delayMs = 0,
  children,
  ...props
}: React.ComponentProps<"div"> & { delayMs?: number }) {
  const { imageLoadingStatus } = useAvatarContext();
  const [canRender, setCanRender] = React.useState(delayMs === 0);

  React.useEffect(() => {
    if (delayMs > 0) {
      const timer = setTimeout(() => setCanRender(true), delayMs);
      return () => clearTimeout(timer);
    }
  }, [delayMs]);

  const shouldRender = imageLoadingStatus !== "loaded" && canRender;

  if (!shouldRender) {
    return null;
  }

  return (
    <div
      data-slot="avatar-fallback"
      className={cn(
        "bg-muted flex size-full items-center justify-center rounded-full",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export { Avatar, AvatarFallback, AvatarImage, useAvatarContext };
