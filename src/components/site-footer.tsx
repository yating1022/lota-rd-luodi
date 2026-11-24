import { ArrowUp, ArrowUpRight } from "lucide-react";
import { BrandLockup } from "@/components/brand-mark";

const GROUPS = [
  {
    title: "了解平台",
    links: [
      { label: "平台概览", href: "#overview" },
      { label: "介绍影片", href: "#film" },
      { label: "核心能力", href: "#capabilities" },
      { label: "工作流", href: "#workflow" },
    ],
  },
  {
    title: "平台能力",
    links: [
      { label: "文生场景图", href: "#capabilities" },
      { label: "图生场景图", href: "#capabilities" },
      { label: "个人知识库", href: "#workspace" },
      { label: "团队知识库", href: "#workspace" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="relative border-t border-white/80 pb-8 pt-14 sm:pt-16">
      <div className="page-wrap">
        <div className="grid gap-10 md:grid-cols-[1.5fr_0.5fr_0.5fr] md:gap-8">
          <div>
            <BrandLockup />
            <p className="mt-5 max-w-[300px] text-[12px] leading-6 text-muted-foreground">
              AI 驱动设计创新，从灵感至产品的智能研发伙伴。
            </p>
            <a
              href="#faq"
              className="group mt-5 inline-flex items-center gap-1.5 text-[11px] font-medium text-foreground/55 transition-colors hover:text-brand"
            >
              阅读常见问答
              <ArrowUpRight
                className="size-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </a>
          </div>

          {GROUPS.map((group) => (
            <div key={group.title}>
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground/70">
                {group.title}
              </p>
              <ul className="mt-4 flex flex-col gap-2.5">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[12px] text-foreground/55 transition-colors hover:text-ink"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-foreground/[0.07] pt-5 text-[10px] text-muted-foreground/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 研发 AI设计平台 · 本页面用于平台介绍展示</p>
          <div className="flex items-center gap-4">
            <span>R&amp;D AI DESIGN PLATFORM</span>
            <a
              href="#overview"
              aria-label="回到页面顶部"
              className="flex size-8 items-center justify-center rounded-full border border-border/70 bg-white/60 text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-brand/20 hover:text-brand"
            >
              <ArrowUp className="size-3.5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
