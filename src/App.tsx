import { Capabilities } from "@/components/capabilities";
import { Faq } from "@/components/faq";
import { FinalCta } from "@/components/final-cta";
import { Hero } from "@/components/hero";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Workflow } from "@/components/workflow";
import { Workspace } from "@/components/workspace";

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-background">
      <a
        href="#main"
        className="fixed left-4 top-4 z-[100] -translate-y-24 rounded-full bg-ink px-5 py-3 text-sm font-medium text-white transition-transform focus:translate-y-0"
      >
        跳到主要内容
      </a>

      <SiteHeader />

      <main id="main">
        <Hero />
        <Capabilities />
        <Workflow />
        <Workspace />
        <Faq />
        <FinalCta />
      </main>

      <SiteFooter />
    </div>
  );
}
