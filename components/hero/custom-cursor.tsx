'use client'

import { useEffect, useRef, useState } from 'react'

type CursorState = 'default' | 'interact' | 'robot'

const LABELS: Record<CursorState, string> = {
  default: '',
  interact: '+',
  robot: 'INTERACT',
}

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const [state, setState] = useState<CursorState>('default')
  const [visible, setVisible] = useState(false)
  const [enabled, setEnabled] = useState(false)

  // Only enable on fine-pointer devices that respect motion.
  useEffect(() => {
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)')
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)')
    const active = finePointer.matches && !reduced.matches
    setEnabled(active)
    if (active) {
      document.documentElement.classList.add('custom-cursor-active')
    }
    return () => {
      document.documentElement.classList.remove('custom-cursor-active')
    }
  }, [])

  useEffect(() => {
    if (!enabled) return

    let mouseX = window.innerWidth / 2
    let mouseY = window.innerHeight / 2
    let ringX = mouseX
    let ringY = mouseY
    let raf = 0

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
      if (!visible) setVisible(true)

      // Instant dot placement.
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`
      }

      const target = (e.target as HTMLElement)?.closest<HTMLElement>(
        '[data-cursor]',
      )
      const next = (target?.dataset.cursor as CursorState) || 'default'
      setState((prev) => (prev === next ? prev : next))
    }

    const onLeave = () => setVisible(false)

    // Trailing ring via lerp.
    const tick = () => {
      ringX += (mouseX - ringX) * 0.18
      ringY += (mouseY - ringY) * 0.18
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`
      }
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)

    window.addEventListener('mousemove', onMove)
    document.addEventListener('mouseleave', onLeave)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseleave', onLeave)
    }
  }, [enabled, visible])

  if (!enabled) return null

  const isRobot = state === 'robot'
  const isInteract = state === 'interact'
  const ringSize = isRobot ? 88 : isInteract ? 56 : 30

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[100]"
      style={{ opacity: visible ? 1 : 0, transition: 'opacity 300ms ease' }}
    >
      {/* Trailing ring */}
      <div
        ref={ringRef}
        className="fixed left-0 top-0 flex items-center justify-center rounded-full border will-change-transform"
        style={{
          width: ringSize,
          height: ringSize,
          borderColor:
            isRobot || isInteract
              ? 'oklch(0.97 0 0 / 0.9)'
              : 'oklch(0.97 0 0 / 0.35)',
          backgroundColor: isRobot
            ? 'oklch(0.97 0 0 / 0.06)'
            : 'transparent',
          transition:
            'width 260ms cubic-bezier(0.22,1,0.36,1), height 260ms cubic-bezier(0.22,1,0.36,1), border-color 260ms ease, background-color 260ms ease',
        }}
      >
        {(isRobot || isInteract) && (
          <span className="font-mono text-[9px] font-medium uppercase tracking-[0.25em] text-foreground">
            {LABELS[state]}
          </span>
        )}
      </div>
      {/* Center dot */}
      <div
        ref={dotRef}
        className="fixed left-0 top-0 h-1.5 w-1.5 rounded-full bg-foreground will-change-transform"
        style={{
          opacity: isRobot || isInteract ? 0 : 1,
          transition: 'opacity 200ms ease',
        }}
      />
    </div>
  )
}
