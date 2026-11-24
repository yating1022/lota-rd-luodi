import { cn } from "@/lib/utils";

export function BrandMark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "relative inline-flex size-9 shrink-0 items-center justify-center overflow-hidden rounded-[28%] bg-[linear-gradient(145deg,#8B74FF_0%,#6A54F6_48%,#4A31E8_100%)]",
        className,
      )}
      aria-hidden="true"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_14%,rgba(255,255,255,0.38),transparent_48%)]"
      />
      <svg
        viewBox="0 0 40 40"
        className="relative h-full w-full"
        focusable="false"
      >
        <path
          d="M10.9 27.5V14.7L20 22.5L29.1 14.7V27.5"
          fill="none"
          stroke="white"
          strokeWidth="2.3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="10.9" cy="14.7" r="1.65" fill="white" />
        <circle cx="20" cy="22.5" r="1.65" fill="white" />
        <circle cx="29.1" cy="14.7" r="1.65" fill="white" />
        <path
          d="M28.8 8.1L29.85 10.85L32.6 11.9L29.85 12.95L28.8 15.7L27.75 12.95L25 11.9L27.75 10.85L28.8 8.1Z"
          fill="white"
          fillOpacity="0.92"
        />
      </svg>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-[inherit] border border-white/20"
      />
    </span>
  );
}

export function BrandLockup({ className }: { className?: string }) {
  return (
    <a
      href="#overview"
      aria-label="研发 AI设计平台 · 回到页面顶部"
      className={cn(
        "group inline-flex items-center gap-2.5 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 focus-visible:ring-offset-4 focus-visible:ring-offset-background",
        className,
      )}
    >
      <BrandMark className="size-9 shadow-[0_10px_24px_-10px_rgba(101,85,245,0.8)] transition-transform duration-500 group-hover:-rotate-3 group-hover:scale-[1.04]" />
      <span className="text-[17px] font-semibold tracking-[-0.045em] text-ink">
        研发<span className="text-ink">AI</span>
      </span>
    </a>
  );
}
