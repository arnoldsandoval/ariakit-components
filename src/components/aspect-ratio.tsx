import { cn } from "@/lib/utils";
import * as React from "react";

function AspectRatio({
  ratio = 1,
  className,
  children,
  style,
  ...props
}: React.ComponentProps<"div"> & { ratio?: number }) {
  return (
    <div 
      data-slot="aspect-ratio"
      className={cn("relative w-full", className)}
      style={{ aspectRatio: ratio, ...style }}
      {...props}
    >
      {children}
    </div>
  );
}

export { AspectRatio };
