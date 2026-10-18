import { siteConfig } from "@/config/site";
import { ArrowRight, Code2, Cpu, Layers } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-zinc-800/80 bg-zinc-950 pt-16 pb-24 sm:pt-24 sm:pb-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--color-emerald-950),_var(--color-zinc-950)_60%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1.5 text-xs font-medium text-emerald-300">
            <Cpu className="h-3.5 w-3.5" />
            <span>Custom Software Engineering & Applied AI Lab</span>
          </div>

          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-6xl lg:leading-[1.1]">
            Production-Grade Software &{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
              Private AI Systems
            </span>
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-zinc-400 sm:text-xl">
            {siteConfig.companyName} is an independent software engineering studio and research lab.
            We architect custom full-stack web platforms, local LLM inference pipelines, distributed data
            scrapers, and native cross-platform tooling for businesses and technical teams.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-500 px-6 py-3.5 text-sm font-semibold text-zinc-950 shadow-lg shadow-emerald-500/10 transition-all hover:bg-emerald-400"
            >
              Commission a Project
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#products"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900/70 px-6 py-3.5 text-sm font-semibold text-zinc-200 transition-colors hover:border-zinc-700 hover:bg-zinc-900"
            >
              Explore R&D Systems
            </a>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-4 border-t border-zinc-800/80 pt-12 sm:grid-cols-3">
          <div className="rounded-xl border border-zinc-800/60 bg-zinc-900/30 p-5">
            <div className="flex items-center gap-3 text-emerald-400">
              <Code2 className="h-5 w-5" />
              <span className="text-sm font-semibold uppercase tracking-wider text-zinc-200">
                Full-Stack Precision
              </span>
            </div>
            <p className="mt-2 text-sm text-zinc-400">
              End-to-end delivery across Next.js, TypeScript, .NET 9, FastAPI, and PostgreSQL with strict type safety.
            </p>
          </div>

          <div className="rounded-xl border border-zinc-800/60 bg-zinc-900/30 p-5">
            <div className="flex items-center gap-3 text-emerald-400">
              <Cpu className="h-5 w-5" />
              <span className="text-sm font-semibold uppercase tracking-wider text-zinc-200">
                Zero-Leakage Local AI
              </span>
            </div>
            <p className="mt-2 text-sm text-zinc-400">
              Self-hosted LLM orchestration, custom RAG indexing, and QLoRA fine-tuning without third-party data exposure.
            </p>
          </div>

          <div className="rounded-xl border border-zinc-800/60 bg-zinc-900/30 p-5">
            <div className="flex items-center gap-3 text-emerald-400">
              <Layers className="h-5 w-5" />
              <span className="text-sm font-semibold uppercase tracking-wider text-zinc-200">
                Modular Ownership
              </span>
            </div>
            <p className="mt-2 text-sm text-zinc-400">
              Clean, maintainable repository handoffs with containerized deployments and zero vendor lock-in.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
