"use client";

import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const start = Date.now();
    const duration = 1200;

    const timer = window.setInterval(() => {
      const elapsed = Date.now() - start;

      const value = Math.min(Math.round((elapsed / duration) * 100), 100);

      setProgress(value);

      if (value >= 100) {
        window.clearInterval(timer);
      }
    }, 50);

    return () => {
      window.clearInterval(timer);
    };
  }, []);

  const done = progress >= 100;

  return (
    <div
      aria-hidden="true"
      className="
        fixed
        inset-0
        z-[9999]
        flex
        items-center
        justify-center
        bg-background
      "
      style={{
        opacity: done ? 0 : 1,
        pointerEvents: done ? "none" : "auto",
        transition: "opacity 600ms cubic-bezier(0.22, 1, 0.36, 1)",
      }}
    >
      {/* =====================================================
          AMBIENT GLOW
      ===================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[60vmin]
          w-[60vmin]
          -translate-x-1/2
          -translate-y-1/2
        "
        style={{
          background:
            "radial-gradient(circle, oklch(0.6 0.02 260 / 0.22) 0%, transparent 68%)",
        }}
      />

      {/* =====================================================
          LOADER CONTENT
      ===================================================== */}

      <div className="relative flex flex-col items-center">
        {/* Brand mark */}

        <div
          className="
            flex
            h-16
            w-16
            items-center
            justify-center
            rounded-2xl
            bg-foreground
            font-mono
            text-2xl
            font-bold
            text-background
          "
          style={{
            animation: "robot-float 4s ease-in-out infinite",
          }}
        >
          Ak
        </div>

        {/* Name */}

        <p
          className="
            mt-6
            font-sans
            text-lg
            font-semibold
            tracking-tight
            text-foreground
          "
        >
          Arham Khan
        </p>

        {/* Role */}

        <p
          className="
            mt-1
            font-mono
            text-[10px]
            uppercase
            tracking-[0.3em]
            text-muted-foreground
          "
        >
          Full-Stack Developer
        </p>

        {/* =====================================================
            PROGRESS BAR
        ===================================================== */}

        <div
          className="
            mt-8
            h-px
            w-48
            overflow-hidden
            bg-[oklch(1_0_0_/_0.12)]
          "
        >
          <div
            className="h-full bg-foreground"
            style={{
              width: `${progress}%`,
              transition: "width 100ms linear",
            }}
          />
        </div>

        {/* Percentage */}

        <p
          className="
            mt-3
            font-mono
            text-[10px]
            tabular-nums
            tracking-widest
            text-muted-foreground
          "
        >
          {String(progress).padStart(3, "0")}%
        </p>
      </div>
    </div>
  );
}
