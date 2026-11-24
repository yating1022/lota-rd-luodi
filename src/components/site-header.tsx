import { Menu, Play, X } from "lucide-react";
import { useEffect, useState } from "react";
import { BrandLockup } from "@/components/brand-mark";
import { Button } from "@/components/ui/button";
import { requestFilmPlayback } from "@/lib/film";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { id: "overview", label: "平台概览" },
  { id: "capabilities", label: "核心能力" },
  { id: "workflow", label: "工作流" },
  { id: "faq", label: "常见问答" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("overview");

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 16);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  useEffect(() => {
    const sections = NAV_ITEMS.map((item) =>
      document.getElementById(item.id),
    ).filter((section): section is HTMLElement => section !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-42% 0px -52% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-[1320px] px-3 pt-3 sm:px-6 sm:pt-4">
        <div
          className={cn(
            "flex items-center justify-between gap-3 rounded-[22px] px-2 py-2 transition-all duration-500 sm:px-3",
            scrolled
              ? "border border-white/80 bg-white/80 shadow-[0_18px_48px_-28px_rgba(31,45,84,0.38)] backdrop-blur-2xl"
              : "border border-transparent bg-transparent",
          )}
        >
          <BrandLockup className="pl-1" />

          <nav
            aria-label="页面导航"
            className="hidden items-center gap-0.5 rounded-full border border-white/85 bg-white/70 p-1.5 shadow-[0_10px_30px_-22px_rgba(31,45,84,0.4)] backdrop-blur-2xl lg:flex"
          >
            {NAV_ITEMS.map((item) => {
              const active = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "rounded-full px-3.5 py-2 text-[13px] font-medium transition-all duration-300",
                    active
                      ? "bg-[#eef1f8] text-ink shadow-[inset_0_0_0_1px_rgba(15,23,42,0.03)]"
                      : "text-muted-foreground hover:bg-white/60 hover:text-ink",
                  )}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <Button asChild size="sm" className="hidden sm:inline-flex">
              <a href="#film" onClick={requestFilmPlayback}>
                <Play className="fill-current" aria-hidden="true" />
                观看影片
              </a>
            </Button>
            <Button
              type="button"
              variant="outline"
              size="icon"
              className="size-9 border-white/90 bg-white/75 lg:hidden"
              aria-label={menuOpen ? "关闭导航菜单" : "打开导航菜单"}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {menuOpen ? (
          <div
            id="mobile-navigation"
            className="mt-2 overflow-hidden rounded-[24px] border border-white/85 bg-white/95 p-2.5 shadow-[0_26px_60px_-28px_rgba(31,45,84,0.45)] backdrop-blur-2xl lg:hidden"
          >
            <nav aria-label="移动端导航" className="flex flex-col">
              {NAV_ITEMS.map((item, index) => {
                const active = activeSection === item.id;
                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={() => setMenuOpen(false)}
                    className={cn(
                      "flex items-center justify-between rounded-2xl px-4 py-3 text-[14px] font-medium transition-colors",
                      active
                        ? "bg-[#f0f3fa] text-ink"
                        : "text-muted-foreground hover:bg-[#f6f8fc] hover:text-ink",
                    )}
                  >
                    <span>{item.label}</span>
                    <span className="font-mono text-[10px] tracking-[0.16em] text-muted-foreground/60">
                      0{index + 1}
                    </span>
                  </a>
                );
              })}
              <a
                href="#film"
                onClick={() => {
                  setMenuOpen(false);
                  requestFilmPlayback();
                }}
                className="mt-2 flex h-11 items-center justify-center gap-2 rounded-2xl bg-ink text-[14px] font-semibold text-white"
              >
                <Play className="size-4 fill-current" aria-hidden="true" />
                播放平台介绍
              </a>
            </nav>
          </div>
        ) : null}
      </div>
    </header>
  );
}
