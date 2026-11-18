import { ArrowUp, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-layout">
        <a className="brand" href="#top"><span className="brand-mark" aria-hidden="true">TS</span><span>{siteConfig.companyName}<small>{siteConfig.location}</small></span></a>
        <div className="footer-links">
          <a href={siteConfig.links.github}>GitHub <ArrowUpRight size={14} /></a>
          <a href={siteConfig.links.linkedin}>LinkedIn <ArrowUpRight size={14} /></a>
          <a href="#top">Back to top <ArrowUp size={14} /></a>
        </div>
      </div>
    </footer>
  );
}
