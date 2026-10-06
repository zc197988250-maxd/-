const SHOWREEL_SRC = '/assets/projects/video/showreel.mp4'

export function Hero() {
  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden border-b border-line bg-[#11110f]">
      <video className="absolute inset-0 h-full w-full object-cover" src={SHOWREEL_SRC} autoPlay muted loop playsInline preload="metadata" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_68%_32%,rgba(214,255,82,0.10),transparent_27%),radial-gradient(ellipse_at_50%_105%,rgba(168,139,95,0.10),transparent_42%)]" />
      <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] [background-size:72px_72px]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,5,5,0.32),transparent_48%),linear-gradient(0deg,rgba(5,5,5,0.98)_0%,rgba(5,5,5,0.5)_33%,transparent_68%)]" />

      <div className="site-shell relative z-10 flex min-h-[100svh] flex-col justify-end pb-7 pt-32 sm:pb-9 sm:pt-40 lg:pb-10">
        <div className="grid items-end gap-7 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <p className="eyebrow mb-5 text-accent">AIGC 视觉设计 · AI 漫剧制作</p>
            <h1 className="font-display text-[clamp(2.7rem,4.3vw,5.25rem)] font-medium leading-[0.94] tracking-[-0.055em]">
              <span className="block sm:inline">AI 漫剧视觉</span><span className="block sm:inline">资产生成</span>
              <span className="block text-white/60">与 AI 视频制作</span>
            </h1>
          </div>

          <div className="flex flex-wrap gap-3 lg:col-span-5 lg:justify-end lg:pb-2">
            <a className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-ink transition-colors hover:bg-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent" href="#selected-work">查看精选作品 <span className="ml-3" aria-hidden="true">↘</span></a>
            <a className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/25 bg-black/10 px-6 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:border-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent" href="/resume">查看个人简历</a>
          </div>
        </div>

        <div className="mt-8 grid gap-6 border-t border-white/15 pt-6 sm:grid-cols-2 lg:mt-10 lg:grid-cols-12 lg:gap-8">
          <p className="text-xs leading-5 tracking-[0.14em] text-white/55 sm:col-span-1 lg:col-span-3">商业制作经验<br /><span className="text-white">稳定产能 2 集 / 天</span></p>
          <p className="hidden text-xs leading-5 tracking-[0.14em] text-white/55 lg:col-span-3 lg:block">角色 · 场景<br />道具 · 动态影像</p>
          <p className="max-w-xl text-sm leading-6 text-white/65 sm:col-span-1 lg:col-span-5 lg:col-start-8 lg:text-base lg:leading-7">将剧本转化为角色、场景、道具、镜头与最终 AI 视频，专注高质量视觉资产、一致性控制与高效率 AI 漫剧生产。</p>
        </div>
      </div>
    </section>
  )
}
