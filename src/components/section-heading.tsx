import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  index: string;
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
  tone?: "light" | "dark";
};

export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  align = "left",
  className,
  tone = "light",
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div
      className={cn(
        "flex flex-col",
        centered ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      <div
        className={cn(
          "flex items-center gap-3",
          tone === "dark" ? "text-white/50" : "text-muted-foreground",
        )}
      >
        <span
          className={cn(
            "font-mono text-[10px] font-semibold tracking-[0.14em]",
            tone === "dark" ? "text-white/45" : "text-brand",
          )}
        >
          {index}
        </span>
        <span
          className={cn(
            "h-px w-6",
            tone === "dark" ? "bg-white/20" : "bg-foreground/15",
          )}
        />
        <span className="text-[10px] font-semibold uppercase tracking-[0.22em]">
          {eyebrow}
        </span>
      </div>

      <h2
        className={cn(
          "mt-5 max-w-[820px] text-[clamp(1.9rem,4.2vw,3.25rem)] leading-[1.12] tracking-[-0.05em]",
          tone === "dark" ? "text-white" : "text-ink",
        )}
      >
        {title}
      </h2>

      {description ? (
        <p
          className={cn(
            "mt-5 max-w-[640px] text-[14px] leading-7 sm:text-[15px]",
            tone === "dark" ? "text-white/55" : "text-muted-foreground",
            centered && "mx-auto",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
