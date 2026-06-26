/**
 * Conditionally join class names, dropping any falsy values.
 * Keeps JSX className expressions readable without a heavy dependency.
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(' ')
}
