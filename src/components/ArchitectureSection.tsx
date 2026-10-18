import { siteConfig } from "@/config/site";

export function ArchitectureSection() {
  return (
    <section id="architecture" className="border-b border-zinc-800/80 bg-zinc-950 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-emerald-400">
            Technical Stack & Execution
          </span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Core Infrastructure & Delivery Workflow
          </h2>
          <p className="mt-4 text-base text-zinc-400">
            Every system is built on battle-tested, modern runtimes designed for low operational overhead,
            high throughput, and seamless horizontal scaling.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {siteConfig.techStack.map((group) => (
            <div
              key={group.category}
              className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-6"
            >
              <h3 className="text-sm font-semibold uppercase tracking-wider text-emerald-400">
                {group.category}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm font-medium text-zinc-200"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div id="process" className="mt-20 border-t border-zinc-800/80 pt-16">
          <h3 className="text-2xl font-bold text-white">Client Engagement Workflow</h3>
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
            {siteConfig.processSteps.map((step) => (
              <div
                key={step.stepNumber}
                className="relative rounded-xl border border-zinc-800/80 bg-zinc-900/20 p-6"
              >
                <span className="font-mono text-3xl font-extrabold text-emerald-500/30">
                  {step.stepNumber}
                </span>
                <h4 className="mt-3 text-lg font-bold text-white">{step.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
