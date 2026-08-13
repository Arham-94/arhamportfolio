"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

import { HeroContent } from "./hero-content";
import { CustomCursor } from "./custom-cursor";

export function Hero({ robot }: { robot: ReactNode }) {
  const [stage, setStage] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const robotRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  /* =========================================================
     MOBILE DETECTION
  ========================================================= */

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 599px)");

    const updateMobileState = () => {
      setIsMobile(mediaQuery.matches);
    };

    updateMobileState();

    mediaQuery.addEventListener("change", updateMobileState);

    return () => {
      mediaQuery.removeEventListener("change", updateMobileState);
    };
  }, []);

  /* =========================================================
     CINEMATIC ENTRANCE
  ========================================================= */

  useEffect(() => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduced) {
      setStage(7);
      return;
    }

    const timings = [40, 200, 500, 700, 1000, 1250, 1550];

    const timers = timings.map((time, index) =>
      window.setTimeout(() => {
        setStage(index + 1);
      }, time),
    );

    return () => {
      timers.forEach((timer) => {
        window.clearTimeout(timer);
      });
    };
  }, []);

  /* =========================================================
     DESKTOP PARALLAX + SCROLL ANIMATION

     Completely disabled on mobile.
  ========================================================= */

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 768px)");

    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");

    // Don't start animation loop on mobile/tablets
    // or reduced-motion devices.
    if (reduced.matches || !desktop.matches) {
      return;
    }

    let targetX = 0;
    let targetY = 0;

    let currentX = 0;
    let currentY = 0;

    let scrollProgress = 0;

    let raf = 0;

    /* Mouse movement */

    const handleMouseMove = (event: MouseEvent) => {
      if (!finePointer.matches) return;

      targetX = (event.clientX / window.innerWidth - 0.5) * 2;

      targetY = (event.clientY / window.innerHeight - 0.5) * 2;
    };

    /* Scroll */

    const handleScroll = () => {
      const height = window.innerHeight;

      scrollProgress = Math.min(Math.max(window.scrollY / height, 0), 1);
    };

    /* Animation */

    const animate = () => {
      currentX += (targetX - currentX) * 0.06;

      currentY += (targetY - currentY) * 0.06;

      /* Background grid */

      if (bgRef.current) {
        bgRef.current.style.transform = `translate3d(${currentX * -8}px, ${
          currentY * -8
        }px, 0)`;
      }

      /* Glow */

      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${currentX * 14}px, ${
          currentY * 14
        }px, 0)`;
      }

      /* Robot */

      if (robotRef.current) {
        const lift = scrollProgress * -60;

        robotRef.current.style.transform = `translate3d(${currentX * 22}px, ${
          currentY * 18 + lift
        }px, 0)`;

        robotRef.current.style.opacity = String(1 - scrollProgress * 0.9);
      }

      /* Hero content */

      if (contentRef.current) {
        const lift = scrollProgress * -40;

        contentRef.current.style.transform = `translate3d(${currentX * 4}px, ${
          currentY * 4 + lift
        }px, 0)`;

        contentRef.current.style.opacity = String(1 - scrollProgress * 1.1);
      }

      raf = window.requestAnimationFrame(animate);
    };

    raf = window.requestAnimationFrame(animate);

    window.addEventListener("mousemove", handleMouseMove);

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.cancelAnimationFrame(raf);

      window.removeEventListener("mousemove", handleMouseMove);

      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* =====================================================
          CUSTOM CURSOR
      ===================================================== */}

      {!isMobile && <CustomCursor />}

      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        ref={sectionRef}
        aria-label="Introduction"
        className="
          relative
          min-h-[100svh]
          w-full
          overflow-hidden
          bg-background
        "
      >
        {/* =====================================================
            BACKGROUND
        ===================================================== */}

        {/* Atmospheric gradient */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-0
          "
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
          className="
            pointer-events-none
            absolute
            inset-[-40px]
            will-change-transform
          "
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

        {/* Radial illumination */}

        <div
          ref={glowRef}
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            right-[8%]
            top-1/2
            h-[75vmin]
            w-[75vmin]
            -translate-y-1/2
            will-change-transform
            lg:right-[14%]
          "
          style={{
            background:
              "radial-gradient(circle, oklch(0.6 0.02 260 / 0.28) 0%, oklch(0.4 0.01 260 / 0.12) 35%, transparent 68%)",

            opacity: stage >= 2 ? 1 : 0,

            transition: "opacity 1400ms ease",
          }}
        />

        {/* Grain */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-0
            mix-blend-soft-light
          "
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",

            opacity: 0.35,
          }}
        />

        {/* =====================================================
            FOREGROUND
        ===================================================== */}

        <div
          className="
            relative
            z-10
            mx-auto
            flex
            min-h-[100svh]
            max-w-7xl
            flex-col
            px-6
            pt-24
            pb-10
            sm:px-8
            md:pt-28
            lg:px-12
          "
        >
          <div
            className="
              flex
              flex-1
              flex-col
              justify-center
            "
          >
            {/* =================================================
                HERO CONTENT
            ================================================= */}

            <div
              ref={contentRef}
              className="
                relative
                z-10
                order-1
                w-full
                will-change-transform
                md:max-w-[50%]
                xl:max-w-[46%]
              "
            >
              <HeroContent stage={stage} />
            </div>

            {/* =================================================
                SPLINE ROBOT

                IMPORTANT:
                This entire section is not rendered on mobile.
            ================================================= */}

            {!isMobile && (
              <div
                className="
                  order-2
                  md:absolute
                  md:right-0
                  md:top-0
                  md:z-0
                  md:order-none
                  md:flex
                  md:h-[100svh]
                  md:w-[56%]
                  md:items-center
                  md:justify-center
                  xl:w-[58%]
                "
              >
                <div
                  ref={robotRef}
                  className="
                    relative
                    mx-auto
                    mt-6
                    h-[46vh]
                    w-full
                    max-w-[560px]
                    will-change-transform
                    sm:h-[52vh]
                    md:mt-0
                    md:h-[90%]
                    md:max-w-none
                  "
                  style={{
                    opacity: stage >= 2 ? 1 : 0,

                    transition: "opacity 1400ms ease",
                  }}
                >
                  {/* Robot float */}

                  <div
                    data-cursor="robot"
                    className="
                      h-full
                      w-full
                    "
                    style={{
                      animation: "robot-float 7s ease-in-out infinite",
                    }}
                  >
                    {robot}
                  </div>

                  {/* Robot status */}

                  <div
                    className="
                      absolute
                      right-2
                      top-6
                      flex
                      items-center
                      gap-2
                      lg:right-8
                      lg:top-16
                    "
                    style={{
                      opacity: stage >= 5 ? 1 : 0,

                      transform:
                        stage >= 5 ? "translateY(0)" : "translateY(8px)",

                      transition: "opacity 700ms ease, transform 700ms ease",
                    }}
                  >
                    <span
                      className="
                        h-1.5
                        w-1.5
                        rounded-full
                        bg-[oklch(0.75_0.16_150)]
                      "
                      style={{
                        animation: "status-pulse 2.5s ease-in-out infinite",
                      }}
                      aria-hidden="true"
                    />

                    <span
                      className="
                        font-mono
                        text-[10px]
                        uppercase
                        tracking-[0.28em]
                        text-muted-foreground
                      "
                    >
                      AI Assistant — Online
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
