import { useEffect, useRef, useState } from 'react'

/**
 * Detects whether the device is a fine-pointer (mouse) device. The custom
 * cursor only makes sense there, never on touch screens.
 */
export function useHasFinePointer() {
  const [fine, setFine] = useState(false)

  useEffect(() => {
    const query = window.matchMedia('(pointer: fine)')
    const update = () => setFine(query.matches)
    update()
    query.addEventListener('change', update)
    return () => query.removeEventListener('change', update)
  }, [])

  return fine
}

/**
 * Tracks the pointer with a lightweight spring so the dot eases toward the
 * cursor instead of snapping. Also reports an `interactive` flag while the
 * pointer is over a link/button so the cursor can grow, and a `pressed` flag
 * on mouse-down.
 *
 * Returns a ref to attach to the cursor element plus the two state flags.
 * Position is written directly to the node via rAF to avoid re-renders.
 */
export function useCursor({ ease = 0.18 } = {}) {
  const dotRef = useRef(null)
  const [interactive, setInteractive] = useState(false)
  const [pressed, setPressed] = useState(false)
  const [visible, setVisible] = useState(false)
  const [onDark, setOnDark] = useState(false)

  useEffect(() => {
    const target = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
    const current = { ...target }
    let frame

    const onMove = (e) => {
      target.x = e.clientX
      target.y = e.clientY
      if (!visible) setVisible(true)

      const el = e.target
      const isInteractive =
        el.closest('a, button, [role="button"], input, textarea, select, label') !== null
      setInteractive(isInteractive)
      setOnDark(el.closest('[data-cursor="dark"]') !== null)
    }

    const onDown = () => setPressed(true)
    const onUp = () => setPressed(false)
    const onLeave = () => setVisible(false)
    const onEnter = () => setVisible(true)

    const render = () => {
      current.x += (target.x - current.x) * ease
      current.y += (target.y - current.y) * ease
      const node = dotRef.current
      if (node) {
        node.style.transform = `translate3d(${current.x}px, ${current.y}px, 0) translate(-50%, -50%)`
      }
      frame = requestAnimationFrame(render)
    }

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mousedown', onDown)
    window.addEventListener('mouseup', onUp)
    document.addEventListener('mouseleave', onLeave)
    document.addEventListener('mouseenter', onEnter)
    frame = requestAnimationFrame(render)

    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mousedown', onDown)
      window.removeEventListener('mouseup', onUp)
      document.removeEventListener('mouseleave', onLeave)
      document.removeEventListener('mouseenter', onEnter)
      cancelAnimationFrame(frame)
    }
  }, [ease, visible])

  return { dotRef, interactive, pressed, visible, onDark }
}
