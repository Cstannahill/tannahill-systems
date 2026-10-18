import { cacheLife } from "next/cache";
import { siteConfig } from "@/config/site";
import { Terminal } from "lucide-react";

export async function Footer() {
  "use cache";
  cacheLife("days");
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-800 bg-zinc-950 text-zinc-400">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 text-white">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-emerald-500/30 bg-emerald-500/10 text-emerald-400">
                <Terminal className="h-4 w-4" />
              </div>
              <span className="text-base font-bold tracking-tight">
                {siteConfig.companyName}
              </span>
            </div>
            <p className="mt-3 max-w-sm text-sm text-zinc-400">
              Independent software engineering studio and applied AI research lab specializing in
              full-stack web systems, local LLM inference, and developer tooling.
            </p>
            <p className="mt-4 text-xs text-zinc-500">
              Principal Engineer: {siteConfig.founderName} • {siteConfig.location}
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-200">
              Navigation
            </h3>
            <ul className="mt-3 space-y-2 text-sm">
              {siteConfig.navItems.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="hover:text-white">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-200">
              Corporate & Verification
            </h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a
                  href={`mailto:${siteConfig.emails.contact}`}
                  className="hover:text-white"
                >
                  {siteConfig.emails.contact}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  GitHub (@Cstannahill)
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  LinkedIn Profile
                </a>
              </li>
              <li className="text-xs text-zinc-500 pt-1">
                Domain: {siteConfig.domain}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between border-t border-zinc-800/80 pt-6 text-xs text-zinc-500 sm:flex-row">
          <p>
            © {currentYear} {siteConfig.legalName}. All rights reserved.
          </p>
          <p className="mt-2 sm:mt-0">
            Engineered with Next.js, TypeScript & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
