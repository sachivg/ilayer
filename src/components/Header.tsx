"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { NAV_LINKS } from "@/lib/nav";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string, children?: { href: string }[]) =>
    pathname === href || (children?.some((c) => c.href === pathname) ?? false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-border bg-background/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/logo-icon.png"
            alt=""
            width={472}
            height={472}
            priority
            className="h-9 w-9"
          />
          <span className="text-base font-semibold tracking-tight text-foreground">
            iLayer Solutions
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) =>
            link.children ? (
              <div key={link.href} className="group relative">
                <Link
                  href={link.href}
                  className={`flex items-center gap-1 text-sm transition-colors hover:text-foreground ${
                    isActive(link.href, link.children)
                      ? "text-foreground"
                      : "text-muted"
                  }`}
                >
                  {link.label}
                  <ChevronDown
                    size={14}
                    className="transition-transform group-hover:rotate-180"
                  />
                </Link>
                <div className="invisible absolute left-1/2 top-full -translate-x-1/2 pt-3 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100">
                  <div className="w-48 rounded-xl border border-border bg-surface p-1.5 shadow-xl">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className={`block rounded-lg px-3 py-2 text-sm transition-colors hover:bg-surface-2 hover:text-foreground ${
                          pathname === child.href
                            ? "text-foreground"
                            : "text-muted"
                        }`}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm transition-colors hover:text-foreground ${
                  pathname === link.href ? "text-foreground" : "text-muted"
                }`}
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        <Link
          href="/contact"
          className="hidden rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90 lg:inline-block"
        >
          Contact Us
        </Link>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border text-foreground lg:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background/97 backdrop-blur-md lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4">
            {NAV_LINKS.map((link) =>
              link.children ? (
                <div key={link.href}>
                  <div className="flex items-center justify-between rounded-lg pr-1">
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={`flex-1 rounded-lg px-3 py-3 text-sm transition-colors hover:bg-surface hover:text-foreground ${
                        isActive(link.href, link.children)
                          ? "text-foreground"
                          : "text-muted"
                      }`}
                    >
                      {link.label}
                    </Link>
                    <button
                      type="button"
                      aria-label={`Toggle ${link.label} submenu`}
                      onClick={() =>
                        setMobileExpanded((cur) =>
                          cur === link.href ? null : link.href
                        )
                      }
                      className="flex h-10 w-10 items-center justify-center text-muted"
                    >
                      <ChevronDown
                        size={16}
                        className={`transition-transform ${
                          mobileExpanded === link.href ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </div>
                  {mobileExpanded === link.href && (
                    <div className="ml-3 flex flex-col gap-1 border-l border-border pl-3">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setOpen(false)}
                          className={`rounded-lg px-3 py-2.5 text-sm transition-colors hover:bg-surface hover:text-foreground ${
                            pathname === child.href
                              ? "text-foreground"
                              : "text-muted"
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-lg px-3 py-3 text-sm transition-colors hover:bg-surface hover:text-foreground ${
                    pathname === link.href ? "text-foreground" : "text-muted"
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-foreground px-5 py-3 text-center text-sm font-medium text-background"
            >
              Contact Us
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
