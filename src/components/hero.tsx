import { ArrowDown, Film, Play } from "lucide-react";
import type { CSSProperties } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { VideoShowcase } from "@/components/video-showcase";
import { requestFilmPlayback } from "@/lib/film";

const delay = (ms: number) =>
  ({ "--enter-delay": `${ms}ms` }) as CSSProperties;

export function Hero() {
  return (
    <section
      id="overview"
      className="relative isolate overflow-hidden pb-14 pt-32 sm:pb-16 sm:pt-36 lg:pb-20 lg:pt-40"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_72%_48%_at_50%_-4%,rgba(115,96,255,0.19),transparent_72%)]" />
        <div className="animate-drift absolute -left-[14%] top-[14%] h-[420px] w-[420px] rounded-full bg-[#dce9ff]/80 blur-[90px]" />
        <div className="animate-float-slow absolute -right-[10%] top-[8%] h-[520px] w-[520px] rounded-full bg-[#ede8ff]/90 blur-[100px]" />
        <div className="hero-grid absolute inset-x-0 top-0 h-[820px] opacity-70" />

        <div className="absolute left-1/2 top-[112px] h-[1080px] w-[1080px] -translate-x-1/2 rounded-full border border-[#6555f5]/[0.045] max-sm:h-[560px] max-sm:w-[560px]" />
        <div className="absolute left-1/2 top-[112px] h-[780px] w-[780px] -translate-x-1/2 rounded-full border border-[#6555f5]/[0.065] max-sm:h-[420px] max-sm:w-[420px]" />
        <div className="absolute left-1/2 top-[112px] h-[520px] w-[520px] -translate-x-1/2 rounded-full border border-[#6555f5]/[0.07] max-sm:h-[300px] max-sm:w-[300px]" />

        <span className="animate-pulse-dot absolute left-[18%] top-[208px] size-2 rounded-full bg-[#6555f5]/50 max-lg:hidden" />
        <span className="animate-pulse-dot absolute right-[17%] top-[258px] size-1.5 rounded-full bg-[#3fb6a2]/60 [animation-delay:-1.2s] max-lg:hidden" />
        <span className="animate-pulse-dot absolute right-[27%] top-[132px] size-1 rounded-full bg-[#4d8dff]/60 [animation-delay:-2.1s] max-lg:hidden" />

        <span className="absolute left-10 top-1/2 hidden h-10 w-px bg-gradient-to-b from-transparent via-foreground/15 to-transparent xl:block" />
        <span className="absolute right-10 top-1/2 hidden h-10 w-px bg-gradient-to-b from-transparent via-foreground/15 to-transparent xl:block" />
      </div>

      <div className="page-wrap">
        <div className="flex flex-col items-center text-center">
          <div className="enter" style={delay(0)}>
            <Badge className="gap-2 py-1.5 pl-2 pr-3">
              <span className="flex size-5 items-center justify-center rounded-full bg-brand/10 text-brand">
                <Film className="size-3" aria-hidden="true" />
              </span>
              平台介绍影片
              <span className="h-3 w-px bg-border" />
              <span className="text-brand">NEW</span>
            </Badge>
          </div>

          <h1
            className="enter hero-title mt-6 text-ink sm:mt-7"
            style={delay(90)}
          >
            研发 <span className="text-gradient">AI</span>设计平台
          </h1>

          <p
            className="enter mt-5 text-[15px] font-medium tracking-[-0.02em] text-foreground/75 sm:mt-6 sm:text-[17px]"
            style={delay(170)}
          >
            AI 驱动设计创新，从灵感至产品的智能研发伙伴
          </p>

          <p
            className="enter mt-3 max-w-[600px] text-[13px] leading-6 text-muted-foreground sm:text-[14px]"
            style={delay(230)}
          >
            从提示词或产品原图出发，生成可交付的场景效果图。
            <br className="sm:hidden" />
            <span className="whitespace-nowrap">观看影片，</span>
            了解 AI 如何让设计资产越用越厚。
          </p>

          <div
            className="enter mt-8 flex w-full flex-col items-center justify-center gap-3 sm:mt-9 sm:w-auto sm:flex-row"
            style={delay(300)}
          >
            <Button asChild size="lg" className="group w-full sm:w-auto">
              <a href="#film" onClick={requestFilmPlayback}>
                <span className="flex size-6 items-center justify-center rounded-full bg-white/[0.12]">
                  <Play
                    className="ml-0.5 size-3 fill-current"
                    aria-hidden="true"
                  />
                </span>
                播放平台介绍
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="group w-full sm:w-auto"
            >
              <a href="#capabilities">
                探索核心能力
                <ArrowDown
                  className="transition-transform duration-300 group-hover:translate-y-0.5"
                  aria-hidden="true"
                />
              </a>
            </Button>
          </div>

        </div>

        <div id="film" className="mt-14 scroll-mt-28 sm:mt-16">
          <div className="enter" style={delay(460)}>
            <VideoShowcase />
          </div>
        </div>
      </div>
    </section>
  );
}
