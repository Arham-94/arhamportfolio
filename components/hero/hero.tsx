"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { HeroContent } from "./hero-content";
import { ScrollIndicator } from "./scroll-indicator";
import { CustomCursor } from "./custom-cursor";

export function Hero({ robot }: { robot: ReactNode }) {
  const [stage, setStage] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const robotRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // Staged cinematic entrance (fast — content readable within ~1.5s).
  useEffect(() => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduced) {
      setStage(7);
      return;
    }
    // Stage 1 (bg) is effectively immediate; then robot, eyebrow, headline…
    const timings = [40, 200, 500, 700, 1000, 1250, 1550];
    const timers = timings.map((t, i) => setTimeout(() => setStage(i + 1), t));
    return () => timers.forEach(clearTimeout);
  }, []);

  // Pointer parallax + scroll shift, driven by a single rAF loop.
  useEffect(() => {
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const desktop = window.matchMedia("(min-width: 768px)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduced.matches) return;

    let targetX = 0;
    let targetY = 0;
    let curX = 0;
    let curY = 0;
    let scrollProgress = 0;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      if (!finePointer.matches) return;
      targetX = (e.clientX / window.innerWidth - 0.5) * 2;
      targetY = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    const onScroll = () => {
      const h = window.innerHeight;
      scrollProgress = Math.min(Math.max(window.scrollY / h, 0), 1);
    };

    const tick = () => {
      curX += (targetX - curX) * 0.06;
      curY += (targetY - curY) * 0.06;

      // Layers move by different depths for parallax.
      if (bgRef.current) {
        bgRef.current.style.transform = `translate3d(${curX * -8}px, ${
          curY * -8
        }px, 0)`;
      }
      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${curX * 14}px, ${
          curY * 14
        }px, 0)`;
      }
      // Scroll-driven lift + fade only applies on md+ where the robot is
      // pinned inside the viewport. On mobile the robot lives below the fold
      // in normal flow, so fading it on scroll would hide it right as the user
      // scrolls to it — keep it fully opaque there.
      const isDesktop = desktop.matches;
      if (robotRef.current) {
        const lift = isDesktop ? scrollProgress * -60 : 0;
        robotRef.current.style.transform = `translate3d(${curX * 22}px, ${
          curY * 18 + lift
        }px, 0)`;
        robotRef.current.style.opacity = isDesktop
          ? String(1 - scrollProgress * 0.9)
          : "1";
      }
      if (contentRef.current) {
        const lift = isDesktop ? scrollProgress * -40 : 0;
        contentRef.current.style.transform = `translate3d(${curX * 4}px, ${
          curY * 4 + lift
        }px, 0)`;
        contentRef.current.style.opacity = isDesktop
          ? String(1 - scrollProgress * 1.1)
          : "1";
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      <CustomCursor />
      <section
        ref={sectionRef}
        aria-label="Introduction"
        className="relative min-h-[100svh] w-full overflow-hidden bg-background"
      >
        {/* ---------- Background layers ---------- */}
        {/* Atmospheric base gradient */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(120% 90% at 50% 0%, oklch(0.22 0.01 260) 0%, oklch(0.16 0.004 260) 55%, oklch(0.13 0.004 260) 100%)",
            opacity: stage >= 1 ? 1 : 0,
            transition: "opacity 900ms ease",
          }}
        />
        {/* Technical grid */}
        <div
          ref={bgRef}
          aria-hidden="true"
          className="pointer-events-none absolute inset-[-40px] will-change-transform"
          style={{
            backgroundImage:
              "linear-gradient(oklch(1 0 0 / 0.025) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0 / 0.025) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage:
              "radial-gradient(90% 80% at 60% 45%, black 30%, transparent 85%)",
            WebkitMaskImage:
              "radial-gradient(90% 80% at 60% 45%, black 30%, transparent 85%)",
            opacity: stage >= 1 ? 1 : 0,
            transition: "opacity 1200ms ease",
          }}
        />
        {/* Subtle radial illumination behind the robot */}
        <div
          ref={glowRef}
          aria-hidden="true"
          className="pointer-events-none absolute right-[8%] top-1/2 h-[75vmin] w-[75vmin] -translate-y-1/2 will-change-transform lg:right-[14%]"
          style={{
            background:
              "radial-gradient(circle, oklch(0.6 0.02 260 / 0.28) 0%, oklch(0.4 0.01 260 / 0.12) 35%, transparent 68%)",
            opacity: stage >= 2 ? 1 : 0,
            transition: "opacity 1400ms ease",
          }}
        />
        {/* Grain / noise */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 mix-blend-soft-light"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
            opacity: 0.35,
          }}
        />

        {/* ---------- Foreground composition ---------- */}
        <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col px-6 pt-24 pb-10 sm:px-8 md:pt-28 lg:px-12">
          {/* Mobile: content first, robot after (in flow).
              md+ (tablets & laptops): robot is pinned to the right of the visible
              viewport (top-0 + h-[100svh]) so it always stays inside the hero,
              independent of how tall the content column grows. */}
          <div className="flex flex-1 flex-col justify-center">
            {/* Content */}
            <div
              ref={contentRef}
              className="relative z-10 order-1 w-full will-change-transform md:max-w-[50%] xl:max-w-[46%]"
            >
              <HeroContent stage={stage} />
            </div>

            {/* Robot */}
            <div className="order-2 md:absolute md:right-0 md:top-0 md:z-0 md:order-none md:flex md:h-[100svh] md:w-[56%] md:items-center md:justify-center xl:w-[58%]">
              <div
                ref={robotRef}
                className="relative mx-auto mt-6 h-[46vh] w-full max-w-[560px] will-change-transform sm:h-[52vh] md:mt-0 md:h-[90%] md:max-w-none"
                style={{
                  opacity: stage >= 2 ? 1 : 0,
                  transition: "opacity 1400ms ease",
                }}
              >
                {/* Float wrapper (idle motion) */}
                <div
                  data-cursor="robot"
                  className="h-full w-full"
                  style={{ animation: "robot-float 7s ease-in-out infinite" }}
                >
                  {robot}
                </div>

                {/* Tiny status label near the robot */}
                <div
                  className="absolute right-2 top-6 flex items-center gap-2 lg:right-8 lg:top-16"
                  style={{
                    opacity: stage >= 5 ? 1 : 0,
                    transform: stage >= 5 ? "translateY(0)" : "translateY(8px)",
                    transition: "opacity 700ms ease, transform 700ms ease",
                  }}
                >
                  <span
                    className="h-1.5 w-1.5 rounded-full bg-[oklch(0.75_0.16_150)]"
                    style={{
                      animation: "status-pulse 2.5s ease-in-out infinite",
                    }}
                    aria-hidden="true"
                  />
                  <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
                    AI Assistant — Online
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
