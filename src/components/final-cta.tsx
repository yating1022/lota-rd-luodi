import { ArrowRight, Play, Sparkles } from "lucide-react";
import { BrandMark } from "@/components/brand-mark";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { requestFilmPlayback } from "@/lib/film";

export function FinalCta() {
  return (
    <section className="relative pb-12 pt-8 sm:pb-16 sm:pt-10">
      <div className="page-wrap">
        <Reveal>
          <div className="grain relative isolate overflow-hidden rounded-[32px] border border-white/10 bg-[#090d19] px-5 py-16 shadow-[0_50px_120px_-50px_rgba(21,20,72,0.8)] sm:rounded-[42px] sm:px-10 sm:py-20 lg:py-24">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 -z-10"
            >
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_72%_65%_at_50%_-8%,rgba(110,88,255,0.42),transparent_66%)]" />
              <div className="absolute -right-24 bottom-0 size-[420px] rounded-full bg-[radial-gradient(circle,rgba(77,141,255,0.26),transparent_70%)] blur-2xl" />
              <div className="absolute left-1/2 top-1/2 h-[720px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.055]" />
              <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.07]" />
              <div className="dot-grid absolute inset-0 opacity-[0.13] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black,transparent_78%)]" />
              <BrandMark className="absolute -bottom-20 -right-14 size-[380px] rotate-[12deg] opacity-[0.055] sm:-right-10 sm:size-[440px]" />
            </div>

            <div className="relative z-10 mx-auto flex max-w-[760px] flex-col items-center text-center">
              <Badge variant="inverse" className="pl-2.5">
                <span className="flex size-4 items-center justify-center rounded-full bg-white/10">
                  <Sparkles className="size-2.5" aria-hidden="true" />
                </span>
                RD AI DESIGN PLATFORM
              </Badge>

              <h2 className="mt-6 text-[clamp(2.1rem,5vw,4rem)] leading-[1.08] tracking-[-0.055em] text-white">
                让 AI 成为你的
                <br />
                研发设计伙伴
              </h2>

              <p className="mt-5 max-w-[480px] text-[13px] leading-7 text-white/50 sm:text-[14px]">
                从一句提示、一张产品图开始，让每次生成都沉淀为可复用的资产。
                研发 AI设计平台，让每一次创作都更从容。
              </p>

              <div className="mt-8 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  variant="inverse"
                  className="w-full sm:w-auto"
                >
                  <a href="#film" onClick={requestFilmPlayback}>
                    <span className="flex size-6 items-center justify-center rounded-full bg-ink/[0.06]">
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
                  variant="inverse-outline"
                  className="group w-full sm:w-auto"
                >
                  <a href="#capabilities">
                    探索核心能力
                    <ArrowRight
                      className="transition-transform duration-300 group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </a>
                </Button>
              </div>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[10px] text-white/35">
                <span>AI 驱动设计创新</span>
                <span className="size-[3px] rounded-full bg-white/20" />
                <span>从灵感至产品的智能研发伙伴</span>
                <span className="size-[3px] rounded-full bg-white/20" />
                <span>研发 AI设计平台</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
