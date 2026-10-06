import { useEffect, useState } from 'react'
import { projects } from '../../data/portfolio'
import { ArrowIcon } from '../ui/ArrowIcon'
import { SectionHeading } from '../ui/SectionHeading'

export function SelectedWork() {
  const [activeProject, setActiveProject] = useState<(typeof projects)[number] | null>(null)

  useEffect(() => {
    if (!activeProject) return
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActiveProject(null)
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', closeOnEscape)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', closeOnEscape)
    }
  }, [activeProject])

  return (
    <section id="selected-work" className="site-shell section-space scroll-mt-24">
      <SectionHeading index="02 / Selected" title="精选角色资产展示" />
      <div className="grid gap-x-6 gap-y-14 md:grid-cols-2 lg:gap-x-8 lg:gap-y-20">
        {projects.map((project, index) => (
          <article key={project.title} className={`${index % 2 === 1 ? 'md:mt-24' : ''} group`}>
            <div className="card overflow-hidden transition-colors duration-300 group-hover:border-white/40">
              <div className="transition-transform duration-500 ease-out group-hover:scale-[1.015]">
                <img src={project.image} alt={`${project.title}人物资产设定图`} className="aspect-video w-full object-cover" loading="lazy" decoding="async" />
              </div>
            </div>
            <div className="mt-5 flex items-start justify-between gap-4">
              <div>
                <p className="eyebrow mb-2">{project.category}</p>
                <h3 className="text-2xl font-semibold tracking-[-0.03em] sm:text-3xl">{project.title}</h3>
                <p className="mt-3 max-w-lg text-sm leading-6 text-muted">{project.description}</p>
              </div>
              <button type="button" onClick={() => setActiveProject(project)} className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line transition-colors group-hover:border-accent group-hover:text-accent" aria-label={`放大查看${project.title}`}><ArrowIcon diagonal /></button>
            </div>
          </article>
        ))}
      </div>
      {activeProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 sm:p-8" role="dialog" aria-modal="true" aria-label={`${activeProject.title}原图预览`} onClick={() => setActiveProject(null)}>
          <button type="button" onClick={() => setActiveProject(null)} className="absolute right-5 top-5 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-black/40 text-xl hover:border-white sm:right-8 sm:top-8" aria-label="关闭原图">×</button>
          <div className="flex h-full w-full flex-col items-center justify-center gap-4" onClick={(event) => event.stopPropagation()}>
            <img src={activeProject.image} alt={`${activeProject.title}人物资产原图`} className="max-h-[calc(100vh-7rem)] max-w-full object-contain" />
            <div className="flex w-full max-w-5xl items-center justify-between text-xs text-white/60">
              <span>{activeProject.title} · 原始分辨率</span>
              <a href={activeProject.image} target="_blank" rel="noreferrer" className="rounded-full border border-white/20 px-4 py-2 text-white hover:border-white">打开原图 ↗</a>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}