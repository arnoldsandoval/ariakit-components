import { Separator as AriakitSeparator } from "@ariakit/react";
import * as React from "react";

import { cn } from "@/lib/utils";

function Separator({
  className,
  orientation = "horizontal",
  ...props
}: React.ComponentProps<typeof AriakitSeparator>) {
  return (
    <AriakitSeparator
      data-slot="separator"
      orientation={orientation}
      className={cn(
        "bg-border shrink-0 aria-[orientation=horizontal]:h-px aria-[orientation=horizontal]:w-full aria-[orientation=vertical]:h-full aria-[orientation=vertical]:w-px",
        className
      )}
      {...props}
    />
  );
}

export { Separator };
