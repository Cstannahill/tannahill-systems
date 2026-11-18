"use client";

import { useRef, useState, useSyncExternalStore } from "react";
import { ArrowUpRight, Bookmark, Search } from "lucide-react";
import { siteConfig } from "@/config/site";

const filters = ["All", "AI infrastructure", "Applications", "Developer tools"] as const;
const storageKey = "tannahill-project-shortlist";
const shortlistEvent = "tannahill-shortlist-change";
let fallbackSnapshot: string | undefined;

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener(shortlistEvent, callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(shortlistEvent, callback);
  };
}

function getSnapshot() {
  if (fallbackSnapshot !== undefined) return fallbackSnapshot;
  try {
    return localStorage.getItem(storageKey) ?? "[]";
  } catch {
    return "[]";
  }
}

function getSavedProjects(snapshot: string): string[] {
  try {
    const values: unknown = JSON.parse(snapshot);
    return Array.isArray(values)
      ? siteConfig.products.filter(project => values.includes(project.id)).map(project => project.id)
      : [];
  } catch {
    return [];
  }
}

function toggleSaved(id: string) {
  const current = getSavedProjects(getSnapshot());
  const next = current.includes(id) ? current.filter(value => value !== id) : [...current, id];
  const snapshot = JSON.stringify(next);
  try {
    localStorage.setItem(storageKey, snapshot);
    fallbackSnapshot = undefined;
  } catch {
    fallbackSnapshot = snapshot;
  }
  window.dispatchEvent(new Event(shortlistEvent));
}

export function ProductsSection() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState(siteConfig.products[0]?.id);
  const [onlySaved, setOnlySaved] = useState(false);
  const details = useRef<HTMLElement>(null);
  const saved = getSavedProjects(useSyncExternalStore(subscribe, getSnapshot, () => "[]"));
  const searchTerm = query.trim().toLowerCase();
  const projects = siteConfig.products.filter(project =>
    (filter === "All" || project.category === filter) &&
    (!onlySaved || saved.includes(project.id)) &&
    [project.name, project.tagline, project.description, ...project.architecture]
      .join(" ").toLowerCase().includes(searchTerm)
  );
  const active = projects.find(project => project.id === selectedId) ?? projects[0];

  function selectProject(id: string) {
    setSelectedId(id);
    if (window.matchMedia("(max-width: 800px)").matches) {
      details.current?.focus({ preventScroll: true });
      details.current?.scrollIntoView({ block: "start" });
    }
  }

  return (
    <section id="products" className="section shell">
      <div className="section-head">
        <div><p className="kicker">Portfolio</p><h2>Selected work</h2></div>
        <p>Local AI infrastructure, public-interest software, and tools for developers. Explore the architecture and source where available.</p>
      </div>
      <div className="project-controls">
        <div className="pills" role="group" aria-label="Project category">
          {filters.map(value => <button key={value} className="pill" aria-pressed={filter === value} onClick={() => setFilter(value)}>{value}</button>)}
        </div>
        <label className="search-box">
          <Search size={17} aria-hidden="true" />
          <input type="search" aria-label="Search projects or technologies" placeholder="Search projects or technologies" value={query} onChange={event => setQuery(event.target.value)} />
        </label>
        <button className="pill shortlist" aria-pressed={onlySaved} onClick={() => setOnlySaved(!onlySaved)}><Bookmark size={15} /> Shortlist ({saved.length})</button>
      </div>
      {active ? (
        <div className="projects-layout">
          <div className="project-grid">
            {projects.map(project => (
              <button key={project.id} className="project-card panel" aria-pressed={active.id === project.id} onClick={() => selectProject(project.id)}>
                <span className="project-meta">{project.category}{saved.includes(project.id) && <Bookmark size={14} aria-label="Shortlisted" />}</span>
                <strong>{project.name}</strong>
                <span className="project-tagline">{project.tagline}</span>
                <span className="tags">{project.architecture.slice(0, 3).map(tech => <span key={tech}>{tech}</span>)}</span>
              </button>
            ))}
          </div>
          <article ref={details} tabIndex={-1} className="project-detail panel" aria-label="Project details" aria-live="polite" aria-atomic="true">
            <p className="kicker">{active.status}</p>
            <h3>{active.name}</h3>
            <p>{active.description}</p>
            <div className="tags">{active.architecture.map(tech => <span key={tech}>{tech}</span>)}</div>
            <div className="actions">
              {active.repoUrl && <a className="button primary" href={active.repoUrl}>View source <ArrowUpRight size={15} /></a>}
              <button className="button" aria-pressed={saved.includes(active.id)} onClick={() => toggleSaved(active.id)}><Bookmark size={15} /> {saved.includes(active.id) ? "Remove from shortlist" : "Shortlist project"}</button>
            </div>
          </article>
        </div>
      ) : (
        <div className="empty panel" role="status">
          <p>No projects match your filters.</p>
          <button className="button" onClick={() => { setFilter("All"); setQuery(""); setOnlySaved(false); }}>Clear filters</button>
        </div>
      )}
    </section>
  );
}
