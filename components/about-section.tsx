"use client";

import { useState } from "react";

type Tab = "education" | "experience";

const education = [
  {
    year: "2024 — 2026",
    title: "Intermediate — Computer Science",
    institution: "Federal Board Islamabad FBISE",
    description:
      "Focused on computer science, mathematics, programming, and analytical problem solving.",
  },
  {
    year: "2022 — 2024",
    title: "Secondary School Certificate",
    institution: "Federal Board Islamabad FBISE",
    description:
      "Built a strong foundation in physics, mathematics, computer studies, and logical thinking.",
  },
];

const experience = [
  {
    year: "2024 — Present",
    title: "Full-Stack Web Developer",
    institution: "Freelance",
    description:
      "Designing and developing modern web applications, interactive interfaces, APIs, and complete digital experiences.",
  },
  {
    year: "2023 — 2025",
    title: "Full-Stack Projects",
    institution: "Masters Academy",
    description:
      "Building real-world projects while exploring modern frontend technologies, backend systems, AI integrations, and creative web experiences.",
  },
];

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState<Tab>("education");

  const items = activeTab === "education" ? education : experience;

  return (
    <section
      id="about"
      className="relative w-full overflow-hidden bg-background px-6 py-24 text-foreground sm:px-8 lg:px-12 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* SECTION HEADER */}
        <div className="mb-16 flex items-end justify-between gap-6 border-b border-border/60 pb-5">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="text-xs font-medium tracking-[0.25em] text-muted-foreground">
                01
              </span>

              <span className="h-px w-8 bg-border" />

              <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                About
              </span>
            </div>

            <h2 className="text-4xl font-medium tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              A little about me.
            </h2>
          </div>

          <span className="hidden text-xs uppercase tracking-[0.2em] text-muted-foreground sm:block">
            The person behind the pixels
          </span>
        </div>

        {/* INTRO */}
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-20">
          {/* IMAGE */}
          <div className="group relative mx-auto w-full max-w-md lg:mx-0">
            {/* Outer frame */}
            <div className="absolute -inset-3 rounded-[2.2rem] border border-border/40 bg-muted/20" />

            {/* Image container */}
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-border bg-card">
              <img
                src="/about-image.png"
                alt="Portrait"
                className="h-full w-full object-cover grayscale transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              />

              {/* Gradient */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />

              {/* Image information */}
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between">
                <span className="rounded-full border border-border bg-background/50 px-3 py-1.5 text-[10px] uppercase tracking-[0.18em] text-foreground backdrop-blur-md">
                  Web Developer
                </span>

                <span className="text-xs text-muted-foreground">01 / 01</span>
              </div>
            </div>

            {/* Decorative circles */}
            <div className="absolute -right-3 -top-3 h-12 w-12 rounded-full border border-border bg-background" />

            <div className="absolute -bottom-3 -left-3 h-8 w-8 rounded-full border border-border bg-background" />
          </div>

          {/* CONTENT */}
          <div>
            <p className="mb-5 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Who I am
            </p>

            <h3 className="max-w-2xl text-3xl font-medium leading-[1.1] tracking-[-0.035em] sm:text-4xl lg:text-[3.2rem]">
              Building with purpose,
              <br />
              <span className="text-muted-foreground">
                designing with intention.
              </span>
            </h3>

            <div className="mt-8 max-w-2xl space-y-5 text-[15px] leading-7 text-muted-foreground sm:text-base">
              <p>
                I'm a full-stack web developer focused on creating modern,
                responsive, and interactive web experiences.
              </p>

              <p>
                I enjoy combining clean development practices with thoughtful
                UI/UX to build products that are not only functional, but also
                memorable to use.
              </p>
            </div>

            {/* DETAILS */}
            <div className="mt-10 grid grid-cols-1 border-y border-border/70 sm:grid-cols-3">
              <div className="border-b border-border/70 py-5 sm:border-b-0 sm:border-r sm:pr-5">
                <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  Role
                </p>

                <p className="mt-2 text-sm">Full-Stack Developer</p>
              </div>

              <div className="border-b border-border/70 py-5 sm:border-b-0 sm:border-r sm:px-5">
                <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  Focus
                </p>

                <p className="mt-2 text-sm">Web · UI/UX · Interactive</p>
              </div>

              <div className="py-5 sm:pl-5">
                <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  Based in
                </p>

                <p className="mt-2 text-sm">Pakistan</p>
              </div>
            </div>
          </div>
        </div>

        {/* EDUCATION / EXPERIENCE */}
        <div className="mt-28 lg:mt-36">
          {/* TABS HEADER */}
          <div className="flex items-end justify-between border-b border-border">
            <div
              role="tablist"
              aria-label="Background information"
              className="flex gap-8 sm:gap-12"
            >
              {/* EDUCATION */}
              <button
                type="button"
                role="tab"
                aria-selected={activeTab === "education"}
                onClick={() => setActiveTab("education")}
                className={`relative pb-5 text-sm uppercase tracking-[0.16em] transition-colors ${
                  activeTab === "education"
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Education
                {activeTab === "education" && (
                  <span className="absolute bottom-[-1px] left-0 h-px w-full bg-foreground" />
                )}
              </button>

              {/* EXPERIENCE */}
              <button
                type="button"
                role="tab"
                aria-selected={activeTab === "experience"}
                onClick={() => setActiveTab("experience")}
                className={`relative pb-5 text-sm uppercase tracking-[0.16em] transition-colors ${
                  activeTab === "experience"
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Experience
                {activeTab === "experience" && (
                  <span className="absolute bottom-[-1px] left-0 h-px w-full bg-foreground" />
                )}
              </button>
            </div>

            <span className="hidden pb-5 text-xs text-muted-foreground sm:block">
              {activeTab === "education"
                ? "Academic background"
                : "Professional journey"}
            </span>
          </div>

          {/* TAB CONTENT */}
          <div key={activeTab} className="about-tab-content relative mt-10">
            {/* TIMELINE LINE */}

            <div className="space-y-5">
              {items.map((item, index) => (
                <article
                  key={`${activeTab}-${index}`}
                  className="group relative grid gap-5 rounded-2xl border border-border/70 bg-card/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-border hover:bg-card sm:grid-cols-[140px_1fr] sm:p-7"
                >
                  {/* TIMELINE DOT */}
                  <div className="absolute -left-[4px] top-8 hidden h-[9px] w-[9px] rounded-full border-2 border-background bg-muted-foreground sm:block" />

                  {/* YEAR */}
                  <div>
                    <span className="text-xs font-medium tracking-[0.12em] text-muted-foreground">
                      {item.year}
                    </span>
                  </div>

                  {/* CONTENT */}
                  <div>
                    <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
                      <div>
                        <h4 className="text-lg font-medium tracking-[-0.02em]">
                          {item.title}
                        </h4>

                        <p className="mt-1 text-sm text-muted-foreground">
                          {item.institution}
                        </p>
                      </div>

                      <span className="hidden text-xs text-muted-foreground transition-transform duration-300 group-hover:translate-x-1 sm:block">
                        ↗
                      </span>
                    </div>

                    <p className="mt-5 max-w-2xl text-sm leading-6 text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
