import React from 'react'
import { Reveal } from '../../layout'

/**
 * A single credential card (certification or education).
 */
export function CredentialCard({ label, icon, name, sub, body, index }) {
  return (
    <Reveal
      delay={index > 0 ? 'd1' : undefined}
      className="rounded-[18px] border border-rule bg-card p-[36px_32px] transition-transform duration-[250ms] hover:translate-y-[-3px]"
    >
      <p className="mb-4 text-[10px] font-semibold uppercase tracking-[2px] text-muted">
        {label}
      </p>
      <div className="mb-[14px] text-[32px]">{icon}</div>
      <h4 className="mb-[6px] font-barlow text-[22px] font-extrabold uppercase leading-[1.15] tracking-[-.3px] text-ink">
        {name}
      </h4>
      <p className="mb-3 text-[12px] tracking-[.3px] text-muted">{sub}</p>
      <p className="text-[13px] leading-[1.65] text-body">{body}</p>
    </Reveal>
  )
}
