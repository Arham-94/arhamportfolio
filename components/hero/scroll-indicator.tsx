'use client'

export function ScrollIndicator({ visible }: { visible: boolean }) {
  return (
    <div
      className="flex items-center gap-4 transition-all duration-700 ease-out"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(12px)',
      }}
    >
      <span className="relative block h-10 w-px overflow-hidden bg-border">
        <span
          className="absolute inset-x-0 top-0 block h-full w-px bg-foreground"
          style={{ animation: 'scroll-line-pulse 2.4s ease-in-out infinite' }}
        />
      </span>
    </div>
  )
}
