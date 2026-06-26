import { Reveal } from '../../layout'
import { useRotatingWord } from '../../../hooks/useRotatingWord'

const SECOND_WORDS = ['learning', 'thriving', 'working']

/**
 * Bottom footer row inside the dark contact band: a rotating-word quote plus
 * the signature. Email/LinkedIn live in the nav and the "Where" block.
 */
export function ContactFooter() {
  const second = useRotatingWord(SECOND_WORDS, 1500)

  return (
    <>
      <Reveal delay={2} className="border-t border-white/10 py-[22px] text-center">
        <p className="text-[12px] font-semibold leading-[1.4] tracking-[.2px] text-white/50">
          I believe <span className="font-bold text-orange">growth</span> is not about knowing{' '}
          <span className="text-white">everything</span>. It's about staying{' '}
          <span className="text-white">curious</span> enough to keep{' '}
          <span className="font-bold text-orange">{second}</span>.
        </p>
      </Reveal>
      <Reveal delay={3} className="border-t border-white/10 py-7 text-center">
        <span className="text-[12px] leading-[1.6] text-white/40" style={{ fontFamily: "'Noto Sans Tamil', sans-serif" }}>
          யாதுமாய் அழிந்து, யார் <span className="font-semibold text-orange">நானென</span> <span className="font-semibold text-orange">மீண்டெழு</span> !
        </span>
      </Reveal>
    </>
  )
}
