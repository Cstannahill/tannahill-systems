"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { siteConfig } from "@/config/site";
import type { ContactPayload } from "@/types/site";
import { Mail, MapPin, Send, CheckCircle2, AlertCircle } from "lucide-react";

const initialFormData: ContactPayload = {
  name: "",
  email: "",
  company: "",
  serviceType: "Full-Stack Application Engineering",
  projectScope: "Full System Build ($5,000 - $15,000)",
  message: "",
};

export function ContactSection() {
  const [formData, setFormData] = useState<ContactPayload>(initialFormData);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData: { error?: string } | null = await response.json().catch(() => null);
        throw new Error(errorData?.error || "Failed to transmit inquiry.");
      }

      setStatus("success");
      setFormData(initialFormData);
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Unexpected transmission error."
      );
    }
  };

  return (
    <section id="contact" className="bg-zinc-950 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <span className="text-xs font-semibold uppercase tracking-widest text-emerald-400">
              Project Inquiries & Consulting
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Initiate an Engineering Engagement
            </h2>
            <p className="mt-4 text-base leading-relaxed text-zinc-400">
              Whether you need a custom full-stack web platform, a private RAG/LLM deployment, or
              automated data extraction infrastructure, reach out with your technical objectives.
            </p>

            <div className="mt-8 space-y-5 border-t border-zinc-800/80 pt-8">
              <div className="flex items-start gap-3.5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900 text-emerald-400">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-zinc-400">
                    Direct Inquiries
                  </p>
                  <a
                    href={`mailto:${siteConfig.emails.contact}`}
                    className="mt-0.5 block text-sm font-semibold text-white hover:text-emerald-400"
                  >
                    {siteConfig.emails.contact}
                  </a>
                  <a
                    href={`mailto:${siteConfig.emails.primary}`}
                    className="mt-0.5 block text-xs text-zinc-400 hover:text-zinc-200"
                  >
                    {siteConfig.emails.primary}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900 text-emerald-400">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-zinc-400">
                    Operations Base
                  </p>
                  <p className="mt-0.5 text-sm font-semibold text-white">
                    {siteConfig.location}
                  </p>
                  <p className="mt-0.5 text-xs text-zinc-400">
                    Serving clients nationwide (US Central Time)
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 sm:p-8"
            >
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-zinc-300">
                    Your Name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Jane Doe"
                    className="mt-2 w-full rounded-lg border border-zinc-800 bg-zinc-950 px-4 py-2.5 text-sm text-white placeholder-zinc-500 focus:border-emerald-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-zinc-300">
                    Work Email *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="jane@company.com"
                    className="mt-2 w-full rounded-lg border border-zinc-800 bg-zinc-950 px-4 py-2.5 text-sm text-white placeholder-zinc-500 focus:border-emerald-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-xs font-semibold uppercase tracking-wider text-zinc-300">
                    Company / Organization
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Acme Systems Inc."
                    className="mt-2 w-full rounded-lg border border-zinc-800 bg-zinc-950 px-4 py-2.5 text-sm text-white placeholder-zinc-500 focus:border-emerald-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="serviceType" className="block text-xs font-semibold uppercase tracking-wider text-zinc-300">
                    Primary Service Area *
                  </label>
                  <select
                    id="serviceType"
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-lg border border-zinc-800 bg-zinc-950 px-4 py-2.5 text-sm text-white focus:border-emerald-500 focus:outline-none"
                  >
                    <option value="Full-Stack Application Engineering">Full-Stack Application Engineering</option>
                    <option value="Private AI & Local LLM Infrastructure">Private AI & Local LLM Infrastructure</option>
                    <option value="Data Extraction & Cloud Automation">Data Extraction & Cloud Automation</option>
                    <option value="Native Desktop & Developer Tooling">Native Desktop & Developer Tooling</option>
                    <option value="Technical Advisory & Architecture Audit">Technical Advisory & Architecture Audit</option>
                  </select>
                </div>
              </div>

              <div className="mt-6">
                <label htmlFor="projectScope" className="block text-xs font-semibold uppercase tracking-wider text-zinc-300">
                  Estimated Engagement Scope
                </label>
                <select
                  id="projectScope"
                  name="projectScope"
                  value={formData.projectScope}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-lg border border-zinc-800 bg-zinc-950 px-4 py-2.5 text-sm text-white focus:border-emerald-500 focus:outline-none"
                >
                  <option value="Scoped Sprint / MVP ($2,500 - $5,000)">Scoped Sprint / MVP ($2,500 - $5,000)</option>
                  <option value="Full System Build ($5,000 - $15,000)">Full System Build ($5,000 - $15,000)</option>
                  <option value="Enterprise / Multi-Phase ($15,000+)">Enterprise / Multi-Phase ($15,000+)</option>
                  <option value="Ongoing Retainer / Dedicated Engineering">Ongoing Retainer / Dedicated Engineering</option>
                </select>
              </div>

              <div className="mt-6">
                <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-zinc-300">
                  Technical Requirements & Timeline *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe your system architecture goals, desired deliverables, and target timeline..."
                  className="mt-2 w-full rounded-lg border border-zinc-800 bg-zinc-950 px-4 py-2.5 text-sm text-white placeholder-zinc-500 focus:border-emerald-500 focus:outline-none"
                />
              </div>

              {status === "success" && (
                <div className="mt-6 flex items-center gap-2.5 rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-4 text-sm text-emerald-300">
                  <CheckCircle2 className="h-5 w-5 shrink-0" />
                  <span>
                    Project inquiry received. {siteConfig.founderName} will respond within 1 business day.
                  </span>
                </div>
              )}

              {status === "error" && (
                <div className="mt-6 flex items-center gap-2.5 rounded-lg border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-300">
                  <AlertCircle className="h-5 w-5 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <div className="mt-6">
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-emerald-500 px-6 py-3.5 text-sm font-semibold text-zinc-950 transition-colors hover:bg-emerald-400 disabled:opacity-50"
                >
                  <Send className="h-4 w-4" />
                  {status === "submitting" ? "Transmitting Specification..." : "Submit Project Inquiry"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
