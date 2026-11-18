import { ArrowDown, ArrowUpRight, Terminal } from "lucide-react";
import { siteConfig } from "@/config/site";

export function Hero() {
  return (
    <section id="top" className="hero">
      <div className="shell hero-layout">
        <div>
          <p className="kicker"><span className="signal" /> Software engineering studio · Illinois</p>
          <h1>Custom software.<br /><em>Local-first AI.</em></h1>
          <p className="hero-intro">Tannahill Systems builds web applications, private AI infrastructure, and developer tools. Work directly with {siteConfig.founderName} from architecture through deployment.</p>
          <div className="actions">
            <a className="button primary" href="#products">Explore the work <ArrowDown size={17} /></a>
            <a className="button" href="#contact">Discuss a project <ArrowUpRight size={17} /></a>
          </div>
          <dl className="hero-facts">
            <div><dt>Applications</dt><dd>Web platforms and APIs</dd></div>
            <div><dt>Applied AI</dt><dd>Inference and retrieval</dd></div>
            <div><dt>Systems</dt><dd>Automation and tooling</dd></div>
          </dl>
        </div>
        <div className="hero-console">
          <div className="terminal panel" aria-label="Studio project index">
            <div className="terminal-bar"><span className="window-lights" aria-hidden="true"><i /><i /><i /></span><span>tannahill / workspace</span><Terminal size={15} aria-hidden="true" /></div>
            <div className="terminal-body">
              <p className="accent"><span aria-hidden="true">$ </span>ls ./selected-work</p>
              <p><strong>LocalChat</strong><span>Local inference &amp; memory</span></p>
              <p><strong>AI Gateway</strong><span>Multi-provider model routing</span></p>
              <p><strong>LegisTrack</strong><span>Federal bill tracking</span></p>
              <p><strong>TrendDev</strong><span>Job market analysis</span></p>
            </div>
            <div className="terminal-foot"><span className="signal" /> Studio project index</div>
          </div>
          <div className="hero-notes">
            <a href="#lab" className="note note-feature"><span>Local AI Lab</span><strong>Size an inference run</strong><ArrowUpRight size={17} /></a>
            <a href="#architecture" className="note"><span>Engineering stack</span><strong>From UI to runtime</strong><ArrowUpRight size={17} /></a>
          </div>
        </div>
      </div>
      <div className="tech-strip"><div className="shell">{["TypeScript", "React / Next.js", "C# / .NET", "Rust", "PostgreSQL", "Python", "llama.cpp", "AWS"].map(tech => <span key={tech}>{tech}</span>)}</div></div>
    </section>
  );
}
