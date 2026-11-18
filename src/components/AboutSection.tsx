import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/config/site";

export function AboutSection() {
  return (
    <section id="about" className="section about-band">
      <div className="shell about-layout">
        <div>
          <p className="kicker">About the founder</p>
          <h2>{siteConfig.founderName}</h2>
          <p className="about-copy">I run Tannahill Systems from Illinois. Before starting the studio, I served in the U.S. Air Force, worked as a programmer at AnswerNet, and spent time on a small remodeling crew. Those jobs shaped how I build software around the people and workflows it serves.</p>
          <a className="text-link" href={siteConfig.links.linkedin}>Connect on LinkedIn <ArrowUpRight size={16} /></a>
        </div>
        <ol className="timeline">
          {[
            ["Five years", "U.S. Air Force", "Served before entering software development."],
            ["2022", "Sabio full-stack program", "Trained in React, .NET, and SQL Server."],
            ["2023", "AnswerNet", "Worked as a professional programmer."],
            ["2023–2025", "Illinois remodeling crew", "Worked on a five-person crew preparing homes for resale and rent."],
            ["Since March 2025", "Independent software development", "Building software products and AI systems, from local model preparation and evaluation to provider integrations and custom MCP servers."],
          ].map(([date, title, description]) => (
            <li key={title}><p className="kicker">{date}</p><h3>{title}</h3><p>{description}</p></li>
          ))}
        </ol>
      </div>
    </section>
  );
}
