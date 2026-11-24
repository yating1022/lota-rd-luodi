import {
  ArrowRight,
  Layers,
  Library,
  Play,
  Sparkles,
  Upload,
} from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

const STEPS = [
  {
    step: "01",
    en: "START",
    title: "发起创作",
    description:
      "文生直接输入场景提示词；图生上传产品原图与参考图，按市场与客户发起任务。",
    icon: Upload,
  },
  {
    step: "02",
    en: "REUSE",
    title: "调用资产",
    description:
      "从个人或团队知识库中选择风格、布局、样图与提示词，让生成结果稳定可控。",
    icon: Library,
  },
  {
    step: "03",
    en: "GENERATE",
    title: "生成交付",
    description:
      "批量生成场景效果图，多版本演化、局部精修；满意后直接交付，无需其他前置步骤。",
    icon: Sparkles,
  },
  {
    step: "04",
    en: "DEPOSIT",
    title: "沉淀复用",
    description:
      "把好用的结果、风格与提示词保存回知识库，成为个人和团队下一次创作的资产。",
    icon: Layers,
  },
];

const FLOW = [
  "发起创作",
  "调用个人 / 团队资产",
  "生成并交付场景图",
  "沉淀回知识库",
];

export function Workflow() {
  return (
    <section id="workflow" className="scroll-mt-28 px-0 py-8 sm:py-10">
      <div className="page-wrap">
        <div className="grain relative overflow-hidden rounded-[32px] border border-white/90 bg-[#edf3fd] px-5 py-12 shadow-[0_30px_80px_-60px_rgba(31,45,84,0.45)] sm:rounded-[38px] sm:px-8 sm:py-14 lg:px-12 lg:py-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-0"
          >
            <div className="absolute -right-20 -top-32 size-[420px] rounded-full bg-[radial-gradient(circle,rgba(101,85,245,0.20),transparent_68%)] blur-2xl" />
            <div className="absolute -bottom-40 -left-24 size-[380px] rounded-full bg-[radial-gradient(circle,rgba(77,141,255,0.18),transparent_70%)] blur-2xl" />
            <div className="dot-grid absolute inset-0 opacity-[0.35] [mask-image:radial-gradient(ellipse_64%_54%_at_50%_45%,black,transparent_82%)]" />
          </div>

          <div className="relative z-10">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <SectionHeading
                index="03"
                eyebrow="How It Works"
                title={
                  <>
                    <span className="whitespace-nowrap">文生 · 图生</span>
                    <br />
                    <span className="whitespace-nowrap">一个越用越快的</span>
                    <span className="text-gradient inline-block whitespace-nowrap">
                      资产闭环
                    </span>
                  </>
                }
                description="文生与图生是两个独立入口，生成场景图即可直接交付。个人与团队知识库贯穿始终，让每次创作都调用资产，又沉淀资产。"
              />

              <a
                href="#film"
                className="group inline-flex shrink-0 items-center gap-2.5 self-start rounded-full border border-white/90 bg-white/65 px-4 py-2.5 text-[11.5px] font-medium text-foreground/65 backdrop-blur-xl transition-all hover:bg-white hover:text-ink lg:self-end"
              >
                <span className="flex size-6 items-center justify-center rounded-full bg-ink text-white">
                  <Play
                    className="ml-0.5 size-2.5 fill-current"
                    aria-hidden="true"
                  />
                </span>
                回看影片中的完整流程
                <ArrowRight
                  className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </a>
            </div>

            <div className="mt-11 grid gap-3 sm:mt-12 md:grid-cols-2 xl:grid-cols-4">
              {STEPS.map((step, index) => {
                const Icon = step.icon;
                return (
                  <Reveal
                    key={step.step}
                    delay={index * 80}
                    className="h-full"
                  >
                    <article className="group relative flex h-full flex-col overflow-hidden rounded-[24px] border border-white/90 bg-white/[0.68] p-5 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:bg-white hover:shadow-[0_24px_50px_-36px_rgba(31,45,84,0.4)]">
                      <div
                        aria-hidden="true"
                        className="absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent"
                      />
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-[10px] font-medium tracking-[0.18em] text-muted-foreground/60">
                          STEP {step.step}
                        </span>
                        <span className="flex size-9 items-center justify-center rounded-[12px] border border-brand/10 bg-brand/[0.065] text-brand transition-transform duration-500 group-hover:-rotate-3 group-hover:scale-105">
                          <Icon className="size-4" aria-hidden="true" />
                        </span>
                      </div>

                      <h3 className="mt-9 text-[17px] font-semibold tracking-[-0.03em] text-ink">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-[12.5px] leading-[1.75] text-muted-foreground">
                        {step.description}
                      </p>

                      <div className="mt-auto flex items-center justify-between pt-6">
                        <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-foreground/25">
                          {step.en}
                        </span>
                        <span className="size-1.5 rounded-full bg-brand/25 transition-colors duration-300 group-hover:bg-brand/70" />
                      </div>
                    </article>
                  </Reveal>
                );
              })}
            </div>

            <div className="mt-5 flex flex-col gap-3 rounded-[22px] border border-dashed border-[#0b1020]/10 bg-white/[0.38] px-4 py-3.5 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-3">
                <span className="mt-0.5 shrink-0 rounded-full border border-foreground/10 bg-white/70 px-2.5 py-1 text-[9px] font-semibold tracking-[0.12em] text-foreground/50">
                  可选
                </span>
                <p className="text-[11.5px] leading-5 text-foreground/55">
                  <span className="font-semibold text-foreground/75">
                    电子画册编排
                  </span>
                  ：需要多页物料时，可将场景图进一步编排成电子画册；只做场景图也可以完整交付。
                </p>
              </div>
              <span className="shrink-0 pl-1 text-[10px] text-muted-foreground/50">
                按需扩展，不是必经流程
              </span>
            </div>

            <div className="mt-6 flex flex-col gap-4 border-t border-[#0b1020]/[0.07] pt-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex flex-wrap items-center gap-x-2 gap-y-2">
                {FLOW.map((item, index) => (
                  <span key={item} className="inline-flex items-center gap-2">
                    <span className="text-[10.5px] font-medium text-foreground/50">
                      {item}
                    </span>
                    {index < FLOW.length - 1 ? (
                      <ArrowRight
                        className="size-3 text-foreground/20"
                        aria-hidden="true"
                      />
                    ) : null}
                  </span>
                ))}
              </div>
              <span className="text-[10px] tracking-[0.02em] text-muted-foreground/60">
                场景图是主路径，资产是复利
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
