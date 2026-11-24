import { ArrowRight, Film } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { requestFilmPlayback } from "@/lib/film";

const FAQ_ITEMS = [
  {
    value: "what-is-rd-ai",
    question: "研发 AI设计平台是什么？",
    answer:
      "研发 AI设计平台面向企业研发设计场景，提供文生场景图与图生场景图两类生成能力，并用个人知识库与团队知识库管理风格、布局、样图与提示词，让设计资产持续沉淀、复用。",
  },
  {
    value: "core-capabilities",
    question: "平台目前包含哪些核心能力？",
    answer:
      "核心是两类场景图生成：文生场景图与图生场景图。围绕它们，平台提供个人知识库、团队知识库、风格与布局管理、提示词版本以及资产复用；电子画册属于可选的扩展能力。",
  },
  {
    value: "design-assets",
    question: "设计资产如何沉淀和复用？",
    answer:
      "个人可以把常用风格、布局、样图与提示词存入个人知识库；团队可沉淀共享资产并维护分类、版本与权限。文生或图生任务都能直接调用这些资产，让不同项目、不同成员的输出保持稳定。",
  },
  {
    value: "get-started",
    question: "如何快速了解并使用平台？",
    answer:
      "先观看本页介绍影片，再浏览核心能力与知识资产部分。平台通过统一门户进入，个人知识库与团队知识库按权限隔离。",
  },
];

export function Faq() {
  return (
    <section
      id="faq"
      className="relative scroll-mt-28 border-t border-white/70 py-20 sm:py-24 lg:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(180deg,#f6f9fe,#fafbff_55%,#f6f8fd)]"
      />

      <div className="page-wrap">
        <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20">
          <Reveal>
            <div className="lg:sticky lg:top-32">
              <SectionHeading
                index="05"
                eyebrow="FAQ"
                title={
                  <>
                    关于研发 AI，
                    <br className="hidden sm:block" />
                    你可能想了解
                  </>
                }
                description="从平台定位、生成方式到知识资产复用，这里整理了关于研发 AI设计平台最常见的问题。"
              />

              <div className="mt-8 max-w-[340px] rounded-[24px] border border-white/90 bg-white/60 p-5 backdrop-blur-xl">
                <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  <Film className="size-3.5 text-brand" aria-hidden="true" />
                  Platform Film
                </div>
                <p className="mt-3 text-[12.5px] leading-6 text-muted-foreground">
                  影片中，看见文生、图生场景图与知识资产复用的完整链路。
                </p>
                <a
                  href="#film"
                  onClick={requestFilmPlayback}
                  className="group mt-4 inline-flex items-center gap-1.5 text-[11.5px] font-semibold text-brand"
                >
                  再次播放平台介绍
                  <ArrowRight
                    className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="rounded-[28px] border border-white/90 bg-white/[0.55] px-5 backdrop-blur-xl sm:px-7">
              <Accordion
                type="single"
                collapsible
                defaultValue="what-is-rd-ai"
                className="w-full"
              >
                {FAQ_ITEMS.map((item, index) => (
                  <AccordionItem
                    key={item.value}
                    value={item.value}
                    className={
                      index === FAQ_ITEMS.length - 1 ? "border-b-0" : undefined
                    }
                  >
                    <AccordionTrigger>
                      <span className="flex items-baseline gap-4">
                        <span className="font-mono text-[9px] font-medium tracking-[0.14em] text-brand/50">
                          0{index + 1}
                        </span>
                        <span>{item.question}</span>
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="pl-[34px]">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
