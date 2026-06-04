import React from 'react'
import { Reveal } from '../../layout'

/**
 * A single "Selected Works" row: details on the left, icon + status on the right.
 */
export function ProjectItem({ sector, title, desc, tags, icon, status, index }) {
  return (
    <Reveal className="grid grid-cols-[1fr_96px] items-start gap-8 border-b border-rule py-10 last:border-b-0 max-[600px]:grid-cols-1 max-[600px]:gap-5" delay={index}>
      <div>
        <p className="mb-[10px] text-[11px] font-medium uppercase tracking-[2px] text-muted">
          {sector}
        </p>
        <h3 className="mb-4 font-barlow text-worktitle font-extrabold uppercase text-ink">
          {title}
        </h3>
        <p className="mb-5 max-w-[640px] text-[14px] leading-[1.72] text-body">{desc}</p>
        <div className="flex flex-wrap gap-[7px]">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-rule px-[13px] py-1 text-[11.5px] font-medium text-body"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-end gap-2 pt-1">
        <div className="flex h-[52px] w-[52px] items-center justify-center rounded-xl border border-rule bg-white text-[24px]">
          {icon}
        </div>
        <span className="text-[10px] font-semibold uppercase tracking-[1.2px] text-muted">
          {status}
        </span>
      </div>
    </Reveal>
  )
}
