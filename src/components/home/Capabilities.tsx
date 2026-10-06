import { capabilities } from '../../data/portfolio'
import { SectionHeading } from '../ui/SectionHeading'

export function Capabilities() {
  return (
    <section className="site-shell section-space">
      <SectionHeading index="03 / Capabilities" title="AI Comic Drama Capabilities" />
      <div className="grid border-l border-t border-line md:grid-cols-2 xl:grid-cols-3">
        {capabilities.map(([number, title, detail]) => (
          <article key={number} className="group min-h-56 border-b border-r border-line p-6 transition-colors hover:bg-panel sm:p-8">
            <p className="font-mono text-xs text-muted">{number}</p>
            <h3 className="mt-14 text-xl font-semibold tracking-[-0.025em] sm:text-2xl">{title}</h3>
            <p className="mt-3 text-sm leading-6 text-muted">{detail}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
