export function ResumePage() {
  const pages = [
    '/assets/resume/preview/resume-page-1.png',
    '/assets/resume/preview/resume-page-2.png',
    '/assets/resume/preview/resume-page-3.png',
  ]

  return (
    <section className="site-shell min-h-[72vh] py-20 sm:py-28 lg:py-36">
      <p className="eyebrow text-accent">个人资料</p>
      <div className="mt-7 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <h1 className="display-title">个人简历</h1>
        <a className="button-primary w-full sm:w-auto" href="/assets/resume/resume.pdf" download="书羽-AI漫剧-个人简历.pdf">下载 PDF 简历</a>
      </div>
      <div className="mt-14 grid gap-8 border-t border-line pt-8 lg:grid-cols-12 lg:items-start">
        <aside className="lg:sticky lg:top-28 lg:col-span-3">
          <p className="eyebrow">个人简历 · 共 3 页</p>
          <p className="mt-5 text-2xl font-semibold leading-tight tracking-[-0.03em]">AI 漫剧制作<br />AIGC 视觉设计</p>
          <p className="mt-5 text-sm leading-6 text-muted">下方为真实简历页面预览，可直接浏览或下载 PDF 原文件。</p>
          <a className="mt-8 inline-flex text-sm font-semibold text-accent hover:text-white" href="/assets/resume/resume.pdf" target="_blank" rel="noreferrer">在新窗口打开 PDF ↗</a>
        </aside>
        <div className="space-y-6 lg:col-span-9">
          {pages.map((page, index) => (
            <figure key={page} className="overflow-hidden rounded-card border border-line bg-white p-2 sm:p-4">
              <img src={page} alt={`书羽个人简历第 ${index + 1} 页`} className="h-auto w-full" loading={index === 0 ? 'eager' : 'lazy'} decoding="async" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
