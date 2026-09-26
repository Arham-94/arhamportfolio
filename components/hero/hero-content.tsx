"use client";

import { MagneticButton } from "./magnetic-button";

// A single revealable line/block.
function Reveal({
  show,
  delay = 0,
  blur = true,
  children,
  className,
}: {
  show: boolean;
  delay?: number;
  blur?: boolean;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <div
        style={{
          opacity: show ? 1 : 0,
          transform: show ? "translateY(0)" : "translateY(28px)",
          filter: blur ? (show ? "blur(0)" : "blur(10px)") : undefined,
          transition:
            "opacity 800ms cubic-bezier(0.22,1,0.36,1), transform 800ms cubic-bezier(0.22,1,0.36,1), filter 800ms ease",
          transitionDelay: `${delay}ms`,
        }}
      >
        {children}
      </div>
    </div>
  );
}

export function HeroContent({ stage }: { stage: number }) {
  const headlineLines = ["I BUILD DIGITAL", "EXPERIENCES", "THAT FEEL ALIVE."];

  return (
    <div className="max-w-xl text-center md:text-left lg:text-left">
      {/* Eyebrow */}
      <Reveal show={stage >= 3} className="mb-6 lg:mb-8">
        <div className="flex items-center gap-3">
          <span
            className="h-px w-8 bg-muted-foreground/60"
            aria-hidden="true"
          />
          <span className="font-mono text-[11px] uppercase tracking-[0.4em] text-muted-foreground">
            Full-Stack Web Developer
          </span>
        </div>
      </Reveal>

      {/* Headline — revealed line by line */}
      <h1 className="text-pretty font-sans text-[clamp(2rem,5vw,5rem)] font-bold leading-[0.98] tracking-[-0.03em] text-foreground">
        {headlineLines.map((line, i) => (
          <span key={line} className="block overflow-hidden">
            <Reveal show={stage >= 4} delay={i * 110} blur={false}>
              <span className="block">{line}</span>
            </Reveal>
          </span>
        ))}
      </h1>

      {/* Supporting paragraph */}
      <Reveal show={stage >= 5} delay={80} className="mt-7 lg:mt-9">
        <p className="max-w-md text-pretty text-base leading-relaxed text-muted-foreground lg:text-lg">
          I design and develop modern web experiences that combine thoughtful
          design, powerful technology, and meaningful interaction.
        </p>
      </Reveal>

      {/* CTA group */}
      <Reveal show={stage >= 6} delay={120} className="mt-9 lg:mt-11">
        <div className="flex flex-wrap items-center gap-4 justify-center md:justify-start lg:justify-start">
          <MagneticButton
            href="#projects"
            variant="primary"
            ariaLabel="Explore my work"
          >
            Explore My Work
          </MagneticButton>
          <MagneticButton
            href="#contact"
            variant="secondary"
            strength={0.25}
            ariaLabel="Let's connect"
          >
            Let&apos;s Connect
          </MagneticButton>
        </div>
      </Reveal>
    </div>
  );
}
