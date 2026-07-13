import Image from "next/image";
import Link from "next/link";
import { Mail } from "lucide-react";
import { NAV_LINKS } from "@/lib/nav";

function LinkedinIcon({
  size = 15,
  className,
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-10 sm:flex-row">
          <div>
            <Link href="/" className="flex items-center gap-2.5">
              <Image
                src="/logo-icon.png"
                alt=""
                width={472}
                height={472}
                className="h-9 w-9"
              />
              <span className="text-base font-semibold tracking-tight text-foreground">
                iLayer Solutions
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              Infrastructure, security, and automation solutions for Telecom
              Operators, ISPs, and Enterprises.
            </p>
            <div className="mt-4 flex flex-col items-start gap-3">
              <a
                href="mailto:info@ilayersolutions.com"
                className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
              >
                <Mail size={15} className="text-accent" />
                info@ilayersolutions.com
              </a>
              <a
                href="https://www.linkedin.com/company/ilayersolutions/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
              >
                <LinkedinIcon size={15} className="text-accent" />
                LinkedIn
              </a>
            </div>
          </div>

          <nav className="grid grid-cols-2 gap-x-10 gap-y-2 sm:flex sm:gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
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
