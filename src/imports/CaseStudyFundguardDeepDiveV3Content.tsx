import { type ReactNode } from 'react';
import { motion } from 'motion/react';

import imgTableBefore from '@/assets/fg-table-before.png';
import imgGroupView from '@/assets/fg-workflow-group-view.png';
import imgGridView from '@/assets/fg-workflow-grid-view.png';
import imgStepTimeline from '@/assets/fg-workflow-step-timeline.png';
import imgStepTable from '@/assets/fg-workflow-step-table.png';
import imgHierarchyCanvas from '@/assets/fg-hierarchy-canvas.png';
import imgCanvasAnnotated from '@/assets/fg-canvas-annotated.png';
import imgHeroDashboard from '@/assets/fg-hierarchy-view.png';
import imgFlow1 from '@/assets/fg-flow-1.png';
import imgFlow2 from '@/assets/fg-flow-2.png';

import {
  ArrowRight,
  ArrowDown,
  AlertTriangle,
  ShieldCheck,
  Target,
  BarChart3,
  CheckCircle2,
  FileSpreadsheet,
  Clock,
  XCircle,
  TrendingUp,
  Brain,
  Activity,
  Bell,
  BellOff,
  Filter,
  Layers,
  Eye,
  Users,
  Zap,
  ChevronRight,
  Gauge,
  MousePointer2,
  MousePointerClick,
} from 'lucide-react';

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
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.7, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}

function HRule() {
  return (
    <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-16">
      <div className="w-full h-px" style={{ backgroundColor: 'var(--border-subtle)' }} />
    </div>
  );
}

function BigNum({ n }: { n: number }) {
  return (
    <span
      className="block text-[80px] md:text-[110px] lg:text-[140px] font-bold leading-none select-none"
      style={{ color: 'var(--text-primary)', opacity: 0.05 }}
    >
      {String(n).padStart(2, '0')}
    </span>
  );
}

function BigNumWhite({ n }: { n: number }) {
  return (
    <span
      className="block text-[80px] md:text-[110px] lg:text-[140px] font-bold leading-none select-none"
      style={{ opacity: 0.05, color: 'white' }}
    >
      {String(n).padStart(2, '0')}
    </span>
  );
}

/* ================================================================
   FUNDGUARD DEEP DIVE V3 — LONG-FORM NARRATIVE
   ──────────────────────────────────────────────────────────────
   Story arc: tension → discovery → hypothesis → solution →
   validation → outcome.
   Factual, calm, analytical. No hype.
   ================================================================ */
export default function CaseStudyFundguardDeepDiveV3Content({
  onBackToFundguard,
}: {
  onBackToFundguard?: () => void;
}) {
  return (
    <div style={{ backgroundColor: 'var(--surface-primary)' }}>

      {/* ═══════════════════════════════════════════════════════
          1. TITLE — Dramatic hero with full-bleed image
          ═══════════════════════════════════════════════════════ */}
      <section className="min-h-[90vh] flex flex-col justify-center px-6 md:px-12 lg:px-16 pt-24 pb-16">
        <div className="max-w-5xl mx-auto w-full">
          <Reveal>
            <p className="text-[10px] md:text-xs uppercase tracking-[0.4em] mb-10" style={{ color: 'var(--text-tertiary)' }}>
              Deep Dive — FundGuard
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-[1.06] mb-8 max-w-4xl" style={{ color: 'var(--text-primary)' }}>
              From Row-Level Accuracy<br className="hidden md:block" /> to Operational Intelligence
            </h1>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="text-lg md:text-xl font-light max-w-2xl leading-relaxed mb-14" style={{ color: 'var(--text-secondary)' }}>
              How a technically correct automation platform failed its users — and the research, structural redesign, and AI-driven notification layer that turned data visibility into operational trust.
            </p>
          </Reveal>

          <Reveal delay={0.22}>
            <div className="flex flex-wrap gap-x-12 gap-y-6 mb-8">
              {[
                { label: 'Role', value: 'Head of Product Design' },
                { label: 'Team', value: 'PM · 6 Engineers · Data Science · Enterprise Operations' },
              ].map((m) => (
                <div key={m.label}>
                  <p className="text-[10px] uppercase tracking-[0.2em] mb-1" style={{ color: 'var(--text-tertiary)' }}>{m.label}</p>
                  <p className="text-sm font-light" style={{ color: 'var(--text-primary)' }}>{m.value}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.26}>
            <div className="mb-10">
              <p className="text-[10px] uppercase tracking-[0.2em] mb-3" style={{ color: 'var(--text-tertiary)' }}>Scope</p>
              <div className="flex flex-wrap gap-2">
                {['Reconciliation workflows', 'Notification system', 'AI triage layer', 'A/B validation', 'Fund hierarchy'].map((s) => (
                  <span key={s} className="text-xs font-light px-3 py-1.5 rounded-full" style={{ border: '1px solid var(--border-subtle)', color: 'var(--text-primary)' }}>
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="flex flex-wrap gap-x-14 gap-y-4 pt-10" style={{ borderTop: '1px solid var(--border-subtle)' }}>
              {[
                { metric: '5%→0.2%', desc: 'Error rate' },
                { metric: '+30%', desc: 'Automation adoption' },
                { metric: '+40%', desc: 'Resolution speed' },
              ].map((item, i) => (
                <div key={i}>
                  <p className="text-3xl md:text-4xl font-bold" style={{ color: 'var(--text-primary)' }}>{item.metric}</p>
                  <p className="text-xs font-light mt-1" style={{ color: 'var(--text-secondary)' }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Hero image — full-bleed with gradient overlay */}
      <Reveal>
        <div className="relative">
          <div className="absolute inset-0 z-10 pointer-events-none" style={{ background: 'linear-gradient(180deg, var(--surface-primary) 0%, transparent 15%, transparent 85%, var(--surface-primary) 100%)' }} />
          <img src={imgHeroDashboard} alt="FundGuard reconciliation dashboard — fund hierarchy view" className="w-full h-auto" loading="eager" decoding="async" />
        </div>
      </Reveal>

      <HRule />

      {/* ═══════════════════════════════════════════════════════
          2. THE REALITY — Full-bleed dark band
          ═══════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-16 text-white" style={{ backgroundColor: 'var(--color-gray-900)' }}>
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="relative mb-4">
              <BigNumWhite n={1} />
              <h2 className="absolute bottom-2 left-0 text-2xl md:text-3xl font-bold text-white">
                The Reality We Walked Into
              </h2>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="text-base md:text-lg font-normal text-white/70 mb-16 max-w-xl leading-relaxed">
              State Street runs reconciliation at a scale most teams never encounter. Every business day, before markets open, the window is non-negotiable.
            </p>
          </Reveal>

          <Reveal delay={0.14}>
            <div className="rounded-2xl px-8 md:px-12 py-10 md:py-14 mb-12" style={{ backgroundColor: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <p className="text-[11px] uppercase tracking-[0.3em] font-semibold text-white/30 mb-8">The Scale</p>
              <p className="text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-none mb-3">10,000</p>
              <p className="text-base md:text-lg font-normal text-white/70 mb-8">accountants verifying fund transactions across ~10 systems — every day</p>
              <div className="flex flex-wrap gap-x-6 gap-y-3">
                {['P&L verification', 'Ledger matching', 'FX conversion', 'Tax calculations', 'NAV production'].map((item) => (
                  <span key={item} className="text-xs font-medium text-white/40 px-3 py-1.5 rounded-full" style={{ border: '1px solid rgba(255,255,255,0.1)' }}>{item}</span>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-[11px] uppercase tracking-[0.3em] font-semibold text-white/30 mb-6">The Cost</p>
            <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-4 md:gap-8 items-start mb-12">
              <div>
                <p className="text-5xl md:text-6xl font-bold text-white">~5%</p>
                <p className="text-xs font-normal text-white/40 mt-1">typical error rate</p>
              </div>
              <div className="flex flex-col gap-2 pt-1">
                <p className="text-sm font-normal text-white/70">Incorrect NAV sent to investors and regulators</p>
                <p className="text-sm font-normal text-white/70">Rework cycles, compliance exposure, financial liability</p>
                <p className="text-sm font-normal text-white/70">Hundreds of millions in annual operating cost</p>
              </div>
            </div>
          </Reveal>

          {/* Timeline image inside dark band */}
          <Reveal delay={0.26}>
            <div className="rounded-2xl overflow-hidden mb-3" style={{ border: '1px solid rgba(255,255,255,0.08)' }}>
              <img src={imgStepTimeline} alt="Reconciliation lifecycle — each row represents a fund's daily processing" className="w-full h-auto opacity-85" loading="lazy" decoding="async" />
            </div>
            <p className="text-xs font-light text-center mb-10 text-white/30">
              The operational heartbeat — each row is a fund\u2019s daily reconciliation lifecycle
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="pt-8" style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
              <p className="text-xl md:text-2xl font-normal text-white leading-snug" style={{ fontFamily: 'var(--font-serif)' }}>
                At this scale, manual review isn\u2019t slow.
                <span className="block mt-2 text-white/50 italic">It\u2019s structurally unsustainable.</span>
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          3. THE FIRST WIN — Dramatic metric + annotated image
          ═══════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-16">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <div className="relative mb-6">
              <BigNum n={2} />
              <h2 className="absolute bottom-2 left-0 text-2xl md:text-3xl font-bold" style={{ color: 'var(--text-primary)' }}>
                FundGuard Automated What Humans Verified Line by Line.
              </h2>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="text-base md:text-lg font-light max-w-xl leading-relaxed mb-14" style={{ color: 'var(--text-secondary)' }}>
              The platform replaced manual line-level checking with automated row-level accuracy validation. It compared accounting records against real-time investment positions, flagged discrepancies, and identified gaps continuously.
            </p>
          </Reveal>

          {/* Giant metric */}
          <Reveal delay={0.14}>
            <div className="text-center mb-14">
              <div className="flex items-baseline justify-center gap-4 md:gap-8">
                <p className="text-6xl md:text-7xl lg:text-8xl font-bold leading-none" style={{ color: 'var(--text-tertiary)', opacity: 0.3 }}>5%</p>
                <ArrowRight className="w-8 h-8 md:w-10 md:h-10" strokeWidth={1.5} style={{ color: 'var(--text-tertiary)' }} />
                <p className="text-6xl md:text-7xl lg:text-8xl font-bold leading-none" style={{ color: 'var(--text-primary)' }}>0.2%</p>
              </div>
              <p className="text-sm font-light mt-4" style={{ color: 'var(--text-secondary)' }}>96% reduction in error rate</p>
            </div>
          </Reveal>

          {/* Annotated screenshot */}
          <Reveal delay={0.2}>
            <div className="relative rounded-2xl overflow-hidden shadow-sm" style={{ border: '1px solid var(--border-subtle)' }}>
              <div className="absolute inset-0 z-10 pointer-events-none" style={{ background: 'linear-gradient(180deg, transparent 60%, var(--surface-primary) 100%)', opacity: 0.3 }} />
              <img src={imgStepTable} alt="Step-based reconciliation table — automated validation" className="w-full h-auto" loading="lazy" decoding="async" />
              <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 z-20">
                <span className="text-[10px] md:text-xs font-semibold uppercase tracking-wide px-3 py-1.5 rounded-md backdrop-blur-sm" style={{ backgroundColor: 'rgba(0,0,0,0.75)', color: 'white' }}>Real-time gap identification</span>
              </div>
            </div>
            <p className="text-xs font-light text-center mt-3" style={{ color: 'var(--text-tertiary)' }}>
              Figure: The automated reconciliation surface — real-time gap identification across steps
            </p>
          </Reveal>

          {/* Tension blockquote */}
          <Reveal delay={0.28}>
            <div className="mt-14 pt-8" style={{ borderTop: '1px solid var(--border-subtle)' }}>
              <p className="text-xl md:text-2xl font-normal leading-snug" style={{ fontFamily: 'var(--font-serif)', color: 'var(--text-primary)' }}>
                Technically solved. Behaviorally, the story was different.
              </p>
              <p className="text-base font-light italic mt-3" style={{ fontFamily: 'var(--font-serif)', color: 'var(--text-secondary)' }}>
                Users continued rechecking, exporting to Excel, and running parallel workflows. The automation was correct — but not trusted.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <HRule />

      {/* ═══════════════════════════════════════════════════════
          4. V1 TABLE — Full-bleed annotated screenshot
          ═══════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-16">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <div className="relative mb-6">
              <BigNum n={3} />
              <h2 className="absolute bottom-2 left-0 text-2xl md:text-3xl font-bold" style={{ color: 'var(--text-primary)' }}>
                The First Interface Reflected the Database — Not Operations.
              </h2>
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <p className="text-base md:text-lg font-light max-w-xl leading-relaxed mb-14" style={{ color: 'var(--text-secondary)' }}>
              The V1 table was a direct surface of the reconciliation data model. Every relevant field was present. But it wasn\u2019t designed for how operations teams actually work.
            </p>
          </Reveal>

          {/* Screenshot with overlay annotations */}
          <Reveal delay={0.1}>
            <div className="relative rounded-2xl overflow-hidden mb-3 shadow-sm" style={{ border: '1px solid var(--border-subtle)' }}>
              <div className="absolute inset-0 z-10 pointer-events-none" style={{ background: 'linear-gradient(180deg, transparent 40%, var(--surface-primary) 100%)', opacity: 0.25 }} />
              <img src={imgTableBefore} alt="V1 Table — Status, Issues/Gaps, Date+Time, Financial institution" className="w-full h-auto" loading="lazy" decoding="async" />
              <div className="absolute top-3 left-3 md:top-5 md:left-5 z-20 flex flex-col gap-2">
                {['Flat rows', 'No hierarchy', 'No risk signal', 'Equal weight'].map((label) => (
                  <span key={label} className="inline-block text-[10px] md:text-xs font-semibold uppercase tracking-wide px-3 py-1.5 rounded-md backdrop-blur-sm" style={{ backgroundColor: 'rgba(0,0,0,0.75)', color: 'white' }}>{label}</span>
                ))}
              </div>
            </div>
            <p className="text-xs font-light text-center mb-14" style={{ color: 'var(--text-tertiary)' }}>
              Figure: V1 reconciliation table — Status, Issues/Gaps, Date+Time, Financial Institution
            </p>
          </Reveal>

          {/* What V1 contained — two-column asymmetric */}
          <Reveal delay={0.16}>
            <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-10 md:gap-16 mb-14">
              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] font-semibold mb-6" style={{ color: 'var(--text-tertiary)' }}>What V1 contained</p>
                <div className="flex flex-col gap-4">
                  {[
                    { label: 'Status', desc: 'Pass/fail per row' },
                    { label: 'Issues / Gaps', desc: 'Flagged discrepancies' },
                    { label: 'Date + Time', desc: 'Timestamp per event' },
                    { label: 'Institution', desc: 'Financial entity name' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-baseline gap-3">
                      <p className="text-sm font-semibold w-28 flex-shrink-0" style={{ color: 'var(--text-primary)' }}>{item.label}</p>
                      <p className="text-sm font-light" style={{ color: 'var(--text-secondary)' }}>{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] font-semibold mb-6" style={{ color: 'var(--text-tertiary)' }}>What V1 missed</p>
                <div className="flex flex-col gap-4">
                  {[
                    'How teams were organized (groups of ~10)',
                    'How asset managers monitored across fund groups',
                    'What happened when data streamed in real time',
                    'Which client was actually at risk',
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <XCircle className="w-4 h-4 mt-0.5 flex-shrink-0" strokeWidth={1.3} style={{ color: 'var(--text-tertiary)' }} />
                      <p className="text-sm font-light" style={{ color: 'var(--text-secondary)' }}>{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="pt-8" style={{ borderTop: '1px solid var(--border-subtle)' }}>
              <p className="text-xl md:text-2xl font-normal leading-snug" style={{ fontFamily: 'var(--font-serif)', color: 'var(--text-primary)' }}>
                The table exposed data. It never exposed operational structure.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <HRule />

      {/* ═══════════════════════════════════════════════════════
          5. WHERE IT BROKE — Dark band, horizontal cards
          ═══════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-16 text-white" style={{ backgroundColor: 'var(--color-gray-900)' }}>
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <div className="relative mb-4">
              <BigNumWhite n={4} />
              <h2 className="absolute bottom-2 left-0 text-2xl md:text-3xl font-bold text-white">
                Three Structural Failures Surfaced Through Research.
              </h2>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="text-base font-light text-white/50 mb-16 max-w-xl">
              Through workflow shadowing and interviews, we mapped the behavioral signals to three root causes.
            </p>
          </Reveal>

          {/* Three failures — numbered horizontal */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16">
            {[
              {
                num: '01',
                icon: <Users className="w-5 h-5" strokeWidth={1.3} />,
                title: 'Team structure mismatch',
                body: 'Teams work in groups of ~10. Asset managers need a bird\u2019s-eye view — not individual rows.',
                insight: 'The interface was organized by data. The work was organized by people.',
              },
              {
                num: '02',
                icon: <Bell className="w-5 h-5" strokeWidth={1.3} />,
                title: 'Notification flood',
                body: 'Every gap, anomaly, and status change triggered an alert. Without deduplication, hundreds competed for attention.',
                insight: 'The system was loudest about things that mattered least.',
              },
              {
                num: '03',
                icon: <AlertTriangle className="w-5 h-5" strokeWidth={1.3} />,
                title: 'Noise eroded trust',
                body: 'When every notification feels equally urgent, none feel trustworthy. Users fell back on Excel and manual checks.',
                insight: 'Accurate automation, operationally invisible under noise.',
              },
            ].map((item, i) => (
              <Reveal key={i} delay={0.12 + i * 0.06}>
                <div className="rounded-xl p-6 md:p-7 h-full flex flex-col" style={{ backgroundColor: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <div className="flex items-center gap-3 mb-5">
                    <span className="text-xs font-bold text-white/20">{item.num}</span>
                    <div className="text-white/40">{item.icon}</div>
                    <p className="text-sm font-semibold text-white">{item.title}</p>
                  </div>
                  <p className="text-sm font-light text-white/60 leading-relaxed mb-4 flex-grow">{item.body}</p>
                  <p className="text-sm font-light italic text-white/80" style={{ fontFamily: 'var(--font-serif)' }}>{item.insight}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Feedback loop — large, cinematic */}
          <Reveal delay={0.3}>
            <div className="rounded-2xl px-8 md:px-12 py-10 md:py-12" style={{ backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
              <p className="text-[10px] uppercase tracking-[0.25em] text-white/20 mb-8 text-center">The feedback loop</p>
              <div className="flex items-center justify-between gap-2 md:gap-0 max-w-3xl mx-auto">
                {[
                  { icon: <Activity className="w-6 h-6 md:w-7 md:h-7" strokeWidth={1.2} />, label: 'Streaming data' },
                  { icon: <Bell className="w-6 h-6 md:w-7 md:h-7" strokeWidth={1.2} />, label: 'Alert flood' },
                  { icon: <BellOff className="w-6 h-6 md:w-7 md:h-7" strokeWidth={1.2} />, label: 'Alert fatigue' },
                  { icon: <FileSpreadsheet className="w-6 h-6 md:w-7 md:h-7" strokeWidth={1.2} />, label: 'Excel fallback' },
                  { icon: <XCircle className="w-6 h-6 md:w-7 md:h-7" strokeWidth={1.2} />, label: 'Trust erosion' },
                ].map((item, i, arr) => (
                  <div key={i} className="flex items-center gap-2 md:gap-4">
                    <div className="flex flex-col items-center gap-2">
                      <div className="text-white/50">{item.icon}</div>
                      <p className="text-[9px] md:text-xs font-medium text-white/50">{item.label}</p>
                    </div>
                    {i < arr.length - 1 && (
                      <ArrowRight className="w-3 h-3 md:w-4 md:h-4 text-white/15 flex-shrink-0" strokeWidth={1.5} />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          6. HYPOTHESES — Large numbered, alternating layout
          ═══════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-16">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <div className="relative mb-6">
              <BigNum n={5} />
              <h2 className="absolute bottom-2 left-0 text-2xl md:text-3xl font-bold" style={{ color: 'var(--text-primary)' }}>
                Three Hypotheses Guided the Redesign.
              </h2>
            </div>
          </Reveal>

          <div className="flex flex-col gap-0 mt-14">
            {[
              {
                id: 'H1',
                statement: 'If the interface mirrors organizational structure (asset manager \u2192 fund group \u2192 fund), users will orient faster and need fewer clicks.',
                rationale: 'Teams work in groups of ~10. Asset managers need portfolio-level awareness, not row-level scanning.',
                risk: 'Adding a new layer introduces navigation cost. Drill-down must be fast and contextual.',
                proof: 'Time-to-answer for "which client is at risk" should decrease measurably.',
              },
              {
                id: 'H2',
                statement: 'If notifications are deduplicated, time-windowed, and severity-ranked, users will act on alerts instead of ignoring them.',
                rationale: 'Streaming data creates duplicate alerts for the same underlying issue. Volume destroys signal.',
                risk: 'Aggressive deduplication could suppress genuine issues. False negatives are worse than noise.',
                proof: 'Alert click-through rate should increase. Excel export frequency should decrease.',
              },
              {
                id: 'H3',
                statement: 'If users receive specific workflow context in notifications (not just "an issue was found"), they will resolve exceptions faster.',
                rationale: 'Generic alerts force users to investigate context themselves. The notification should carry enough information to act.',
                risk: 'More detail per notification increases cognitive cost per item. Balance is critical.',
                proof: 'A/B test: lean notification vs detailed notification. Compare click-through and hover engagement.',
              },
            ].map((h, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="grid grid-cols-1 md:grid-cols-[80px_1fr] gap-4 md:gap-8 py-10" style={{ borderBottom: '1px solid var(--border-subtle)' }}>
                  <div className="flex-shrink-0">
                    <span className="text-4xl md:text-5xl font-bold" style={{ color: 'var(--text-primary)', opacity: 0.12 }}>{h.id}</span>
                  </div>
                  <div>
                    <p className="text-base md:text-lg font-medium leading-relaxed mb-6" style={{ color: 'var(--text-primary)' }}>
                      {h.statement}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {[
                        { label: 'Rationale', text: h.rationale },
                        { label: 'Risk', text: h.risk },
                        { label: 'Validation', text: h.proof },
                      ].map((col) => (
                        <div key={col.label}>
                          <p className="text-[10px] uppercase tracking-[0.15em] mb-2 font-semibold" style={{ color: 'var(--text-tertiary)' }}>{col.label}</p>
                          <p className="text-xs font-light leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{col.text}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <HRule />

      {/* ═══════════════════════════════════════════════════════
          7. THE STRUCTURAL SHIFT — Editorial gallery
          ═══════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-16">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <div className="relative mb-6">
              <BigNum n={6} />
              <h2 className="absolute bottom-2 left-0 text-2xl md:text-3xl font-bold" style={{ color: 'var(--text-primary)' }}>
                Two Connected Interventions.
              </h2>
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <p className="text-base md:text-lg font-light max-w-xl leading-relaxed mb-14" style={{ color: 'var(--text-secondary)' }}>
              We restructured the interface around how teams think and how urgency should be processed — not how the database was organized.
            </p>
          </Reveal>

          {/* Design flow artifacts — staggered */}
          <Reveal delay={0.1}>
            <p className="text-[10px] uppercase tracking-[0.25em] font-semibold mb-4" style={{ color: 'var(--text-tertiary)' }}>Design process artifacts</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-16">
              <div className="rounded-2xl overflow-hidden shadow-sm" style={{ border: '1px solid var(--border-subtle)' }}>
                <img src={imgFlow1} alt="Design flow — strategic mapping" className="w-full h-auto" loading="lazy" decoding="async" />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-sm md:mt-8" style={{ border: '1px solid var(--border-subtle)' }}>
                <img src={imgFlow2} alt="Design flow — system architecture" className="w-full h-auto" loading="lazy" decoding="async" />
              </div>
            </div>
          </Reveal>

          {/* Intervention 1: Dashboard */}
          <Reveal delay={0.14}>
            <div className="mb-20">
              <div className="flex items-center gap-4 mb-8">
                <span className="text-5xl md:text-6xl font-bold leading-none" style={{ color: 'var(--text-primary)', opacity: 0.08 }}>01</span>
                <div>
                  <p className="text-base md:text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>Dashboard aligned to organizational logic</p>
                  <p className="text-sm font-light mt-1" style={{ color: 'var(--text-secondary)' }}>Each card surfaces health score, task volume, delay metrics. One click, full context.</p>
                </div>
              </div>

              {/* Image gallery — staggered grid */}
              <div className="rounded-2xl overflow-hidden mb-3 shadow-sm" style={{ border: '1px solid var(--border-subtle)' }}>
                <img src={imgGroupView} alt="Dashboard — asset manager groups with health scores" className="w-full h-auto" loading="lazy" decoding="async" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                <div className="rounded-2xl overflow-hidden shadow-sm" style={{ border: '1px solid var(--border-subtle)' }}>
                  <img src={imgGridView} alt="Dashboard — dense grid monitoring" className="w-full h-auto" loading="lazy" decoding="async" />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-sm" style={{ border: '1px solid var(--border-subtle)' }}>
                  <img src={imgStepTimeline} alt="Drill-down — step-based timeline" className="w-full h-auto" loading="lazy" decoding="async" />
                </div>
              </div>
              <p className="text-xs font-light text-center mb-10" style={{ color: 'var(--text-tertiary)' }}>
                Group-level monitoring → dense grid → drill-down timeline per fund
              </p>

              {/* Canvas hierarchy — hero moment */}
              <div className="relative rounded-2xl overflow-hidden mb-3 shadow-sm" style={{ border: '1px solid var(--border-subtle)' }}>
                <img src={imgHierarchyCanvas} alt="Canvas-based fund hierarchy" className="w-full h-auto" loading="lazy" decoding="async" />
                <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 z-20">
                  <span className="text-[10px] md:text-xs font-semibold uppercase tracking-wide px-3 py-1.5 rounded-md backdrop-blur-sm" style={{ backgroundColor: 'rgba(0,0,0,0.75)', color: 'white' }}>Spatial structure</span>
                </div>
              </div>
              <p className="text-xs font-light text-center mb-10" style={{ color: 'var(--text-tertiary)' }}>
                Canvas-based fund hierarchy — relationships, allocations, and status visible spatially
              </p>

              {/* Impact row */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { label: 'Structural clarity', desc: 'UI mirrors team assignments.' },
                  { label: 'Cognitive reduction', desc: '500 rows \u2192 20 meaningful groups.' },
                  { label: 'Risk visibility', desc: '\u201CWhich client is at risk?\u201D — answered instantly.' },
                ].map((item, i) => (
                  <div key={i} className="pt-4" style={{ borderTop: '2px solid var(--text-primary)' }}>
                    <p className="text-sm font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>{item.label}</p>
                    <p className="text-xs font-light" style={{ color: 'var(--text-secondary)' }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Intervention 2: Aggregated notifications */}
          <Reveal delay={0.2}>
            <div>
              <div className="flex items-center gap-4 mb-8">
                <span className="text-5xl md:text-6xl font-bold leading-none" style={{ color: 'var(--text-primary)', opacity: 0.08 }}>02</span>
                <div>
                  <p className="text-base md:text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>Aggregated notification system</p>
                  <p className="text-sm font-light mt-1" style={{ color: 'var(--text-secondary)' }}>From raw streaming alerts to prioritized, deduplicated digests.</p>
                </div>
              </div>

              <div className="rounded-2xl p-8 md:p-12" style={{ backgroundColor: 'var(--surface-secondary)' }}>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  {[
                    { icon: <Clock className="w-6 h-6" strokeWidth={1.2} />, label: 'Time window', desc: 'Configurable scan period' },
                    { icon: <Filter className="w-6 h-6" strokeWidth={1.2} />, label: 'Deduplicate', desc: 'Merge identical gaps' },
                    { icon: <Layers className="w-6 h-6" strokeWidth={1.2} />, label: 'Group', desc: 'Related issues clustered' },
                    { icon: <Target className="w-6 h-6" strokeWidth={1.2} />, label: 'Prioritize', desc: 'Severity-ranked delivery' },
                  ].map((item, i) => (
                    <div key={i} className="flex flex-col items-center text-center gap-3">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--surface-primary)' }}>
                        <div style={{ color: 'var(--text-primary)' }}>{item.icon}</div>
                      </div>
                      <p className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>{item.label}</p>
                      <p className="text-xs font-light" style={{ color: 'var(--text-secondary)' }}>{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          8. THE AI LAYER — Dark band, cinematic
          ═══════════════════════════════════════════════════════ */}
      <section
        className="relative py-24 md:py-32 px-6 md:px-12 lg:px-16 text-white overflow-hidden"
        style={{ backgroundColor: 'var(--color-gray-900)' }}
      >
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)', backgroundSize: '80px 80px' }} />

        <div className="relative max-w-5xl mx-auto">
          <Reveal>
            <div className="relative mb-4">
              <BigNumWhite n={7} />
              <h2 className="absolute bottom-2 left-0 text-2xl md:text-3xl font-bold text-white">
                From Detection to Triage.
              </h2>
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <p className="text-base md:text-lg font-light text-white/60 max-w-xl mb-16">
              The notification system already collected gap data. The AI layer turned that raw data into operational intelligence.
            </p>
          </Reveal>

          {/* AI capabilities — 3-column grid */}
          <Reveal delay={0.12}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              {[
                { icon: <Brain className="w-5 h-5" strokeWidth={1.3} />, title: 'Pattern recognition', desc: 'Scans the full notification stream for recurrence and severity signals.' },
                { icon: <Gauge className="w-5 h-5" strokeWidth={1.3} />, title: 'Severity ranking', desc: 'Low to critical, based on financial impact and downstream risk.' },
                { icon: <Clock className="w-5 h-5" strokeWidth={1.3} />, title: 'Time-window scan', desc: 'Groups issues within the same operational window.' },
                { icon: <Filter className="w-5 h-5" strokeWidth={1.3} />, title: 'Deduplication', desc: 'One entry per root cause. Near-identical issues consolidated.' },
                { icon: <Zap className="w-5 h-5" strokeWidth={1.3} />, title: 'Fix suggestions', desc: 'Resolution steps from historical patterns and gap type.' },
                { icon: <Target className="w-5 h-5" strokeWidth={1.3} />, title: 'Right-time delivery', desc: 'Digest arrives when the user is most likely to act.' },
              ].map((item, i) => (
                <div key={i} className="rounded-xl p-5" style={{ backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <div className="text-white/40 mb-3">{item.icon}</div>
                  <p className="text-sm font-medium text-white mb-1">{item.title}</p>
                  <p className="text-xs font-light text-white/45">{item.desc}</p>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Structural context image */}
          <Reveal delay={0.2}>
            <div className="rounded-2xl overflow-hidden mb-12" style={{ border: '1px solid rgba(255,255,255,0.08)' }}>
              <img src={imgHeroDashboard} alt="Fund hierarchy — structural context AI validates" className="w-full h-auto opacity-75" loading="lazy" decoding="async" />
            </div>
          </Reveal>

          {/* AI digest — conceptual */}
          <Reveal delay={0.26}>
            <div className="rounded-2xl p-6 md:p-10" style={{ backgroundColor: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <p className="text-[10px] uppercase tracking-[0.25em] text-white/20 mb-8">AI Digest Output</p>
              <div className="flex flex-col gap-5">
                {[
                  { severity: 'Critical', color: 'rgba(239,68,68,0.85)', issue: 'NAV discrepancy — PIMCO Global Bond Fund', suggestion: 'Revalidate FX rates for EUR/USD position dated 02/19' },
                  { severity: 'High', color: 'rgba(245,158,11,0.85)', issue: 'Allocation mismatch — Vanguard Growth Equity (3 occurrences consolidated)', suggestion: 'Review feeding configuration for sub-fund B' },
                  { severity: 'Low', color: 'rgba(34,197,94,0.65)', issue: 'Timestamp drift — BlackRock Income Fund', suggestion: 'Auto-correctable. Confirm or dismiss.' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-5 rounded-xl" style={{ backgroundColor: 'rgba(255,255,255,0.03)' }}>
                    <div className="flex flex-col items-center gap-1 pt-1">
                      <span className="inline-block w-3 h-3 rounded-full flex-shrink-0" style={{ backgroundColor: item.color }} />
                    </div>
                    <div className="flex-grow">
                      <span className="text-[10px] uppercase font-bold tracking-wider" style={{ color: item.color }}>{item.severity}</span>
                      <p className="text-sm font-light text-white/75 mt-1">{item.issue}</p>
                      <p className="text-xs font-light text-white/35 mt-2">Suggestion: {item.suggestion}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          9. A/B TEST — Split comparison with VS divider
          ═══════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-16">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <div className="relative mb-6">
              <BigNum n={8} />
              <h2 className="absolute bottom-2 left-0 text-2xl md:text-3xl font-bold" style={{ color: 'var(--text-primary)' }}>
                Lean vs. Detailed — Which Notification Drives Action?
              </h2>
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <p className="text-base md:text-lg font-light max-w-xl leading-relaxed mb-14" style={{ color: 'var(--text-secondary)' }}>
              We hypothesized that users wanted specific workflow details in notifications — not just status labels. We tested two variants to validate.
            </p>
          </Reveal>

          {/* A/B Cards with VS */}
          <Reveal delay={0.12}>
            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-6 md:gap-0 items-stretch mb-14">
              {/* Variant A */}
              <div className="rounded-2xl p-6 md:p-8" style={{ backgroundColor: 'var(--surface-secondary)' }}>
                <p className="text-[10px] uppercase tracking-[0.25em] mb-6" style={{ color: 'var(--text-tertiary)' }}>Variant A — Lean</p>
                <div className="flex flex-col gap-4">
                  {[
                    'Status label only (pass/fail)',
                    'Fund name + timestamp',
                    'Generic "View details" action',
                    'No severity indicator',
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full mt-[7px] flex-shrink-0" style={{ backgroundColor: 'var(--text-tertiary)' }} />
                      <p className="text-sm font-light" style={{ color: 'var(--text-secondary)' }}>{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* VS divider */}
              <div className="hidden md:flex items-center justify-center px-6">
                <div className="flex flex-col items-center gap-3">
                  <div className="w-px h-16" style={{ backgroundColor: 'var(--border-subtle)' }} />
                  <span className="text-xs font-bold" style={{ color: 'var(--text-tertiary)' }}>VS</span>
                  <div className="w-px h-16" style={{ backgroundColor: 'var(--border-subtle)' }} />
                </div>
              </div>

              {/* Variant B */}
              <div className="rounded-2xl p-6 md:p-8" style={{ border: '2px solid var(--text-primary)' }}>
                <div className="flex items-center gap-2 mb-6">
                  <p className="text-[10px] uppercase tracking-[0.25em]" style={{ color: 'var(--text-tertiary)' }}>Variant B — Detailed</p>
                  <span className="text-[9px] uppercase font-bold tracking-wider px-2 py-0.5 rounded" style={{ backgroundColor: 'var(--text-primary)', color: 'var(--surface-primary)' }}>Winner</span>
                </div>
                <div className="flex flex-col gap-4">
                  {[
                    'Severity badge (low \u2192 critical)',
                    'Specific gap description',
                    'Contextual resolution suggestion',
                    'Impacted fund + downstream risk',
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" strokeWidth={1.4} style={{ color: 'var(--text-primary)' }} />
                      <p className="text-sm font-light" style={{ color: 'var(--text-primary)' }}>{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* KPIs */}
          <Reveal delay={0.18}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
              <div className="rounded-2xl p-6 md:p-8 flex items-start gap-4" style={{ backgroundColor: 'var(--surface-secondary)' }}>
                <MousePointerClick className="w-6 h-6 flex-shrink-0 mt-0.5" strokeWidth={1.2} style={{ color: 'var(--text-primary)' }} />
                <div>
                  <p className="text-sm font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>Clicks down</p>
                  <p className="text-xs font-light" style={{ color: 'var(--text-secondary)' }}>Variant B provided enough context to act directly from the notification.</p>
                </div>
              </div>
              <div className="rounded-2xl p-6 md:p-8 flex items-start gap-4" style={{ backgroundColor: 'var(--surface-secondary)' }}>
                <MousePointer2 className="w-6 h-6 flex-shrink-0 mt-0.5" strokeWidth={1.2} style={{ color: 'var(--text-primary)' }} />
                <div>
                  <p className="text-sm font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>Hovers up</p>
                  <p className="text-xs font-light" style={{ color: 'var(--text-secondary)' }}>Users engaged deeply — hovering to read severity and suggestions.</p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Giant results */}
          <Reveal delay={0.24}>
            <div className="text-center">
              <div className="flex items-baseline justify-center gap-8 md:gap-16">
                <div>
                  <p className="text-5xl md:text-6xl lg:text-7xl font-bold" style={{ color: 'var(--text-primary)' }}>+30%</p>
                  <p className="text-xs font-light mt-2" style={{ color: 'var(--text-secondary)' }}>engagement rate</p>
                </div>
                <div>
                  <p className="text-5xl md:text-6xl lg:text-7xl font-bold" style={{ color: 'var(--text-primary)' }}>+40%</p>
                  <p className="text-xs font-light mt-2" style={{ color: 'var(--text-secondary)' }}>resolution speed</p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-14 pt-8" style={{ borderTop: '1px solid var(--border-subtle)' }}>
              <p className="text-xl md:text-2xl font-normal leading-snug" style={{ fontFamily: 'var(--font-serif)', color: 'var(--text-primary)' }}>
                Users didn\u2019t want less information.
                <span className="block mt-1 italic" style={{ color: 'var(--text-secondary)' }}>They wanted the right information, in context.</span>
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          10. OUTCOME — Dark celebration band
          ═══════════════════════════════════════════════════════ */}
      <section className="relative py-24 md:py-32 px-6 md:px-12 lg:px-16 text-white overflow-hidden" style={{ backgroundColor: 'var(--color-gray-900)' }}>
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(255,255,255,0.03) 0%, transparent 70%)' }} />

        <div className="relative max-w-5xl mx-auto">
          <Reveal>
            <p className="text-[10px] uppercase tracking-[0.35em] text-center mb-6 text-white/30">Outcome</p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-16 text-white leading-snug max-w-3xl mx-auto">
              From row visibility and noisy alerts to operational structure and prioritized signal.
            </h2>
          </Reveal>

          {/* Giant metrics */}
          <Reveal delay={0.1}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16">
              {[
                { metric: '5%\u21920.2%', desc: 'Error rate' },
                { metric: '+30%', desc: 'Automation adoption' },
                { metric: '+30%', desc: 'Notification engagement' },
                { metric: '+40%', desc: 'Resolution speed' },
              ].map((item, i) => (
                <div key={i} className="rounded-xl py-8 text-center" style={{ border: '1px solid rgba(255,255,255,0.1)' }}>
                  <p className="text-2xl md:text-3xl font-bold text-white">{item.metric}</p>
                  <p className="text-xs font-light mt-2 text-white/40">{item.desc}</p>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Annotated canvas — the final system */}
          <Reveal delay={0.18}>
            <div className="rounded-2xl overflow-hidden mb-3" style={{ border: '1px solid rgba(255,255,255,0.08)' }}>
              <img src={imgCanvasAnnotated} alt="The redesigned system — canvas hierarchy" className="w-full h-auto opacity-85" loading="lazy" decoding="async" />
            </div>
            <p className="text-xs font-light text-center mb-12 text-white/25">
              The redesigned system — canvas hierarchy with visible relationships, allocations, and embedded status
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-base font-light text-white/60 leading-relaxed mb-4">
                The redesign addressed two connected problems simultaneously: the interface didn\u2019t match how teams worked, and the notification system didn\u2019t match how humans process urgency.
              </p>
              <p className="text-base font-light text-white/60 leading-relaxed">
                When the dashboard mirrored organizational logic and notifications carried genuine operational intelligence, users stopped building workarounds. They started relying on the system.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-14 pt-8 max-w-2xl mx-auto text-center" style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
              <p className="text-lg md:text-xl font-normal text-white leading-snug" style={{ fontFamily: 'var(--font-serif)' }}>
                Trust and adoption are linked through structural alignment:
                <span className="block mt-2 italic text-white/50">when the system reflects how users think, reliance follows naturally.</span>
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          11. KEY TAKEAWAYS — Large numbered editorial
          ═══════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <p className="text-[10px] uppercase tracking-[0.35em] mb-14 text-center" style={{ color: 'var(--text-tertiary)' }}>Key Takeaways</p>
          </Reveal>

          <div className="flex flex-col gap-0">
            {[
              'Automation accuracy is necessary but not sufficient. Users trust systems they can understand — not systems that are merely correct.',
              'Interface structure must reflect organizational logic. When the UI mirrors how teams work, cognitive load drops and orientation speed increases.',
              'Notification volume is the enemy of notification value. Deduplication, time-windowing, and severity ranking convert noise into signal.',
              'Detailed context outperforms lean summaries — when it\u2019s structured well. The A/B test confirmed that users want specificity, not brevity.',
              'Trust is built through inspectable reasoning, not through dashboards alone. The AI layer succeeded because its logic was visible, not because it was powerful.',
            ].map((item, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <div className="grid grid-cols-[60px_1fr] md:grid-cols-[80px_1fr] gap-4 py-8" style={{ borderBottom: '1px solid var(--border-subtle)' }}>
                  <span className="text-3xl md:text-4xl font-bold" style={{ color: 'var(--text-primary)', opacity: 0.08 }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p className="text-sm md:text-base font-light leading-relaxed pt-2" style={{ color: 'var(--text-primary)' }}>{item}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          CLOSING — Cinematic philosophy
          ═══════════════════════════════════════════════════════ */}
      <section className="relative py-28 md:py-36 px-6 md:px-12 lg:px-16 text-white overflow-hidden" style={{ backgroundColor: 'var(--color-gray-900)' }}>
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(255,255,255,0.03) 0%, transparent 70%)' }} />

        <div className="relative max-w-3xl mx-auto text-center">
          <Reveal>
            <div className="flex justify-center mb-10">
              <div className="w-12 h-px bg-white/20" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-2xl md:text-3xl lg:text-4xl font-normal leading-[1.3] mb-2 text-white" style={{ fontFamily: 'var(--font-serif)' }}>
              The gap between accurate automation and trusted automation
            </p>
            <p className="text-2xl md:text-3xl lg:text-4xl font-normal leading-[1.3] italic text-white/60" style={{ fontFamily: 'var(--font-serif)' }}>
              is never technical. It\u2019s cognitive.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="flex justify-center mt-10">
              <div className="w-12 h-px bg-white/20" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── NAVIGATION ── */}
      <section className="pt-16 pb-12 md:pb-16 px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto flex items-center justify-center">
          <button onClick={onBackToFundguard} className="group cursor-pointer text-center">
            <p className="text-[11px] uppercase tracking-[0.15em] mb-1" style={{ color: 'var(--text-tertiary)' }}>Back to</p>
            <p className="text-base md:text-lg font-medium flex items-center gap-2 group-hover:gap-3 transition-all duration-300" style={{ color: 'var(--text-primary)' }}>
              FundGuard Case Study
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </p>
          </button>
        </div>
      </section>
    </div>
  );
}
