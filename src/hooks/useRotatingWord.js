import { useEffect, useState } from 'react'

/**
 * Cycles through a list of words on a fixed interval, returning the current one.
 * Used for the animated accent word in the hero headline.
 *
 * @param {string[]} words    Words to rotate through, in order.
 * @param {number}   interval Milliseconds between swaps (default 1000).
 */
export function useRotatingWord(words, interval = 2000) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (!words || words.length <= 1) return undefined

    const id = setInterval(() => {
      setIndex((current) => (current + 1) % words.length)
    }, interval)

    return () => clearInterval(id)
  }, [words, interval])

  return words[index]
}
