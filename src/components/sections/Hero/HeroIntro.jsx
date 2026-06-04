import React from 'react'
import { Reveal } from '../../layout'
import { site, heroCopy } from '../../../data/site'

/** A labelled meta block (e.g. "Based in" / value). */
function MetaItem({ label, children }) {
  return (
    <div className="text-[13px] leading-[1.5] text-body">
      <strong className="mb-[3px] block text-[11px] font-semibold uppercase tracking-[1.5px] text-muted">
        {label}
      </strong>
      {children}
    </div>
  )
}

/**
 * Right-hand column of the hero: intro paragraph, meta row, and CTAs.
 */
export function HeroIntro() {
  return (
    <div>
      <Reveal as="p" delay={1} className="mb-[10px] max-w-[580px] text-justify text-[17px] leading-[1.68] text-body">
        {heroCopy.intro}
        <span className="italic text-orange">{heroCopy.introHighlight}</span>.
      </Reveal>

      <Reveal delay={2} className="my-[28px] mb-9 flex flex-wrap gap-[56px]">
        <MetaItem label="Based in">{site.location}</MetaItem>
        <MetaItem label="Available for">{site.availability}</MetaItem>
      </Reveal>

      <Reveal delay={2} className="flex flex-wrap gap-3">
        <a
          href="#contact"
          className="inline-flex items-center gap-[6px] rounded-full bg-dark px-[26px] py-[13px] text-[14px] font-semibold text-white transition-all duration-200 hover:translate-y-[-2px] hover:bg-[#333] hover:shadow-[0_6px_18px_rgba(0,0,0,.18)]"
        >
          Get in touch ↗
        </a>
        <a
          href="#work"
          className="inline-flex items-center gap-[6px] rounded-full border-[1.5px] border-rule px-[26px] py-[13px] text-[14px] font-semibold text-body transition-all duration-200 hover:border-ink hover:text-ink"
        >
          Selected Works ↓
        </a>
      </Reveal>
    </div>
  )
}
