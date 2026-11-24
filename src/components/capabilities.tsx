import {
  ArrowUpRight,
  Images,
  Library,
  Palette,
  Users,
} from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

const CAPABILITIES = [
  {
    index: "01",
    title: "文生场景图",
    en: "Text → Scene",
    description:
      "输入场景描述与提示词，结合市场、客户与风格约束，快速生成可用的场景效果图。",
    tags: ["提示词生成", "多风格组合", "批量出图"],
    image: "images/card-cases.jpg",
    alt: "由文字提示生成的庭院窗景厨房场景效果图",
  },
  {
    index: "02",
    title: "图生场景图",
    en: "Image → Scene",
    description:
      "上传产品原图，搭配参考图与布局约束，生成建筑级质感的场景大片，支持多版本演化与精修。",
    tags: ["产品原图", "参考图迁移", "多版本精修"],
    image: "images/card-scene.jpg",
    alt: "由产品原图生成的高质感厨房水龙头场景效果图",
  },
  {
    index: "03",
    title: "知识库资产复用",
    en: "Knowledge Assets",
    description:
      "把个人与团队的风格、布局、样图与提示词沉淀为知识库资产，在每一次文生、图生任务中直接调用。",
    tags: ["个人知识库", "团队知识库", "一键复用"],
    image: "images/card-knowledge.jpg",
    alt: "研发 AI设计平台布局图库与场景样图库的资产管理界面",
  },
];

const ASSETS = [
  { label: "个人知识库", detail: "个人风格与提示词", icon: Library },
  { label: "团队知识库", detail: "共享资产与版本", icon: Users },
  { label: "风格 · 布局库", detail: "构图与约束", icon: Palette },
  { label: "场景样图库", detail: "高清场景背景", icon: Images },
];

export function Capabilities() {
  return (
    <section
      id="capabilities"
      className="relative scroll-mt-28 border-t border-white/70 py-20 sm:py-24 lg:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(251,252,255,0.4),#f7f9fe_42%,#f6f8fd)]"
      />

      <div className="page-wrap">
        <Reveal>
          <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
            <SectionHeading
              index="02"
              eyebrow="Core Capabilities"
              title={
                <>
                  <span className="whitespace-nowrap">两种生成方式，</span>
                  <br />
                  <span className="whitespace-nowrap">一个越用越厚的</span>
                  <span className="text-gradient inline-block whitespace-nowrap">
                    知识库
                  </span>
                </>
              }
              description="文生与图生覆盖从灵感探索到产品落地的不同场景；生成结果、风格、布局与提示词持续沉淀，让个人与团队的知识资产越用越厚。"
            />

            <div className="hidden shrink-0 items-end gap-8 border-l border-border/70 pb-1 pl-8 lg:flex">
              <div>
                <p className="font-mono text-[26px] font-medium tracking-[-0.06em] text-ink">
                  02
                </p>
                <p className="mt-1 text-[11px] text-muted-foreground">
                  场景生成方式
                </p>
              </div>
              <div>
                <p className="font-mono text-[26px] font-medium tracking-[-0.06em] text-ink">
                  04
                </p>
                <p className="mt-1 text-[11px] text-muted-foreground">
                  设计知识库
                </p>
              </div>
              <div>
                <p className="font-mono text-[26px] font-medium tracking-[-0.06em] text-brand">
                  01
                </p>
                <p className="mt-1 text-[11px] text-muted-foreground">
                  资产闭环
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:mt-14 md:grid-cols-3 md:gap-4 lg:gap-5">
          {CAPABILITIES.map((capability, index) => (
            <Reveal
              key={capability.title}
              delay={index * 90}
              className="h-full"
            >
              <article className="group relative flex h-full flex-col overflow-hidden rounded-[28px] border border-white/90 bg-white/[0.78] p-3.5 shadow-[0_20px_60px_-42px_rgba(31,45,84,0.4)] backdrop-blur-sm transition-all duration-500 hover:-translate-y-1.5 hover:border-white hover:bg-white hover:shadow-[0_34px_80px_-46px_rgba(54,48,152,0.42)] sm:p-4">
                <div className="px-1.5 pb-4 pt-1.5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="font-mono text-[10px] font-medium tracking-[0.18em] text-brand/55">
                        {capability.index}
                      </span>
                      <h3 className="mt-2 text-[20px] font-semibold tracking-[-0.035em] text-ink">
                        {capability.title}
                      </h3>
                    </div>
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-border/70 bg-white/60 text-muted-foreground transition-all duration-500 group-hover:rotate-45 group-hover:border-brand group-hover:bg-brand group-hover:text-white">
                      <ArrowUpRight
                        className="size-4"
                        aria-hidden="true"
                      />
                    </span>
                  </div>

                  <p className="mt-3 max-w-[36ch] text-[13px] leading-[1.7] text-muted-foreground">
                    {capability.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {capability.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-border/60 bg-white/70 px-2.5 py-1 text-[10px] font-medium tracking-[-0.01em] text-foreground/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="relative mt-auto aspect-[4/3] overflow-hidden rounded-[19px] bg-[#edf1f8]">
                  <img
                    src={capability.image}
                    alt={capability.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.045]"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-[#0d1424]/20 via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-30"
                  />
                  <span className="absolute bottom-3 left-3 rounded-full border border-white/20 bg-black/20 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.13em] text-white/85 backdrop-blur-md">
                    {capability.en}
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mt-5 overflow-hidden rounded-[26px] border border-white/90 bg-white/[0.55] px-4 py-4 backdrop-blur-xl sm:px-5 sm:py-[18px]">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex items-center gap-3">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-[14px] border border-brand/10 bg-brand/[0.07] text-brand">
                  <Library className="size-[18px]" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-[13.5px] font-semibold tracking-[-0.02em] text-ink">
                    个人 × 团队知识资产
                  </p>
                  <p className="mt-0.5 text-[11px] leading-5 text-muted-foreground">
                    风格、布局、样图与提示词，都成为可复用的创作资产
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {ASSETS.map((asset) => {
                  const Icon = asset.icon;
                  return (
                    <span
                      key={asset.label}
                      className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-white/75 py-1.5 pl-2.5 pr-3 text-[10.5px] font-medium text-foreground/65 transition-colors hover:border-brand/20 hover:text-brand"
                    >
                      <Icon className="size-3.5 text-brand/70" aria-hidden="true" />
                      {asset.label}
                      <span className="hidden text-[9px] text-muted-foreground/60 sm:inline">
                        {asset.detail}
                      </span>
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
