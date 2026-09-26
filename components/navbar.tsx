"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Certificates", href: "#certificates" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setEntered(true), 150);
    return () => clearTimeout(t);
  }, []);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className="fixed inset-x-3 top-3 z-50 sm:inset-x-5 sm:top-5"
      style={{
        opacity: entered ? 1 : 0,
        transform: entered ? "translateY(0)" : "translateY(-16px)",
        transition:
          "opacity 700ms ease, transform 700ms cubic-bezier(0.22,1,0.36,1)",
      }}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-2xl border border-[oklch(1_0_0_/_0.1)] bg-[oklch(0.2_0.004_260_/_0.55)] px-4 py-3 shadow-[0_8px_40px_-12px_oklch(0_0_0_/_0.6)] backdrop-blur-xl sm:px-6"
      >
        {/* Brand */}
        <a
          href="/"
          data-cursor="interact"
          className="group flex items-center gap-2.5"
        >
          <span
            className="flex h-8 w-8 items-center justify-center rounded-lg bg-foreground font-mono text-sm font-bold text-background"
            aria-hidden="true"
          >
            Ak
          </span>
          <span className="hidden font-sans text-sm font-semibold tracking-tight text-foreground sm:inline">
            Arham khan
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 md:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                data-cursor="interact"
                className="relative rounded-lg px-3 py-2 font-sans text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href="#contact"
          data-cursor="interact"
          className="hidden rounded-lg bg-foreground px-4 py-2 font-sans text-sm font-medium text-background transition-opacity duration-200 hover:opacity-90 md:inline-block"
        >
          Get in touch
        </a>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-[oklch(1_0_0_/_0.1)] text-foreground md:hidden"
        >
          <div className="relative h-4 w-5">
            <span
              className="absolute left-0 block h-0.5 w-5 bg-foreground transition-all duration-300"
              style={{
                top: open ? "7px" : "2px",
                transform: open ? "rotate(45deg)" : "none",
              }}
            />
            <span
              className="absolute left-0 top-[7px] block h-0.5 w-5 bg-foreground transition-opacity duration-200"
              style={{ opacity: open ? 0 : 1 }}
            />
            <span
              className="absolute left-0 block h-0.5 w-5 bg-foreground transition-all duration-300"
              style={{
                top: open ? "7px" : "12px",
                transform: open ? "rotate(-45deg)" : "none",
              }}
            />
          </div>
        </button>
      </nav>

      {/* Mobile dropdown panel */}
      <div
        className="mt-2 overflow-hidden rounded-2xl border border-[oklch(1_0_0_/_0.1)] bg-[oklch(0.2_0.004_260_/_0.75)] backdrop-blur-xl md:hidden"
        style={{
          maxHeight: open ? "420px" : "0px",
          opacity: open ? 1 : 0,
          transition:
            "max-height 400ms cubic-bezier(0.22,1,0.36,1), opacity 300ms ease",
        }}
      >
        <ul className="flex flex-col p-2">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-4 py-3 font-sans text-base text-muted-foreground transition-colors duration-200 hover:bg-[oklch(1_0_0_/_0.05)] hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
