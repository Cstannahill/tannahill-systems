import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/config/site";

export function Navbar() {
  return (
    <header className="site-header">
      <a className="skip-link" href="#main">Skip to content</a>
      <div className="shell nav-inner">
        <a className="brand" href="#top">
          <span className="brand-mark" aria-hidden="true">TS</span>
          <span>{siteConfig.companyName}<small>Independent engineering studio</small></span>
        </a>
        <nav aria-label="Main navigation">
          {siteConfig.navItems.map(item => <a key={item.href} href={item.href}>{item.label}</a>)}
        </nav>
        <a className="button nav-cta" href="#contact">Start a project <ArrowUpRight size={15} /></a>
      </div>
    </header>
  );
}
