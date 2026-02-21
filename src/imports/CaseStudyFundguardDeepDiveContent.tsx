import { type ReactNode } from 'react';
import { motion } from 'motion/react';

/* ── Workflow screenshots ────────────────────────────────────── */
import imgStepTimeline from '@/assets/fg-workflow-step-timeline.png';
import imgStepTable from '@/assets/fg-workflow-step-table.png';
import imgGroupView from '@/assets/fg-workflow-group-view.png';
import imgGridView from '@/assets/fg-workflow-grid-view.png';

/* ── Structural / AI images ──────────────────────────────────── */
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
  FlaskConical,
  BookOpen,
  DollarSign,
  Calculator,
  FileCheck,
  Building2,
  Scale,
  FileSpreadsheet,
  Workflow,
  Eye,
  Layers,
  TrendingUp,
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
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.8, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}

/* ── Thin horizontal rule ────────────────────────────────────── */
function HRule() {
  return (
    <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-16">
      <div className="w-full h-px" style={{ backgroundColor: 'var(--border-subtle)' }} />
    </div>
  );
}

/* ── Large oversized section number — editorial style ────────── */
function BigNum({ n }: { n: number }) {
  return (
    <span
      className="block text-[80px] md:text-[110px] lg:text-[140px] font-bold leading-none select-none"
      style={{ color: 'var(--text-primary)', opacity: 0.06 }}
    >
      {String(n).padStart(2, '0')}
    </span>
  );
}

/* ── Dark-band oversized number ──────────────────────────────── */
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
   FUNDGUARD DEEP DIVE V1 — EDITORIAL NARRATIVE
   ──────────────────────────────────────────────────────────────
   Cohesive product story. Insight-driven headlines.
   Cause → effect chains. Trust as central through-line.
   ================================================================ */
export default function CaseStudyFundguardDeepDiveContent({
  onBackToFundguard,
}: {
  onBackToFundguard?: () => void;
}) {
  return (
    <div style={{ backgroundColor: 'var(--surface-primary)' }}>

      {/* ═══════════════════════════════════════════════════════
          HERO
          ═══════════════════════════════════════════════════════ */}
      <section className="min-h-[80vh] flex flex-col justify-center px-6 md:px-12 lg:px-16 pt-24 pb-16">
        <div className="max-w-5xl mx-auto w-full">
          <Reveal>
            <p className="text-[10px] md:text-xs uppercase tracking-[0.35em] mb-10" style={{ color: 'var(--text-tertiary)' }}>
              Case Study — FundGuard
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-[1.08] mb-8 max-w-4xl" style={{ color: 'var(--text-primary)' }}>
              Scaling Enterprise Reconciliation<br className="hidden md:block" /> Through Trustable Automation
            </h1>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="text-lg md:text-xl font-light max-w-2xl leading-relaxed mb-14" style={{ color: 'var(--text-secondary)' }}>
              How I transformed FundGuard from a technically capable reconciliation engine into the trusted operational system that enterprise teams at State Street actually relied on.
            </p>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="flex flex-wrap gap-x-12 gap-y-6">
              {[
                { label: 'Role', value: 'Head of Product Design' },
                { label: 'Team', value: 'PM · 6 Eng · Data Science · Ops' },
              ].map((m) => (
                <div key={m.label}>
                  <p className="text-[10px] uppercase tracking-[0.2em] mb-1" style={{ color: 'var(--text-tertiary)' }}>{m.label}</p>
                  <p className="text-sm font-light" style={{ color: 'var(--text-primary)' }}>{m.value}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.28}>
            <div className="mt-8">
              <p className="text-[10px] uppercase tracking-[0.2em] mb-3" style={{ color: 'var(--text-tertiary)' }}>Scope</p>
              <div className="flex flex-wrap gap-2">
                {['Reconciliation workflows', 'Fund hierarchy', 'Operational dashboards', 'Exception handling', 'AI explainability'].map((s) => (
                  <span key={s} className="text-xs font-light px-3 py-1.5 rounded-full" style={{ border: '1px solid var(--border-subtle)', color: 'var(--text-primary)' }}>
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.32}>
            <div className="flex flex-wrap gap-x-14 gap-y-4 mt-12 pt-10" style={{ borderTop: '1px solid var(--border-subtle)' }}>
              {[
                { metric: '+30%', desc: 'Automation adoption' },
                { metric: '25%', desc: 'Faster exception resolution' },
                { metric: '5%→0.2%', desc: 'Error rate reduction' },
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

      <HRule />

      {/* ═══════════════════════════════════════════════════════
          1. TRILLIONS IN ASSETS. EVERY LINE VERIFIED BY HAND.
          ═══════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-16 text-white" style={{ backgroundColor: 'var(--color-gray-900)' }}>
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="relative mb-4">
              <BigNumWhite n={1} />
              <h2 className="absolute bottom-2 left-0 text-2xl md:text-3xl font-bold text-white">
                Trillions in Assets. Every Line Verified by Hand.
              </h2>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="text-base md:text-lg font-normal text-white/70 mb-16 max-w-xl leading-relaxed">
              State Street processes trillions in fund assets daily — P&L verification, FX conversion, tax calculation, NAV production — all before markets open.
            </p>
          </Reveal>

          <Reveal delay={0.14}>
            <div className="rounded-2xl px-8 md:px-12 py-10 md:py-14 mb-10" style={{ backgroundColor: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <p className="text-[11px] uppercase tracking-[0.3em] font-semibold text-white/30 mb-8">The Scale</p>
              <p className="text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-none mb-3">10,000</p>
              <p className="text-base md:text-lg font-normal text-white/70 mb-8">accountants manually verifying reconciliation files — every day</p>
              <div className="flex flex-wrap gap-x-6 gap-y-3">
                {['P&L checks', 'Debit/credit matching', 'FX accuracy', 'Tax & NAV', 'Corporate actions'].map((item) => (
                  <span key={item} className="text-xs font-medium text-white/40 px-3 py-1.5 rounded-full" style={{ border: '1px solid rgba(255,255,255,0.1)' }}>{item}</span>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-[11px] uppercase tracking-[0.3em] font-semibold text-white/30 mb-6">The Cost</p>
            <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-4 md:gap-8 items-start mb-6">
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

          <Reveal delay={0.28}>
            <div className="mt-14 pt-8" style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
              <p className="text-xl md:text-2xl font-normal text-white leading-snug" style={{ fontFamily: 'var(--font-serif)' }}>
                Manual verification was compensating for system opacity.
                <span className="block mt-2 text-white/50 italic">FundGuard entered to automate this entire process.</span>
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          2. EVERY COLUMN WAS THERE. NOBODY COULD OPERATE.
          ═══════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="relative mb-4">
              <BigNum n={2} />
              <h2 className="absolute bottom-2 left-0 text-2xl md:text-3xl font-bold" style={{ color: 'var(--text-primary)' }}>
                Every Column Was There. Nobody Could Operate.
              </h2>
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <p className="text-base md:text-lg font-normal mb-14 max-w-xl" style={{ color: 'var(--text-secondary)' }}>
              The initial reconciliation view showed all the right data — in a format that defeated its own purpose at scale.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative rounded-2xl overflow-hidden mb-14 shadow-sm" style={{ border: '1px solid var(--border-subtle)' }}>
              <div className="absolute inset-0 z-10 pointer-events-none" style={{ background: 'linear-gradient(180deg, transparent 0%, var(--surface-primary) 98%)', opacity: 0.25 }} />
              <img src={imgStepTable} alt="Flat table — every column present, no operational structure" className="w-full h-auto relative" loading="lazy" decoding="async" />
              <div className="absolute top-3 left-3 md:top-4 md:left-4 z-20 flex flex-col gap-2">
                {['No grouping logic', 'Equal-weight rows', 'Risk invisible'].map((label) => (
                  <span key={label} className="inline-block text-[10px] md:text-xs font-semibold uppercase tracking-wide px-3 py-1.5 rounded-md backdrop-blur-sm" style={{ backgroundColor: 'rgba(0,0,0,0.75)', color: 'white' }}>{label}</span>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.16}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 mb-14">
              {[
                { label: 'Structural', cause: 'No hierarchy by asset manager, fund group, or step.', effect: 'Users mentally reconstructed operational structure every session.' },
                { label: 'Cognitive', cause: 'Every row competed equally for attention.', effect: 'No prioritization signal. Nothing stood out.' },
                { label: 'Business', cause: 'No answer to "which client is at risk right now?"', effect: 'At 20 funds → manageable. At 1,000 → unusable.' },
              ].map((bucket, i) => (
                <div key={i} className="pt-5" style={{ borderTop: '2px solid var(--text-primary)' }}>
                  <p className="text-[10px] uppercase tracking-[0.25em] font-semibold mb-4" style={{ color: 'var(--text-tertiary)' }}>{bucket.label} failure</p>
                  <p className="text-sm font-normal leading-relaxed mb-2" style={{ color: 'var(--text-primary)' }}>{bucket.cause}</p>
                  <p className="text-sm font-light leading-relaxed" style={{ color: 'var(--text-secondary)' }}>→ {bucket.effect}</p>
                </div>
              ))}
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
          3. USERS THINK IN HIERARCHIES. THE SYSTEM SHOWED ROWS.
          ═══════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="relative mb-6">
              <BigNum n={3} />
              <h2 className="absolute bottom-2 left-0 text-2xl md:text-3xl font-bold" style={{ color: 'var(--text-primary)' }}>
                Users Think in Hierarchies. The System Showed Rows.
              </h2>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="text-[10px] uppercase tracking-[0.25em] mb-8" style={{ color: 'var(--text-tertiary)' }}>From workflow shadowing</p>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mb-10">
              <div>
                <p className="text-sm font-light mb-2" style={{ color: 'var(--text-secondary)' }}>Operations teams reason in:</p>
                <p className="text-lg md:text-xl font-medium" style={{ color: 'var(--text-primary)' }}>Asset Manager → Fund Group → Fund → Step</p>
              </div>
              <div>
                <p className="text-sm font-light mb-2" style={{ color: 'var(--text-secondary)' }}>The system presented:</p>
                <p className="text-lg md:text-xl font-light" style={{ color: 'var(--text-tertiary)' }}>Row 1 → Row 2 → Row 3</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="pt-6" style={{ borderTop: '1px solid var(--border-subtle)' }}>
              <p className="text-base font-normal" style={{ color: 'var(--text-primary)' }}>The interface reflected database logic.</p>
              <p className="text-base font-light italic mt-1" style={{ fontFamily: 'var(--font-serif)', color: 'var(--text-secondary)' }}>Users needed operational logic.</p>
            </div>
          </Reveal>
        </div>
      </section>

      <HRule />

      {/* ═══════════════════════════════════════════════════════
          4. STRUCTURE MIRRORED OPERATIONS. RISK BECAME VISIBLE.
          ═══════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-16">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <div className="relative mb-6">
              <BigNum n={4} />
              <h2 className="absolute bottom-2 left-0 text-2xl md:text-3xl font-bold" style={{ color: 'var(--text-primary)' }}>
                Structure Mirrored Operations. Risk Became Visible.
              </h2>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-2xl overflow-hidden mb-4 shadow-sm" style={{ border: '1px solid var(--border-subtle)' }}>
              <img src={imgGroupView} alt="Group-level dashboard — asset manager cards" className="w-full h-auto" loading="lazy" decoding="async" />
            </div>
          </Reveal>
          <Reveal delay={0.13}>
            <div className="rounded-2xl overflow-hidden mb-12 shadow-sm" style={{ border: '1px solid var(--border-subtle)' }}>
              <img src={imgGridView} alt="Dense grid view — dozens of fund groups" className="w-full h-auto" loading="lazy" decoding="async" />
            </div>
          </Reveal>

          {/* Causal chain */}
          <Reveal delay={0.16}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-0 mb-12">
              {[
                { title: 'Operational hierarchy', desc: 'UI grouped by asset manager — mirroring how teams are actually assigned.' },
                { title: 'Cognitive chunking', desc: '500 rows collapsed into 20 meaningful groups.' },
                { title: 'Risk surfaced instantly', desc: 'Health rings and delay metrics answered "who is at risk" at a glance.' },
                { title: 'Scale embedded', desc: 'Transaction volume and TNA visible per card, not buried in columns.' },
              ].map((item, i) => (
                <Reveal key={i} delay={i * 0.04}>
                  <div className="py-4" style={{ borderBottom: '1px solid var(--border-subtle)' }}>
                    <p className="text-sm font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>{item.title}</p>
                    <p className="text-sm font-light" style={{ color: 'var(--text-secondary)' }}>{item.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="pt-8" style={{ borderTop: '1px solid var(--border-subtle)' }}>
              <p className="text-xl md:text-2xl font-normal leading-snug" style={{ fontFamily: 'var(--font-serif)', color: 'var(--text-primary)' }}>
                "Which asset manager is at risk right now?"
              </p>
              <p className="text-sm font-light mt-3" style={{ color: 'var(--text-secondary)' }}>
                Users could now answer that instantly. UX scalability enabled business scalability.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <HRule />

      {/* ═══════════════════════════════════════════════════════
          5. STATE WAS VISIBLE. FLOW WAS NOT.
          ═══════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="relative mb-6">
              <BigNum n={5} />
              <h2 className="absolute bottom-2 left-0 text-2xl md:text-3xl font-bold" style={{ color: 'var(--text-primary)' }}>
                State Was Visible. Flow Was Not.
              </h2>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-sm md:text-base font-light mb-8 max-w-xl" style={{ color: 'var(--text-secondary)' }}>
              Reconciliation is time-dependent. NAV depends on sequence. The dashboard showed current state — but not where bottlenecks were forming.
            </p>
            <div className="flex flex-col gap-0 max-w-md">
              {['Where are we in the lifecycle?', 'Which step is blocking?', 'Are we missing SLA?'].map((q) => (
                <p key={q} className="text-sm font-medium py-3" style={{ color: 'var(--text-primary)', borderBottom: '1px solid var(--border-subtle)' }}>{q}</p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <HRule />

      {/* ═══════════════════════════════════════════════════════
          6. SEQUENCE MADE EXPLICIT. BOTTLENECKS SURFACED.
          ═══════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-16">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <div className="relative mb-6">
              <BigNum n={6} />
              <h2 className="absolute bottom-2 left-0 text-2xl md:text-3xl font-bold" style={{ color: 'var(--text-primary)' }}>
                Sequence Made Explicit. Bottlenecks Surfaced.
              </h2>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-sm md:text-base font-light mb-10 max-w-2xl" style={{ color: 'var(--text-secondary)' }}>
              Drilling into any group opened a step-based timeline — the full reconciliation lifecycle across a time axis, with delay and volume context embedded.
            </p>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="rounded-2xl overflow-hidden mb-12 shadow-sm" style={{ border: '1px solid var(--border-subtle)' }}>
              <img src={imgStepTimeline} alt="Step-based timeline — fund reconciliation lifecycle" className="w-full h-auto" loading="lazy" decoding="async" />
            </div>
          </Reveal>

          <Reveal delay={0.16}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-0 mb-12">
              {[
                { title: 'Operational flow explicit', desc: 'Date Roll → Processing → Accounting → Pricing → End-of-Day — each step visible.' },
                { title: 'SLA urgency embedded', desc: 'Current time indicator showed exactly how close to deadline.' },
                { title: 'Bottleneck clarity', desc: 'Delayed steps highlighted — users saw where processing stalled.' },
                { title: 'Volume signals risk', desc: 'High-volume delays surfaced proportionally higher risk.' },
              ].map((item, i) => (
                <Reveal key={i} delay={i * 0.04}>
                  <div className="py-4" style={{ borderBottom: '1px solid var(--border-subtle)' }}>
                    <p className="text-sm font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>{item.title}</p>
                    <p className="text-sm font-light" style={{ color: 'var(--text-secondary)' }}>{item.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="pt-6" style={{ borderTop: '1px solid var(--border-subtle)' }}>
              <p className="text-base font-normal" style={{ color: 'var(--text-primary)' }}>
                Faster escalation. Fewer status calls. Clear NAV readiness.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          7. AUTOMATION WORKED. TRUST DID NOT.
          ═══════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-16 text-white" style={{ backgroundColor: 'var(--color-gray-900)' }}>
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="relative mb-4">
              <BigNumWhite n={7} />
              <h2 className="absolute bottom-2 left-0 text-2xl md:text-3xl font-bold text-white">
                Automation Worked. Trust Did Not.
              </h2>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="text-base font-normal text-white/60 mb-12 max-w-xl">
              Even with group dashboards and timeline views, automation adoption remained limited. The technology was ahead of user confidence.
            </p>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 mb-12">
              <div>
                <p className="text-[11px] uppercase tracking-[0.3em] font-semibold mb-5 text-white/30">What the system had</p>
                {['Real-time processing', 'Unified ABOR + IBOR', 'AI anomaly detection', 'Continuous reconciliation'].map((item) => (
                  <p key={item} className="text-sm font-light py-2.5 text-white/60" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>{item}</p>
                ))}
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-[0.3em] font-semibold mb-5 text-white/30">What users still did</p>
                {[
                  { icon: <AlertTriangle className="w-4 h-4" strokeWidth={1.3} />, text: 'Rechecked every AI flag manually' },
                  { icon: <FileSpreadsheet className="w-4 h-4" strokeWidth={1.3} />, text: 'Exported to Excel for "real" analysis' },
                  { icon: <Workflow className="w-4 h-4" strokeWidth={1.3} />, text: 'Ran parallel offline workflows' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 py-2.5" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                    <div className="text-white/40">{item.icon}</div>
                    <p className="text-sm font-light text-white/60">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="pt-8" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
              <p className="text-xl md:text-2xl font-normal text-white leading-snug" style={{ fontFamily: 'var(--font-serif)' }}>
                Excel exports were a behavioral signal.
                <span className="block mt-2 text-white/50 italic">Users trusted their spreadsheets more than the platform.</span>
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          8. THE PROBLEM WAS NOT FUNCTIONALITY. IT WAS COGNITION.
          ═══════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="relative mb-6">
              <BigNum n={8} />
              <h2 className="absolute bottom-2 left-0 text-2xl md:text-3xl font-bold" style={{ color: 'var(--text-primary)' }}>
                The Problem Was Not Functionality. It Was Cognition.
              </h2>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-[100px_1fr] gap-4 md:gap-8 mb-10">
              <p className="text-5xl md:text-6xl font-bold" style={{ color: 'var(--text-primary)', opacity: 0.15 }}>H1</p>
              <p className="text-sm md:text-base font-normal leading-relaxed" style={{ color: 'var(--text-primary)' }}>
                Row-based configuration prevents structural understanding. Users cannot reason about what they cannot see.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.16}>
            <div className="grid grid-cols-1 md:grid-cols-[100px_1fr] gap-4 md:gap-8 mb-10">
              <p className="text-5xl md:text-6xl font-bold" style={{ color: 'var(--text-primary)', opacity: 0.15 }}>H2</p>
              <p className="text-sm md:text-base font-normal leading-relaxed" style={{ color: 'var(--text-primary)' }}>
                Users lack confidence because they cannot validate full system state in one place. Without visible state, there is no basis for trust.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.22}>
            <div className="pt-6" style={{ borderTop: '1px solid var(--border-subtle)' }}>
              <p className="text-base font-normal" style={{ color: 'var(--text-primary)' }}>
                Trust requires orientation. Orientation requires structural visibility.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <HRule />

      {/* ═══════════════════════════════════════════════════════
          9. MAKE STRUCTURE SPATIAL. MAKE LOGIC VISIBLE.
          ═══════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-16">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <div className="relative mb-6">
              <BigNum n={9} />
              <h2 className="absolute bottom-2 left-0 text-2xl md:text-3xl font-bold" style={{ color: 'var(--text-primary)' }}>
                Make Structure Spatial. Make Logic Visible.
              </h2>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-sm md:text-base font-light mb-6 max-w-2xl" style={{ color: 'var(--text-secondary)' }}>
              Funds became nodes. Allocations became connections. Status embedded directly in structure. The system became inspectable before any edit.
            </p>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="text-[10px] uppercase tracking-[0.25em] mb-4" style={{ color: 'var(--text-tertiary)' }}>Before — Rows without relationships</p>
            <div className="rounded-2xl overflow-hidden mb-6 shadow-sm" style={{ border: '1px solid var(--border-subtle)' }}>
              <img src={imgTableBefore} alt="Legacy table-based fund configuration" className="w-full h-auto" loading="lazy" decoding="async" />
            </div>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="text-[10px] uppercase tracking-[0.25em] mb-4" style={{ color: 'var(--text-tertiary)' }}>After — Spatial hierarchy with embedded state</p>
            <div className="rounded-2xl overflow-hidden mb-4 shadow-sm" style={{ border: '1px solid var(--border-subtle)' }}>
              <img src={imgHierarchyCanvas} alt="Canvas-based spatial hierarchy" className="w-full h-auto" loading="lazy" decoding="async" />
            </div>
          </Reveal>
          <Reveal delay={0.19}>
            <div className="rounded-2xl overflow-hidden mb-12 shadow-sm" style={{ border: '1px solid var(--border-subtle)' }}>
              <img src={imgCanvasAnnotated} alt="Annotated canvas — fund hierarchy with relationships" className="w-full h-auto" loading="lazy" decoding="async" />
            </div>
          </Reveal>

          <Reveal delay={0.22}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-0 mb-12">
              {[
                { title: 'Spatial reasoning', desc: 'Humans reason about structure spatially — not in rows.' },
                { title: 'Propagation visible', desc: 'Allocation % displayed on connections between nodes.' },
                { title: 'State embedded', desc: 'Active/inactive status visible without switching tabs.' },
                { title: 'Direct manipulation', desc: 'Drag-and-drop reorganization matched the mental model.' },
              ].map((item, i) => (
                <Reveal key={i} delay={i * 0.04}>
                  <div className="py-4" style={{ borderBottom: '1px solid var(--border-subtle)' }}>
                    <p className="text-sm font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>{item.title}</p>
                    <p className="text-sm font-light" style={{ color: 'var(--text-secondary)' }}>{item.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="pt-6" style={{ borderTop: '1px solid var(--border-subtle)' }}>
              <p className="text-base font-normal" style={{ color: 'var(--text-primary)' }}>
                Configuration errors dropped. Structural confidence increased. Downstream propagation risk reduced.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <HRule />

      {/* ═══════════════════════════════════════════════════════
          10. NOT ALL EXCEPTIONS ARE EQUAL. THE SYSTEM SHOULD KNOW.
          ═══════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="relative mb-6">
              <BigNum n={10} />
              <h2 className="absolute bottom-2 left-0 text-2xl md:text-3xl font-bold" style={{ color: 'var(--text-primary)' }}>
                Not All Exceptions Are Equal. The System Should Know.
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 mb-8">
            <Reveal delay={0.1}>
              <div>
                <p className="text-[11px] uppercase tracking-[0.25em] font-semibold mb-5" style={{ color: 'var(--text-tertiary)' }}>Problem</p>
                <p className="text-sm font-light leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  Every exception presented with equal weight. Users spent time on low-risk items while high-impact issues waited.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div>
                <p className="text-[11px] uppercase tracking-[0.25em] font-semibold mb-5" style={{ color: 'var(--text-tertiary)' }}>Intervention</p>
                {['Risk-based prioritization', 'Financial impact surfaced first', 'Contextual resolution tools'].map((item) => (
                  <div key={item} className="flex items-center gap-3 py-2.5" style={{ borderBottom: '1px solid var(--border-subtle)' }}>
                    <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" strokeWidth={1.4} style={{ color: 'var(--text-primary)' }} />
                    <p className="text-sm font-light" style={{ color: 'var(--text-primary)' }}>{item}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <p className="text-base font-normal italic" style={{ fontFamily: 'var(--font-serif)', color: 'var(--text-secondary)' }}>
              Human attention became focused on what mattered financially.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          11. REASONING WAS INVISIBLE. SO USERS IGNORED IT.
          ═══════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-16" style={{ backgroundColor: 'var(--surface-secondary)' }}>
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <div className="relative mb-6">
              <BigNum n={11} />
              <h2 className="absolute bottom-2 left-0 text-2xl md:text-3xl font-bold" style={{ color: 'var(--text-primary)' }}>
                Reasoning Was Invisible. So Users Ignored It.
              </h2>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-sm md:text-base font-light mb-8 max-w-2xl" style={{ color: 'var(--text-secondary)' }}>
              AI was already validating ABOR vs IBOR discrepancies, metadata anomalies, and allocation mismatches. The logic was sound. But reasoning was opaque — so users treated every flag as unverified.
            </p>
          </Reveal>

          <Reveal delay={0.14}>
            <div className="rounded-2xl overflow-hidden mb-12 shadow-sm" style={{ border: '1px solid var(--border-subtle)' }}>
              <img src={imgHeroDashboard} alt="Fund hierarchy — structural context AI validated against" className="w-full h-auto" loading="lazy" decoding="async" />
            </div>
          </Reveal>

          <Reveal delay={0.18}>
            <p className="text-[11px] uppercase tracking-[0.25em] font-semibold mb-6" style={{ color: 'var(--text-tertiary)' }}>What we made visible</p>
            <div className="flex flex-wrap gap-3 mb-10">
              {[
                { icon: <Target className="w-3.5 h-3.5" strokeWidth={1.4} />, text: 'Confidence indicators' },
                { icon: <Layers className="w-3.5 h-3.5" strokeWidth={1.4} />, text: 'Risk grades' },
                { icon: <TrendingUp className="w-3.5 h-3.5" strokeWidth={1.4} />, text: 'Financial impact' },
                { icon: <Eye className="w-3.5 h-3.5" strokeWidth={1.4} />, text: 'Reasoning paths' },
                { icon: <ShieldCheck className="w-3.5 h-3.5" strokeWidth={1.4} />, text: 'Audit trails' },
              ].map((item) => (
                <span key={item.text} className="inline-flex items-center gap-2 text-xs font-medium px-4 py-2.5 rounded-full" style={{ border: '1px solid var(--border-subtle)', color: 'var(--text-primary)', backgroundColor: 'var(--surface-primary)' }}>
                  {item.icon} {item.text}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.22}>
            <p className="text-xl md:text-2xl font-normal leading-snug" style={{ fontFamily: 'var(--font-serif)', color: 'var(--text-primary)' }}>
              Automation became inspectable. Trust followed.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          12. TRUST UNLOCKED SCALE.
          ═══════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-16 text-white" style={{ backgroundColor: 'var(--color-gray-900)' }}>
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="relative mb-4">
              <BigNumWhite n={12} />
              <h2 className="absolute bottom-2 left-0 text-2xl md:text-3xl font-bold text-white">
                Trust Unlocked Scale.
              </h2>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="text-base font-normal text-white/60 mb-12 max-w-xl">
              Every reconciliation step was AI-validated. Humans reviewed only genuine exceptions. The system became the source of truth.
            </p>
          </Reveal>

          <Reveal delay={0.14}>
            <div className="flex flex-wrap gap-x-14 gap-y-8 mb-10">
              {[
                { metric: '5%→0.2%', desc: 'Error rate' },
                { metric: '+30%', desc: 'Automation adoption' },
                { metric: '25%', desc: 'Faster exception resolution' },
              ].map((item, i) => (
                <div key={i}>
                  <p className="text-4xl md:text-5xl font-bold text-white">{item.metric}</p>
                  <p className="text-xs font-light mt-1 text-white/50">{item.desc}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-base font-normal italic text-white/50" style={{ fontFamily: 'var(--font-serif)' }}>
              Customers scaled transaction volume without scaling headcount.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          13. TRUST BECAME REVENUE INFRASTRUCTURE.
          ═══════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="relative mb-6">
              <BigNum n={13} />
              <h2 className="absolute bottom-2 left-0 text-2xl md:text-3xl font-bold" style={{ color: 'var(--text-primary)' }}>
                Trust Became Revenue Infrastructure.
              </h2>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-sm md:text-base font-light mb-10 max-w-xl" style={{ color: 'var(--text-secondary)' }}>
              This was not a UI redesign. It was cognitive infrastructure for enterprise automation.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-0 mb-10">
              {['More funds per client', 'Higher transaction volume', 'Expansion into advanced modules', 'Larger enterprise deals'].map((item) => (
                <p key={item} className="text-sm font-light py-3" style={{ color: 'var(--text-primary)', borderBottom: '1px solid var(--border-subtle)' }}>{item}</p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="pt-6" style={{ borderTop: '1px solid var(--border-subtle)' }}>
              <p className="text-base font-normal" style={{ color: 'var(--text-primary)' }}>
                When users trust the system, they stop building workarounds. When they stop building workarounds, the platform scales.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <HRule />

      {/* ═══════════════════════════════════════════════════════
          14. DESIGN BECAME ACCOUNTABLE FOR SYSTEM COGNITION.
          ═══════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="relative mb-6">
              <BigNum n={14} />
              <h2 className="absolute bottom-2 left-0 text-2xl md:text-3xl font-bold" style={{ color: 'var(--text-primary)' }}>
                Design Became Accountable for System Cognition.
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-10">
            {[
              { icon: <Search className="w-5 h-5" strokeWidth={1.3} />, title: 'Embedded in operations', desc: 'Shadowed real workflows. Understood the domain, not just the interface.' },
              { icon: <LineChart className="w-5 h-5" strokeWidth={1.3} />, title: 'Measured trust, not clicks', desc: 'Tracked automation acceptance rate and offline workaround frequency.' },
              { icon: <Handshake className="w-5 h-5" strokeWidth={1.3} />, title: 'Cross-functional alignment', desc: 'Engineering, data science, and ops aligned around system cognition.' },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <div className="pt-6" style={{ borderTop: '2px solid var(--text-primary)' }}>
                  <div className="flex items-center gap-3 mb-3">
                    <div style={{ color: 'var(--text-primary)' }}>{item.icon}</div>
                    <p className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>{item.title}</p>
                  </div>
                  <p className="text-sm font-light leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <div className="flex flex-col gap-4">
              {[
                { icon: <FlaskConical className="w-4 h-4" strokeWidth={1.3} />, title: 'Simulation sandbox earlier', desc: 'Users needed safe experimentation before committing changes.' },
                { icon: <BarChart3 className="w-4 h-4" strokeWidth={1.3} />, title: 'Trust dashboards from day one', desc: 'We inferred trust retrospectively — a live dashboard would have sharpened decisions.' },
                { icon: <BookOpen className="w-4 h-4" strokeWidth={1.3} />, title: 'AI education in onboarding', desc: 'Users needed to understand AI reasoning before encountering their first exception.' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 py-3" style={{ borderBottom: '1px solid var(--border-subtle)' }}>
                  <div className="mt-0.5 flex-shrink-0" style={{ color: 'var(--text-tertiary)' }}>{item.icon}</div>
                  <div>
                    <p className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>{item.title}</p>
                    <p className="text-xs font-light mt-0.5" style={{ color: 'var(--text-secondary)' }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          15. CLOSING PHILOSOPHY
          ═══════════════════════════════════════════════════════ */}
      <section className="relative py-28 md:py-36 px-6 md:px-12 lg:px-16 text-white overflow-hidden" style={{ backgroundColor: 'var(--color-gray-900)' }}>
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)', backgroundSize: '80px 80px' }} />

        <div className="relative max-w-4xl mx-auto">
          <Reveal>
            <p className="text-3xl md:text-4xl lg:text-5xl font-light leading-[1.15] text-white" style={{ fontFamily: 'var(--font-serif)' }}>
              Enterprise UX is not simplification.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-3xl md:text-4xl lg:text-5xl font-light leading-[1.15] text-white/70 italic mt-2" style={{ fontFamily: 'var(--font-serif)' }}>
              It is stabilizing complexity at scale.
            </p>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="w-16 h-px bg-white/15 mt-12 mb-10" />
          </Reveal>

          <Reveal delay={0.2}>
            <div className="flex flex-col gap-2 mb-8">
              {[
                'When users stop exporting to Excel —',
                'When they stop rechecking every AI output —',
                'When they stop reconstructing system logic in their heads —',
              ].map((item) => (
                <p key={item} className="text-sm font-light text-white/40">{item}</p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.25}>
            <p className="text-base font-light text-white/60 mb-3">And start reasoning directly about the system —</p>
            <p className="text-xl md:text-2xl font-normal text-white" style={{ fontFamily: 'var(--font-serif)' }}>
              You've designed infrastructure, not interface.
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
