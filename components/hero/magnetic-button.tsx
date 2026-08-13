'use client'

import { useRef, type ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface MagneticButtonProps {
  children: ReactNode
  href?: string
  variant?: 'primary' | 'secondary'
  strength?: number
  className?: string
  ariaLabel?: string
}

export function MagneticButton({
  children,
  href = '#',
  variant = 'primary',
  strength = 0.35,
  className,
  ariaLabel,
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null)

  const handleMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - (rect.left + rect.width / 2)
    const y = e.clientY - (rect.top + rect.height / 2)
    el.style.transform = `translate(${x * strength}px, ${y * strength}px)`
  }

  const handleLeave = () => {
    const el = ref.current
    if (el) el.style.transform = 'translate(0, 0)'
  }

  return (
    <a
      ref={ref}
      href={href}
      aria-label={ariaLabel}
      data-cursor="interact"
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={cn(
        'group relative inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 font-mono text-xs font-medium uppercase tracking-[0.18em] transition-[transform,background-color,color,border-color] duration-300 ease-out will-change-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background',
        variant === 'primary'
          ? 'bg-foreground text-background hover:scale-[1.03]'
          : 'border border-border text-foreground hover:border-foreground/70',
        className,
      )}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      {variant === 'secondary' && (
        <span
          aria-hidden="true"
          className="absolute inset-x-6 bottom-2 h-px origin-left scale-x-0 bg-foreground/60 transition-transform duration-300 ease-out group-hover:scale-x-100"
        />
      )}
    </a>
  )
}
