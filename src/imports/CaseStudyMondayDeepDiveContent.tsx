import { type ReactNode } from 'react';
import { motion } from 'motion/react';
import {
  ArrowRight,
  ArrowDown,
  BarChart3,
  Brain,
  FlaskConical,
  Target,
  Eye,
  Lightbulb,
  TrendingUp,
  CheckCircle2,
  Quote,
  Users,
  Zap,
  ShieldCheck,
  Layers,
  SlidersHorizontal,
  Lock,
  Repeat,
  AlertTriangle,
  Sparkles,
} from 'lucide-react';

import svgPaths from './svg-6er71w85ab';

/* ── Images from the Monday case study ────────────────────────── */
import imgBoardWithCactusAndPhone from 'figma:asset/1283a766b980685a64313cdeb5ba880f6d1b751a.png';
import imgImage195 from 'figma:asset/135037eee94c070be011542ce34df21d09e0887c.png';
import imgImage196 from 'figma:asset/d2bbf953c2e0dff1f47983ab05675e22222adadc.png';
import imgImage190 from 'figma:asset/5f1af89856aef65d1b868e8219fddf2446fec50b.png';
import imgImage189 from 'figma:asset/e2ace24a2f436bfdff66fee0efc67986b23bea69.png';
import imgAbChart from '@/assets/monday-ab-chart.png';
import imgProCongratsModal from '@/assets/monday-pro-congrats-modal.png';
import imgDiscoveryValue1 from '@/assets/monday-discovery-value-1.png';
import imgDiscoveryValue2 from '@/assets/monday-discovery-value-2.png';
import imgPromotedMatch1 from '@/assets/monday-promoted-match-1.png';
import imgPromotedMatch2 from '@/assets/monday-promoted-match-2.png';
import whyStandardVideo from '@/assets/why-standard-video.mp4';
import whyProVideo from '@/assets/why-pro-video.mp4';

/* ── Scroll-triggered reveal ─────────────────────────────────── */
function Reveal({ children, className = '', delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div className={className} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.65, delay, ease: 'easeOut' }}>
      {children}
    </motion.div>
  );
}

function RevealScale({ children, className = '', delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div className={className} initial={{ opacity: 0, scale: 0.92 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.7, delay, ease: 'easeOut' }}>
      {children}
    </motion.div>
  );
}

function JourneyConnector() {
  return (
    <div className="flex justify-center py-6 md:py-8">
      <div className="flex flex-col items-center gap-1">
        <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'var(--text-primary)', opacity: 0.15 }} />
        <div className="w-px h-8 md:h-12" style={{ backgroundColor: 'var(--text-primary)', opacity: 0.1 }} />
        <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'var(--text-primary)', opacity: 0.15 }} />
      </div>
    </div>
  );
}

function LazyVideo({ src, className = '' }: { src: string; className?: string }) {
  return <video src={src} autoPlay loop muted playsInline preload="metadata" className={className} />;
}

function MondayLogo() {
  return (
    <svg className="w-full max-w-[180px] h-auto mx-auto" fill="none" viewBox="0 0 335.374 69.7297">
      <path d={svgPaths.p3fb55a00} fill="#FB275D" />
      <path d={svgPaths.p2c590700} fill="#FFCC00" />
      <path d={svgPaths.pfa68400} fill="#00CA72" />
      <path clipRule="evenodd" d={svgPaths.p26892b00} fill="black" fillRule="evenodd" />
    </svg>
  );
}

/* ================================================================
   MONDAY.COM — DEEP DIVE CASE STUDY
   ──────────────────────────────────────────────────────────────
   A portfolio-grade narrative deep dive for product leaders.
   Tone: analytical, reflective, strategic.
   ================================================================ */
export default function CaseStudyMondayDeepDiveContent({
  onBackToMonday,
}: {
  onBackToMonday?: () => void;
}) {
  return (
    <div style={{ backgroundColor: 'var(--surface-primary)' }}>

      {/* ═══════════════════════════════════════════════════════
          1) HERO — Title + Subtitle
          ═══════════════════════════════════════════════════════ */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden" style={{ backgroundColor: 'var(--color-gray-900)' }}>
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <div className="absolute bottom-0 left-0 right-0 h-1/3" style={{ background: 'linear-gradient(to top, var(--color-gray-900), transparent)' }} />

        <div className="relative w-full px-6 md:px-12 lg:px-16 py-24">
          <div className="max-w-6xl mx-auto">
            <Reveal>
              <p className="text-[10px] uppercase tracking-[0.5em] text-white/30 mb-8">Deep Dive — monday.com</p>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.05] mb-6 max-w-4xl">
                When Choosing Feels<br />Harder Than Leaving
              </h1>
            </Reveal>

            <Reveal delay={0.14}>
              <p className="text-base md:text-lg font-light text-white/50 max-w-xl mb-16" style={{ fontFamily: 'var(--font-serif)' }}>
                How we turned decision anxiety into decision confidence — and lifted Pro conversions by 35%.
              </p>
            </Reveal>

            <Reveal delay={0.22}>
              <div className="flex flex-wrap gap-0 rounded-2xl overflow-hidden" style={{ border: '1px solid rgba(255,255,255,0.08)' }}>
                {[
                  { metric: '4.0% → 5.4%', label: 'Conversion rate', accent: 'rgba(34,197,94,0.8)' },
                  { metric: '+35%', label: 'Pro upgrade uplift', accent: 'rgba(59,130,246,0.8)' },
                  { metric: '+7%', label: 'Reg-to-plan conversion', accent: 'rgba(168,85,247,0.8)' },
                  { metric: '↓', label: 'Downgrade regret', accent: 'rgba(245,158,11,0.8)' },
                ].map((item, i) => (
                  <div key={i} className="flex-1 min-w-[120px] py-6 px-5 text-center" style={{ borderRight: i < 3 ? '1px solid rgba(255,255,255,0.06)' : undefined }}>
                    <p className="text-2xl md:text-3xl font-bold text-white mb-1">{item.metric}</p>
                    <p className="text-[10px] uppercase tracking-wider font-medium" style={{ color: item.accent }}>{item.label}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.28}>
              <div className="flex flex-wrap gap-3 mt-10">
                {['Senior Product Designer', 'Growth Squad', 'PM · Engineering · Data', 'Registration', 'Upgrade', 'Plan Selection', 'A/B Testing'].map((s) => (
                  <span key={s} className="text-[10px] font-medium px-3 py-1.5 rounded-full" style={{ border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.4)' }}>
                    {s}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          2) THE BREAKING MOMENT
          ═══════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 px-6 md:px-12 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="flex items-center gap-4 mb-12">
              <div className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-bold" style={{ background: 'linear-gradient(135deg, rgba(239,68,68,0.9), rgba(220,38,38,0.7))' }}>01</div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.3em]" style={{ color: 'var(--text-tertiary)' }}>Section One</p>
                <p className="text-lg md:text-xl font-semibold" style={{ color: 'var(--text-primary)' }}>The Breaking Moment</p>
              </div>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-10 md:gap-16">
            <div>
              <Reveal delay={0.06}>
                <p className="text-sm md:text-base font-light leading-relaxed mb-5" style={{ color: 'var(--text-secondary)' }}>
                  Millions of users completed the monday.com trial. They created boards, invited teammates, set up automations. Engagement was strong. Usage was high.
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="text-sm md:text-base font-light leading-relaxed mb-5" style={{ color: 'var(--text-secondary)' }}>
                  Then the trial ended. And something unexpected happened.
                </p>
              </Reveal>
              <Reveal delay={0.14}>
                <p className="text-base md:text-lg font-medium leading-relaxed mb-8" style={{ color: 'var(--text-primary)' }}>
                  Conversion dropped sharply at plan selection — not at the paywall, not at checkout. At the moment of choosing which plan to commit to.
                </p>
              </Reveal>

              <Reveal delay={0.18}>
                <div className="flex flex-col gap-3 mb-6">
                  {[
                    'Sharp drop-off at plan selection screen',
                    'Repeated hesitation between Standard and Pro',
                    'Users leaving instead of choosing the "wrong" plan',
                    'High engagement during trial, low confidence at upgrade',
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <AlertTriangle className="w-4 h-4 flex-shrink-0 mt-0.5" strokeWidth={1.3} style={{ color: 'rgba(239,68,68,0.6)' }} />
                      <p className="text-sm font-light" style={{ color: 'var(--text-primary)' }}>{item}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.12}>
              <div className="rounded-2xl overflow-hidden" style={{ border: '1px solid var(--border-subtle)' }}>
                <img src={imgBoardWithCactusAndPhone} alt="monday.com board" className="w-full h-auto" loading="lazy" decoding="async" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <JourneyConnector />

      {/* ═══════════════════════════════════════════════════════
          3) THE REAL FRICTION
          ═══════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 px-6 md:px-12 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="flex items-center gap-4 mb-12">
              <div className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-bold" style={{ background: 'linear-gradient(135deg, rgba(245,158,11,0.9), rgba(217,119,6,0.7))' }}>02</div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.3em]" style={{ color: 'var(--text-tertiary)' }}>Section Two</p>
                <p className="text-lg md:text-xl font-semibold" style={{ color: 'var(--text-primary)' }}>The Real Friction</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <div className="max-w-3xl">
              <p className="text-sm md:text-base font-light leading-relaxed mb-5" style={{ color: 'var(--text-secondary)' }}>
                The pricing table was clear. The plans were defined. Features were listed. Yet users hesitated. And then left.
              </p>
              <p className="text-sm md:text-base font-light leading-relaxed mb-8" style={{ color: 'var(--text-secondary)' }}>
                The first assumption was pricing sensitivity. But the data told a different story. Users who abandoned were not comparing prices — they were comparing plans. Repeatedly. Without deciding.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-2xl p-6 md:p-10 mb-8" style={{ backgroundColor: 'var(--surface-secondary)' }}>
              <p className="text-[10px] uppercase tracking-[0.2em] mb-6 font-semibold" style={{ color: 'var(--text-tertiary)' }}>Users weren&rsquo;t asking</p>
              <p className="text-lg md:text-xl font-light italic mb-8" style={{ fontFamily: 'var(--font-serif)', color: 'var(--text-secondary)' }}>
                "Is this worth the money?"
              </p>
              <p className="text-[10px] uppercase tracking-[0.2em] mb-5 font-semibold" style={{ color: 'var(--text-tertiary)' }}>They were asking</p>
              <div className="flex flex-col gap-4">
                {[
                  'Which plan fits how we actually work?',
                  'Am I locking us into the wrong choice?',
                  'What if we outgrow this next month?',
                ].map((q, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Quote className="w-4 h-4 flex-shrink-0 mt-0.5" strokeWidth={1.3} style={{ color: 'var(--text-tertiary)' }} />
                    <p className="text-base md:text-lg font-light italic" style={{ fontFamily: 'var(--font-serif)', color: 'var(--text-primary)' }}>{q}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.16}>
            <div className="pl-8 md:pl-12 max-w-3xl" style={{ borderLeft: '3px solid var(--text-primary)' }}>
              <p className="text-lg md:text-xl font-normal italic leading-snug" style={{ fontFamily: 'var(--font-serif)', color: 'var(--text-primary)' }}>
                This wasn't pricing sensitivity.
              </p>
              <p className="mt-2 text-lg md:text-xl font-normal italic leading-snug" style={{ fontFamily: 'var(--font-serif)', color: 'var(--text-primary)' }}>
                It was decision anxiety.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <JourneyConnector />

      {/* ═══════════════════════════════════════════════════════
          4) CORE INSIGHT
          ═══════════════════════════════════════════════════════ */}
      <section className="relative py-20 md:py-28 px-6 md:px-12 lg:px-16 text-white overflow-hidden" style={{ backgroundColor: 'var(--color-gray-900)' }}>
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)', backgroundSize: '32px 32px' }} />

        <div className="relative max-w-4xl mx-auto">
          <Reveal>
            <div className="flex items-center gap-4 mb-12 justify-center">
              <div className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-bold" style={{ background: 'linear-gradient(135deg, rgba(168,85,247,0.9), rgba(126,34,206,0.7))' }}>03</div>
              <p className="text-lg md:text-xl font-semibold text-white">Core Insight</p>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="text-center mb-10">
              <p className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white leading-tight mb-4">
                Abandonment wasn't rejection.
              </p>
              <p className="text-2xl md:text-3xl lg:text-4xl font-semibold italic text-white leading-tight" style={{ fontFamily: 'var(--font-serif)' }}>
                It was avoidance.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.14}>
            <div className="max-w-2xl mx-auto rounded-xl p-6 md:p-8" style={{ backgroundColor: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <p className="text-sm md:text-base font-light leading-relaxed text-white/60">
                When the perceived cost of a wrong decision felt higher than the value of continuing, users left. They didn't reject the product. They rejected the risk of choosing incorrectly. The upgrade moment had become a high-stakes decision with no safety net.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="flex justify-center mt-10">
              <div className="flex items-center gap-4 md:gap-8">
                {[
                  { icon: <Lock className="w-5 h-5" strokeWidth={1.3} />, label: 'Fear of lock-in', color: 'rgba(239,68,68,0.7)' },
                  { icon: <SlidersHorizontal className="w-5 h-5" strokeWidth={1.3} />, label: 'Too many options', color: 'rgba(245,158,11,0.7)' },
                  { icon: <Eye className="w-5 h-5" strokeWidth={1.3} />, label: 'No personal signal', color: 'rgba(168,85,247,0.7)' },
                ].map((item, i) => (
                  <div key={i} className="flex flex-col items-center gap-2">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: item.color + '20' }}>
                      <div style={{ color: item.color }}>{item.icon}</div>
                    </div>
                    <p className="text-[9px] md:text-xs font-medium text-center" style={{ color: item.color }}>{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <JourneyConnector />

      {/* ═══════════════════════════════════════════════════════
          5) THREE HYPOTHESES
          ═══════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 px-6 md:px-12 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="flex items-center gap-4 mb-12">
              <div className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-bold" style={{ background: 'linear-gradient(135deg, rgba(59,130,246,0.9), rgba(37,99,235,0.7))' }}>04</div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.3em]" style={{ color: 'var(--text-tertiary)' }}>Section Four</p>
                <p className="text-lg md:text-xl font-semibold" style={{ color: 'var(--text-primary)' }}>Three Hypotheses</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <p className="text-sm md:text-base font-light leading-relaxed max-w-3xl mb-12" style={{ color: 'var(--text-secondary)' }}>
              We didn't start with solutions. We started with three testable beliefs about why users were leaving — each pointing to a different lever of confidence.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                icon: <Brain className="w-6 h-6" strokeWidth={1.2} />,
                id: 'H1',
                title: 'Personalized recommendation',
                hypothesis: 'If users see a plan recommendation based on their own activity, they feel more confident selecting a plan.',
                rationale: 'Anchors decision in personal data. Reduces cognitive load. Shifts product from seller to advisor.',
                risk: 'If the recommendation feels generic, it backfires — eroding trust instead of building it.',
                color: 'rgba(59,130,246,0.7)',
              },
              {
                icon: <BarChart3 className="w-6 h-6" strokeWidth={1.2} />,
                id: 'H2',
                title: 'Usage-mapped comparison',
                hypothesis: 'If users can visually compare how their usage maps to each plan, they better understand value differences.',
                rationale: 'Replaces abstract feature lists with a concrete mirror of their own behavior.',
                risk: 'Over-complexity could add friction instead of removing it.',
                color: 'rgba(168,85,247,0.7)',
              },
              {
                icon: <Target className="w-6 h-6" strokeWidth={1.2} />,
                id: 'H3',
                title: 'Outcome framing',
                hypothesis: 'If recommended plans highlight outcomes — not just features — users perceive higher value and convert faster.',
                rationale: 'Features describe capability. Outcomes describe relevance. Users buy relevance.',
                risk: 'Outcome language without evidence can feel like marketing. It needed grounding.',
                color: 'rgba(34,197,94,0.7)',
              },
            ].map((h, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <div className="rounded-2xl p-6 h-full flex flex-col" style={{ border: `2px solid ${h.color}20`, backgroundColor: `${h.color}04` }}>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: h.color + '15' }}>
                      <div style={{ color: h.color }}>{h.icon}</div>
                    </div>
                    <span className="text-xs font-bold" style={{ color: h.color }}>{h.id}</span>
                  </div>
                  <p className="text-base font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>{h.title}</p>
                  <p className="text-sm font-light leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>{h.hypothesis}</p>
                  <div className="mt-auto pt-4" style={{ borderTop: `1px solid ${h.color}15` }}>
                    <p className="text-[10px] uppercase tracking-[0.15em] mb-2 font-semibold" style={{ color: h.color }}>Rationale</p>
                    <p className="text-xs font-light leading-relaxed mb-3" style={{ color: 'var(--text-secondary)' }}>{h.rationale}</p>
                    <p className="text-[10px] uppercase tracking-[0.15em] mb-2 font-semibold" style={{ color: 'rgba(239,68,68,0.6)' }}>Risk</p>
                    <p className="text-xs font-light leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{h.risk}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <JourneyConnector />

      {/* ═══════════════════════════════════════════════════════
          6) THE SOLUTION
          ═══════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 px-6 md:px-12 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="flex items-center gap-4 mb-12">
              <div className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-bold" style={{ background: 'linear-gradient(135deg, rgba(34,197,94,0.9), rgba(22,163,74,0.7))' }}>05</div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.3em]" style={{ color: 'var(--text-tertiary)' }}>Section Five</p>
                <p className="text-lg md:text-xl font-semibold" style={{ color: 'var(--text-primary)' }}>The Solution</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <p className="text-sm md:text-base font-light leading-relaxed max-w-3xl mb-10" style={{ color: 'var(--text-secondary)' }}>
              Each hypothesis translated into a design intervention. Together, they reshaped the plan selection experience from a comparison task into a guided decision.
            </p>
          </Reveal>

          {/* Solution 1: Personalized recommendation banner */}
          <Reveal delay={0.1}>
            <div className="rounded-2xl overflow-hidden mb-4" style={{ border: '1px solid var(--border-subtle)' }}>
              <div className="p-6 md:p-8" style={{ backgroundColor: 'var(--surface-secondary)' }}>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-bold px-2.5 py-1 rounded" style={{ backgroundColor: 'rgba(59,130,246,0.1)', color: 'rgba(59,130,246,0.8)' }}>H1 → Solution</span>
                  <p className="text-base font-semibold" style={{ color: 'var(--text-primary)' }}>Personalized recommendation banner</p>
                </div>
                <p className="text-sm font-light" style={{ color: 'var(--text-secondary)' }}>
                  Instead of asking users to self-diagnose, we analyzed their trial usage and surfaced a recommendation: "Recommended for you — based on your activity." The product became an advisor, not a seller.
                </p>
              </div>
              <div className="p-3 md:p-4" style={{ backgroundColor: 'var(--surface-primary)' }}>
                <img src={imgImage195} alt="Plan selection with recommendation" className="w-full h-auto rounded-xl" loading="lazy" decoding="async" />
              </div>
            </div>
          </Reveal>

          {/* Solution 2: Usage-mapped comparison */}
          <Reveal delay={0.14}>
            <div className="rounded-2xl overflow-hidden mb-4" style={{ border: '1px solid var(--border-subtle)' }}>
              <div className="p-6 md:p-8" style={{ backgroundColor: 'var(--surface-secondary)' }}>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-bold px-2.5 py-1 rounded" style={{ backgroundColor: 'rgba(168,85,247,0.1)', color: 'rgba(168,85,247,0.8)' }}>H2 → Solution</span>
                  <p className="text-base font-semibold" style={{ color: 'var(--text-primary)' }}>Usage breakdown and alignment indicators</p>
                </div>
                <p className="text-sm font-light" style={{ color: 'var(--text-secondary)' }}>
                  Users could see how their actual usage — Boards, Views, Dashboards, Workload — mapped to each plan. Color-coded indicators highlighted gaps, making under-selection and over-selection visible before committing.
                </p>
              </div>
              <div className="p-3 md:p-4" style={{ backgroundColor: 'var(--surface-primary)' }}>
                <img src={imgImage196} alt="Usage mapping comparison" className="w-full h-auto rounded-xl" loading="lazy" decoding="async" />
              </div>
            </div>
          </Reveal>

          {/* Solution 3: Outcome framing */}
          <Reveal delay={0.18}>
            <div className="rounded-2xl p-6 md:p-8 mb-4" style={{ border: '1px solid var(--border-subtle)' }}>
              <div className="flex items-center gap-3 mb-5">
                <span className="text-xs font-bold px-2.5 py-1 rounded" style={{ backgroundColor: 'rgba(34,197,94,0.1)', color: 'rgba(34,197,94,0.8)' }}>H3 → Solution</span>
                <p className="text-base font-semibold" style={{ color: 'var(--text-primary)' }}>Outcome-driven plan framing</p>
              </div>
              <p className="text-sm font-light mb-6" style={{ color: 'var(--text-secondary)' }}>
                Feature lists became outcome statements. Instead of enumerating capabilities, each plan communicated what the team would be able to achieve.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="rounded-xl p-5" style={{ backgroundColor: 'var(--surface-secondary)' }}>
                  <p className="text-[10px] uppercase tracking-[0.2em] mb-3 font-semibold" style={{ color: 'rgba(239,68,68,0.6)' }}>Before</p>
                  <div className="flex flex-col gap-2">
                    {['Timeline view', '250 automations/month', 'Calendar integration'].map((t) => (
                      <p key={t} className="text-sm font-light" style={{ color: 'var(--text-secondary)' }}>{t}</p>
                    ))}
                  </div>
                </div>
                <div className="rounded-xl p-5" style={{ backgroundColor: 'rgba(34,197,94,0.04)' }}>
                  <p className="text-[10px] uppercase tracking-[0.2em] mb-3 font-semibold" style={{ color: 'rgba(34,197,94,0.7)' }}>After</p>
                  <div className="flex flex-col gap-2">
                    {['Team visibility across projects', 'Capacity planning for your workflow', 'Workflow scalability as you grow'].map((t) => (
                      <div key={t} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" strokeWidth={1.4} style={{ color: 'rgba(34,197,94,0.7)' }} />
                        <p className="text-sm font-light" style={{ color: 'var(--text-primary)' }}>{t}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-sm font-light italic mt-5" style={{ fontFamily: 'var(--font-serif)', color: 'var(--text-secondary)' }}>
                Upgrade felt like continuation — not escalation.
              </p>
            </div>
          </Reveal>

          {/* "Why" videos */}
          <Reveal delay={0.22}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-xl overflow-hidden" style={{ backgroundColor: 'var(--surface-secondary)' }}>
                <LazyVideo src={whyStandardVideo} className="w-full h-full object-cover" />
              </div>
              <div className="rounded-xl overflow-hidden" style={{ backgroundColor: 'var(--surface-secondary)' }}>
                <LazyVideo src={whyProVideo} className="w-full h-full object-cover" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <JourneyConnector />

      {/* ═══════════════════════════════════════════════════════
          7) THE EXPERIMENT — Variant A vs B
          ═══════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 px-6 md:px-12 lg:px-16" style={{ backgroundColor: 'var(--surface-secondary)' }}>
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="flex items-center gap-4 mb-12">
              <div className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-bold" style={{ background: 'linear-gradient(135deg, rgba(245,158,11,0.9), rgba(217,119,6,0.7))' }}>06</div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.3em]" style={{ color: 'var(--text-tertiary)' }}>Section Six</p>
                <p className="text-lg md:text-xl font-semibold" style={{ color: 'var(--text-primary)' }}>The Experiment</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <p className="text-sm md:text-base font-light leading-relaxed max-w-3xl mb-10" style={{ color: 'var(--text-secondary)' }}>
              We didn't ship all three hypotheses at once. We started with a controlled A/B test for the Pro recommendation — the highest-leverage intervention — to validate the core premise: does evidence-based messaging outperform authority-based messaging?
            </p>
          </Reveal>

          {/* Visual A/B split */}
          <Reveal delay={0.1}>
            <div className="rounded-2xl overflow-hidden mb-6" style={{ backgroundColor: 'var(--surface-primary)', border: '1px solid var(--border-subtle)' }}>
              <div className="grid grid-cols-2">
                <div className="p-6 md:p-8">
                  <p className="text-[10px] uppercase tracking-[0.25em] font-semibold mb-5" style={{ color: 'var(--text-tertiary)' }}>Variant A</p>
                  <p className="text-sm font-medium mb-3" style={{ color: 'var(--text-primary)' }}>Recommendation + Feature explanation + "Why" banner</p>
                  <p className="text-xs font-light italic" style={{ fontFamily: 'var(--font-serif)', color: 'var(--text-secondary)' }}>
                    Mental model: "Trust us — Pro is better for you."
                  </p>
                  <div className="flex flex-col gap-2 mt-5">
                    {['Authority-driven', 'Generic recommendation', 'Feature-focused'].map((t) => (
                      <div key={t} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: 'var(--text-tertiary)' }} />
                        <p className="text-xs font-light" style={{ color: 'var(--text-secondary)' }}>{t}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="p-6 md:p-8 relative" style={{ backgroundColor: 'rgba(34,197,94,0.03)' }}>
                  <div className="flex items-center gap-2 mb-5">
                    <p className="text-[10px] uppercase tracking-[0.25em] font-semibold" style={{ color: 'var(--text-tertiary)' }}>Variant B</p>
                    <span className="text-[8px] uppercase font-bold px-2 py-0.5 rounded" style={{ backgroundColor: 'rgba(34,197,94,0.8)', color: 'white' }}>Winner</span>
                  </div>
                  <p className="text-sm font-medium mb-3" style={{ color: 'var(--text-primary)' }}>Recommendation + Usage proof + Recommendation</p>
                  <p className="text-xs font-light italic" style={{ fontFamily: 'var(--font-serif)', color: 'var(--text-secondary)' }}>
                    Mental model: "Here's evidence — Pro fits how you work."
                  </p>
                  <div className="flex flex-col gap-2 mt-5">
                    {['Evidence-driven', 'Personalized signals', 'Usage-grounded'].map((t) => (
                      <div key={t} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" strokeWidth={1.4} style={{ color: 'rgba(34,197,94,0.7)' }} />
                        <p className="text-xs font-light" style={{ color: 'var(--text-primary)' }}>{t}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <RevealScale delay={0.14}><img src={imgImage190} alt="Variant A screen" className="w-full h-auto rounded-xl" loading="lazy" decoding="async" /></RevealScale>
            <RevealScale delay={0.18}><img src={imgImage189} alt="Variant B screen" className="w-full h-auto rounded-xl" loading="lazy" decoding="async" /></RevealScale>
          </div>

          <Reveal delay={0.22}>
            <div className="rounded-xl p-5 text-center" style={{ backgroundColor: 'var(--surface-primary)', border: '1px solid var(--border-subtle)' }}>
              <p className="text-sm font-light italic" style={{ fontFamily: 'var(--font-serif)', color: 'var(--text-primary)' }}>
                Variant B didn't sell harder. It showed more. And that was enough.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <JourneyConnector />

      {/* ═══════════════════════════════════════════════════════
          8) RESULTS
          ═══════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 px-6 md:px-12 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="flex items-center gap-4 mb-12">
              <div className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-bold" style={{ background: 'linear-gradient(135deg, rgba(34,197,94,0.9), rgba(22,163,74,0.7))' }}>07</div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.3em]" style={{ color: 'var(--text-tertiary)' }}>Section Seven</p>
                <p className="text-lg md:text-xl font-semibold" style={{ color: 'var(--text-primary)' }}>Results</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <p className="text-sm md:text-base font-light leading-relaxed max-w-3xl mb-8" style={{ color: 'var(--text-secondary)' }}>
              The usage-driven experience increased Pro conversion from 4.0% to 5.4%, delivering a 35% relative uplift. But the metrics only told part of the story. The behavioral shift was more significant than the numbers alone suggested.
            </p>
          </Reveal>

          {/* Chart */}
          <RevealScale delay={0.1}>
            <img src={imgAbChart} alt="Conversion trend — Variant A vs B" className="w-full h-auto rounded-xl mb-6" loading="lazy" decoding="async" />
          </RevealScale>

          {/* Metric grid */}
          <Reveal delay={0.14}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-10">
              {[
                { metric: '4.0→5.4%', label: 'Conversion rate', color: 'rgba(34,197,94,0.7)' },
                { metric: '+35%', label: 'Pro upgrade uplift', color: 'rgba(59,130,246,0.7)' },
                { metric: '+7%', label: 'Reg-to-plan conversion', color: 'rgba(168,85,247,0.7)' },
                { metric: '↓', label: 'Downgrade regret', color: 'rgba(245,158,11,0.7)' },
              ].map((item, i) => (
                <div key={i} className="rounded-xl p-5 md:p-6 text-center" style={{ border: `1px solid ${item.color}25`, backgroundColor: `${item.color}06` }}>
                  <p className="text-2xl md:text-3xl font-bold mb-1" style={{ color: item.color }}>{item.metric}</p>
                  <p className="text-[10px] uppercase tracking-wider font-medium" style={{ color: 'var(--text-tertiary)' }}>{item.label}</p>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Success modal */}
          <Reveal delay={0.18}>
            <div className="rounded-xl overflow-hidden p-5 md:p-8" style={{ backgroundColor: 'var(--color-gray-600, #555)' }}>
              <img src={imgProCongratsModal} alt="Pro plan upgrade success modal" className="w-full h-auto rounded-lg" loading="lazy" decoding="async" />
            </div>
          </Reveal>

          <Reveal delay={0.22}>
            <div className="mt-8 rounded-xl p-6 md:p-8" style={{ border: '1px solid var(--border-subtle)' }}>
              <p className="text-[10px] uppercase tracking-[0.2em] mb-4" style={{ color: 'var(--text-tertiary)' }}>Interpretation</p>
              <div className="flex flex-col gap-3">
                {[
                  "Users didn\u2019t just convert more \u2014 they converted with more certainty.",
                  'Stronger cumulative daily conversion trend indicated sustained, not spike-driven improvement.',
                  'Reduced downgrade rates pointed to higher long-term plan alignment.',
                  "The recommendation system didn\u2019t push a more expensive plan. It helped users see which plan already matched their behavior.",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <span className="w-1 h-1 rounded-full mt-[7px] flex-shrink-0" style={{ backgroundColor: 'var(--text-tertiary)' }} />
                    <p className="text-sm font-light leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <JourneyConnector />

      {/* ═══════════════════════════════════════════════════════
          9) WHAT CHANGED — Contextual feature promotion
          ═══════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 px-6 md:px-12 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="flex items-center gap-4 mb-12">
              <div className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-bold" style={{ background: 'linear-gradient(135deg, rgba(168,85,247,0.9), rgba(126,34,206,0.7))' }}>08</div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.3em]" style={{ color: 'var(--text-tertiary)' }}>Section Eight</p>
                <p className="text-lg md:text-xl font-semibold" style={{ color: 'var(--text-primary)' }}>What Changed</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <p className="text-sm md:text-base font-light leading-relaxed max-w-3xl mb-5" style={{ color: 'var(--text-secondary)' }}>
              The upgrade moment shifted from a high-pressure comparison to a guided, evidence-backed decision. But the change extended beyond plan selection.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-sm md:text-base font-light leading-relaxed max-w-3xl mb-10" style={{ color: 'var(--text-secondary)' }}>
              We extended the same principle to contextual feature promotion. Instead of gating features behind friction, we surfaced premium capabilities at the moment they became relevant:
            </p>
          </Reveal>

          <Reveal delay={0.14}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
              {[
                { trigger: 'Timeline', outcome: 'Shows capacity planning', icon: <Layers className="w-5 h-5" strokeWidth={1.2} />, color: 'rgba(59,130,246,0.7)' },
                { trigger: 'Automation', outcome: 'Shows workflow scale', icon: <Zap className="w-5 h-5" strokeWidth={1.2} />, color: 'rgba(168,85,247,0.7)' },
                { trigger: 'Advanced views', outcome: 'Shows operational clarity', icon: <Eye className="w-5 h-5" strokeWidth={1.2} />, color: 'rgba(34,197,94,0.7)' },
              ].map((item, i) => (
                <div key={i} className="rounded-xl p-5 flex flex-col items-center text-center gap-3" style={{ border: `1px solid ${item.color}20`, backgroundColor: `${item.color}04` }}>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: item.color + '12' }}>
                    <div style={{ color: item.color }}>{item.icon}</div>
                  </div>
                  <p className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>{item.trigger}</p>
                  <ArrowDown className="w-3.5 h-3.5" strokeWidth={1.5} style={{ color: 'var(--text-tertiary)', opacity: 0.4 }} />
                  <p className="text-xs font-light" style={{ color: 'var(--text-secondary)' }}>{item.outcome}</p>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Discovery and promoted images */}
          <div className="space-y-4 mb-8">
            <RevealScale delay={0.16}>
              <img src={imgDiscoveryValue1} alt="Discovery through value — contextual feature surfacing" className="w-full h-auto rounded-xl" loading="lazy" decoding="async" />
            </RevealScale>
            <RevealScale delay={0.18}>
              <img src={imgDiscoveryValue2} alt="Discovery through value — premium feature overlay" className="w-full h-auto rounded-xl" loading="lazy" decoding="async" />
            </RevealScale>
          </div>

          <div className="space-y-4">
            <RevealScale delay={0.2}>
              <img src={imgPromotedMatch1} alt="Promoted features matching user workflow" className="w-full h-auto rounded-xl" loading="lazy" decoding="async" />
            </RevealScale>
            <RevealScale delay={0.22}>
              <img src={imgPromotedMatch2} alt="Promoted features — full experience view" className="w-full h-auto rounded-xl" loading="lazy" decoding="async" />
            </RevealScale>
          </div>

          <Reveal delay={0.24}>
            <div className="mt-8 pl-8 md:pl-12 max-w-3xl" style={{ borderLeft: '3px solid var(--text-primary)' }}>
              <p className="text-base md:text-lg font-normal italic leading-relaxed" style={{ fontFamily: 'var(--font-serif)', color: 'var(--text-primary)' }}>
                Locked features stopped feeling like restrictions. They started feeling like opportunities waiting for the right moment.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <JourneyConnector />

      {/* ═══════════════════════════════════════════════════════
          10) KEY TAKEAWAYS — Dark closing
          ═══════════════════════════════════════════════════════ */}
      <section className="relative py-20 md:py-28 px-6 md:px-12 lg:px-16 text-white overflow-hidden" style={{ backgroundColor: 'var(--color-gray-900)' }}>
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }} />
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(255,255,255,0.03) 0%, transparent 70%)',
        }} />

        <div className="relative max-w-6xl mx-auto">
          <Reveal>
            <div className="flex items-center gap-4 mb-14 justify-center">
              <div className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-bold" style={{ background: 'linear-gradient(135deg, rgba(34,197,94,0.9), rgba(22,163,74,0.7))' }}>09</div>
              <p className="text-lg md:text-xl font-semibold text-white">Key Takeaways</p>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-14">
              {[
                { icon: <Brain className="w-4 h-4" strokeWidth={1.3} />, text: 'Decision anxiety is a conversion problem. Removing it is a design problem.' },
                { icon: <Eye className="w-4 h-4" strokeWidth={1.3} />, text: 'Evidence outperforms authority. Users trust their own data more than your recommendation.' },
                { icon: <Target className="w-4 h-4" strokeWidth={1.3} />, text: 'Outcomes sell. Features describe. The best monetization UX communicates relevance, not capability.' },
                { icon: <ShieldCheck className="w-4 h-4" strokeWidth={1.3} />, text: 'Monetization that builds trust converts better than monetization that builds urgency.' },
                { icon: <Sparkles className="w-4 h-4" strokeWidth={1.3} />, text: 'Contextual promotion turns gated features into organic upgrade triggers.' },
                { icon: <TrendingUp className="w-4 h-4" strokeWidth={1.3} />, text: "Good monetization UX doesn\u2019t push users to pay. It removes the fear of saying yes." },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-xl" style={{ backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <div className="text-white/30 mt-0.5">{item.icon}</div>
                  <p className="text-sm font-light text-white/60">{item.text}</p>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Final statement */}
          <Reveal delay={0.16}>
            <div className="text-center max-w-3xl mx-auto">
              <p className="text-xl md:text-2xl lg:text-3xl font-normal italic text-white" style={{ fontFamily: 'var(--font-serif)' }}>
                The moment of commitment became safer.
              </p>
              <p className="text-xl md:text-2xl lg:text-3xl font-normal italic text-white mt-5" style={{ fontFamily: 'var(--font-serif)' }}>
                And when choosing feels safe — growth follows.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          CLOSING — Philosophy
          ═══════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-16">
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
            <div className="flex justify-center mb-8">
              <div className="w-12 h-px" style={{ backgroundColor: 'var(--text-primary)', opacity: 0.15 }} />
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="text-2xl md:text-3xl lg:text-4xl font-normal leading-[1.3]" style={{ fontFamily: 'var(--font-serif)', color: 'var(--text-primary)' }}>
              The gap between interest and commitment
            </p>
            <p className="text-2xl md:text-3xl lg:text-4xl font-normal leading-[1.3] italic mt-2" style={{ fontFamily: 'var(--font-serif)', color: 'var(--text-secondary)' }}>
              is never about price. It's about confidence.
            </p>
          </Reveal>
          <Reveal delay={0.16}>
            <div className="flex justify-center mt-10">
              <div className="w-12 h-px" style={{ backgroundColor: 'var(--text-primary)', opacity: 0.15 }} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── NAVIGATION ── */}
      <section className="pb-12 md:pb-16 px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto flex items-center justify-center">
          <button onClick={onBackToMonday} className="group cursor-pointer text-center">
            <p className="text-[11px] uppercase tracking-[0.15em] mb-1" style={{ color: 'var(--text-tertiary)' }}>Back to</p>
            <p className="text-base md:text-lg font-medium flex items-center gap-2 group-hover:gap-3 transition-all duration-300" style={{ color: 'var(--text-primary)' }}>
              monday.com Case Study
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </p>
          </button>
        </div>
      </section>
    </div>
  );
}
