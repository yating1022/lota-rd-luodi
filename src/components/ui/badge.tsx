import { cva, type VariantProps } from "class-variance-authority";
import type * as React from "react";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex w-fit shrink-0 items-center justify-center gap-2 rounded-full border px-3.5 py-1.5 text-[11px] font-semibold tracking-[0.02em] whitespace-nowrap transition-colors [&_svg]:pointer-events-none [&_svg]:size-3.5",
  {
    variants: {
      variant: {
        default:
          "border-white/90 bg-white/[0.72] text-foreground/80 shadow-[0_8px_24px_-18px_rgba(31,45,84,0.5)] backdrop-blur-xl",
        brand:
          "border-brand/15 bg-brand/[0.07] text-brand",
        outline: "border-border bg-transparent text-muted-foreground",
        inverse:
          "border-white/15 bg-white/[0.08] text-white/80 backdrop-blur-xl",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

function Badge({
  className,
  variant,
  ...props
}: React.ComponentProps<"span"> & VariantProps<typeof badgeVariants>) {
  return (
    <span
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
