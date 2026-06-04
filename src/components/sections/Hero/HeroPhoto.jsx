import React from 'react'
import { Reveal } from '../../layout'
import { site } from '../../../data/site'

/**
 * Portrait card in the left-hand hero column.
 */
export function HeroPhoto() {
  return (
    <Reveal>
      <div className="h-[260px] w-[220px] flex-shrink-0 overflow-hidden rounded-2xl border border-rule">
        <img
          src={`${import.meta.env.BASE_URL}assets/images/kavin.png`}
          alt={site.name}
          className="h-full w-full object-cover object-top"
        />
      </div>
    </Reveal>
  )
}
