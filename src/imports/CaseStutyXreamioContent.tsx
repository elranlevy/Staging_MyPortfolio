import { type ReactNode } from 'react';
import { motion } from 'motion/react';
import {
  ArrowRight,
  Server,
  BarChart3,
  Gauge,
  LayoutDashboard,
  Eye,
  Workflow,
  Layers,
  Bell,
  Zap,
  Grid3X3,
} from 'lucide-react';

/* ── Existing images ─────────────────────────────────────────── */
import imgImage175 from 'figma:asset/8283c758f682797739df887f6aa3e29caa08732e.png';
import imgImage172 from 'figma:asset/d39fb3cca29d3b2153e74727f2bd2167584b2b3c.png';
import imgImage174 from 'figma:asset/dc4843ec408a4532c53cdacb5ed2533eecd0dc2e.png';
import imgImage176 from 'figma:asset/d4d58b02892ddfba3736780450879b582c47390e.png';
import imgClusterStatus from 'figma:asset/1310cf6034e7996a8a437beaf595a9e75ee70205.png';
import imgImage178 from 'figma:asset/d7831a442bc44faf1090c9e711599d69abfabc41.png';
import imgImage177 from 'figma:asset/84697da8fef42b33bbdcddc2442ef98a82019325.png';

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
   XTREAMIO — "Technical Precision"
   ──────────────────────────────────────────────────────────────
   Unique personality:
   · Problem as concise narrative paragraph (NOT bullet list)
   · No KPI card (qualitative results)
   · Merged problem + ownership into a denser flow
   · Key Insight as contained dark card (NOT full-width band)
   · Approach as compact numbered list (NOT grid cards)
   · Screenshots elevated as the star — maximum visual space
   · Results as minimal two-column layout on white (NOT dark band)
   ================================================================ */
export default function CaseStutyXreamioContent() {
  return (
    <div className="bg-white">
      {/* ═══════════════════════════════════════════════════════
          HERO
          ═══════════════════════════════════════════════════════ */}
      <section className="pt-24 md:pt-32 lg:pt-40 pb-6 md:pb-8 px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] mb-6" style={{ color: 'var(--text-tertiary)' }}>XtremIO</p>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-[1.12] mb-6" style={{ color: 'var(--text-primary)' }}>
              Designing enterprise storage management systems
            </h1>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="text-base md:text-lg font-light italic max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-serif)', color: 'var(--text-secondary)' }}>
              When losing context means losing control
            </p>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-10 pt-8 text-left" style={{ borderTop: '1px solid var(--border-subtle)' }}>
              {[
                { label: 'Role', value: 'Product Designer' },
                { label: 'Team', value: 'PM · Engineering · Enterprise Stakeholders' },
                { label: 'Scope', value: 'Storage monitoring · System management · Admin workflows' },
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
          <img src={imgImage175} alt="XtremIO storage management dashboard" className="w-full h-auto rounded-xl" loading="eager" decoding="async" />
        </div>
      </Reveal>

      <VerticalDivider />

      {/* ═══════════════════════════════════════════════════════
          PROBLEM + OWNERSHIP — Merged, denser narrative
          (NOT separate sections with identical structure — unique to XtremIO)
          ═══════════════════════════════════════════════════════ */}
      <section className="pb-14 md:pb-18 px-6 md:px-12 lg:px-16">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            {/* Left — Problem */}
            <div>
              <Reveal>
                <div className="flex items-center gap-3 mb-6">
                  <Server className="w-5 h-5" strokeWidth={1.5} style={{ color: 'var(--text-tertiary)' }} />
                  <BarChart3 className="w-5 h-5" strokeWidth={1.5} style={{ color: 'var(--text-tertiary)' }} />
                  <Gauge className="w-5 h-5" strokeWidth={1.5} style={{ color: 'var(--text-tertiary)' }} />
                  <span className="text-[10px] uppercase tracking-[0.2em] ml-2" style={{ color: 'var(--text-tertiary)' }}>Challenge</span>
                </div>
              </Reveal>

              <Reveal delay={0.05}>
                <h2 className="text-xl md:text-2xl font-semibold mb-6 leading-snug" style={{ color: 'var(--text-primary)' }}>
                  The Problem
                </h2>
              </Reveal>

              <Reveal delay={0.1}>
                <p className="text-sm md:text-base font-light leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
                  XtremIO operated in a highly technical enterprise environment with complex
                  infrastructure logic, dense monitoring dashboards, and expert users who had
                  low tolerance for inefficiency.
                </p>
                <p className="text-sm md:text-base font-light italic" style={{ color: 'var(--text-secondary)' }}>
                  The interface needed to simplify without oversimplifying.
                </p>
              </Reveal>
            </div>

            {/* Right — Ownership */}
            <div>
              <Reveal>
                <div className="flex items-center gap-3 mb-6">
                  <LayoutDashboard className="w-5 h-5" strokeWidth={1.5} style={{ color: 'var(--text-tertiary)' }} />
                  <Eye className="w-5 h-5" strokeWidth={1.5} style={{ color: 'var(--text-tertiary)' }} />
                  <Workflow className="w-5 h-5" strokeWidth={1.5} style={{ color: 'var(--text-tertiary)' }} />
                  <span className="text-[10px] uppercase tracking-[0.2em] ml-2" style={{ color: 'var(--text-tertiary)' }}>Ownership</span>
                </div>
              </Reveal>

              <Reveal delay={0.05}>
                <h2 className="text-xl md:text-2xl font-semibold mb-6 leading-snug" style={{ color: 'var(--text-primary)' }}>
                  My Role
                </h2>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="flex flex-col gap-3">
                  {[
                    'Designed monitoring dashboards and admin workflows',
                    'Translated infrastructure metrics into clear visual patterns',
                    'Reduced friction in system management tasks',
                    'Collaborated directly with engineering-heavy stakeholders',
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full mt-[7px] flex-shrink-0" style={{ backgroundColor: 'var(--text-tertiary)' }} />
                      <p className="text-sm md:text-base font-light" style={{ color: 'var(--text-primary)' }}>{item}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <VerticalDivider />

      {/* ═══════════════════════════════════════════════════════
          KEY INSIGHT — Contained dark card
          (NOT full-width band — unique to XtremIO)
          ═══════════════════════════════════════════════════════ */}
      <section className="py-12 md:py-16 px-6 md:px-12 lg:px-16">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <div
              className="rounded-2xl px-8 py-14 md:px-14 md:py-20 text-center"
              style={{ backgroundColor: 'var(--color-gray-900)' }}
            >
              <p className="text-[11px] uppercase tracking-[0.3em] mb-8" style={{ color: 'rgba(255,255,255,0.35)' }}>Key Insight</p>
              <p className="text-xl md:text-3xl lg:text-4xl font-semibold leading-tight text-white mb-3">
                Technical users value clarity and control
              </p>
              <p className="text-xl md:text-3xl lg:text-4xl font-semibold leading-tight italic" style={{ fontFamily: 'var(--font-serif)', color: 'rgba(255,255,255,0.75)' }}>
                &mdash; not decoration.
              </p>
              <p className="mt-8 text-sm font-light max-w-md mx-auto" style={{ color: 'rgba(255,255,255,0.45)' }}>
                Efficiency and information hierarchy drive adoption.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <VerticalDivider />

      {/* ═══════════════════════════════════════════════════════
          APPROACH — Compact numbered list
          (NOT grid cards — unique to XtremIO)
          ═══════════════════════════════════════════════════════ */}
      <section className="pb-14 md:pb-18 px-6 md:px-12 lg:px-16">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-semibold text-center mb-12" style={{ color: 'var(--text-primary)' }}>The Approach</h2>
          </Reveal>

          <div className="flex flex-col gap-0">
            {[
              { num: '01', text: 'Simplify data hierarchy in dashboards', icon: <Layers className="w-5 h-5" strokeWidth={1.4} /> },
              { num: '02', text: 'Improve visibility of system status and alerts', icon: <Bell className="w-5 h-5" strokeWidth={1.4} /> },
              { num: '03', text: 'Reduce steps in frequent admin actions', icon: <Zap className="w-5 h-5" strokeWidth={1.4} /> },
              { num: '04', text: 'Standardize interaction logic across tools', icon: <Grid3X3 className="w-5 h-5" strokeWidth={1.4} /> },
            ].map((step, i, arr) => (
              <Reveal key={i} delay={i * 0.06}>
                <div
                  className="flex items-center gap-5 py-5"
                  style={{ borderBottom: i < arr.length - 1 ? '1px solid var(--border-subtle)' : undefined }}
                >
                  <p className="text-lg font-semibold w-8 text-right flex-shrink-0" style={{ color: 'var(--text-tertiary)' }}>{step.num}</p>
                  <div style={{ color: 'var(--text-tertiary)' }}>{step.icon}</div>
                  <p className="text-sm md:text-base font-light" style={{ color: 'var(--text-primary)' }}>{step.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <VerticalDivider />

      {/* ═══════════════════════════════════════════════════════
          DESIGN VISUALS — Screenshots elevated as the star
          (given maximum space — unique emphasis for XtremIO)
          ═══════════════════════════════════════════════════════ */}
      <section className="pb-8 md:pb-12">
        <Reveal>
          <div className="max-w-4xl mx-auto px-6 md:px-12 mb-8 text-center">
            <p className="text-[11px] uppercase tracking-[0.2em] mb-4" style={{ color: 'var(--text-tertiary)' }}>Design Output</p>
            <p className="text-sm md:text-base font-light max-w-lg mx-auto" style={{ color: 'var(--text-secondary)' }}>
              Monitoring dashboards, health views, cluster status, and admin tools designed for clarity under pressure.
            </p>
          </div>
        </Reveal>

        <div className="max-w-[1400px] mx-auto px-6 md:px-12 space-y-4">
          <Reveal>
            <img src={imgImage172} alt="XtremIO dashboard overview" className="w-full h-auto rounded-xl" loading="lazy" decoding="async" />
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Reveal delay={0.08}><img src={imgImage174} alt="Health monitoring" className="w-full h-auto rounded-xl" loading="lazy" decoding="async" /></Reveal>
            <Reveal delay={0.16}><img src={imgImage176} alt="Capacity monitoring" className="w-full h-auto rounded-xl" loading="lazy" decoding="async" /></Reveal>
          </div>
          <Reveal>
            <img src={imgClusterStatus} alt="Cluster connectivity status" className="w-full h-auto rounded-xl" loading="lazy" decoding="async" />
          </Reveal>
          <Reveal>
            <img src={imgImage178} alt="Master-detail view" className="w-full h-auto rounded-xl" loading="lazy" decoding="async" />
          </Reveal>
        </div>
      </section>

      <VerticalDivider />

      {/* ═══════════════════════════════════════════════════════
          RESULTS — Minimal two-column on white
          (NOT a dark band — unique to XtremIO)
          ═══════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-16">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.3em] mb-4 text-center" style={{ color: 'var(--text-tertiary)' }}>Results</p>
            <h2 className="text-2xl md:text-3xl font-semibold text-center mb-12" style={{ color: 'var(--text-primary)' }}>
              Measurable impact on enterprise operations
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { label: 'Task Efficiency', desc: 'Improved task efficiency for system administrators' },
              { label: 'Monitoring', desc: 'Reduced friction in monitoring workflows' },
              { label: 'Consistency', desc: 'More consistent enterprise UI patterns across tools' },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="flex items-start gap-4" style={{ borderLeft: '2px solid var(--text-primary)', paddingLeft: '16px' }}>
                  <div>
                    <p className="text-xs uppercase tracking-[0.15em] mb-1" style={{ color: 'var(--text-tertiary)' }}>{item.label}</p>
                    <p className="text-sm md:text-base font-light" style={{ color: 'var(--text-primary)' }}>{item.desc}</p>
                  </div>
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
        <img src={imgImage177} alt="XtremIO — enterprise monitoring at scale" loading="lazy" decoding="async" className="w-full h-auto object-cover" />
        <div className="absolute inset-0 flex items-center">
          <div className="ml-auto mr-4 md:mr-12 lg:mr-20 max-w-[40%] md:max-w-sm lg:max-w-md">
            <p className="text-[10px] leading-3 md:text-base md:leading-7 mb-1 md:mb-2 text-white font-light tracking-wide">
              &ldquo;Great monitoring UX doesn&rsquo;t simplify systems. It makes them:
            </p>
            <p className="text-xs leading-4 md:text-3xl md:leading-snug lg:text-[48px] lg:leading-snug text-white font-light tracking-wide">
              understandable under pressure&rdquo;
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
              <ArrowRight className="w-4 h-4 rotate-180" /> Bluevine
            </p>
          </div>
          <div className="text-right">
            <p className="text-[11px] uppercase tracking-[0.15em] mb-1" style={{ color: 'var(--text-tertiary)' }}>Next Case Study</p>
            <p className="text-base md:text-lg font-medium flex items-center gap-2" style={{ color: 'var(--text-primary)' }}>
              FundGuard <ArrowRight className="w-4 h-4" />
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
