import React from 'react'
import { cn } from '../../lib/cn'
import { useCursor, useHasFinePointer } from '../../hooks/useCursorPosition'

/**
 * Global custom cursor: a soft, semi-transparent black dot that eases toward
 * the pointer, grows over interactive elements, and dips on click. Renders
 * nothing on touch / coarse-pointer devices so the native behaviour is kept.
 */
export function Cursor() {
  const hasFinePointer = useHasFinePointer()
  const { dotRef, interactive, pressed, visible, onDark } = useCursor()

  if (!hasFinePointer) return null

  // Light dot over dark sections, dark dot over light sections.
  const tone = onDark
    ? interactive
      ? 'bg-white/25'
      : 'bg-white/50'
    : interactive
      ? 'bg-ink/20'
      : 'bg-ink/40'

  return (
    <div
      ref={dotRef}
      aria-hidden="true"
      className={cn(
        'pointer-events-none fixed left-0 top-0 z-[9999] rounded-full',
        'transition-[width,height,background-color,opacity] duration-200 ease-out',
        visible ? 'opacity-100' : 'opacity-0',
        interactive ? 'h-12 w-12' : 'h-4 w-4',
        tone,
        pressed && 'scale-75'
      )}
    />
  )
}
