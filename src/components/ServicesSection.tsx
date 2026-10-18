import { siteConfig } from "@/config/site";
import { ServiceOffering } from "@/types/site";
import { Cpu, Code, Database, Terminal, CheckCircle2 } from "lucide-react";

function ServiceIcon({ name }: { name: ServiceOffering["iconName"] }) {
  switch (name) {
    case "cpu":
      return <Cpu className="h-6 w-6 text-emerald-400" />;
    case "code":
      return <Code className="h-6 w-6 text-emerald-400" />;
    case "database":
      return <Database className="h-6 w-6 text-emerald-400" />;
    case "terminal":
      return <Terminal className="h-6 w-6 text-emerald-400" />;
  }
}

export function ServicesSection() {
  return (
    <section id="services" className="border-b border-zinc-800/80 bg-zinc-950 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-emerald-400">
            Client Engineering Services
          </span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Custom Software Built for Production Scale
          </h2>
          <p className="mt-4 text-base text-zinc-400">
            We partner with founders, enterprises, and operational teams to design, build, and deploy
            mission-critical software systems from greenfield concept to cloud release.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {siteConfig.services.map((service) => (
            <div
              key={service.id}
              className="flex flex-col justify-between rounded-2xl border border-zinc-800/90 bg-zinc-900/40 p-7 transition-all hover:border-zinc-700"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="rounded-md border border-zinc-800 bg-zinc-900 px-2.5 py-1 text-xs font-medium text-zinc-400">
                    {service.category}
                  </span>
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-emerald-500/20 bg-emerald-500/10">
                    <ServiceIcon name={service.iconName} />
                  </div>
                </div>

                <h3 className="mt-5 text-xl font-bold text-white">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                  {service.description}
                </p>

                <div className="mt-6 border-t border-zinc-800/80 pt-5">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-300">
                    Core Deliverables
                  </h4>
                  <ul className="mt-3 space-y-2.5">
                    {service.deliverables.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-zinc-300">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 border-t border-zinc-800/80 pt-4">
                <div className="flex flex-wrap gap-1.5">
                  {service.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-zinc-800/80 px-2.5 py-1 text-xs font-mono text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
