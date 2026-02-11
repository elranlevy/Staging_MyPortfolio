import { type ReactNode } from 'react';
import { motion } from 'motion/react';
import {
  ArrowRight,
  DollarSign,
  Users,
  ShieldCheck,
  BarChart3,
  Brain,
  FlaskConical,
  Layers,
  MessageSquare,
  Target,
  Repeat,
  TrendingUp,
  ChevronRight,
} from 'lucide-react';

/* ── Existing images ─────────────────────────────────────────── */
import imgHero from 'figma:asset/88da6de6a1b666a471ee6930a733125a1b7e710e.png';
import imgImage184 from 'figma:asset/07a42507cb22cafb6d39b51c9254b4d2088abbb3.png';
import imgImage185 from 'figma:asset/0951004d47003d3e5824dd6b6ee4a2a692f1c14f.png';
import imgImage186 from 'figma:asset/37c8c497c64b1de3f237409d508123bfd7436060.png';
import imgImage187 from 'figma:asset/f3148055a59a7b55f2acac8549dd0c0e7c37cac9.png';
import imgDash216 from 'figma:asset/13fc9b9e5c9377cfe6a401b34f701652c82b98ec.png';
import imgDash217 from 'figma:asset/28aa4fa845afbbe3f48e5a21092fd68ea973afb8.png';
import imgDash218 from 'figma:asset/7a6b7e244b5fadc023b3ea45934532d38efdffb1.png';
import imgDash219 from 'figma:asset/f0d3902cc9f674d2fe46bfca159e4323568fd012.png';
import imgImage194 from 'figma:asset/3fa38104c924f2cbe993eee7323661a3891a0092.png';

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
   BLUEVINE — "The SMB Journey"
   ──────────────────────────────────────────────────────────────
   Unique personality:
   · Problem presented as icon-labeled cards (NOT bullet list)
   · Key Insight on soft blue-tinted band (NOT dark gray)
   · Approach as horizontal process flow with arrows (NOT 2×2 grid)
   · KPI as a bordered highlight strip with accent
   · Results as bordered metric cards on white (NOT dark band)
   · Dashboard & onboarding as journey gallery
   ================================================================ */
export default function CaseStutyBluevineConent() {
  return (
    <div className="bg-white">
      {/* ═══════════════════════════════════════════════════════
          HERO
          ═══════════════════════════════════════════════════════ */}
      <section className="pt-24 md:pt-32 lg:pt-40 pb-6 md:pb-8 px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] mb-6" style={{ color: 'var(--text-tertiary)' }}>BlueVine</p>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-[1.12] mb-6" style={{ color: 'var(--text-primary)' }}>
              Driving monetization and activation in SMB fintech
            </h1>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="text-base md:text-lg font-light italic max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-serif)', color: 'var(--text-secondary)' }}>
              Turning complex financial decisions into confident actions
            </p>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mt-10 pt-8 text-left" style={{ borderTop: '1px solid var(--border-subtle)' }}>
              {[
                { label: 'Role', value: 'Senior Product Designer' },
                { label: 'Team', value: 'PM · Engineering · Data' },
                { label: 'Scope', value: 'Registration, plan selection, upgrade flows' },
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
          <img src={imgHero} alt="BlueVine banking experience" className="w-full h-auto rounded-xl" loading="eager" decoding="async" />
        </div>
      </Reveal>

      <VerticalDivider />

      {/* ═══════════════════════════════════════════════════════
          PROBLEM — Icon-labeled cards
          (NOT icon-row + bullets — unique to BlueVine)
          ═══════════════════════════════════════════════════════ */}
      <section className="pb-14 md:pb-18 px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.3em] mb-6 text-center" style={{ color: 'var(--text-tertiary)' }}>The Problem</p>
          </Reveal>

          <Reveal delay={0.05}>
            <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10" style={{ color: 'var(--text-primary)' }}>
              SMB users hesitated to upgrade due to unclear value differentiation
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { icon: <DollarSign className="w-8 h-8" strokeWidth={1.3} />, label: 'Financial product complexity', desc: 'Plans and features blurred together for non-financial users.' },
              { icon: <Users className="w-8 h-8" strokeWidth={1.3} />, label: 'Different SMB personas', desc: 'One-size messaging couldn\'t address varying business needs.' },
              { icon: <ShieldCheck className="w-8 h-8" strokeWidth={1.3} />, label: 'High sensitivity', desc: 'Financial decisions carry weight — hesitation is the default.' },
            ].map((card, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="p-6 rounded-xl h-full" style={{ backgroundColor: 'var(--surface-secondary)' }}>
                  <div className="mb-4" style={{ color: 'var(--text-tertiary)' }}>{card.icon}</div>
                  <p className="text-sm font-medium mb-2" style={{ color: 'var(--text-primary)' }}>{card.label}</p>
                  <p className="text-xs font-light leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{card.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <VerticalDivider />

      {/* ═══════════════════════════════════════════════════════
          KPI — Bordered accent strip
          ═══════════════════════════════════════════════════════ */}
      <section className="pb-4 px-6 md:px-12 lg:px-16">
        <Reveal>
          <div className="max-w-xl mx-auto relative overflow-hidden rounded-2xl px-8 py-10 md:px-12 md:py-12 text-center" style={{ backgroundColor: '#eef2ff' }}>
            <div className="absolute -left-4 -top-4 opacity-[0.06]">
              <TrendingUp className="w-32 h-32" strokeWidth={1.2} style={{ color: '#4f46e5' }} />
            </div>
            <p className="text-[11px] uppercase tracking-[0.25em] mb-4 relative" style={{ color: 'var(--text-tertiary)' }}>Main Impact</p>
            <p className="text-lg md:text-xl font-semibold leading-snug relative" style={{ color: 'var(--text-primary)' }}>
              +7% registration-to-plan conversion
              <br />
              Improved upgrade clarity
            </p>
          </div>
        </Reveal>
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
                { icon: <BarChart3 className="w-8 h-8 md:w-10 md:h-10" strokeWidth={1.3} />, label: 'Monetization' },
                { icon: <Brain className="w-8 h-8 md:w-10 md:h-10" strokeWidth={1.3} />, label: 'Decision Logic' },
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
                'Led monetization and upgrade flow redesign',
                'Designed decision-based plan logic',
                'Partnered with Data for behavioral insights',
                'Operated within experiment-driven squad',
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
          KEY INSIGHT — Soft blue-tinted band
          (NOT dark gray — unique to BlueVine)
          ═══════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 px-6 md:px-12" style={{ backgroundColor: '#eef2ff' }}>
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.3em] mb-8" style={{ color: '#6366f1' }}>Key Insight</p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-2xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-3" style={{ color: 'var(--text-primary)' }}>
              Financial users require clarity
            </p>
            <p className="text-2xl md:text-4xl lg:text-5xl font-semibold leading-tight italic" style={{ fontFamily: 'var(--font-serif)', color: 'var(--text-primary)' }}>
              before commitment.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 text-sm md:text-base font-light max-w-lg mx-auto" style={{ color: 'var(--text-secondary)' }}>
              Decision support increased confidence.
            </p>
          </Reveal>
        </div>
      </section>

      <VerticalDivider />

      {/* ═══════════════════════════════════════════════════════
          APPROACH — Horizontal process flow with arrows
          (NOT 2×2 grid — unique to BlueVine)
          ═══════════════════════════════════════════════════════ */}
      <section className="pb-14 md:pb-18 px-6 md:px-12 lg:px-16">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-semibold text-center mb-14" style={{ color: 'var(--text-primary)' }}>The Approach</h2>
          </Reveal>

          {/* Desktop: horizontal flow with arrows */}
          <Reveal>
            <div className="hidden md:flex items-stretch gap-0">
              {[
                { num: '01', text: 'Simplify plan differentiation', icon: <Layers className="w-6 h-6" strokeWidth={1.4} /> },
                { num: '02', text: 'Add contextual guidance during selection', icon: <MessageSquare className="w-6 h-6" strokeWidth={1.4} /> },
                { num: '03', text: 'Clarify benefits tied to user behavior', icon: <Target className="w-6 h-6" strokeWidth={1.4} /> },
                { num: '04', text: 'Iterate through experimentation', icon: <Repeat className="w-6 h-6" strokeWidth={1.4} /> },
              ].map((step, i, arr) => (
                <div key={i} className="flex items-stretch flex-1">
                  <div className="flex-1 p-5 rounded-xl text-center" style={{ backgroundColor: 'var(--surface-secondary)' }}>
                    <p className="text-xl font-semibold mb-2" style={{ color: 'var(--text-tertiary)' }}>{step.num}</p>
                    <div className="mb-2 flex justify-center" style={{ color: 'var(--text-tertiary)' }}>{step.icon}</div>
                    <p className="text-xs font-light leading-relaxed" style={{ color: 'var(--text-primary)' }}>{step.text}</p>
                  </div>
                  {i < arr.length - 1 && (
                    <div className="flex items-center px-2" style={{ color: 'var(--text-tertiary)' }}>
                      <ChevronRight className="w-5 h-5" strokeWidth={1.5} />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile: stacked */}
            <div className="md:hidden flex flex-col gap-4">
              {[
                { num: '01', text: 'Simplify plan differentiation', icon: <Layers className="w-6 h-6" strokeWidth={1.4} /> },
                { num: '02', text: 'Add contextual guidance during selection', icon: <MessageSquare className="w-6 h-6" strokeWidth={1.4} /> },
                { num: '03', text: 'Clarify benefits tied to user behavior', icon: <Target className="w-6 h-6" strokeWidth={1.4} /> },
                { num: '04', text: 'Iterate through experimentation', icon: <Repeat className="w-6 h-6" strokeWidth={1.4} /> },
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-4 p-5 rounded-xl" style={{ backgroundColor: 'var(--surface-secondary)' }}>
                  <p className="text-xl font-semibold flex-shrink-0" style={{ color: 'var(--text-tertiary)' }}>{step.num}</p>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <div style={{ color: 'var(--text-tertiary)' }}>{step.icon}</div>
                    </div>
                    <p className="text-sm font-light" style={{ color: 'var(--text-primary)' }}>{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <VerticalDivider />

      {/* ═══════════════════════════════════════════════════════
          DESIGN VISUALS — Journey gallery
          ═══════════════════════════════════════════════════════ */}
      <section className="pb-8 md:pb-12 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Onboarding screens */}
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.2em] mb-6 text-center" style={{ color: 'var(--text-tertiary)' }}>Onboarding Journey</p>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-10">
            {[imgImage184, imgImage185, imgImage186, imgImage187].map((src, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <img src={src} alt={`Onboarding step ${i + 1}`} className="w-full h-auto rounded-xl" loading="lazy" decoding="async" />
              </Reveal>
            ))}
          </div>

          {/* Dashboard screens */}
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.2em] mb-6 text-center" style={{ color: 'var(--text-tertiary)' }}>Dashboard Experience</p>
          </Reveal>
          <Reveal>
            <img src={imgDash216} alt="BlueVine dashboard" className="w-full h-auto rounded-xl mb-5" loading="lazy" decoding="async" />
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <Reveal delay={0.08}><img src={imgDash217} alt="Dashboard payments" className="w-full h-auto rounded-xl" loading="lazy" decoding="async" /></Reveal>
            <Reveal delay={0.16}><img src={imgDash218} alt="Dashboard analytics" className="w-full h-auto rounded-xl" loading="lazy" decoding="async" /></Reveal>
          </div>
          <Reveal className="mt-5">
            <img src={imgDash219} alt="Dashboard credit" className="w-full h-auto rounded-xl" loading="lazy" decoding="async" />
          </Reveal>
        </div>
      </section>

      <VerticalDivider />

      {/* ═══════════════════════════════════════════════════════
          RESULTS — Bordered metric cards on white
          (NOT a dark band — unique to BlueVine)
          ═══════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.3em] mb-4 text-center" style={{ color: 'var(--text-tertiary)' }}>Results</p>
            <h2 className="text-2xl md:text-3xl font-semibold text-center mb-14" style={{ color: 'var(--text-primary)' }}>
              Measurable impact on monetization
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              { metric: '+7%', desc: 'improvement in registration-to-plan conversion' },
              { metric: '\u2191', desc: 'Improved upgrade clarity' },
              { metric: '\u2193', desc: 'Reduced hesitation during plan selection' },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="rounded-xl p-8 text-center h-full flex flex-col items-center justify-center" style={{ border: '1px solid #c7d2fe' }}>
                  <p className="text-4xl md:text-5xl font-semibold mb-3" style={{ color: '#4f46e5' }}>{item.metric}</p>
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
        <img src={imgImage194} alt="BlueVine — clarity before commitment" loading="lazy" decoding="async" className="w-full h-auto object-cover" />
        <div className="absolute inset-0 flex items-center">
          <div className="ml-auto mr-4 md:mr-12 lg:mr-20 max-w-[40%] md:max-w-sm lg:max-w-md">
            <p className="text-[10px] leading-3 md:text-base md:leading-7 mb-1 md:mb-2 text-white font-light tracking-wide">
              &ldquo;When users clearly understand what will happen next, it makes them:
            </p>
            <p className="text-xs leading-4 md:text-3xl md:leading-snug lg:text-[48px] lg:leading-snug text-white font-light tracking-wide">
              move faster, decide better, and rely on the product more&rdquo;
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
              <ArrowRight className="w-4 h-4 rotate-180" /> Bit
            </p>
          </div>
          <div className="text-right">
            <p className="text-[11px] uppercase tracking-[0.15em] mb-1" style={{ color: 'var(--text-tertiary)' }}>Next Case Study</p>
            <p className="text-base md:text-lg font-medium flex items-center gap-2" style={{ color: 'var(--text-primary)' }}>
              Xtream IO <ArrowRight className="w-4 h-4" />
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
