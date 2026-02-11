import { type ReactNode } from 'react';
import { motion } from 'motion/react';
import {
  ArrowRight,
  LayoutGrid,
  Users,
  Zap,
  BarChart3,
  Brain,
  FlaskConical,
  Layers,
  SlidersHorizontal,
  Target,
  Repeat,
  Eye,
  Lightbulb,
  MessageSquare,
} from 'lucide-react';

import svgPaths from './svg-6er71w85ab';

/* ── Existing images ─────────────────────────────────────────── */
import imgBoardWithCactusAndPhone from 'figma:asset/1283a766b980685a64313cdeb5ba880f6d1b751a.png';
import imgImage195 from 'figma:asset/135037eee94c070be011542ce34df21d09e0887c.png';
import imgImage196 from 'figma:asset/d2bbf953c2e0dff1f47983ab05675e22222adadc.png';
import imgStep4 from 'figma:asset/e528a6e576ff61dfdedceda779b402b8cad6f7a3.png';
import imgImage190 from 'figma:asset/5f1af89856aef65d1b868e8219fddf2446fec50b.png';
import imgImage189 from 'figma:asset/e2ace24a2f436bfdff66fee0efc67986b23bea69.png';
import imgImage193 from 'figma:asset/daf1651f8cbfbc84a76190121c487237936e8e2c.png';
import imgDiscovery212 from 'figma:asset/5891221db0f506e2ed13854c9b561b0eb94c1c45.png';
import imgDiscovery213 from 'figma:asset/46afff3de4b74b1fcd9fb6e6c6e34dc0511a1347.png';
import imgPromoted214 from 'figma:asset/2abdc6c0f0e1dc734eb659df7608c23f65d0828f.png';
import imgPromoted215 from 'figma:asset/590fcf0486ea5c0624f74a9ad643a26091276ee4.png';
import imgAbChart from '@/assets/monday-ab-chart.png';
import whyStandardVideo from '@/assets/why-standard-video.mp4';
import whyProVideo from '@/assets/why-pro-video.mp4';

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

/* ── Lazy video ──────────────────────────────────────────────── */
function LazyVideo({ src, className = '' }: { src: string; className?: string }) {
  return <video src={src} autoPlay loop muted playsInline preload="metadata" className={className} />;
}

/* ── monday.com Logo (SVG) ───────────────────────────────────── */
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
   MONDAY.COM — "The Growth Experiment"
   ──────────────────────────────────────────────────────────────
   Unique personality:
   · Key Insight on warm cream background (NOT dark band)
   · Approach as full-width single-column detailed cards
   · A/B Test section is the visual star (unique to this study)
   · Feature Discovery as staggered full-bleed gallery
   · Results as horizontal metric strip (NOT dark band)
   ================================================================ */
export default function CaseStutyMondayConent() {
  return (
    <div className="bg-white">
      {/* ═══════════════════════════════════════════════════════
          HERO
          ═══════════════════════════════════════════════════════ */}
      <section className="pt-24 md:pt-32 lg:pt-40 pb-6 md:pb-8 px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <div className="mb-8"><MondayLogo /></div>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-[1.12] mb-6" style={{ color: 'var(--text-primary)' }}>
              Optimizing monetization and plan selection at scale
            </h1>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="text-base md:text-lg font-light italic max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-serif)', color: 'var(--text-secondary)' }}>
              Designing confidence at the moment of commitment
            </p>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mt-10 pt-8 text-left" style={{ borderTop: '1px solid var(--border-subtle)' }}>
              {[
                { label: 'Role', value: 'Senior Product Designer' },
                { label: 'Team', value: 'Growth Squad (PM · Engineering · Data)' },
                { label: 'Scope', value: 'Registration, upgrade, plan selection' },
                { label: 'Impact', value: '+7% registration-to-plan conversion' },
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
          <img src={imgBoardWithCactusAndPhone} alt="monday.com board with phone" className="w-full h-auto rounded-xl" loading="eager" decoding="async" />
        </div>
      </Reveal>

      <VerticalDivider />

      {/* ═══════════════════════════════════════════════════════
          PROBLEM — Challenge pills + narrative
          ═══════════════════════════════════════════════════════ */}
      <section className="pb-14 md:pb-18 px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <div className="flex items-center justify-center gap-3 mb-8">
              <LayoutGrid className="w-5 h-5" strokeWidth={1.5} style={{ color: 'var(--text-tertiary)' }} />
              <Users className="w-5 h-5" strokeWidth={1.5} style={{ color: 'var(--text-tertiary)' }} />
              <Zap className="w-5 h-5" strokeWidth={1.5} style={{ color: 'var(--text-tertiary)' }} />
              <span className="text-[10px] uppercase tracking-[0.2em] ml-2" style={{ color: 'var(--text-tertiary)' }}>Problem Space</span>
            </div>
          </Reveal>

          <Reveal>
            <h2 className="text-2xl md:text-3xl font-semibold mb-8" style={{ color: 'var(--text-primary)' }}>
              Millions of users registered, but conversion to paid plans could improve
            </h2>
          </Reveal>

          {/* Challenge pills — horizontal, inline */}
          <Reveal delay={0.1}>
            <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
              {['Confusing tier comparison', 'Misaligned value communication', 'Static plan selection logic'].map((item, i) => (
                <span
                  key={i}
                  className="px-4 py-2 rounded-full text-xs md:text-sm font-light"
                  style={{ border: '1px solid var(--border-subtle)', color: 'var(--text-primary)' }}
                >
                  {item}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <VerticalDivider />

      {/* ═══════════════════════════════════════════════════════
          OWNERSHIP — Compact
          ═══════════════════════════════════════════════════════ */}
      <section className="pb-14 md:pb-18 px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="flex items-center justify-center gap-8 md:gap-12 mb-8">
              {[
                { icon: <BarChart3 className="w-8 h-8 md:w-10 md:h-10" strokeWidth={1.3} />, label: 'Monetization' },
                { icon: <Brain className="w-8 h-8 md:w-10 md:h-10" strokeWidth={1.3} />, label: 'Recommendation' },
                { icon: <FlaskConical className="w-8 h-8 md:w-10 md:h-10" strokeWidth={1.3} />, label: 'Experiments' },
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
                'Led end-to-end design of upgrade and monetization flows',
                'Designed logic-driven plan recommendation system',
                'Partnered with Data on behavioral segmentation',
                'Worked in experiment-driven growth squad',
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
          KEY INSIGHT — Warm cream band
          (NOT dark gray — unique to monday.com)
          ═══════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 px-6 md:px-12" style={{ backgroundColor: '#faf7f2' }}>
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.3em] mb-8" style={{ color: 'var(--text-tertiary)' }}>Key Insight</p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-2xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-3" style={{ color: 'var(--text-primary)' }}>
              Users didn&rsquo;t struggle with pricing.
            </p>
            <p className="text-2xl md:text-4xl lg:text-5xl font-semibold leading-tight italic" style={{ fontFamily: 'var(--font-serif)', color: 'var(--text-primary)' }}>
              They struggled with choosing the right plan.
            </p>
          </Reveal>
        </div>
      </section>

      <VerticalDivider />

      {/* ═══════════════════════════════════════════════════════
          APPROACH — Full-width single-column cards
          (NOT 2×2 grid — unique to monday.com)
          ═══════════════════════════════════════════════════════ */}
      <section className="pb-14 md:pb-18 px-6 md:px-12 lg:px-16">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-semibold text-center mb-14" style={{ color: 'var(--text-primary)' }}>The Approach</h2>
          </Reveal>

          <div className="flex flex-col gap-4">
            {[
              { num: '01', title: 'Reframe plan comparison', desc: 'Shift from feature lists to use-case-driven comparisons that match real team workflows.', icon: <Layers className="w-6 h-6" strokeWidth={1.4} /> },
              { num: '02', title: 'Personalized recommendations', desc: 'Surface data-driven plan suggestions based on actual trial usage patterns.', icon: <SlidersHorizontal className="w-6 h-6" strokeWidth={1.4} /> },
              { num: '03', title: 'Simplify upgrade flows', desc: 'Remove friction points that created hesitation at the commitment moment.', icon: <Target className="w-6 h-6" strokeWidth={1.4} /> },
              { num: '04', title: 'A/B test value framing', desc: 'Run controlled experiments to validate that evidence-based messaging outperforms generic copy.', icon: <Repeat className="w-6 h-6" strokeWidth={1.4} /> },
            ].map((step, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="flex items-start gap-5 p-5 md:p-6 rounded-xl" style={{ backgroundColor: 'var(--surface-secondary)' }}>
                  <p className="text-2xl font-semibold flex-shrink-0 w-10" style={{ color: 'var(--text-tertiary)' }}>{step.num}</p>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <div style={{ color: 'var(--text-tertiary)' }}>{step.icon}</div>
                      <p className="text-sm md:text-base font-medium" style={{ color: 'var(--text-primary)' }}>{step.title}</p>
                    </div>
                    <p className="text-sm font-light leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{step.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <VerticalDivider />

      {/* ═══════════════════════════════════════════════════════
          PLAN SELECTION VISUALS
          ═══════════════════════════════════════════════════════ */}
      <section className="pb-4 px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-semibold text-center mb-4" style={{ color: 'var(--text-primary)' }}>Visual Guidance for Plan Selection</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-sm md:text-base font-light text-center mb-10 max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              Short explainer videos turn abstract feature lists into real usage stories, helping users quickly understand which plan fits them best.
            </p>
          </Reveal>
        </div>

        <div className="max-w-6xl mx-auto">
          <Reveal>
            <img src={imgImage195} alt="Plan selection interface" className="w-full h-auto rounded-xl mb-5" loading="lazy" decoding="async" />
          </Reveal>
          <Reveal>
            <div className="overflow-hidden rounded-xl mb-5">
              <img src={imgImage196} alt="Plan comparison flow" className="w-full h-auto object-cover scale-[1.25]" loading="lazy" decoding="async" />
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <Reveal delay={0.08}>
              <div className="rounded-xl overflow-hidden" style={{ backgroundColor: 'var(--surface-secondary)' }}>
                <LazyVideo src={whyStandardVideo} className="w-full h-full object-cover" />
              </div>
            </Reveal>
            <Reveal delay={0.16}>
              <div className="rounded-xl overflow-hidden" style={{ backgroundColor: 'var(--surface-secondary)' }}>
                <LazyVideo src={whyProVideo} className="w-full h-full object-cover" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <VerticalDivider />

      {/* ═══════════════════════════════════════════════════════
          A/B TEST — The star of this study (unique)
          ═══════════════════════════════════════════════════════ */}
      <section className="pb-8 md:pb-12 px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="flex items-center justify-center gap-8 md:gap-12 mb-8">
              {[
                { icon: <Eye className="w-8 h-8 md:w-10 md:h-10" strokeWidth={1.3} />, label: 'Variant A' },
                { icon: <Lightbulb className="w-8 h-8 md:w-10 md:h-10" strokeWidth={1.3} />, label: 'Variant B' },
                { icon: <MessageSquare className="w-8 h-8 md:w-10 md:h-10" strokeWidth={1.3} />, label: 'Validation' },
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center gap-1.5">
                  <div style={{ color: 'var(--text-primary)' }}>{item.icon}</div>
                  <p className="text-[10px] uppercase tracking-wider" style={{ color: 'var(--text-tertiary)' }}>{item.label}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal>
            <h2 className="text-2xl md:text-3xl font-semibold text-center mb-4" style={{ color: 'var(--text-primary)' }}>A/B Test: Pro Recommendation</h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="text-sm md:text-base font-light text-center mb-10 max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              Usage-driven experience increased conversion from 4.0% to 5.4%, delivering a 35% relative uplift.
            </p>
          </Reveal>

          {/* Variant cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
            {[
              { label: 'Variant A', model: '"Trust us — Pro is better for you."', pattern: 'Recommendation + Feature explanation + Why banner' },
              { label: 'Variant B', model: '"Here\'s evidence — Pro fits how you work."', pattern: 'Recommendation + Usage proof + Recommendation' },
            ].map((v, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="p-6 rounded-xl" style={{ backgroundColor: 'var(--surface-secondary)' }}>
                  <p className="text-sm font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>{v.label}</p>
                  <p className="text-xs font-light mb-2" style={{ color: 'var(--text-secondary)' }}>{v.pattern}</p>
                  <p className="text-xs font-light italic" style={{ color: 'var(--text-tertiary)' }}>{v.model}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
            <Reveal delay={0.08}><img src={imgImage190} alt="Variant A" className="w-full h-auto rounded-xl" loading="lazy" decoding="async" /></Reveal>
            <Reveal delay={0.16}><img src={imgImage189} alt="Variant B" className="w-full h-auto rounded-xl" loading="lazy" decoding="async" /></Reveal>
          </div>

          <Reveal><img src={imgAbChart} alt="Conversion trend chart" className="w-full h-auto rounded-xl mb-5" loading="lazy" decoding="async" /></Reveal>
          <Reveal>
            <div className="rounded-xl overflow-hidden p-5 md:p-8" style={{ backgroundColor: 'var(--color-gray-600, #555)' }}>
              <img src={imgStep4} alt="A/B test result" className="w-full h-auto rounded-lg" loading="lazy" decoding="async" />
            </div>
          </Reveal>
        </div>
      </section>

      <VerticalDivider />

      {/* ═══════════════════════════════════════════════════════
          FEATURE DISCOVERY — Staggered full-bleed
          ═══════════════════════════════════════════════════════ */}
      <section className="pb-4 px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-semibold text-center mb-4" style={{ color: 'var(--text-primary)' }}>Promoting Discovery Through Value</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-sm md:text-base font-light text-center mb-10 max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              Feature promotion was designed to feel contextual — surfacing locked capabilities where users naturally need them.
            </p>
          </Reveal>
        </div>

        {/* Staggered: 2 full-width, 2 side-by-side */}
        <div className="max-w-6xl mx-auto space-y-5">
          <Reveal>
            <img src={imgDiscovery212} alt="Feature discovery" className="w-full h-auto rounded-xl" loading="lazy" decoding="async" />
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <Reveal delay={0.08}><img src={imgDiscovery213} alt="Discovery detail" className="w-full h-auto rounded-xl" loading="lazy" decoding="async" /></Reveal>
            <Reveal delay={0.12}><img src={imgPromoted214} alt="Promoted features" className="w-full h-auto rounded-xl" loading="lazy" decoding="async" /></Reveal>
          </div>
          <Reveal>
            <img src={imgPromoted215} alt="Promoted features detail" className="w-full h-auto rounded-xl" loading="lazy" decoding="async" />
          </Reveal>
        </div>
      </section>

      <VerticalDivider />

      {/* ═══════════════════════════════════════════════════════
          RESULTS — Horizontal metric strip on white
          (NOT a dark band — unique to monday.com)
          ═══════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.3em] mb-4 text-center" style={{ color: 'var(--text-tertiary)' }}>Results</p>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="flex flex-col md:flex-row items-stretch divide-y md:divide-y-0 md:divide-x" style={{ borderColor: 'var(--border-subtle)' }}>
              {[
                { metric: '+7%', desc: 'registration-to-plan conversion' },
                { metric: '35%', desc: 'relative uplift in Pro upgrades' },
                { metric: '\u2191', desc: 'plan clarity and decision speed' },
              ].map((item, i) => (
                <div key={i} className="flex-1 py-6 md:py-0 md:px-8 first:md:pl-0 last:md:pr-0 text-center">
                  <p className="text-3xl md:text-4xl font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>{item.metric}</p>
                  <p className="text-xs md:text-sm font-light" style={{ color: 'var(--text-secondary)' }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          CLOSING IMAGE
          ═══════════════════════════════════════════════════════ */}
      <div className="relative w-full overflow-hidden">
        <img src={imgImage193} alt="monday.com — removing the fear of saying yes" loading="lazy" decoding="async" className="w-full h-auto object-cover" />
        <div className="absolute inset-0 flex items-center">
          <div className="ml-auto mr-4 md:mr-12 lg:mr-20 max-w-[42%] md:max-w-sm lg:max-w-md">
            <p className="text-[10px] leading-3 md:text-base md:leading-7 mb-1 md:mb-2 font-light tracking-wide" style={{ color: 'var(--text-primary)' }}>
              &ldquo;Good monetization UX doesn&rsquo;t push users to pay.
            </p>
            <p className="text-xs leading-4 md:text-3xl md:leading-snug lg:text-[48px] lg:leading-snug font-light tracking-wide" style={{ color: 'var(--text-primary)' }}>
              It removes the fear of saying yes&rdquo;
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
              <ArrowRight className="w-4 h-4 rotate-180" /> FundGuard
            </p>
          </div>
          <div className="text-right">
            <p className="text-[11px] uppercase tracking-[0.15em] mb-1" style={{ color: 'var(--text-tertiary)' }}>Next Case Study</p>
            <p className="text-base md:text-lg font-medium flex items-center gap-2" style={{ color: 'var(--text-primary)' }}>
              Bit <ArrowRight className="w-4 h-4" />
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
