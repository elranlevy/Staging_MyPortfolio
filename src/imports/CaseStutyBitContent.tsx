import { type ReactNode } from 'react';
import { motion } from 'motion/react';
import {
  ArrowRight,
  Banknote,
  Timer,
  Swords,
  CreditCard,
  Rocket,
  MessageCircle,
  RefreshCw,
  ScanLine,
  Users,
  MousePointerClick,
} from 'lucide-react';

/* ── Existing images ─────────────────────────────────────────── */
import imgScreenShot20200904At203224 from 'figma:asset/b24a6933276b23eb0257405e8532b066b7ce6c41.png';
import imgBitmap1 from 'figma:asset/c3824c9df36afda5547813207b149b8b1f2c0248.png';
import imgBitmap2 from 'figma:asset/0548238f64a99fe660038d78665a891c1c8a0417.png';
import imgBitmap3 from 'figma:asset/51a18d2e75a4fe5fd22aa2d222679fcd88d11c6a.png';
import imgBitmap4 from 'figma:asset/80fd31eb4604684192b81bec32bafaa092c0e83e.png';
import imgImage174 from 'figma:asset/9aa95d8eb0fd0ce4be192c55fe7cabe0274d4291.png';
import imgImage173 from 'figma:asset/7be02b18252a40ad2435780687ae53709599c1e2.png';
import imgImage172 from 'figma:asset/9bfc7cf59ce8da8ea8af1a307dd1b205b59fe454.png';
import imgImage192 from 'figma:asset/8392e06806bcf1377ff0e200b52a3c374ccd9fe0.png';

import seamlessMotion1 from '@/assets/seamless-motion-1.mp4';
import seamlessMotion2 from '@/assets/seamless-motion-2.mp4';
import seamlessMotion3 from '@/assets/seamless-motion-3.mp4';
import seamlessMotion4 from '@/assets/seamless-motion-4.mp4';

import { LazyVideo } from '@/app/components/case-study/CaseStudyPrimitives';

/* ── Scroll-triggered reveal ─────────────────────────────────── */
function Reveal({ children, className = '', delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div className={className} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.7, delay, ease: 'easeOut' }}>
      {children}
    </motion.div>
  );
}

/* ── Vertical divider ────────────────────────────────────────── */
function VerticalDivider() {
  return (
    <div className="flex justify-center py-8 md:py-10">
      <div className="w-px h-12 md:h-16" style={{ backgroundColor: 'var(--text-primary)' }} />
    </div>
  );
}

/* ================================================================
   BIT — "The Visual-Led Mobile"
   ──────────────────────────────────────────────────────────────
   Unique personality:
   · Bold single-statement problem with inline challenge pills
   · Key Insight on dark gradient (navy→slate, NOT flat gray)
   · Approach as horizontal single row (NOT 2×2 grid)
   · Seamless Motion section elevated as major visual moment
   · Results as large decorative numbers on white (NOT dark band)
   ================================================================ */
export default function CaseStutyBitContent() {
  return (
    <div className="bg-white">
      {/* ═══════════════════════════════════════════════════════
          HERO
          ═══════════════════════════════════════════════════════ */}
      <section className="pt-24 md:pt-32 lg:pt-40 pb-6 md:pb-8 px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] mb-6" style={{ color: 'var(--text-tertiary)' }}>Bit</p>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-[1.12] mb-6" style={{ color: 'var(--text-primary)' }}>
              Designing consumer fintech at national scale
            </h1>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="text-base md:text-lg font-light italic max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-serif)', color: 'var(--text-secondary)' }}>
              When speed and trust are non-negotiable
            </p>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-10 pt-8 text-left" style={{ borderTop: '1px solid var(--border-subtle)' }}>
              {[
                { label: 'Role', value: 'Senior Product Designer' },
                { label: 'Team', value: 'PM · Engineering · Growth · Marketing' },
                { label: 'Scope', value: 'Core payment flows · Activation · Engagement' },
              ].map((m) => (
                <div key={m.label}>
                  <p className="text-[11px] uppercase tracking-[0.15em] mb-2" style={{ color: 'var(--text-tertiary)' }}>{m.label}</p>
                  <p className="text-sm font-light" style={{ color: 'var(--text-primary)' }}>{m.value}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <Reveal>
        <div className="max-w-6xl mx-auto px-6 md:px-12 pb-4">
          <img src={imgScreenShot20200904At203224} alt="Bit app screens" className="w-full h-auto rounded-xl" loading="eager" decoding="async" />
        </div>
      </Reveal>

      <VerticalDivider />

      {/* ═══════════════════════════════════════════════════════
          PROBLEM — Bold single statement + challenge pills
          (NOT icon-row + heading + bullet list — unique to Bit)
          ═══════════════════════════════════════════════════════ */}
      <section className="pb-14 md:pb-18 px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.3em] mb-6" style={{ color: 'var(--text-tertiary)' }}>The Problem</p>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="text-3xl md:text-4xl lg:text-[42px] font-semibold leading-tight mb-8" style={{ color: 'var(--text-primary)' }}>
              Bit operates at massive consumer scale.
              <br />
              <span className="font-light" style={{ color: 'var(--text-secondary)' }}>
                Small UX issues directly impacted usage and retention.
              </span>
            </h2>
          </Reveal>

          {/* Inline challenge pills */}
          <Reveal delay={0.15}>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {[
                { icon: <Banknote className="w-4 h-4" strokeWidth={1.5} />, text: 'High transaction sensitivity' },
                { icon: <Timer className="w-4 h-4" strokeWidth={1.5} />, text: 'Low tolerance for friction' },
                { icon: <Swords className="w-4 h-4" strokeWidth={1.5} />, text: 'Strong competition' },
              ].map((item, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs md:text-sm font-light"
                  style={{ border: '1px solid var(--border-subtle)', color: 'var(--text-primary)' }}
                >
                  <span style={{ color: 'var(--text-tertiary)' }}>{item.icon}</span>
                  {item.text}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <VerticalDivider />

      {/* ═══════════════════════════════════════════════════════
          OWNERSHIP
          ═══════════════════════════════════════════════════════ */}
      <section className="pb-14 md:pb-18 px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="flex items-center justify-center gap-8 md:gap-12 mb-8">
              {[
                { icon: <CreditCard className="w-8 h-8 md:w-10 md:h-10" strokeWidth={1.3} />, label: 'Payments' },
                { icon: <Rocket className="w-8 h-8 md:w-10 md:h-10" strokeWidth={1.3} />, label: 'Activation' },
                { icon: <MessageCircle className="w-8 h-8 md:w-10 md:h-10" strokeWidth={1.3} />, label: 'Clarity' },
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center gap-1.5">
                  <div style={{ color: 'var(--text-primary)' }}>{item.icon}</div>
                  <p className="text-[10px] uppercase tracking-wider" style={{ color: 'var(--text-tertiary)' }}>{item.label}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal>
            <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10" style={{ color: 'var(--text-primary)' }}>My Ownership</h2>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex flex-col gap-4 max-w-xl mx-auto">
              {[
                'Designed core payment and transfer flows',
                'Optimized activation and first-use experience',
                'Improved clarity around transaction states',
                'Partnered with Growth on engagement experiments',
                'Worked closely with Engineering on performance and edge cases',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full mt-[7px] flex-shrink-0" style={{ backgroundColor: 'var(--text-tertiary)' }} />
                  <p className="text-sm md:text-base font-light" style={{ color: 'var(--text-primary)' }}>{item}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <VerticalDivider />

      {/* ═══════════════════════════════════════════════════════
          KEY INSIGHT — Dark gradient band
          (navy→slate, NOT flat gray — unique to Bit)
          ═══════════════════════════════════════════════════════ */}
      <section
        className="py-24 md:py-36 px-6 md:px-12"
        style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)' }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.3em] mb-10" style={{ color: 'rgba(255,255,255,0.35)' }}>Key Insight</p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-2xl md:text-4xl lg:text-5xl font-semibold leading-tight text-white mb-3">
              In payments, speed builds trust.
            </p>
            <p className="text-2xl md:text-4xl lg:text-5xl font-semibold leading-tight italic" style={{ fontFamily: 'var(--font-serif)', color: 'rgba(255,255,255,0.8)' }}>
              Uncertainty destroys it.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-10 text-sm md:text-base font-light max-w-lg mx-auto" style={{ color: 'rgba(255,255,255,0.45)' }}>
              Delays, unclear states, or uncertainty reduce repeat usage.
            </p>
          </Reveal>
        </div>
      </section>

      <VerticalDivider />

      {/* ═══════════════════════════════════════════════════════
          APPROACH — Horizontal single row
          (NOT 2×2 grid — unique to Bit)
          ═══════════════════════════════════════════════════════ */}
      <section className="pb-14 md:pb-18 px-6 md:px-12 lg:px-16">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-semibold text-center mb-12" style={{ color: 'var(--text-primary)' }}>The Approach</h2>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { num: '01', text: 'Reduce cognitive load in transfer flows', icon: <RefreshCw className="w-6 h-6" strokeWidth={1.4} /> },
              { num: '02', text: 'Clarify transaction states', icon: <ScanLine className="w-6 h-6" strokeWidth={1.4} /> },
              { num: '03', text: 'Improve first-use onboarding', icon: <Users className="w-6 h-6" strokeWidth={1.4} /> },
              { num: '04', text: 'Optimize micro-interactions', icon: <MousePointerClick className="w-6 h-6" strokeWidth={1.4} /> },
            ].map((step, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="p-5 md:p-6 rounded-xl text-center h-full flex flex-col items-center" style={{ backgroundColor: 'var(--surface-secondary)' }}>
                  <p className="text-xl md:text-2xl font-semibold mb-3" style={{ color: 'var(--text-tertiary)' }}>{step.num}</p>
                  <div className="mb-3" style={{ color: 'var(--text-tertiary)' }}>{step.icon}</div>
                  <p className="text-xs md:text-sm font-light leading-relaxed" style={{ color: 'var(--text-primary)' }}>{step.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <VerticalDivider />

      {/* ═══════════════════════════════════════════════════════
          DESIGN VISUALS — App Screens
          ═══════════════════════════════════════════════════════ */}
      <section className="pb-8 md:pb-12 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <img src={imgImage172} alt="Bit transfer flow" className="w-full h-auto rounded-xl mb-5" loading="lazy" decoding="async" />
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <Reveal delay={0.08}><img src={imgImage173} alt="Bit flow overview" className="w-full h-auto rounded-xl" loading="lazy" decoding="async" /></Reveal>
            <Reveal delay={0.16}><img src={imgImage174} alt="Bit detailed screens" className="w-full h-auto rounded-xl" loading="lazy" decoding="async" /></Reveal>
          </div>
          <Reveal className="mt-5">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {[imgBitmap1, imgBitmap2, imgBitmap3, imgBitmap4].map((src, i) => (
                <img key={i} src={src} alt={`Bit app screen ${i + 1}`} className="w-full h-auto rounded-xl" loading="lazy" decoding="async" />
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <VerticalDivider />

      {/* ═══════════════════════════════════════════════════════
          SEAMLESS MOTION — Elevated visual moment (unique to Bit)
          ═══════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 px-6 md:px-12" style={{ backgroundColor: 'var(--surface-secondary)' }}>
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.3em] mb-4" style={{ color: 'var(--text-tertiary)' }}>Micro-Interactions</p>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>Seamless Motion</h2>
            <p className="text-sm md:text-base font-light mb-12 max-w-xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              Subtle animated transitions guide users through the payment flow, creating a smooth, intuitive experience from start to finish.
            </p>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
            {[seamlessMotion1, seamlessMotion2, seamlessMotion3, seamlessMotion4].map((src, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="aspect-[223/493] overflow-hidden rounded-2xl shadow-lg">
                  <LazyVideo src={src} className="w-full h-full object-cover" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <VerticalDivider />

      {/* ═══════════════════════════════════════════════════════
          RESULTS — Large decorative numbers on white
          (NOT a dark band — unique to Bit)
          ═══════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.3em] mb-4" style={{ color: 'var(--text-tertiary)' }}>Results</p>
            <h2 className="text-2xl md:text-3xl font-semibold mb-14" style={{ color: 'var(--text-primary)' }}>Impact at consumer scale</h2>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12">
            {[
              { symbol: '\u2191', desc: 'Improved activation and repeat usage' },
              { symbol: '\u2193', desc: 'Reduced confusion around transaction status' },
              { symbol: '\u2713', desc: 'Increased clarity in high-frequency payment actions' },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div>
                  <p className="text-5xl md:text-6xl lg:text-7xl font-light mb-3" style={{ color: 'var(--text-primary)', opacity: 0.25 }}>
                    {item.symbol}
                  </p>
                  <p className="text-sm font-light" style={{ color: 'var(--text-secondary)' }}>{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          CLOSING IMAGE
          ═══════════════════════════════════════════════════════ */}
      <div className="relative w-full overflow-hidden">
        <img src={imgImage192} alt="Bit — the best financial UX feels invisible" loading="lazy" decoding="async" className="w-full h-auto object-cover" />
        <div className="absolute inset-0 flex items-center">
          <div className="ml-auto mr-4 md:mr-12 lg:mr-20 max-w-[40%] md:max-w-sm lg:max-w-md">
            <p className="text-[10px] leading-3 md:text-base md:leading-7 mb-1 md:mb-2 text-white font-light tracking-wide">
              Great product design isn&rsquo;t about adding features &mdash; it&rsquo;s about removing everything users don&rsquo;t need:
            </p>
            <p className="text-xs leading-4 md:text-3xl md:leading-snug lg:text-[48px] lg:leading-snug text-white font-light tracking-wide">
              &ldquo;The best financial UX feels invisible&rdquo;
            </p>
          </div>
        </div>
      </div>

      <VerticalDivider />

      {/* ═══════════════════════════════════════════════════════
          NAVIGATION
          ═══════════════════════════════════════════════════════ */}
      <section className="pb-12 md:pb-16 px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="text-left">
            <p className="text-[11px] uppercase tracking-[0.15em] mb-1" style={{ color: 'var(--text-tertiary)' }}>Previous Case Study</p>
            <p className="text-base md:text-lg font-medium flex items-center gap-2" style={{ color: 'var(--text-primary)' }}>
              <ArrowRight className="w-4 h-4 rotate-180" /> monday.com
            </p>
          </div>
          <div className="text-right">
            <p className="text-[11px] uppercase tracking-[0.15em] mb-1" style={{ color: 'var(--text-tertiary)' }}>Next Case Study</p>
            <p className="text-base md:text-lg font-medium flex items-center gap-2" style={{ color: 'var(--text-primary)' }}>
              Bluevine <ArrowRight className="w-4 h-4" />
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
