"use client";

import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    let raf = 0;
    const start = performance.now();
    const MIN_DURATION = 1900; // guarantee the intro is felt

    const loop = (now: number) => {
      const elapsed = now - start;
      // Ease toward 100% over the minimum duration.
      const t = Math.min(elapsed / MIN_DURATION, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setProgress(Math.round(eased * 100));

      if (t >= 1) {
        setDone(true);
        return;
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);

  // After the fade-out transition completes, unmount entirely.
  useEffect(() => {
    if (!done) return;
    const t = setTimeout(() => setRemoved(true), 750);
    return () => clearTimeout(t);
  }, [done]);

  if (removed) return null;

  return (
    <div
      aria-hidden={done}
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-background"
      style={{
        opacity: done ? 0 : 1,
        pointerEvents: done ? "none" : "auto",
        transition: "opacity 700ms cubic-bezier(0.22,1,0.36,1)",
      }}
    >
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[60vmin] w-[60vmin] -translate-x-1/2 -translate-y-1/2"
        style={{
          background:
            "radial-gradient(circle, oklch(0.6 0.02 260 / 0.22) 0%, transparent 68%)",
        }}
      />

      <div className="relative flex flex-col items-center">
        {/* Brand mark */}
        <div
          className="flex h-16 w-16 items-center justify-center rounded-2xl bg-foreground font-mono text-2xl font-bold text-background"
          style={{ animation: "robot-float 4s ease-in-out infinite" }}
        >
          Ak
        </div>

        <p className="mt-6 font-sans text-lg font-semibold tracking-tight text-foreground">
          Arham khan
        </p>
        <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          Full-Stack Developer
        </p>

        {/* Progress track */}
        <div className="mt-8 h-px w-48 overflow-hidden bg-[oklch(1_0_0_/_0.12)]">
          <div
            className="h-full bg-foreground"
            style={{ width: `${progress}%`, transition: "width 120ms linear" }}
          />
        </div>
        <p className="mt-3 font-mono text-[10px] tabular-nums tracking-widest text-muted-foreground">
          {String(progress).padStart(3, "0")}%
        </p>
      </div>
    </div>
  );
}
