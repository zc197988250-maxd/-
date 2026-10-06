import { ArrowIcon } from '../ui/ArrowIcon'

export function Contact() {
  return (
    <section id="contact" className="site-shell pb-16 pt-20 sm:pb-24 sm:pt-28 lg:pb-32">
      <div className="rounded-card bg-warm px-6 py-10 text-ink sm:px-10 sm:py-14 lg:px-16 lg:py-20">
        <div className="flex flex-col gap-4 border-b border-black/20 pb-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow !text-black/50">05 / Contact</p>
            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] sm:text-6xl">联系我</h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-black/60">AI 漫剧制作 · AIGC 视觉设计 · AI 视觉内容创作</p>
        </div>
        <div className="mt-8 grid gap-3 lg:grid-cols-3">
          <a className="flex min-h-24 flex-col justify-between rounded-2xl border border-black/20 p-5 transition-colors hover:border-black" href="mailto:zc197988250@gmail.com"><span className="text-xs uppercase tracking-[0.18em] text-black/50">Email</span><span className="break-all text-base font-medium sm:text-lg">zc197988250@gmail.com</span></a>
          <a className="flex min-h-24 flex-col justify-between rounded-2xl border border-black/20 p-5 transition-colors hover:border-black" href="tel:19544517115"><span className="text-xs uppercase tracking-[0.18em] text-black/50">手机</span><span className="text-base font-medium sm:text-lg">19544517115</span></a>
          <a className="flex min-h-24 items-end justify-between rounded-2xl border border-black/20 p-5 transition-colors hover:border-black" href="https://www.xiaohongshu.com/user/profile/6597e4a50000000022017c65" target="_blank" rel="noreferrer"><span><span className="block text-xs uppercase tracking-[0.18em] text-black/50">Social</span><span className="mt-5 block text-base font-medium sm:text-lg">小红书</span></span><ArrowIcon diagonal /></a>
        </div>
        <a className="mt-8 inline-flex min-h-12 items-center gap-3 rounded-full bg-ink px-6 font-semibold text-warm hover:bg-black" href="/assets/resume/resume.pdf" download="书羽-AI漫剧-个人简历.pdf">下载 PDF 简历 <ArrowIcon /></a>
      </div>
    </section>
  )
}
