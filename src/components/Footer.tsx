import Link from "next/link";
import { Mail } from "lucide-react";

const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#vision", label: "Vision" },
  { href: "#story", label: "Story" },
  { href: "#services", label: "Services" },
  { href: "#expertise", label: "Expertise" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-10 sm:flex-row">
          <div>
            <Link href="#home" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-accent to-accent-2 font-mono text-sm font-bold text-background">
                iL
              </span>
              <span className="text-base font-semibold tracking-tight text-foreground">
                iLayer Solutions
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              Infrastructure, security, and automation solutions for Telecom
              Operators, ISPs, and Enterprises.
            </p>
            <a
              href="mailto:info@ilayersolutions.com"
              className="mt-4 inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
            >
              <Mail size={15} className="text-accent" />
              info@ilayersolutions.com
            </a>
          </div>

          <nav className="grid grid-cols-2 gap-x-10 gap-y-2 sm:flex sm:gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-xs text-muted sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} iLayer Solutions. All rights
            reserved.
          </p>
          <p>India &middot; USA &middot; Australia</p>
        </div>
      </div>
    </footer>
  );
}
