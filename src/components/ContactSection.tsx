"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { siteConfig } from "@/config/site";

const scopes = [
  "Scoped Sprint / MVP ($2,500 - $5,000)",
  "Full System Build ($5,000 - $15,000)",
  "Enterprise / Multi-Phase ($15,000+)",
  "Ongoing Retainer / Dedicated Engineering",
];

export function ContactSection() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "submitting") return;
    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form));
    setStatus("submitting");
    setFeedback("");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!response.ok) {
        const data: { error?: string } | null = await response.json().catch(() => null);
        throw new Error(data?.error || "Your inquiry could not be sent. Try again or email us directly.");
      }
      form.reset();
      setStatus("success");
      setFeedback("Your project inquiry was sent.");
    } catch (error) {
      setStatus("error");
      setFeedback(error instanceof Error ? error.message : "Try again or email us directly.");
    }
  }

  return (
    <section id="contact" className="section contact-band">
      <div className="shell contact-layout">
        <div className="contact-copy">
          <p className="kicker">Project inquiries</p>
          <h2>Let’s talk about<br />your project.</h2>
          <p>Tell us what you’re building, where you’re stuck, and what a successful handoff looks like.</p>
          <a className="text-link" href={`mailto:${siteConfig.emails.contact}`}><Mail size={18} />{siteConfig.emails.contact}</a>
          <a className="text-link" href={`mailto:${siteConfig.emails.primary}`}><Mail size={18} />{siteConfig.emails.primary}</a>
          <p className="contact-location"><MapPin size={18} /> {siteConfig.location}</p>
        </div>
        <form className="panel contact-form" onSubmit={handleSubmit}>
          <fieldset disabled={status === "submitting"}>
            <div className="form-grid">
              <label>Name <span aria-hidden="true">*</span><input name="name" autoComplete="name" required /></label>
              <label>Email <span aria-hidden="true">*</span><input name="email" type="email" autoComplete="email" required /></label>
              <label>Company<input name="company" autoComplete="organization" /></label>
              <label>Service<select name="serviceType" defaultValue="">
                <option value="">Select a service</option>
                {siteConfig.services.map(service => <option key={service.id}>{service.title}</option>)}
                <option>Technical Advisory &amp; Architecture Audit</option>
              </select></label>
            </div>
            <label>Estimated scope<select name="projectScope" defaultValue=""><option value="">Select a scope</option>{scopes.map(scope => <option key={scope}>{scope}</option>)}</select></label>
            <label>Project requirements and timeline <span aria-hidden="true">*</span><textarea name="message" rows={5} required /></label>
            <button className="button primary" type="submit" disabled={status === "submitting"}>{status === "submitting" ? "Sending inquiry…" : "Send project inquiry"} <ArrowUpRight size={17} /></button>
          </fieldset>
          <p className={status === "error" ? "form-status error" : "form-status"} role="status">{feedback}</p>
        </form>
      </div>
    </section>
  );
}
