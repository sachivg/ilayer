"use client";

import { useState, type FormEvent } from "react";
import { Mail, Send } from "lucide-react";
import { LayersMark } from "./LayersMark";

const CONTACT_EMAIL = "info@ilayersolutions.com";

const PARTNERSHIP_TYPES = [
  "Technology / Vendor Partner",
  "Channel / Reseller",
  "Referral Partner",
  "Other",
];

export function Partnership() {
  const [company, setCompany] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [type, setType] = useState(PARTNERSHIP_TYPES[0]);
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const subject = encodeURIComponent(
      `Partnership enquiry from ${company || name || "website"}`
    );
    const body = encodeURIComponent(
      `Company: ${company}\nPartnership type: ${type}\n\n${message}\n\n— ${name}${
        email ? ` (${email})` : ""
      }`
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  }

  return (
    <section
      id="partnership"
      className="section-anchor relative overflow-hidden py-24 lg:py-32"
    >
      <LayersMark className="pointer-events-none absolute -right-24 top-1/4 h-auto w-80 rotate-12 opacity-[0.06]" />
      <div className="relative mx-auto max-w-3xl px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-accent">
            Partner With Us
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Let&rsquo;s build a channel together
          </h2>
          <p className="mt-4 text-muted">
            Technology vendor, reseller, or referral partner — tell us a
            bit about your business and where it overlaps with ours.
          </p>
        </div>

        <div className="mt-10 rounded-3xl border border-border bg-surface/60 p-8 sm:p-12">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="company"
                  className="mb-2 block text-sm font-medium text-foreground/90"
                >
                  Company Name
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  required
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-muted focus:border-accent focus:outline-none"
                  placeholder="Acme Networks"
                />
              </div>
              <div>
                <label
                  htmlFor="type"
                  className="mb-2 block text-sm font-medium text-foreground/90"
                >
                  Partnership Type
                </label>
                <select
                  id="type"
                  name="type"
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  className="w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm text-foreground focus:border-accent focus:outline-none"
                >
                  {PARTNERSHIP_TYPES.map((t) => (
                    <option key={t} value={t} className="bg-surface">
                      {t}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-foreground/90"
                >
                  Your Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-muted focus:border-accent focus:outline-none"
                  placeholder="Jane Doe"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-foreground/90"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-muted focus:border-accent focus:outline-none"
                  placeholder="jane@company.com"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-foreground/90"
              >
                Tell us about the opportunity
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full resize-none rounded-xl border border-border bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-muted focus:border-accent focus:outline-none"
                placeholder="What you do, and where you see the overlap..."
              />
            </div>

            <div className="flex flex-col items-center gap-4 pt-2 sm:flex-row sm:justify-between">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
              >
                <Mail size={16} className="text-accent" />
                {CONTACT_EMAIL}
              </a>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent-2 px-6 py-3 text-sm font-semibold text-background transition-transform hover:scale-[1.02] sm:w-auto"
              >
                Send Enquiry
                <Send size={16} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
