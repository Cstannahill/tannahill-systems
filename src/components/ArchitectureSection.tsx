import { siteConfig } from "@/config/site";

export function ArchitectureSection() {
  return (
    <section id="architecture" className="section shell">
      <div className="section-head">
        <div><p className="kicker">Architecture</p><h2>The engineering stack</h2></div>
        <p>Tools for building the interface, running the workload, and operating the system after launch.</p>
      </div>
      <div className="stack-grid">
        {siteConfig.techStack.map(group => (
          <article className="panel stack-card" key={group.category}>
            <h3>{group.category}</h3>
            <ul>{group.items.map(item => <li key={item}>{item}</li>)}</ul>
          </article>
        ))}
      </div>
      <div id="process" className="process">
        <h3>How engagements work</h3>
        <ol>
          {siteConfig.processSteps.map(step => (
            <li key={step.stepNumber}><span className="step-number" aria-hidden="true">{step.stepNumber}</span><h4>{step.title}</h4><p>{step.description}</p></li>
          ))}
        </ol>
      </div>
    </section>
  );
}
