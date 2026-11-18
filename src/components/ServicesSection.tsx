import { ArrowUpRight, Code, Cpu, Database, Terminal } from "lucide-react";
import { siteConfig } from "@/config/site";

const icons = { code: Code, cpu: Cpu, database: Database, terminal: Terminal };

export function ServicesSection() {
  return (
    <section id="services" className="section shell">
      <div className="section-head">
        <div><p className="kicker">Services</p><h2>What we build</h2></div>
        <p>Bring a product idea, an existing system, or a workflow you need to automate.</p>
      </div>
      <div className="services-grid">
        {siteConfig.services.map(service => {
          const Icon = icons[service.iconName];
          return (
            <article className="panel service-card" key={service.id}>
              <span className="icon-tile"><Icon aria-hidden="true" size={20} /></span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul>{service.deliverables.map(item => <li key={item}>{item}</li>)}</ul>
              <a className="text-link" href="#contact">Discuss this service <ArrowUpRight size={15} /></a>
            </article>
          );
        })}
      </div>
    </section>
  );
}
