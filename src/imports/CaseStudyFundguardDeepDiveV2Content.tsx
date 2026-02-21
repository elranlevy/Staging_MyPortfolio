import { type ReactNode } from 'react';
import { motion } from 'motion/react';

import imgStepTimeline from '@/assets/fg-workflow-step-timeline.png';
import imgStepTable from '@/assets/fg-workflow-step-table.png';
import imgGroupView from '@/assets/fg-workflow-group-view.png';
import imgGridView from '@/assets/fg-workflow-grid-view.png';
import imgTableBefore from '@/assets/fg-table-before.png';
import imgHierarchyCanvas from '@/assets/fg-hierarchy-canvas.png';
import imgCanvasAnnotated from '@/assets/fg-canvas-annotated.png';
import imgHeroDashboard from '@/assets/fg-hierarchy-view.png';
import imgFlow1 from '@/assets/fg-flow-1.png';
import imgFlow2 from '@/assets/fg-flow-2.png';

import {
  ArrowRight,
  AlertTriangle,
  ShieldCheck,
  Target,
  BarChart3,
  CheckCircle2,
  Search,
  LineChart,
  Handshake,
  FileSpreadsheet,
  Workflow,
  Eye,
  Layers,
  TrendingUp,
  Zap,
  Brain,
  Activity,
  Clock,
  XCircle,
  Users,
  ArrowDownRight,
} from 'lucide-react';

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

/* ── Slide divider — generous breathing room ─────────────────── */
function SlideDivider() {
  return (
    <div className="flex justify-center py-12 md:py-16">
      <div className="w-px h-10" style={{ backgroundColor: 'var(--border-subtle)' }} />
    </div>
  );
}

/* ── Icon badge — consistent across deck ─────────────────────── */
function IconLabel({
  icon,
  label,
  muted = false,
}: {
  icon: ReactNode;
  label: string;
  muted?: boolean;
}) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex-shrink-0" style={{ color: muted ? 'var(--text-tertiary)' : 'var(--text-primary)' }}>{icon}</div>
      <p className="text-sm font-medium" style={{ color: muted ? 'var(--text-secondary)' : 'var(--text-primary)' }}>{label}</p>
    </div>
  );
}

/* ================================================================
   FUNDGUARD DEEP DIVE V2 — EXECUTIVE PRESENTATION DECK
   ──────────────────────────────────────────────────────────────
   Visual-first. Minimal text. Icon-driven.
   Designed to support a live presenter.
   Slides amplify — they don't contain the story.
   ================================================================ */
export default function CaseStudyFundguardDeepDiveV2Content({
  onBackToFundguard,
}: {
  onBackToFundguard?: () => void;
}) {
  return (
    <div style={{ backgroundColor: 'var(--surface-primary)' }}>

      {/* ═══════════════════════════════════════════════════════
          HERO — Title card
          ═══════════════════════════════════════════════════════ */}
      <section className="min-h-[85vh] flex flex-col justify-center px-6 md:px-12 lg:px-16 pt-24 pb-16">
        <div className="max-w-4xl mx-auto w-full text-center">
          <Reveal>
            <p className="text-[10px] md:text-xs uppercase tracking-[0.4em] mb-10" style={{ color: 'var(--text-tertiary)' }}>
              Case Study — FundGuard
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] mb-6" style={{ color: 'var(--text-primary)' }}>
              Re-Architecting Trust<br />in Enterprise Automation
            </h1>
          </Reveal>

          <Reveal delay={0.18}>
            <p className="text-base md:text-lg font-light max-w-xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              From technically sound to operationally trusted.
            </p>
          </Reveal>

          <Reveal delay={0.28}>
            <div className="flex justify-center gap-x-10 gap-y-4 flex-wrap mt-16 pt-10" style={{ borderTop: '1px solid var(--border-subtle)' }}>
              {[
                { metric: '+30%', desc: 'Adoption' },
                { metric: '25%', desc: 'Faster resolution' },
                { metric: '5%→0.2%', desc: 'Error rate' },
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <p className="text-3xl md:text-4xl font-bold" style={{ color: 'var(--text-primary)' }}>{item.metric}</p>
                  <p className="text-xs font-light mt-1" style={{ color: 'var(--text-secondary)' }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.34}>
            <div className="flex justify-center gap-x-10 gap-y-3 flex-wrap mt-10">
              {[
                { label: 'Role', value: 'Head of Product Design' },
                { label: 'Team', value: 'PM · 6 Eng · Data Science · Ops' },
              ].map((m) => (
                <div key={m.label} className="text-center">
                  <p className="text-[10px] uppercase tracking-[0.2em] mb-1" style={{ color: 'var(--text-tertiary)' }}>{m.label}</p>
                  <p className="text-sm font-light" style={{ color: 'var(--text-primary)' }}>{m.value}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <SlideDivider />

      {/* ═══════════════════════════════════════════════════════
          SLIDE 1 — THE SCALE
          Large number. Icon callouts. One tension line.
          ═══════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-32 px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <p className="text-[10px] uppercase tracking-[0.35em] mb-16" style={{ color: 'var(--text-tertiary)' }}>The Problem</p>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="text-8xl md:text-9xl lg:text-[10rem] font-bold leading-none" style={{ color: 'var(--text-primary)' }}>
              10,000
            </p>
            <p className="text-base md:text-lg font-light mt-4" style={{ color: 'var(--text-secondary)' }}>
              accountants. Manual verification. Every day.
            </p>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="flex justify-center gap-8 md:gap-12 mt-16 flex-wrap">
              {[
                { icon: <BarChart3 className="w-5 h-5" strokeWidth={1.3} />, label: 'P&L checks' },
                { icon: <Activity className="w-5 h-5" strokeWidth={1.3} />, label: 'FX conversion' },
                { icon: <ShieldCheck className="w-5 h-5" strokeWidth={1.3} />, label: 'NAV production' },
                { icon: <Clock className="w-5 h-5" strokeWidth={1.3} />, label: 'Before markets open' },
              ].map((item) => (
                <div key={item.label} className="flex flex-col items-center gap-2">
                  <div style={{ color: 'var(--text-primary)' }}>{item.icon}</div>
                  <p className="text-xs font-medium" style={{ color: 'var(--text-primary)' }}>{item.label}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.28}>
            <p className="text-xl md:text-2xl font-normal mt-20 leading-snug" style={{ fontFamily: 'var(--font-serif)', color: 'var(--text-primary)' }}>
              ~5% error rate in reported files.
              <span className="block text-base mt-2 font-light italic" style={{ color: 'var(--text-secondary)' }}>Hundreds of millions in annual operating cost.</span>
            </p>
          </Reveal>
        </div>
      </section>

      <SlideDivider />

      {/* ═══════════════════════════════════════════════════════
          SLIDE 2 — THE FLAT TABLE
          Large screenshot. 3 callouts. One bold insight.
          ═══════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-16">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center" style={{ color: 'var(--text-primary)' }}>
              Data Was There. Structure Was Not.
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative rounded-2xl overflow-hidden shadow-sm" style={{ border: '1px solid var(--border-subtle)' }}>
              <div className="absolute inset-0 z-10 pointer-events-none" style={{ background: 'linear-gradient(180deg, transparent 40%, var(--surface-primary) 100%)', opacity: 0.3 }} />
              <img src={imgStepTable} alt="Flat table — every column present, no structure" className="w-full h-auto" loading="lazy" decoding="async" />

              <div className="absolute top-4 left-4 md:top-6 md:left-6 z-20 flex flex-col gap-2.5">
                {['Flat rows', 'No hierarchy', 'No risk signal'].map((label) => (
                  <span key={label} className="inline-block text-xs md:text-sm font-bold uppercase tracking-wide px-4 py-2 rounded-lg backdrop-blur-sm" style={{ backgroundColor: 'rgba(0,0,0,0.8)', color: 'white' }}>
                    {label}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-xl md:text-2xl font-normal text-center mt-12" style={{ fontFamily: 'var(--font-serif)', color: 'var(--text-primary)' }}>
              The table exposed data. It never exposed operations.
            </p>
          </Reveal>
        </div>
      </section>

      <SlideDivider />

      {/* ═══════════════════════════════════════════════════════
          SLIDE 3 — GROUP-LEVEL DASHBOARD
          Card grid. Health rings. 3 icon benefits.
          ═══════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-16">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center" style={{ color: 'var(--text-primary)' }}>
              Structure Mirrored Operations.
            </h2>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="rounded-2xl overflow-hidden mb-4 shadow-sm" style={{ border: '1px solid var(--border-subtle)' }}>
              <img src={imgGroupView} alt="Group-level dashboard — asset manager cards with health rings" className="w-full h-auto" loading="lazy" decoding="async" />
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="rounded-2xl overflow-hidden mb-14 shadow-sm" style={{ border: '1px solid var(--border-subtle)' }}>
              <img src={imgGridView} alt="Dense grid view — dozens of fund groups at a glance" className="w-full h-auto" loading="lazy" decoding="async" />
            </div>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="flex justify-center gap-10 md:gap-16 flex-wrap">
              {[
                { icon: <Layers className="w-6 h-6" strokeWidth={1.2} />, label: 'Cognitive chunking' },
                { icon: <Target className="w-6 h-6" strokeWidth={1.2} />, label: 'Risk visible instantly' },
                { icon: <Users className="w-6 h-6" strokeWidth={1.2} />, label: 'Org structure mirrored' },
              ].map((item) => (
                <div key={item.label} className="flex flex-col items-center gap-2.5">
                  <div style={{ color: 'var(--text-primary)' }}>{item.icon}</div>
                  <p className="text-xs font-medium" style={{ color: 'var(--text-primary)' }}>{item.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <SlideDivider />

      {/* ═══════════════════════════════════════════════════════
          SLIDE 4 — TIMELINE VIEW
          Time axis. Big question. Bottleneck visual.
          ═══════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-16">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center" style={{ color: 'var(--text-primary)' }}>
              Sequence Made Visible.
            </h2>
            <p className="text-base font-light text-center mb-12" style={{ color: 'var(--text-secondary)' }}>
              Where is the bottleneck? Are we missing SLA?
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-2xl overflow-hidden mb-14 shadow-sm" style={{ border: '1px solid var(--border-subtle)' }}>
              <img src={imgStepTimeline} alt="Step-based timeline — reconciliation lifecycle across time axis" className="w-full h-auto" loading="lazy" decoding="async" />
            </div>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="flex justify-center gap-4 md:gap-6 flex-wrap">
              {['Date Roll', 'Processing', 'Accounting', 'Pricing', 'End-of-Day'].map((step) => (
                <span key={step} className="text-xs font-medium px-4 py-2 rounded-full" style={{ border: '1px solid var(--border-subtle)', color: 'var(--text-primary)' }}>
                  {step}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <SlideDivider />

      {/* ═══════════════════════════════════════════════════════
          SLIDE 5 — THE TRUST GAP (dark band)
          Split visual: capabilities vs behaviors. Center statement.
          ═══════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-16 text-white" style={{ backgroundColor: 'var(--color-gray-900)' }}>
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <p className="text-[10px] uppercase tracking-[0.35em] text-center mb-16 text-white/30">The Trust Gap</p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-8 md:gap-0 items-center mb-16">
              {/* Left — System capabilities */}
              <div className="flex flex-col gap-5 md:pr-12">
                <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-2">The system had</p>
                {[
                  { icon: <Zap className="w-4 h-4" strokeWidth={1.3} />, label: 'Real-time processing' },
                  { icon: <Layers className="w-4 h-4" strokeWidth={1.3} />, label: 'ABOR + IBOR unified' },
                  { icon: <Brain className="w-4 h-4" strokeWidth={1.3} />, label: 'AI anomaly detection' },
                  { icon: <Activity className="w-4 h-4" strokeWidth={1.3} />, label: 'Continuous reconciliation' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3">
                    <div className="text-white/40">{item.icon}</div>
                    <p className="text-sm font-light text-white/60">{item.label}</p>
                  </div>
                ))}
              </div>

              {/* Center divider */}
              <div className="hidden md:block w-px h-40 bg-white/10" />

              {/* Right — User behaviors */}
              <div className="flex flex-col gap-5 md:pl-12">
                <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-2">Users still did</p>
                {[
                  { icon: <AlertTriangle className="w-4 h-4" strokeWidth={1.3} />, label: 'Rechecked AI flags' },
                  { icon: <FileSpreadsheet className="w-4 h-4" strokeWidth={1.3} />, label: 'Exported to Excel' },
                  { icon: <Workflow className="w-4 h-4" strokeWidth={1.3} />, label: 'Ran offline workflows' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3">
                    <div className="text-white/40">{item.icon}</div>
                    <p className="text-sm font-light text-white/60">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.22}>
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-bold text-white">The system worked.</p>
              <p className="text-2xl md:text-3xl font-light italic text-white/50 mt-1" style={{ fontFamily: 'var(--font-serif)' }}>Users didn't trust it.</p>
            </div>
          </Reveal>
        </div>
      </section>

      <SlideDivider />

      {/* ═══════════════════════════════════════════════════════
          SLIDE 6 — HYPOTHESIS
          Two cards. Minimal text.
          ═══════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-16">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-bold mb-14 text-center" style={{ color: 'var(--text-primary)' }}>
              Not a UI problem. A cognition problem.
            </h2>
          </Reveal>

          <div className="flex flex-col gap-6">
            <Reveal delay={0.1}>
              <div className="rounded-2xl p-8 md:p-10" style={{ border: '2px solid var(--text-primary)' }}>
                <p className="text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)', opacity: 0.12 }}>H1</p>
                <p className="text-base font-medium leading-relaxed" style={{ color: 'var(--text-primary)' }}>
                  Row-based layout prevents structural understanding.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="rounded-2xl p-8 md:p-10" style={{ border: '2px solid var(--text-primary)' }}>
                <p className="text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)', opacity: 0.12 }}>H2</p>
                <p className="text-base font-medium leading-relaxed" style={{ color: 'var(--text-primary)' }}>
                  No single source of truth. No basis for trust.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <SlideDivider />

      {/* ═══════════════════════════════════════════════════════
          SLIDE 7 — CANVAS HIERARCHY
          Before/After visual dominance. Minimal text.
          ═══════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-16">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-bold mb-14 text-center" style={{ color: 'var(--text-primary)' }}>
              Make Structure Spatial.
            </h2>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] mb-3" style={{ color: 'var(--text-tertiary)' }}>Before</p>
                <div className="rounded-2xl overflow-hidden" style={{ border: '1px solid var(--border-subtle)' }}>
                  <img src={imgTableBefore} alt="Row-based hierarchy — no visible relationships" className="w-full h-auto" loading="lazy" decoding="async" />
                </div>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] mb-3" style={{ color: 'var(--text-tertiary)' }}>After</p>
                <div className="rounded-2xl overflow-hidden" style={{ border: '1px solid var(--border-subtle)' }}>
                  <img src={imgHierarchyCanvas} alt="Spatial canvas — funds as nodes with visible connections" className="w-full h-auto" loading="lazy" decoding="async" />
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.14}>
            <div className="rounded-2xl overflow-hidden mb-14 shadow-sm" style={{ border: '1px solid var(--border-subtle)' }}>
              <img src={imgCanvasAnnotated} alt="Full fund hierarchy — spatial map with relationships" className="w-full h-auto" loading="lazy" decoding="async" />
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="flex justify-center gap-10 md:gap-16 flex-wrap">
              {[
                { icon: <Eye className="w-5 h-5" strokeWidth={1.2} />, label: 'See before editing' },
                { icon: <Layers className="w-5 h-5" strokeWidth={1.2} />, label: 'Propagation visible' },
                { icon: <CheckCircle2 className="w-5 h-5" strokeWidth={1.2} />, label: 'State embedded' },
              ].map((item) => (
                <div key={item.label} className="flex flex-col items-center gap-2.5">
                  <div style={{ color: 'var(--text-primary)' }}>{item.icon}</div>
                  <p className="text-xs font-medium" style={{ color: 'var(--text-primary)' }}>{item.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <SlideDivider />

      {/* ═══════════════════════════════════════════════════════
          SLIDE 8 — INTELLIGENT EXCEPTIONS
          Icon-driven before/after. Minimal.
          ═══════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-16">
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-bold mb-14" style={{ color: 'var(--text-primary)' }}>
              Not All Exceptions Are Equal.
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
              <div className="rounded-2xl p-8" style={{ backgroundColor: 'var(--surface-secondary)' }}>
                <p className="text-[10px] uppercase tracking-[0.25em] mb-6" style={{ color: 'var(--text-tertiary)' }}>Before</p>
                <p className="text-base font-light" style={{ color: 'var(--text-secondary)' }}>Equal weight. Manual triage.</p>
              </div>
              <div className="rounded-2xl p-8" style={{ border: '2px solid var(--text-primary)' }}>
                <p className="text-[10px] uppercase tracking-[0.25em] mb-6" style={{ color: 'var(--text-tertiary)' }}>After</p>
                <div className="flex flex-col items-center gap-4">
                  {[
                    { icon: <Target className="w-5 h-5" strokeWidth={1.2} />, label: 'Risk-ranked' },
                    { icon: <TrendingUp className="w-5 h-5" strokeWidth={1.2} />, label: 'Impact surfaced' },
                    { icon: <CheckCircle2 className="w-5 h-5" strokeWidth={1.2} />, label: 'Context embedded' },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-3">
                      <div style={{ color: 'var(--text-primary)' }}>{item.icon}</div>
                      <p className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-base font-normal" style={{ color: 'var(--text-primary)' }}>
              Attention directed to financial impact.
            </p>
          </Reveal>
        </div>
      </section>

      <SlideDivider />

      {/* ═══════════════════════════════════════════════════════
          SLIDE 9 — EXPLAINABLE AI (accent band)
          AI icon. Confidence. Audit. Big metric drop.
          ═══════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-16" style={{ backgroundColor: 'var(--surface-secondary)' }}>
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-bold mb-14" style={{ color: 'var(--text-primary)' }}>
              Reasoning Became Inspectable.
            </h2>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="rounded-2xl overflow-hidden mb-14 shadow-sm" style={{ border: '1px solid var(--border-subtle)' }}>
              <img src={imgHeroDashboard} alt="Fund hierarchy — structural context AI validated against" className="w-full h-auto" loading="lazy" decoding="async" />
            </div>
          </Reveal>

          <Reveal delay={0.14}>
            <div className="flex justify-center gap-8 md:gap-14 flex-wrap mb-16">
              {[
                { icon: <Brain className="w-6 h-6" strokeWidth={1.2} />, label: 'AI reasoning' },
                { icon: <Target className="w-6 h-6" strokeWidth={1.2} />, label: 'Confidence score' },
                { icon: <ShieldCheck className="w-6 h-6" strokeWidth={1.2} />, label: 'Audit trail' },
                { icon: <Eye className="w-6 h-6" strokeWidth={1.2} />, label: 'Full traceability' },
              ].map((item) => (
                <div key={item.label} className="flex flex-col items-center gap-2.5">
                  <div style={{ color: 'var(--text-primary)' }}>{item.icon}</div>
                  <p className="text-xs font-medium" style={{ color: 'var(--text-primary)' }}>{item.label}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.22}>
            <div className="flex items-center justify-center gap-6">
              <p className="text-5xl md:text-6xl font-bold" style={{ color: 'var(--text-tertiary)' }}>5%</p>
              <ArrowRight className="w-8 h-8" strokeWidth={1.2} style={{ color: 'var(--text-tertiary)' }} />
              <p className="text-5xl md:text-6xl font-bold" style={{ color: 'var(--text-primary)' }}>0.2%</p>
            </div>
            <p className="text-xs font-light mt-3" style={{ color: 'var(--text-secondary)' }}>Error rate reduction</p>
          </Reveal>
        </div>
      </section>

      <SlideDivider />

      {/* ═══════════════════════════════════════════════════════
          SLIDE 10 — OUTCOMES
          Big metrics. 3 behavior shifts.
          ═══════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-bold mb-14" style={{ color: 'var(--text-primary)' }}>
              Trust Unlocked Scale.
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="grid grid-cols-3 gap-4 md:gap-8 mb-16">
              {[
                { metric: '+30%', desc: 'Adoption' },
                { metric: '25%', desc: 'Faster resolution' },
                { metric: '0.2%', desc: 'Error rate' },
              ].map((item, i) => (
                <div key={i} className="py-8 rounded-2xl" style={{ border: '1px solid var(--border-subtle)' }}>
                  <p className="text-3xl md:text-5xl font-bold" style={{ color: 'var(--text-primary)' }}>{item.metric}</p>
                  <p className="text-xs font-light mt-2" style={{ color: 'var(--text-secondary)' }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="flex flex-col items-center gap-4">
              {[
                'Stopped exporting to Excel.',
                'Stopped rechecking AI outputs.',
                'Trusted the system state.',
              ].map((item) => (
                <p key={item} className="text-sm font-light" style={{ color: 'var(--text-secondary)' }}>{item}</p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <SlideDivider />

      {/* ═══════════════════════════════════════════════════════
          SLIDE 11 — LEADERSHIP
          3 icon blocks. Clean.
          ═══════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-bold mb-14 text-center" style={{ color: 'var(--text-primary)' }}>
              Design Became Infrastructure.
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Search className="w-6 h-6" strokeWidth={1.2} />, label: 'Embedded in operations' },
              { icon: <LineChart className="w-6 h-6" strokeWidth={1.2} />, label: 'Measured trust, not clicks' },
              { icon: <Handshake className="w-6 h-6" strokeWidth={1.2} />, label: 'Cross-functional alignment' },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="flex flex-col items-center text-center gap-4 py-8">
                  <div style={{ color: 'var(--text-primary)' }}>{item.icon}</div>
                  <p className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>{item.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          CLOSING — Philosophy (dark band)
          One line. 3 shifts. Large whitespace.
          ═══════════════════════════════════════════════════════ */}
      <section className="relative py-32 md:py-44 px-6 md:px-12 lg:px-16 text-white overflow-hidden" style={{ backgroundColor: 'var(--color-gray-900)' }}>
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)', backgroundSize: '80px 80px' }} />

        <div className="relative max-w-3xl mx-auto text-center">
          <Reveal>
            <p className="text-3xl md:text-4xl lg:text-5xl font-light leading-[1.15] text-white" style={{ fontFamily: 'var(--font-serif)' }}>
              Enterprise UX is not simplification.
            </p>
            <p className="text-3xl md:text-4xl lg:text-5xl font-light leading-[1.15] text-white/60 italic mt-2" style={{ fontFamily: 'var(--font-serif)' }}>
              It is stabilizing complexity at scale.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="w-12 h-px bg-white/15 mx-auto mt-16 mb-14" />
          </Reveal>

          <Reveal delay={0.2}>
            <div className="flex flex-col gap-3">
              {[
                'Stop exporting to Excel.',
                'Stop rechecking every output.',
                'Start reasoning about the system.',
              ].map((item) => (
                <p key={item} className="text-sm font-light text-white/40">{item}</p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.28}>
            <p className="text-xl md:text-2xl font-normal text-white mt-12" style={{ fontFamily: 'var(--font-serif)' }}>
              That's infrastructure. Not interface.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── NAVIGATION ── */}
      <section className="py-14 md:py-16 px-6 md:px-12 lg:px-16">
        <div className="max-w-5xl mx-auto flex items-center justify-center">
          <button onClick={onBackToFundguard} className="group cursor-pointer text-center">
            <p className="text-[10px] uppercase tracking-[0.2em] mb-1" style={{ color: 'var(--text-tertiary)' }}>Back to</p>
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
