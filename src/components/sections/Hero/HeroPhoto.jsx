import React from 'react'
import { Reveal } from '../../layout'
import { site } from '../../../data/site'

/**
 * Portrait card in the left-hand hero column. On hover it cross-fades from the
 * real photo to a stylised cartoon version.
 */
export function HeroPhoto() {
  const base = import.meta.env.BASE_URL
  return (
    <Reveal>
      <div className="group relative h-[260px] w-[220px] flex-shrink-0 overflow-hidden rounded-2xl border border-rule">
        {/* Real photo (fades out on hover) */}
        <img
          src={`${base}assets/images/kavin.png`}
          alt={site.name}
          className="h-full w-full object-cover object-top transition-opacity duration-300 ease-out group-hover:opacity-0"
        />
        {/* Cartoon (fades in on hover) */}
        <img
          src={`${base}assets/images/kavin-cartoon.png`}
          alt={`${site.name} — illustration`}
          className="absolute inset-0 h-full w-full object-cover object-top opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100"
        />
      </div>
    </Reveal>
  )
}
