import {
  ArrowUpRight,
  Library,
  Settings2,
  Sparkles,
  Users,
} from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

const MODULES = [
  {
    title: "个人知识库",
    en: "PERSONAL",
    description:
      "管理个人常用的风格、布局、样图与提示词，随时检索、随时调用。",
    icon: Library,
  },
  {
    title: "团队知识库",
    en: "TEAM",
    description:
      "统一管理企业共享资产，维护团队审美与交付标准，支持分类、版本与维护记录。",
    icon: Users,
  },
  {
    title: "资产复用",
    en: "REUSE",
    description:
      "在文生与图生任务中直接调用已有资产，减少重复试错与沟通成本。",
    icon: Sparkles,
  },
  {
    title: "资产治理",
    en: "GOVERN",
    description:
      "按市场、客户、部门与角色划分资产边界，让权限和归属始终清晰。",
    icon: Settings2,
  },
];

export function Workspace() {
  return (
    <section
      id="workspace"
      className="relative scroll-mt-28 border-t border-white/70 py-20 sm:py-24 lg:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(180deg,#f6f8fd,#fbfcff_55%,#f6f9fe)]"
      />

      <div className="page-wrap">
        <div className="grid gap-14 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-16">
          <div>
            <Reveal>
              <SectionHeading
                index="04"
                eyebrow="Knowledge Assets"
                title={
                  <>
                    <span className="whitespace-nowrap">让个人经验，</span>
                    <br />
                    <span className="whitespace-nowrap">沉淀为团队</span>
                    <span className="text-gradient inline-block whitespace-nowrap">
                      资产
                    </span>
                  </>
                }
                description="个人知识库保存每个人的风格、布局、样图与提示词；团队知识库统一治理与共享。知识资产管理贯穿创作，让成果持续复用。"
              />
            </Reveal>

            <div className="mt-9 flex flex-col gap-0.5">
              {MODULES.map((module, index) => {
                const Icon = module.icon;
                return (
                  <Reveal key={module.title} delay={index * 70}>
                    <div className="group flex items-start gap-3.5 rounded-2xl border border-transparent px-3 py-3.5 transition-all duration-300 hover:border-white/90 hover:bg-white/70 hover:shadow-[0_16px_40px_-36px_rgba(31,45,84,0.5)] sm:gap-4">
                      <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-[12px] border border-brand/10 bg-brand/[0.06] text-brand transition-transform duration-500 group-hover:-rotate-3 group-hover:scale-105">
                        <Icon className="size-4" aria-hidden="true" />
                      </span>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2.5">
                          <h3 className="text-[14.5px] font-semibold tracking-[-0.025em] text-ink">
                            {module.title}
                          </h3>
                          <span className="font-mono text-[8.5px] font-medium tracking-[0.16em] text-foreground/25">
                            {module.en}
                          </span>
                        </div>
                        <p className="mt-1 text-[12.5px] leading-[1.7] text-muted-foreground">
                          {module.description}
                        </p>
                      </div>
                      <ArrowUpRight
                        className="mt-2 ml-auto size-4 shrink-0 text-foreground/20 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand"
                        aria-hidden="true"
                      />
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>

          <Reveal delay={120}>
            <div className="relative">
              <div className="relative overflow-hidden rounded-[30px] border border-white/90 bg-white/[0.68] p-2 shadow-[0_42px_100px_-60px_rgba(54,48,152,0.55)] backdrop-blur-xl sm:rounded-[36px] sm:p-2.5">
                <div className="flex items-center justify-between px-3 py-2.5">
                  <span className="flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-foreground/50">
                    <span className="size-1.5 rounded-full bg-brand" />
                    Knowledge Assets
                  </span>
                  <span className="font-mono text-[9px] tracking-[0.1em] text-muted-foreground/45">
                    RDAI / 04
                  </span>
                </div>

                <div className="relative overflow-hidden rounded-[22px] border border-white/70 bg-[linear-gradient(145deg,#f8fbff_0%,#eaf1ff_58%,#f4f7ff_100%)] sm:rounded-[28px]">
                  <img
                    src="images/knowledge-matrix.jpg"
                    alt="研发 AI设计平台四大设计知识库：场景风格库、布局图库与场景样图库"
                    loading="lazy"
                    className="block h-auto w-full"
                  />
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 rounded-[inherit] border border-white/50"
                  />
                </div>

                <div className="flex items-center justify-between gap-4 px-3 pb-1.5 pt-3 text-[10px] text-muted-foreground/60">
                  <span className="flex items-center gap-2">
                    <span className="size-1.5 rounded-full bg-[#42b99e]" />
                    个人知识库 × 团队知识库
                  </span>
                  <span className="hidden text-right sm:block">
                    风格 / 布局 / 样图 / 提示词
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
