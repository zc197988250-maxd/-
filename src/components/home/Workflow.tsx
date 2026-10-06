import { workflow } from '../../data/portfolio'
import { SectionHeading } from '../ui/SectionHeading'

export function Workflow() {
  return (
    <section className="site-shell section-space">
      <SectionHeading index="04 / Workflow" title="From Script to Final Frame" description="以生产阶段组织创作判断，让资产、镜头和成片保持在同一套视觉逻辑中。" />
      <ol className="border-t border-line">
        {workflow.map((step, index) => (
          <li key={step} className="group grid min-h-24 grid-cols-[3.5rem_1fr_auto] items-center gap-2 border-b border-line transition-colors hover:bg-panel sm:min-h-28 sm:grid-cols-[6rem_1fr_auto] sm:px-4">
            <span className="font-mono text-xs text-muted">{String(index + 1).padStart(2, '0')}</span>
            <span className="text-lg font-medium tracking-[-0.02em] sm:text-2xl lg:text-3xl">{step}</span>
            <span aria-hidden="true" className="pr-2 text-muted transition-transform group-hover:translate-x-1 sm:pr-4">→</span>
          </li>
        ))}
      </ol>
    </section>
  )
}
