"use client";

import { useState, type FormEvent } from "react";
import { Mail, Send } from "lucide-react";
import { Locations } from "./Locations";
import { LayersMark } from "./LayersMark";

const CONTACT_EMAIL = "info@ilayersolutions.com";

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const subject = encodeURIComponent(`Enquiry from ${name || "website"}`);
    const body = encodeURIComponent(
      `${message}\n\n— ${name}${email ? ` (${email})` : ""}`
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  }

  return (
    <section
      id="contact"
      className="section-anchor relative overflow-hidden py-24 lg:py-32"
    >
      <LayersMark className="pointer-events-none absolute -left-24 top-1/3 h-auto w-80 rotate-12 opacity-[0.06]" />
      <div className="relative">
        <Locations />

        <div className="mx-auto mt-24 max-w-3xl px-6 lg:px-8">
          <div className="rounded-3xl border border-border bg-surface/60 p-8 sm:p-12">
          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-accent">
              Get In Touch
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Let&rsquo;s build something reliable
            </h2>
            <p className="mt-4 text-muted">
              Tell us about your network, and we&rsquo;ll get back to you.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-10 space-y-5">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-foreground/90"
                >
                  Name
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
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full resize-none rounded-xl border border-border bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-muted focus:border-accent focus:outline-none"
                placeholder="Tell us about your project..."
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
                Send Message
                <Send size={16} />
              </button>
            </div>
          </form>
        </div>
      </div>
      </div>
    </section>
  );
}
