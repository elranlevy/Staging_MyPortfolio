import { type ReactNode } from 'react';
import { motion } from 'motion/react';
import {
  ArrowRight,
  EyeOff,
  BarChart3,
  Unlink,
  Search,
  Users,
  Sparkles,
  GitMerge,
  ShieldAlert,
  BrainCircuit,
  Target,
  CheckCircle2,
} from 'lucide-react';

/* ── Existing images ─────────────────────────────────────────── */
import imgHeroDashboard from 'figma:asset/d567446a53f020a289d383932546fdaa051adf81.png';
import imgDesignFlow1 from 'figma:asset/7cdb49ba8edc2d8977bfc267cf5bbe296ad267fb.png';
import imgDesignFlow2 from 'figma:asset/c790cf6ca89caa6c2afef2660c34ad66513f7fd0.png';
import imgDesignFlow3 from 'figma:asset/b05467b93f7ef928be5bddec64a8f9870de1bf3e.png';
import imgDesignFlow4 from 'figma:asset/2efaac5ed441d5d3cc792401accb9d3922155796.png';
import imgCanvasAnnotated from '@/assets/fg-canvas-annotated.png';
import imgClosing from 'figma:asset/04b481125acb45e9ca91bd8773c9890a8d07be5d.png';

/* ── Scroll-triggered reveal ─────────────────────────────────── */
function Reveal({
  children,
  className = '',
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, delay, ease: 'easeOut' }}
    >
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
   FUNDGUARD — "The Deep Enterprise"
   ──────────────────────────────────────────────────────────────
   Unique personality:
   · Left-aligned editorial pull-quote
   · Key Insight as a serif blockquote with accent border (NOT dark band)
   · Approach as a vertical timeline with connecting line
   · Solution as stacked serif headings with horizontal rules
   · Results as outlined stat cards on white (NOT dark band)
   ================================================================ */
export default function CaseStutyFundguardContent() {
  return (
    <div className="bg-white">
      {/* ═══════════════════════════════════════════════════════
          HERO
          ═══════════════════════════════════════════════════════ */}
      <section className="pt-24 md:pt-32 lg:pt-40 pb-6 md:pb-8 px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <p
              className="text-xs uppercase tracking-[0.3em] mb-6"
              style={{ color: 'var(--text-tertiary)' }}
            >
              FundGuard
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <h1
              className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-[1.12] mb-6"
              style={{ color: 'var(--text-primary)' }}
            >
              Scaling trust in AI-driven investment accounting
            </h1>
          </Reveal>

          <Reveal delay={0.15}>
            <p
              className="text-base md:text-lg font-light italic max-w-2xl mx-auto"
              style={{ fontFamily: 'var(--font-serif)', color: 'var(--text-secondary)' }}
            >
              When experts need systems they can trust
            </p>
          </Reveal>

          {/* Metadata bar */}
          <Reveal delay={0.25}>
            <div
              className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mt-10 pt-8 text-left"
              style={{ borderTop: '1px solid var(--border-subtle)' }}
            >
              {[
                { label: 'Role', value: 'Senior Product Designer' },
                { label: 'Team', value: 'PM · 6 Engineers · Data Science · Enterprise Ops' },
                { label: 'Scope', value: 'Core reconciliation & exception workflows' },
                { label: 'Impact', value: '+30% automation · 25% faster resolution' },
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

      {/* Hero image */}
      <Reveal>
        <div className="max-w-6xl mx-auto px-6 md:px-12 pb-4">
          <img src={imgHeroDashboard} alt="FundGuard reconciliation dashboard" className="w-full h-auto rounded-xl" loading="eager" decoding="async" />
        </div>
      </Reveal>

      <VerticalDivider />

      {/* ═══════════════════════════════════════════════════════
          PROBLEM — Two-column editorial (text left, callout right)
          ═══════════════════════════════════════════════════════ */}
      <section className="pb-16 md:pb-20 px-6 md:px-12 lg:px-16">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <div className="flex items-center gap-3 mb-8">
              <EyeOff className="w-5 h-5" strokeWidth={1.5} style={{ color: 'var(--text-tertiary)' }} />
              <BarChart3 className="w-5 h-5" strokeWidth={1.5} style={{ color: 'var(--text-tertiary)' }} />
              <Unlink className="w-5 h-5" strokeWidth={1.5} style={{ color: 'var(--text-tertiary)' }} />
              <span className="text-[10px] uppercase tracking-[0.2em] ml-2" style={{ color: 'var(--text-tertiary)' }}>
                Problem Space
              </span>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-16">
            {/* Left — narrative */}
            <div className="md:col-span-3">
              <Reveal>
                <h2
                  className="text-2xl md:text-3xl font-semibold mb-6 leading-snug"
                  style={{ color: 'var(--text-primary)' }}
                >
                  Enterprise users relied on manual reconciliation despite built-in automation
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="text-sm md:text-base font-light leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
                  Adoption was low because AI outputs lacked transparency, data density created cognitive
                  overload, and workflows were fragmented across multiple views.
                </p>
                <p className="text-sm md:text-base font-light italic" style={{ color: 'var(--text-secondary)' }}>
                  This reduced platform stickiness and limited module expansion.
                </p>
              </Reveal>
            </div>

            {/* Right — key tension */}
            <div className="md:col-span-2">
              <Reveal delay={0.15}>
                <div
                  className="rounded-xl p-6 md:p-8"
                  style={{ backgroundColor: 'var(--surface-secondary)' }}
                >
                  <p className="text-[10px] uppercase tracking-[0.2em] mb-4" style={{ color: 'var(--text-tertiary)' }}>
                    Core tension
                  </p>
                  <p
                    className="text-lg md:text-xl font-medium leading-snug italic"
                    style={{ fontFamily: 'var(--font-serif)', color: 'var(--text-primary)' }}
                  >
                    &ldquo;The AI is accurate — but I don&rsquo;t trust what I can&rsquo;t trace.&rdquo;
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <VerticalDivider />

      {/* ═══════════════════════════════════════════════════════
          MY OWNERSHIP — compact icon + list
          ═══════════════════════════════════════════════════════ */}
      <section className="pb-14 md:pb-18 px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="flex items-center justify-center gap-8 md:gap-12 mb-8">
              {[
                { icon: <Search className="w-8 h-8 md:w-10 md:h-10" strokeWidth={1.3} />, label: 'Discovery' },
                { icon: <Users className="w-8 h-8 md:w-10 md:h-10" strokeWidth={1.3} />, label: 'Leadership' },
                { icon: <Sparkles className="w-8 h-8 md:w-10 md:h-10" strokeWidth={1.3} />, label: 'AI Signals' },
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center gap-1.5">
                  <div style={{ color: 'var(--text-primary)' }}>{item.icon}</div>
                  <p className="text-[10px] uppercase tracking-wider" style={{ color: 'var(--text-tertiary)' }}>{item.label}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal>
            <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10" style={{ color: 'var(--text-primary)' }}>
              My Ownership
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex flex-col gap-4 max-w-xl mx-auto">
              {[
                'Led end-to-end UX strategy for reconciliation workflows',
                'Facilitated discovery with enterprise operations teams',
                'Partnered with Data Science to surface explainable AI signals',
                'Defined reusable workflow patterns across modules',
                'Mentored 2 designers',
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
          KEY INSIGHT — Large serif blockquote with left accent border
          (NOT a dark full-width band — unique to FundGuard)
          ═══════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-16">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.3em] mb-8 text-center" style={{ color: 'var(--text-tertiary)' }}>
              Key Insight
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div
              className="pl-8 md:pl-12"
              style={{ borderLeft: '3px solid var(--text-primary)' }}
            >
              <p
                className="text-3xl md:text-4xl lg:text-[44px] font-normal leading-[1.2] mb-4"
                style={{ fontFamily: 'var(--font-serif)', color: 'var(--text-primary)' }}
              >
                The issue wasn&rsquo;t functionality.
              </p>
              <p
                className="text-3xl md:text-4xl lg:text-[44px] font-normal leading-[1.2] italic"
                style={{ fontFamily: 'var(--font-serif)', color: 'var(--text-primary)' }}
              >
                It was trust.
              </p>
              <p className="mt-6 text-sm md:text-base font-light" style={{ color: 'var(--text-secondary)' }}>
                Users manually verified automated results even when accuracy was high.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <VerticalDivider />

      {/* ═══════════════════════════════════════════════════════
          THE APPROACH — Vertical timeline with connecting line
          (NOT a 2×2 grid — unique to FundGuard)
          ═══════════════════════════════════════════════════════ */}
      <section className="pb-14 md:pb-18 px-6 md:px-12 lg:px-16">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-semibold text-center mb-14" style={{ color: 'var(--text-primary)' }}>
              The Approach
            </h2>
          </Reveal>

          <div className="relative">
            {/* Connecting vertical line */}
            <div
              className="absolute left-[15px] md:left-[19px] top-4 bottom-4 w-px"
              style={{ backgroundColor: 'var(--border-subtle)' }}
            />

            {[
              { num: '01', text: 'Replace dashboard-heavy UI with guided workflows', icon: <Target className="w-5 h-5" strokeWidth={1.4} /> },
              { num: '02', text: 'Prioritize anomalies by financial impact', icon: <BarChart3 className="w-5 h-5" strokeWidth={1.4} /> },
              { num: '03', text: 'Add explainable AI signals — confidence indicators, traceable reasoning, audit trails', icon: <BrainCircuit className="w-5 h-5" strokeWidth={1.4} /> },
              { num: '04', text: 'Standardize enterprise interaction patterns across modules', icon: <Sparkles className="w-5 h-5" strokeWidth={1.4} /> },
            ].map((step, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="flex items-start gap-6 md:gap-8 mb-10 last:mb-0">
                  {/* Timeline node */}
                  <div
                    className="relative z-10 w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center flex-shrink-0 text-xs md:text-sm font-semibold"
                    style={{ backgroundColor: 'var(--text-primary)', color: 'white' }}
                  >
                    {step.num}
                  </div>
                  {/* Content */}
                  <div className="pt-1 flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div style={{ color: 'var(--text-tertiary)' }}>{step.icon}</div>
                    </div>
                    <p className="text-sm md:text-base font-light leading-relaxed" style={{ color: 'var(--text-primary)' }}>
                      {step.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <VerticalDivider />

      {/* ═══════════════════════════════════════════════════════
          THE SOLUTION — Stacked serif headings with rules
          (unique horizontal-rule separated solution cards)
          ═══════════════════════════════════════════════════════ */}
      <section className="pb-14 md:pb-18 px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="flex items-center justify-center gap-8 mb-8">
              {[
                { icon: <GitMerge className="w-8 h-8 md:w-10 md:h-10" strokeWidth={1.3} />, label: 'Flow' },
                { icon: <ShieldAlert className="w-8 h-8 md:w-10 md:h-10" strokeWidth={1.3} />, label: 'Exceptions' },
                { icon: <BrainCircuit className="w-8 h-8 md:w-10 md:h-10" strokeWidth={1.3} />, label: 'AI' },
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center gap-1.5">
                  <div style={{ color: 'var(--text-primary)' }}>{item.icon}</div>
                  <p className="text-[10px] uppercase tracking-wider" style={{ color: 'var(--text-tertiary)' }}>{item.label}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal>
            <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10" style={{ color: 'var(--text-primary)' }}>
              The Solution
            </h2>
          </Reveal>

          {[
            { title: 'Guided Reconciliation Flow', desc: 'Structured progression with visible status and checkpoints.' },
            { title: 'Intelligent Exception Handling', desc: 'Risk-based prioritization + contextual resolution tools.' },
            { title: 'Explainable AI', desc: 'Confidence indicators + traceable reasoning + audit trail.' },
          ].map((sol, i) => (
            <Reveal key={i}>
              <div
                className="py-10 md:py-12 text-center"
                style={{ borderBottom: i < 2 ? '1px solid var(--border-subtle)' : undefined }}
              >
                <p
                  className="text-lg md:text-xl font-semibold italic mb-3"
                  style={{ fontFamily: 'var(--font-serif)', color: 'var(--text-primary)' }}
                >
                  {sol.title}
                </p>
                <p className="text-sm md:text-base font-light max-w-md mx-auto" style={{ color: 'var(--text-secondary)' }}>
                  {sol.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <VerticalDivider />

      {/* ═══════════════════════════════════════════════════════
          DESIGN VISUALS
          ═══════════════════════════════════════════════════════ */}
      <section className="pb-8 md:pb-12 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <img src={imgCanvasAnnotated} alt="Canvas-based hierarchy view" className="w-full h-auto rounded-xl mb-5" loading="lazy" decoding="async" />
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <Reveal delay={0.08}>
              <img src={imgDesignFlow1} alt="Reconciliation workflow" className="w-full h-auto rounded-xl" loading="lazy" decoding="async" />
            </Reveal>
            <Reveal delay={0.16}>
              <img src={imgDesignFlow2} alt="Exception handling" className="w-full h-auto rounded-xl" loading="lazy" decoding="async" />
            </Reveal>
          </div>
          <Reveal className="mt-5">
            <img src={imgDesignFlow3} alt="AI confidence indicators" className="w-full h-auto rounded-xl" loading="lazy" decoding="async" />
          </Reveal>
          <Reveal className="mt-5">
            <img src={imgDesignFlow4} alt="Enterprise interaction patterns" className="w-full h-auto rounded-xl" loading="lazy" decoding="async" />
          </Reveal>
        </div>
      </section>

      <VerticalDivider />

      {/* ═══════════════════════════════════════════════════════
          RESULTS — Outlined stat cards on white
          (NOT a dark band — unique to FundGuard)
          ═══════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.3em] mb-4 text-center" style={{ color: 'var(--text-tertiary)' }}>
              Results
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold text-center mb-14" style={{ color: 'var(--text-primary)' }}>
              Measurable impact across the platform
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              { metric: '+30%', desc: 'increase in automation adoption' },
              { metric: '25%', desc: 'faster exception resolution' },
              { metric: null, icon: <CheckCircle2 className="w-10 h-10 md:w-12 md:h-12" strokeWidth={1.2} />, desc: 'Reduction in reconciliation-related support tickets' },
              { metric: null, icon: <CheckCircle2 className="w-10 h-10 md:w-12 md:h-12" strokeWidth={1.2} />, desc: 'Increased enterprise expansion into advanced modules' },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div
                  className="rounded-xl p-8 md:p-10 text-center h-full flex flex-col items-center justify-center"
                  style={{ border: '1px solid var(--border-subtle)' }}
                >
                  {item.metric ? (
                    <p className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
                      {item.metric}
                    </p>
                  ) : (
                    <div className="mb-3" style={{ color: 'var(--text-tertiary)' }}>{item.icon}</div>
                  )}
                  <p className="text-sm font-light" style={{ color: 'var(--text-secondary)' }}>
                    {item.desc}
                  </p>
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
        <img src={imgClosing} alt="FundGuard — enterprise UX at scale" loading="lazy" decoding="async" className="w-full h-auto object-cover" />
        <div className="absolute inset-0 flex items-center">
          <div className="ml-auto mr-4 md:mr-12 lg:mr-20 max-w-[40%] md:max-w-sm lg:max-w-md">
            <p className="text-[10px] leading-3 md:text-base md:leading-7 mb-1 md:mb-2 text-white font-light tracking-wide">
              &ldquo;Enterprise UX succeeds when users stop fighting the interface
            </p>
            <p className="text-xs leading-4 md:text-3xl md:leading-snug lg:text-[48px] lg:leading-snug text-white font-light tracking-wide">
              and start reasoning about the system&rdquo;
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
          <div />
          <div className="text-right">
            <p className="text-[11px] uppercase tracking-[0.15em] mb-1" style={{ color: 'var(--text-tertiary)' }}>Next Case Study</p>
            <p className="text-base md:text-lg font-medium flex items-center gap-2" style={{ color: 'var(--text-primary)' }}>
              monday.com
              <ArrowRight className="w-4 h-4" />
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
