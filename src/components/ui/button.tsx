import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import type * as React from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
  {
    variants: {
      variant: {
        default:
          "bg-ink text-white shadow-[0_14px_34px_-16px_rgba(11,16,32,0.72)] hover:-translate-y-0.5 hover:bg-[#171e33] hover:shadow-[0_20px_44px_-18px_rgba(11,16,32,0.65)]",
        outline:
          "border border-white/90 bg-white/75 text-ink shadow-[0_10px_30px_-20px_rgba(31,45,84,0.45)] backdrop-blur-xl hover:-translate-y-0.5 hover:border-white hover:bg-white",
        brand:
          "bg-brand text-white shadow-[0_14px_34px_-16px_rgba(101,85,245,0.75)] hover:-translate-y-0.5 hover:bg-[#5546e8]",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/75",
        ghost: "text-foreground/70 hover:bg-foreground/5 hover:text-foreground",
        link: "text-foreground underline-offset-4 hover:underline",
        inverse:
          "bg-white text-ink shadow-[0_14px_36px_-18px_rgba(0,0,0,0.7)] hover:-translate-y-0.5 hover:bg-white/[0.92]",
        "inverse-outline":
          "border border-white/20 bg-white/[0.06] text-white backdrop-blur-xl hover:border-white/30 hover:bg-white/[0.12]",
      },
      size: {
        default: "h-11 px-5 [&_svg]:size-4",
        sm: "h-9 px-4 text-[13px] [&_svg]:size-3.5",
        lg: "h-12 px-6 text-[15px] [&_svg]:size-[18px]",
        icon: "size-11 [&_svg]:size-[18px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
