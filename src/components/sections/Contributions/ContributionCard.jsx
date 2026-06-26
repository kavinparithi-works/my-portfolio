import { memo } from 'react'
import { cn } from '../../../lib/cn'
import { Reveal } from '../../layout'

/**
 * One "Way I Contribute" card.
 *  - `first` variant: dark by default. Flips to white ONLY when a sibling
 *    card is hovered (siblingHovered=true). Stays dark on its own hover.
 *  - `other` variants: white by default. Flip to dark on own hover.
 *
 * The Reveal wrapper className is intentionally stable so re-renders from
 * siblingHovered never reset the scroll-reveal `.in` class.
 * All bg/border/color transitions are on an inner div instead.
 */
export const ContributionCard = memo(function ContributionCard({
  num, title, body, tag, variant, index, siblingHovered,
}) {
  const isFirst = variant === 'first'
  const flipped = isFirst && siblingHovered

  return (
    <Reveal delay={index} className="h-full">
      <div
        className={cn(
          'group flex h-full flex-col rounded-[18px] border p-[36px_30px] transition-[transform,background-color,border-color] duration-[250ms] hover:translate-y-[-4px]',
          isFirst
            ? flipped ? 'border-rule bg-card' : 'border-transparent bg-dark'
            : 'border-rule bg-card hover:border-dark hover:bg-dark'
        )}
      >
        <div className="mb-8 font-barlow text-[52px] font-black leading-none text-orange">
          {num}
        </div>
        <div
          className={cn(
            'mb-4 whitespace-pre-line font-barlow text-[28px] font-extrabold uppercase leading-[1.1] tracking-[-.3px] transition-colors duration-[250ms]',
            isFirst
              ? flipped ? 'text-ink' : 'text-white'
              : 'text-ink group-hover:text-white'
          )}
        >
          {title}
        </div>
        <p
          className={cn(
            'mb-7 flex-1 text-[13.5px] leading-[1.7] transition-colors duration-[250ms]',
            isFirst
              ? flipped ? 'text-body' : 'text-white/[.65]'
              : 'text-body group-hover:text-white/[.65]'
          )}
        >
          {body}
        </p>
        <span
          data-cursor="snap"
          className={cn(
            'inline-flex w-fit items-center rounded-full px-[18px] py-2 text-[12px] font-bold uppercase tracking-[.8px] transition-colors duration-[250ms]',
            isFirst
              ? flipped
                ? 'border-[1.5px] border-rule bg-transparent text-ink'
                : 'bg-white text-ink'
              : 'border-[1.5px] border-rule text-ink group-hover:border-white/30 group-hover:text-white'
          )}
        >
          {tag}
        </span>
      </div>
    </Reveal>
  )
}
)
