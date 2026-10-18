import { siteConfig } from "@/config/site";
import { ExternalLink, GitBranch, Box } from "lucide-react";

export function ProductsSection() {
  return (
    <section id="products" className="border-b border-zinc-800/80 bg-zinc-950 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-emerald-400">
              Internal R&D & Proprietary Systems
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Platforms Engineered In-House
            </h2>
            <p className="mt-4 text-base text-zinc-400">
              Alongside client engagements, {siteConfig.companyName} actively develops and maintains
              proprietary AI runtimes, static analysis engines, and cloud data platforms.
            </p>
          </div>
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 self-start rounded-lg border border-zinc-800 bg-zinc-900 px-4 py-2.5 text-sm font-medium text-zinc-200 transition-colors hover:border-zinc-700 hover:text-white"
          >
            <GitBranch className="h-4 w-4 text-emerald-400" />
            View Open-Source Portfolio
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {siteConfig.products.map((product) => (
            <div
              key={product.id}
              className="group flex flex-col justify-between rounded-2xl border border-zinc-800/90 bg-zinc-900/25 p-7 transition-all hover:border-emerald-500/40 hover:bg-zinc-900/50"
            >
              <div>
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-2.5">
                    <Box className="h-5 w-5 text-emerald-400" />
                    <h3 className="text-lg font-bold text-white">{product.name}</h3>
                  </div>
                  <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-0.5 text-xs font-medium text-emerald-300">
                    {product.status}
                  </span>
                </div>

                <p className="mt-1.5 text-xs font-medium text-zinc-400">{product.tagline}</p>

                <p className="mt-4 text-sm leading-relaxed text-zinc-300">
                  {product.description}
                </p>
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-zinc-800/80 pt-4">
                <div className="flex flex-wrap gap-1.5">
                  {product.architecture.map((tech) => (
                    <span
                      key={tech}
                      className="rounded bg-zinc-900 px-2 py-0.5 text-xs font-mono text-zinc-400 border border-zinc-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={product.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-400 hover:text-emerald-300"
                >
                  Repository
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
