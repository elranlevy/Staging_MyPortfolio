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
  Gauge,
  MousePointer2,
  MousePointerClick,
  GitBranch,
  Workflow,
  Search,
  Lightbulb,
  FlaskConical,
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
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.65, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}

function RevealScale({
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
      initial={{ opacity: 0, scale: 0.92 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.7, delay, ease: 'easeOut' }}
    >
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

function ProgressBar({ value, label, color }: { value: number; label: string; color: string }) {
  return (
    <div>
      <div className="flex justify-between mb-2">
        <p className="text-xs font-medium" style={{ color: 'var(--text-primary)' }}>{label}</p>
        <p className="text-xs font-semibold" style={{ color }}>{value}%</p>
      </div>
      <div className="h-2 rounded-full overflow-hidden" style={{ backgroundColor: 'var(--surface-secondary)' }}>
        <motion.div
          className="h-full rounded-full"
          style={{ backgroundColor: color }}
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }}
        />
      </div>
    </div>
  );
}

/* ================================================================
   FUNDGUARD DEEP DIVE V4 — INFOGRAPHIC VISUAL JOURNEY
   ──────────────────────────────────────────────────────────────
   Design language: infographic-driven, visual flow, data-viz,
   horizontal process diagrams, progress bars, color-coded
   severity, connected journey line, comparison charts.
   ================================================================ */
export default function CaseStudyFundguardDeepDiveV4Content({
  onBackToFundguard,
}: {
  onBackToFundguard?: () => void;
}) {
  return (
    <div style={{ backgroundColor: 'var(--surface-primary)' }}>

      {/* ═══════════════════════════════════════════════════════
          HERO — Infographic title card
          ═══════════════════════════════════════════════════════ */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden" style={{ backgroundColor: 'var(--color-gray-900)' }}>
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <div className="absolute bottom-0 left-0 right-0 h-1/3" style={{ background: 'linear-gradient(to top, var(--color-gray-900), transparent)' }} />

        <div className="relative w-full px-6 md:px-12 lg:px-16 py-24">
          <div className="max-w-6xl mx-auto">
            <Reveal>
              <p className="text-[10px] uppercase tracking-[0.5em] text-white/30 mb-8">Deep Dive — FundGuard — Visual Journey</p>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.05] mb-6 max-w-4xl">
                Rebuilding Trust in<br />Enterprise Automation
              </h1>
            </Reveal>

            <Reveal delay={0.14}>
              <p className="text-base md:text-lg font-light text-white/50 max-w-xl mb-16">
                A visual map of how we turned a technically correct reconciliation platform into the system enterprise teams actually relied on.
              </p>
            </Reveal>

            {/* Metric strip — horizontal infographic bar */}
            <Reveal delay={0.22}>
              <div className="flex flex-wrap gap-0 rounded-2xl overflow-hidden" style={{ border: '1px solid rgba(255,255,255,0.08)' }}>
                {[
                  { metric: '5% → 0.2%', label: 'Error rate', accent: 'rgba(34,197,94,0.8)' },
                  { metric: '+30%', label: 'Automation adoption', accent: 'rgba(59,130,246,0.8)' },
                  { metric: '+40%', label: 'Resolution speed', accent: 'rgba(168,85,247,0.8)' },
                  { metric: '96%', label: 'Reduction', accent: 'rgba(245,158,11,0.8)' },
                ].map((item, i) => (
                  <div key={i} className="flex-1 min-w-[120px] py-6 px-5 text-center" style={{ borderRight: i < 3 ? '1px solid rgba(255,255,255,0.06)' : undefined }}>
                    <p className="text-2xl md:text-3xl font-bold text-white mb-1">{item.metric}</p>
                    <p className="text-[10px] uppercase tracking-wider font-medium" style={{ color: item.accent }}>{item.label}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Role / Team pills */}
            <Reveal delay={0.28}>
              <div className="flex flex-wrap gap-3 mt-10">
                {['Head of Product Design', 'PM · 6 Engineers', 'Data Science', 'Enterprise Ops', 'Reconciliation Workflows', 'AI Triage', 'A/B Validation'].map((s) => (
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
          JOURNEY PHASE 1 — THE PROBLEM LANDSCAPE
          ═══════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 px-6 md:px-12 lg:px-16">
        <div className="max-w-6xl mx-auto">
          {/* Phase marker */}
          <Reveal>
            <div className="flex items-center gap-4 mb-12">
              <div className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-bold" style={{ background: 'linear-gradient(135deg, rgba(239,68,68,0.9), rgba(220,38,38,0.7))' }}>01</div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.3em]" style={{ color: 'var(--text-tertiary)' }}>Phase One</p>
                <p className="text-lg md:text-xl font-semibold" style={{ color: 'var(--text-primary)' }}>The Problem Landscape</p>
              </div>
            </div>
          </Reveal>

          {/* Infographic: The Scale — horizontal data strip */}
          <Reveal delay={0.08}>
            <div className="rounded-2xl p-6 md:p-10 mb-8" style={{ backgroundColor: 'var(--surface-secondary)' }}>
              <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 md:gap-12 items-center">
                <div>
                  <p className="text-7xl md:text-8xl font-bold leading-none mb-2" style={{ color: 'var(--text-primary)' }}>10K</p>
                  <p className="text-sm font-light" style={{ color: 'var(--text-secondary)' }}>accountants verifying fund transactions manually, every business day</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {[
                    { icon: <BarChart3 className="w-5 h-5" strokeWidth={1.3} />, label: 'P&L verification', color: 'rgba(239,68,68,0.7)' },
                    { icon: <Activity className="w-5 h-5" strokeWidth={1.3} />, label: 'FX conversion', color: 'rgba(245,158,11,0.7)' },
                    { icon: <ShieldCheck className="w-5 h-5" strokeWidth={1.3} />, label: 'NAV production', color: 'rgba(34,197,94,0.7)' },
                    { icon: <FileSpreadsheet className="w-5 h-5" strokeWidth={1.3} />, label: 'Ledger matching', color: 'rgba(59,130,246,0.7)' },
                    { icon: <Clock className="w-5 h-5" strokeWidth={1.3} />, label: 'Before markets open', color: 'rgba(168,85,247,0.7)' },
                    { icon: <AlertTriangle className="w-5 h-5" strokeWidth={1.3} />, label: '~5% error rate', color: 'rgba(239,68,68,0.9)' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2.5 py-2">
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: item.color + '20' }}>
                        <div style={{ color: item.color }}>{item.icon}</div>
                      </div>
                      <p className="text-xs font-medium" style={{ color: 'var(--text-primary)' }}>{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* Timeline image — full-width with overlay gradient */}
          <RevealScale delay={0.12}>
            <div className="relative rounded-2xl overflow-hidden" style={{ border: '1px solid var(--border-subtle)' }}>
              <img src={imgStepTimeline} alt="Reconciliation lifecycle timeline" className="w-full h-auto" loading="lazy" decoding="async" />
              <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to right, var(--surface-primary) 0%, transparent 8%, transparent 92%, var(--surface-primary) 100%)' }} />
            </div>
            <p className="text-xs font-light text-center mt-3" style={{ color: 'var(--text-tertiary)' }}>
              Each row = one fund\u2019s daily reconciliation lifecycle from Date Roll through End of Day
            </p>
          </RevealScale>

          {/* Cost infographic — progress bars */}
          <Reveal delay={0.18}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
              <div className="rounded-2xl p-6" style={{ border: '1px solid var(--border-subtle)' }}>
                <p className="text-[10px] uppercase tracking-[0.2em] mb-6 font-semibold" style={{ color: 'var(--text-tertiary)' }}>Error Impact</p>
                <div className="flex flex-col gap-5">
                  <ProgressBar value={100} label="Incorrect NAV to investors" color="rgba(239,68,68,0.8)" />
                  <ProgressBar value={85} label="Rework cycles & delays" color="rgba(245,158,11,0.8)" />
                  <ProgressBar value={95} label="Regulatory exposure" color="rgba(239,68,68,0.6)" />
                  <ProgressBar value={75} label="Financial liability (hundreds of millions)" color="rgba(168,85,247,0.7)" />
                </div>
              </div>
              <div className="rounded-2xl p-6 flex flex-col justify-center" style={{ border: '1px solid var(--border-subtle)' }}>
                <p className="text-[10px] uppercase tracking-[0.2em] mb-6 font-semibold" style={{ color: 'var(--text-tertiary)' }}>Scale vs. Capacity</p>
                <div className="text-center mb-6">
                  <p className="text-5xl md:text-6xl font-bold" style={{ color: 'var(--text-primary)' }}>~10</p>
                  <p className="text-sm font-light mt-1" style={{ color: 'var(--text-secondary)' }}>interconnected systems</p>
                </div>
                <div className="rounded-xl p-4" style={{ backgroundColor: 'var(--surface-secondary)' }}>
                  <p className="text-sm font-light text-center" style={{ color: 'var(--text-secondary)' }}>
                    Manual review isn\u2019t slow — it\u2019s <span className="font-semibold" style={{ color: 'var(--text-primary)' }}>structurally unsustainable</span>
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <JourneyConnector />

      {/* ═══════════════════════════════════════════════════════
          JOURNEY PHASE 2 — THE AUTOMATION WIN
          ═══════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 px-6 md:px-12 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="flex items-center gap-4 mb-12">
              <div className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-bold" style={{ background: 'linear-gradient(135deg, rgba(34,197,94,0.9), rgba(22,163,74,0.7))' }}>02</div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.3em]" style={{ color: 'var(--text-tertiary)' }}>Phase Two</p>
                <p className="text-lg md:text-xl font-semibold" style={{ color: 'var(--text-primary)' }}>The Automation Win</p>
              </div>
            </div>
          </Reveal>

          {/* Before/After comparison — visual split */}
          <Reveal delay={0.08}>
            <div className="rounded-2xl overflow-hidden mb-10" style={{ border: '1px solid var(--border-subtle)' }}>
              <div className="grid grid-cols-2">
                {/* Before */}
                <div className="p-6 md:p-10 text-center" style={{ backgroundColor: 'rgba(239,68,68,0.04)' }}>
                  <p className="text-[10px] uppercase tracking-[0.3em] mb-4 font-semibold" style={{ color: 'rgba(239,68,68,0.7)' }}>Before</p>
                  <p className="text-5xl md:text-7xl font-bold mb-2" style={{ color: 'rgba(239,68,68,0.8)' }}>5%</p>
                  <p className="text-xs font-light" style={{ color: 'var(--text-secondary)' }}>error rate in reported files</p>
                  <div className="mt-6 flex flex-wrap justify-center gap-2">
                    {['Manual checks', 'Line-by-line', 'Offline workflows'].map((t) => (
                      <span key={t} className="text-[9px] px-2 py-1 rounded-full" style={{ border: '1px solid rgba(239,68,68,0.2)', color: 'rgba(239,68,68,0.6)' }}>{t}</span>
                    ))}
                  </div>
                </div>
                {/* After */}
                <div className="p-6 md:p-10 text-center" style={{ backgroundColor: 'rgba(34,197,94,0.04)' }}>
                  <p className="text-[10px] uppercase tracking-[0.3em] mb-4 font-semibold" style={{ color: 'rgba(34,197,94,0.7)' }}>After</p>
                  <p className="text-5xl md:text-7xl font-bold mb-2" style={{ color: 'rgba(34,197,94,0.8)' }}>0.2%</p>
                  <p className="text-xs font-light" style={{ color: 'var(--text-secondary)' }}>automated row-level validation</p>
                  <div className="mt-6 flex flex-wrap justify-center gap-2">
                    {['Real-time gaps', 'Continuous', 'AI-validated'].map((t) => (
                      <span key={t} className="text-[9px] px-2 py-1 rounded-full" style={{ border: '1px solid rgba(34,197,94,0.2)', color: 'rgba(34,197,94,0.6)' }}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>
              {/* Gauge strip */}
              <div className="px-6 md:px-10 py-4" style={{ backgroundColor: 'var(--surface-secondary)' }}>
                <div className="flex items-center gap-3">
                  <p className="text-xs font-medium flex-shrink-0" style={{ color: 'var(--text-tertiary)' }}>96% reduction</p>
                  <div className="flex-grow h-3 rounded-full overflow-hidden" style={{ backgroundColor: 'rgba(239,68,68,0.15)' }}>
                    <motion.div
                      className="h-full rounded-full"
                      style={{ backgroundColor: 'rgba(34,197,94,0.8)' }}
                      initial={{ width: '5%' }}
                      whileInView={{ width: '96%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: 'easeOut', delay: 0.4 }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Annotated step table */}
          <RevealScale delay={0.14}>
            <div className="relative rounded-2xl overflow-hidden" style={{ border: '1px solid var(--border-subtle)' }}>
              <img src={imgStepTable} alt="Automated reconciliation surface" className="w-full h-auto" loading="lazy" decoding="async" />
              <div className="absolute top-3 right-3 md:top-5 md:right-5 z-10">
                <span className="text-[10px] font-bold uppercase tracking-wide px-3 py-1.5 rounded-lg" style={{ backgroundColor: 'rgba(34,197,94,0.85)', color: 'white' }}>Automated</span>
              </div>
            </div>
          </RevealScale>

          {/* Tension callout */}
          <Reveal delay={0.2}>
            <div className="mt-10 rounded-2xl p-6 md:p-8 flex items-start gap-4" style={{ backgroundColor: 'rgba(245,158,11,0.06)', border: '1px solid rgba(245,158,11,0.15)' }}>
              <AlertTriangle className="w-6 h-6 flex-shrink-0 mt-0.5" strokeWidth={1.3} style={{ color: 'rgba(245,158,11,0.8)' }} />
              <div>
                <p className="text-base font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>But here\u2019s the problem</p>
                <p className="text-sm font-light leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  Users continued rechecking automated outputs, exporting to Excel, running parallel workflows. The system was technically correct — but <span className="font-medium" style={{ color: 'var(--text-primary)' }}>behaviorally ignored</span>.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <JourneyConnector />

      {/* ═══════════════════════════════════════════════════════
          JOURNEY PHASE 3 — THE V1 INTERFACE
          ═══════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 px-6 md:px-12 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="flex items-center gap-4 mb-12">
              <div className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-bold" style={{ background: 'linear-gradient(135deg, rgba(245,158,11,0.9), rgba(217,119,6,0.7))' }}>03</div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.3em]" style={{ color: 'var(--text-tertiary)' }}>Phase Three</p>
                <p className="text-lg md:text-xl font-semibold" style={{ color: 'var(--text-primary)' }}>The Interface That Reflected the Database</p>
              </div>
            </div>
          </Reveal>

          {/* V1 screenshot with annotation overlays */}
          <RevealScale delay={0.06}>
            <div className="relative rounded-2xl overflow-hidden mb-6" style={{ border: '1px solid var(--border-subtle)' }}>
              <img src={imgTableBefore} alt="V1 flat table" className="w-full h-auto" loading="lazy" decoding="async" />
              <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(180deg, transparent 50%, var(--surface-primary) 100%)', opacity: 0.3 }} />
              {/* Floating annotations */}
              <div className="absolute top-3 left-3 md:top-5 md:left-5 z-10 flex flex-col gap-2">
                {[
                  { label: 'Flat rows', color: 'rgba(239,68,68,0.85)' },
                  { label: 'No hierarchy', color: 'rgba(245,158,11,0.85)' },
                  { label: 'Equal weight', color: 'rgba(168,85,247,0.85)' },
                ].map((a) => (
                  <span key={a.label} className="text-[10px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-md text-white" style={{ backgroundColor: a.color }}>{a.label}</span>
                ))}
              </div>
            </div>
          </RevealScale>

          {/* What contained vs what missed — visual comparison */}
          <Reveal delay={0.12}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="rounded-2xl p-6" style={{ backgroundColor: 'var(--surface-secondary)' }}>
                <p className="text-[10px] uppercase tracking-[0.2em] font-semibold mb-5" style={{ color: 'var(--text-tertiary)' }}>What V1 had</p>
                {['Status (pass/fail)', 'Issues & gaps count', 'Date + time', 'Financial institution'].map((item) => (
                  <div key={item} className="flex items-center gap-2.5 py-2">
                    <CheckCircle2 className="w-4 h-4 flex-shrink-0" strokeWidth={1.3} style={{ color: 'rgba(34,197,94,0.6)' }} />
                    <p className="text-sm font-light" style={{ color: 'var(--text-primary)' }}>{item}</p>
                  </div>
                ))}
              </div>
              <div className="rounded-2xl p-6" style={{ border: '1px solid rgba(239,68,68,0.15)', backgroundColor: 'rgba(239,68,68,0.02)' }}>
                <p className="text-[10px] uppercase tracking-[0.2em] font-semibold mb-5" style={{ color: 'rgba(239,68,68,0.6)' }}>What V1 missed</p>
                {['Team/group organizational logic', 'Bird\u2019s-eye view for asset managers', 'Real-time streaming context', 'Risk prioritization signal'].map((item) => (
                  <div key={item} className="flex items-center gap-2.5 py-2">
                    <XCircle className="w-4 h-4 flex-shrink-0" strokeWidth={1.3} style={{ color: 'rgba(239,68,68,0.5)' }} />
                    <p className="text-sm font-light" style={{ color: 'var(--text-secondary)' }}>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <JourneyConnector />

      {/* ═══════════════════════════════════════════════════════
          JOURNEY PHASE 4 — WHERE IT BROKE (Infographic)
          ═══════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 px-6 md:px-12 lg:px-16" style={{ backgroundColor: 'var(--surface-secondary)' }}>
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="flex items-center gap-4 mb-12">
              <div className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-bold" style={{ background: 'linear-gradient(135deg, rgba(239,68,68,0.9), rgba(185,28,28,0.7))' }}>04</div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.3em]" style={{ color: 'var(--text-tertiary)' }}>Phase Four</p>
                <p className="text-lg md:text-xl font-semibold" style={{ color: 'var(--text-primary)' }}>Three Structural Failures</p>
              </div>
            </div>
          </Reveal>

          {/* Horizontal process flow — infographic style */}
          <Reveal delay={0.08}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
              {[
                {
                  num: '01', icon: <Users className="w-6 h-6" strokeWidth={1.2} />,
                  title: 'Team mismatch',
                  detail: 'Groups of ~10 accountants per asset manager. V1 flattened this hierarchy into a single stream.',
                  severity: 'rgba(239,68,68,0.8)',
                  impact: 'High',
                },
                {
                  num: '02', icon: <Bell className="w-6 h-6" strokeWidth={1.2} />,
                  title: 'Notification flood',
                  detail: 'Every gap triggered an alert. No deduplication, no prioritization. Hundreds competed for attention.',
                  severity: 'rgba(245,158,11,0.8)',
                  impact: 'Critical',
                },
                {
                  num: '03', icon: <AlertTriangle className="w-6 h-6" strokeWidth={1.2} />,
                  title: 'Trust erosion',
                  detail: 'When everything is urgent, nothing is. Users fell back on Excel and manual checks.',
                  severity: 'rgba(239,68,68,0.9)',
                  impact: 'Critical',
                },
              ].map((item, i) => (
                <Reveal key={i} delay={0.1 + i * 0.06}>
                  <div className="rounded-2xl p-6 h-full flex flex-col" style={{ backgroundColor: 'var(--surface-primary)', border: '1px solid var(--border-subtle)' }}>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: item.severity + '15' }}>
                        <div style={{ color: item.severity }}>{item.icon}</div>
                      </div>
                      <span className="text-[9px] uppercase font-bold tracking-wider px-2 py-1 rounded" style={{ backgroundColor: item.severity + '15', color: item.severity }}>{item.impact}</span>
                    </div>
                    <p className="text-base font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>{item.title}</p>
                    <p className="text-sm font-light leading-relaxed flex-grow" style={{ color: 'var(--text-secondary)' }}>{item.detail}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>

          {/* Cascade flow diagram */}
          <Reveal delay={0.24}>
            <div className="rounded-2xl p-6 md:p-8" style={{ backgroundColor: 'var(--surface-primary)', border: '1px solid var(--border-subtle)' }}>
              <p className="text-[10px] uppercase tracking-[0.2em] font-semibold mb-6 text-center" style={{ color: 'var(--text-tertiary)' }}>The Cascade</p>
              <div className="flex items-center justify-between max-w-4xl mx-auto">
                {[
                  { icon: <Activity className="w-5 h-5" strokeWidth={1.3} />, label: 'Streaming data', bg: 'rgba(59,130,246,0.1)', fg: 'rgba(59,130,246,0.7)' },
                  { icon: <Bell className="w-5 h-5" strokeWidth={1.3} />, label: 'Alert flood', bg: 'rgba(245,158,11,0.1)', fg: 'rgba(245,158,11,0.7)' },
                  { icon: <BellOff className="w-5 h-5" strokeWidth={1.3} />, label: 'Fatigue', bg: 'rgba(239,68,68,0.1)', fg: 'rgba(239,68,68,0.6)' },
                  { icon: <FileSpreadsheet className="w-5 h-5" strokeWidth={1.3} />, label: 'Excel fallback', bg: 'rgba(168,85,247,0.1)', fg: 'rgba(168,85,247,0.6)' },
                  { icon: <XCircle className="w-5 h-5" strokeWidth={1.3} />, label: 'Trust erosion', bg: 'rgba(239,68,68,0.15)', fg: 'rgba(239,68,68,0.8)' },
                ].map((item, i, arr) => (
                  <div key={i} className="flex items-center gap-2 md:gap-4">
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: item.bg }}>
                        <div style={{ color: item.fg }}>{item.icon}</div>
                      </div>
                      <p className="text-[9px] md:text-xs font-medium text-center" style={{ color: item.fg }}>{item.label}</p>
                    </div>
                    {i < arr.length - 1 && (
                      <ArrowRight className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" strokeWidth={1.5} style={{ color: 'var(--text-tertiary)', opacity: 0.3 }} />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <JourneyConnector />

      {/* ═══════════════════════════════════════════════════════
          JOURNEY PHASE 5 — HYPOTHESES (Visual cards)
          ═══════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 px-6 md:px-12 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="flex items-center gap-4 mb-12">
              <div className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-bold" style={{ background: 'linear-gradient(135deg, rgba(59,130,246,0.9), rgba(37,99,235,0.7))' }}>05</div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.3em]" style={{ color: 'var(--text-tertiary)' }}>Phase Five</p>
                <p className="text-lg md:text-xl font-semibold" style={{ color: 'var(--text-primary)' }}>Three Hypotheses</p>
              </div>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                icon: <Layers className="w-6 h-6" strokeWidth={1.2} />,
                id: 'H1',
                title: 'Mirror org structure',
                hypothesis: 'Asset manager \u2192 fund group \u2192 fund. Users will orient faster.',
                proof: 'Time-to-answer decreases',
                color: 'rgba(59,130,246,0.7)',
              },
              {
                icon: <Filter className="w-6 h-6" strokeWidth={1.2} />,
                id: 'H2',
                title: 'Deduplicate & rank alerts',
                hypothesis: 'Severity-ranked, time-windowed notifications. Users will act, not ignore.',
                proof: 'Click-through up, Excel down',
                color: 'rgba(168,85,247,0.7)',
              },
              {
                icon: <Lightbulb className="w-6 h-6" strokeWidth={1.2} />,
                id: 'H3',
                title: 'Context in notifications',
                hypothesis: 'Specific workflow details, not generic labels. Faster exception resolution.',
                proof: 'A/B test: lean vs. detailed',
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
                  <p className="text-sm font-light leading-relaxed mb-4 flex-grow" style={{ color: 'var(--text-secondary)' }}>{h.hypothesis}</p>
                  <div className="flex items-center gap-2 pt-3" style={{ borderTop: `1px solid ${h.color}15` }}>
                    <FlaskConical className="w-3.5 h-3.5" strokeWidth={1.3} style={{ color: h.color }} />
                    <p className="text-[10px] font-medium" style={{ color: h.color }}>{h.proof}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <JourneyConnector />

      {/* ═══════════════════════════════════════════════════════
          JOURNEY PHASE 6 — THE SOLUTION (Image gallery + flow)
          ═══════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 px-6 md:px-12 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="flex items-center gap-4 mb-12">
              <div className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-bold" style={{ background: 'linear-gradient(135deg, rgba(34,197,94,0.9), rgba(22,163,74,0.7))' }}>06</div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.3em]" style={{ color: 'var(--text-tertiary)' }}>Phase Six</p>
                <p className="text-lg md:text-xl font-semibold" style={{ color: 'var(--text-primary)' }}>The Structural Redesign</p>
              </div>
            </div>
          </Reveal>

          {/* Design process artifacts */}
          <Reveal delay={0.06}>
            <p className="text-[10px] uppercase tracking-[0.2em] font-semibold mb-4" style={{ color: 'var(--text-tertiary)' }}>Design Process</p>
            <div className="grid grid-cols-2 gap-3 mb-12">
              <div className="rounded-2xl overflow-hidden" style={{ border: '1px solid var(--border-subtle)' }}>
                <img src={imgFlow1} alt="Design flow mapping" className="w-full h-auto" loading="lazy" decoding="async" />
              </div>
              <div className="rounded-2xl overflow-hidden" style={{ border: '1px solid var(--border-subtle)' }}>
                <img src={imgFlow2} alt="System architecture flow" className="w-full h-auto" loading="lazy" decoding="async" />
              </div>
            </div>
          </Reveal>

          {/* Solution 1: Dashboard — visual walkthrough */}
          <Reveal delay={0.1}>
            <div className="rounded-2xl overflow-hidden mb-4" style={{ border: '1px solid var(--border-subtle)' }}>
              <div className="p-6 md:p-8" style={{ backgroundColor: 'var(--surface-secondary)' }}>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-bold px-2.5 py-1 rounded" style={{ backgroundColor: 'rgba(59,130,246,0.1)', color: 'rgba(59,130,246,0.8)' }}>Solution 1</span>
                  <p className="text-base font-semibold" style={{ color: 'var(--text-primary)' }}>Dashboard aligned to org logic</p>
                </div>
                <p className="text-sm font-light" style={{ color: 'var(--text-secondary)' }}>Fund groups by asset manager. Health scores. Drill-down with one click.</p>
              </div>
              {/* Image cascade */}
              <div className="p-3 md:p-4 flex flex-col gap-3" style={{ backgroundColor: 'var(--surface-primary)' }}>
                <img src={imgGroupView} alt="Group-level dashboard" className="w-full h-auto rounded-xl" loading="lazy" decoding="async" />
                <div className="grid grid-cols-2 gap-3">
                  <img src={imgGridView} alt="Dense grid monitoring" className="w-full h-auto rounded-xl" loading="lazy" decoding="async" />
                  <img src={imgStepTimeline} alt="Step-based timeline drill-down" className="w-full h-auto rounded-xl" loading="lazy" decoding="async" />
                </div>
              </div>
            </div>
          </Reveal>

          {/* Impact chips */}
          <Reveal delay={0.14}>
            <div className="flex flex-wrap gap-3 mb-12">
              {[
                { label: '500 rows → 20 groups', color: 'rgba(34,197,94,0.7)' },
                { label: 'Risk visible instantly', color: 'rgba(59,130,246,0.7)' },
                { label: 'UI mirrors team structure', color: 'rgba(168,85,247,0.7)' },
              ].map((c) => (
                <span key={c.label} className="text-xs font-medium px-4 py-2 rounded-full" style={{ backgroundColor: c.color + '12', color: c.color, border: `1px solid ${c.color}25` }}>{c.label}</span>
              ))}
            </div>
          </Reveal>

          {/* Canvas hierarchy — hero screenshot */}
          <RevealScale delay={0.18}>
            <div className="relative rounded-2xl overflow-hidden mb-4" style={{ border: '1px solid var(--border-subtle)' }}>
              <img src={imgHierarchyCanvas} alt="Canvas-based fund hierarchy" className="w-full h-auto" loading="lazy" decoding="async" />
              <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 z-10">
                <span className="text-xs font-bold px-3 py-1.5 rounded-lg text-white backdrop-blur-sm" style={{ backgroundColor: 'rgba(0,0,0,0.7)' }}>Spatial fund hierarchy</span>
              </div>
            </div>
          </RevealScale>

          {/* Solution 2: Notifications */}
          <Reveal delay={0.22}>
            <div className="rounded-2xl p-6 md:p-8 mt-8" style={{ border: '1px solid var(--border-subtle)' }}>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-xs font-bold px-2.5 py-1 rounded" style={{ backgroundColor: 'rgba(168,85,247,0.1)', color: 'rgba(168,85,247,0.8)' }}>Solution 2</span>
                <p className="text-base font-semibold" style={{ color: 'var(--text-primary)' }}>Aggregated notification system</p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { icon: <Clock className="w-5 h-5" strokeWidth={1.2} />, label: 'Time window', color: 'rgba(59,130,246,0.7)' },
                  { icon: <Filter className="w-5 h-5" strokeWidth={1.2} />, label: 'Deduplicate', color: 'rgba(168,85,247,0.7)' },
                  { icon: <Layers className="w-5 h-5" strokeWidth={1.2} />, label: 'Group', color: 'rgba(34,197,94,0.7)' },
                  { icon: <Target className="w-5 h-5" strokeWidth={1.2} />, label: 'Prioritize', color: 'rgba(245,158,11,0.7)' },
                ].map((item, i) => (
                  <div key={i} className="flex flex-col items-center text-center gap-3 py-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: item.color + '12' }}>
                      <div style={{ color: item.color }}>{item.icon}</div>
                    </div>
                    <p className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <JourneyConnector />

      {/* ═══════════════════════════════════════════════════════
          JOURNEY PHASE 7 — THE AI LAYER (Dark infographic)
          ═══════════════════════════════════════════════════════ */}
      <section className="relative py-20 md:py-28 px-6 md:px-12 lg:px-16 text-white overflow-hidden" style={{ backgroundColor: 'var(--color-gray-900)' }}>
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)', backgroundSize: '32px 32px' }} />

        <div className="relative max-w-6xl mx-auto">
          <Reveal>
            <div className="flex items-center gap-4 mb-12">
              <div className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-bold" style={{ background: 'linear-gradient(135deg, rgba(168,85,247,0.9), rgba(126,34,206,0.7))' }}>07</div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] text-white/30">Phase Seven</p>
                <p className="text-lg md:text-xl font-semibold text-white">The AI Layer — Detection to Triage</p>
              </div>
            </div>
          </Reveal>

          {/* AI pipeline — horizontal infographic */}
          <Reveal delay={0.08}>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-12">
              {[
                { icon: <Brain className="w-5 h-5" strokeWidth={1.3} />, title: 'Pattern scan', desc: 'Reads full notification stream', color: 'rgba(168,85,247,0.7)' },
                { icon: <Gauge className="w-5 h-5" strokeWidth={1.3} />, title: 'Severity rank', desc: 'Low \u2192 critical classification', color: 'rgba(239,68,68,0.7)' },
                { icon: <Clock className="w-5 h-5" strokeWidth={1.3} />, title: 'Time-window', desc: 'Groups operational window', color: 'rgba(59,130,246,0.7)' },
                { icon: <Filter className="w-5 h-5" strokeWidth={1.3} />, title: 'Deduplicate', desc: 'One entry per root cause', color: 'rgba(245,158,11,0.7)' },
                { icon: <Zap className="w-5 h-5" strokeWidth={1.3} />, title: 'Fix suggestions', desc: 'Historical pattern matching', color: 'rgba(34,197,94,0.7)' },
                { icon: <Target className="w-5 h-5" strokeWidth={1.3} />, title: 'Right time', desc: 'Delivered when user can act', color: 'rgba(168,85,247,0.7)' },
              ].map((item, i) => (
                <div key={i} className="rounded-xl p-4" style={{ backgroundColor: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center mb-3" style={{ backgroundColor: item.color + '20' }}>
                    <div style={{ color: item.color }}>{item.icon}</div>
                  </div>
                  <p className="text-sm font-medium text-white mb-1">{item.title}</p>
                  <p className="text-xs font-light text-white/40">{item.desc}</p>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Hierarchy image */}
          <RevealScale delay={0.14}>
            <div className="rounded-2xl overflow-hidden mb-10" style={{ border: '1px solid rgba(255,255,255,0.08)' }}>
              <img src={imgHeroDashboard} alt="Fund hierarchy — AI structural context" className="w-full h-auto opacity-80" loading="lazy" decoding="async" />
            </div>
          </RevealScale>

          {/* AI digest — severity-coded */}
          <Reveal delay={0.2}>
            <div className="flex flex-col gap-3">
              {[
                { severity: 'Critical', color: 'rgba(239,68,68,0.85)', bg: 'rgba(239,68,68,0.08)', issue: 'NAV discrepancy — PIMCO Global Bond Fund', suggestion: 'Revalidate FX rates for EUR/USD position' },
                { severity: 'High', color: 'rgba(245,158,11,0.85)', bg: 'rgba(245,158,11,0.06)', issue: 'Allocation mismatch — Vanguard Growth Equity (3 consolidated)', suggestion: 'Review feeding config for sub-fund B' },
                { severity: 'Low', color: 'rgba(34,197,94,0.7)', bg: 'rgba(34,197,94,0.05)', issue: 'Timestamp drift — BlackRock Income Fund', suggestion: 'Auto-correctable. Confirm or dismiss.' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-4 rounded-xl" style={{ backgroundColor: item.bg, border: `1px solid ${item.color}20` }}>
                  <div className="flex flex-col items-center gap-1 pt-0.5">
                    <span className="inline-block w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                  </div>
                  <div className="flex-grow">
                    <span className="text-[10px] uppercase font-bold tracking-wider" style={{ color: item.color }}>{item.severity}</span>
                    <p className="text-sm font-light text-white/75 mt-1">{item.issue}</p>
                    <p className="text-xs font-light text-white/35 mt-1">{item.suggestion}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          JOURNEY PHASE 8 — A/B TEST (Visual comparison)
          ═══════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 px-6 md:px-12 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="flex items-center gap-4 mb-12">
              <div className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-bold" style={{ background: 'linear-gradient(135deg, rgba(245,158,11,0.9), rgba(217,119,6,0.7))' }}>08</div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.3em]" style={{ color: 'var(--text-tertiary)' }}>Phase Eight</p>
                <p className="text-lg md:text-xl font-semibold" style={{ color: 'var(--text-primary)' }}>A/B Validation — Lean vs. Detailed</p>
              </div>
            </div>
          </Reveal>

          {/* Visual A/B split */}
          <Reveal delay={0.08}>
            <div className="rounded-2xl overflow-hidden mb-8" style={{ border: '1px solid var(--border-subtle)' }}>
              <div className="grid grid-cols-2">
                <div className="p-6 md:p-8" style={{ backgroundColor: 'var(--surface-secondary)' }}>
                  <p className="text-[10px] uppercase tracking-[0.25em] font-semibold mb-5" style={{ color: 'var(--text-tertiary)' }}>Variant A</p>
                  <div className="flex flex-col gap-3">
                    {['Status label (pass/fail)', 'Fund + timestamp', 'Generic action', 'No severity'].map((t, i) => (
                      <div key={i} className="flex items-center gap-2">
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
                  <div className="flex flex-col gap-3">
                    {['Severity badge', 'Gap description', 'Fix suggestion', 'Downstream risk'].map((t, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" strokeWidth={1.4} style={{ color: 'rgba(34,197,94,0.7)' }} />
                        <p className="text-xs font-light" style={{ color: 'var(--text-primary)' }}>{t}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Result gauges */}
          <Reveal delay={0.14}>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="rounded-2xl p-6 md:p-8 text-center" style={{ backgroundColor: 'rgba(59,130,246,0.04)', border: '1px solid rgba(59,130,246,0.15)' }}>
                <MousePointerClick className="w-6 h-6 mx-auto mb-3" strokeWidth={1.2} style={{ color: 'rgba(59,130,246,0.7)' }} />
                <p className="text-4xl md:text-5xl font-bold mb-1" style={{ color: 'rgba(59,130,246,0.9)' }}>+30%</p>
                <p className="text-xs font-light" style={{ color: 'var(--text-secondary)' }}>engagement rate</p>
              </div>
              <div className="rounded-2xl p-6 md:p-8 text-center" style={{ backgroundColor: 'rgba(168,85,247,0.04)', border: '1px solid rgba(168,85,247,0.15)' }}>
                <TrendingUp className="w-6 h-6 mx-auto mb-3" strokeWidth={1.2} style={{ color: 'rgba(168,85,247,0.7)' }} />
                <p className="text-4xl md:text-5xl font-bold mb-1" style={{ color: 'rgba(168,85,247,0.9)' }}>+40%</p>
                <p className="text-xs font-light" style={{ color: 'var(--text-secondary)' }}>resolution speed</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="rounded-xl p-5 text-center" style={{ backgroundColor: 'var(--surface-secondary)' }}>
              <p className="text-sm font-light italic" style={{ fontFamily: 'var(--font-serif)', color: 'var(--text-primary)' }}>
                Users didn\u2019t want less information. They wanted the right information, in context.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <JourneyConnector />

      {/* ═══════════════════════════════════════════════════════
          JOURNEY PHASE 9 — OUTCOME (Dark celebration)
          ═══════════════════════════════════════════════════════ */}
      <section className="relative py-20 md:py-28 px-6 md:px-12 lg:px-16 text-white overflow-hidden" style={{ backgroundColor: 'var(--color-gray-900)' }}>
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(34,197,94,0.04) 0%, transparent 70%)' }} />

        <div className="relative max-w-6xl mx-auto">
          <Reveal>
            <div className="flex items-center gap-4 mb-14 justify-center">
              <div className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-bold" style={{ background: 'linear-gradient(135deg, rgba(34,197,94,0.9), rgba(22,163,74,0.7))' }}>09</div>
              <p className="text-lg md:text-xl font-semibold text-white">Outcome</p>
            </div>
          </Reveal>

          {/* Metric grid — colored cards */}
          <Reveal delay={0.08}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-14">
              {[
                { metric: '5%\u21920.2%', label: 'Error rate', color: 'rgba(34,197,94,0.7)' },
                { metric: '+30%', label: 'Automation adoption', color: 'rgba(59,130,246,0.7)' },
                { metric: '+30%', label: 'Notification engagement', color: 'rgba(168,85,247,0.7)' },
                { metric: '+40%', label: 'Resolution speed', color: 'rgba(245,158,11,0.7)' },
              ].map((item, i) => (
                <div key={i} className="rounded-xl p-5 md:p-6 text-center" style={{ backgroundColor: item.color + '10', border: `1px solid ${item.color}25` }}>
                  <p className="text-2xl md:text-3xl font-bold mb-1" style={{ color: item.color }}>{item.metric}</p>
                  <p className="text-[10px] uppercase tracking-wider font-medium text-white/40">{item.label}</p>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Final system screenshot */}
          <RevealScale delay={0.14}>
            <div className="rounded-2xl overflow-hidden mb-3" style={{ border: '1px solid rgba(255,255,255,0.08)' }}>
              <img src={imgCanvasAnnotated} alt="The redesigned system" className="w-full h-auto opacity-85" loading="lazy" decoding="async" />
            </div>
            <p className="text-xs font-light text-center mb-10 text-white/25">
              The redesigned system — spatial hierarchy, visible relationships, embedded status
            </p>
          </RevealScale>

          {/* Key takeaways — horizontal scroll feel */}
          <Reveal delay={0.2}>
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/25 mb-6 text-center">Key Takeaways</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                { icon: <Eye className="w-4 h-4" strokeWidth={1.3} />, text: 'Accuracy without inspectability isn\u2019t trusted.' },
                { icon: <Layers className="w-4 h-4" strokeWidth={1.3} />, text: 'UI structure must mirror organizational logic.' },
                { icon: <BellOff className="w-4 h-4" strokeWidth={1.3} />, text: 'Notification volume kills notification value.' },
                { icon: <Search className="w-4 h-4" strokeWidth={1.3} />, text: 'Context outperforms brevity — when structured well.' },
                { icon: <Brain className="w-4 h-4" strokeWidth={1.3} />, text: 'AI succeeded because its logic was visible.' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-xl" style={{ backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <div className="text-white/30 mt-0.5">{item.icon}</div>
                  <p className="text-sm font-light text-white/60">{item.text}</p>
                </div>
              ))}
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
              The gap between accurate automation and trusted automation
            </p>
            <p className="text-2xl md:text-3xl lg:text-4xl font-normal leading-[1.3] italic mt-2" style={{ fontFamily: 'var(--font-serif)', color: 'var(--text-secondary)' }}>
              is never technical. It\u2019s cognitive.
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
