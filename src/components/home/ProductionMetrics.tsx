import { metrics } from '../../data/portfolio'
import { SectionHeading } from '../ui/SectionHeading'

export function ProductionMetrics() {
  return (
    <section className="site-shell section-space" aria-labelledby="metrics-title">
      <SectionHeading index="01 / Production" title="生产数据" />
      <div id="metrics-title" className="grid grid-cols-2 border-l border-t border-line lg:grid-cols-5">
        {metrics.map((metric) => (
          <article key={metric.label} className="min-h-48 border-b border-r border-line p-5 sm:p-7 lg:min-h-64 lg:p-8">
            <p className="font-display text-[clamp(2.75rem,5vw,5.75rem)] font-semibold leading-none tracking-[-0.06em]">{metric.value}</p>
            <p className="mt-5 text-sm font-semibold leading-5">{metric.label}</p>
            <p className="mt-2 text-xs text-muted">{metric.note}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
