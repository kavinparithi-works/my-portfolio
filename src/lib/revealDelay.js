/**
 * Maps an index to a scroll-reveal stagger class (d1, d2, d3...).
 * Index 0 has no delay; higher indices are clamped to the available steps.
 */
const MAX_DELAY_STEP = 3

export function revealDelay(index) {
  if (!index || index < 1) return ''
  return `d${Math.min(index, MAX_DELAY_STEP)}`
}
