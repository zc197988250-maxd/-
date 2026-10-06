import { SectionHeading } from '../ui/SectionHeading'

export function AboutSection() {
  return (
    <section className="site-shell section-space">
      <SectionHeading index="04 / About" title="关于我" />
      <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-4"><div className="overflow-hidden rounded-card border border-line bg-panel"><img src="/assets/profile/profile.jpg" alt="书羽个人头像" className="aspect-[4/5] w-full object-cover object-top" loading="lazy" decoding="async" /></div></div>
        <div className="flex flex-col justify-between lg:col-span-7 lg:col-start-6">
          <p className="max-w-3xl text-[clamp(1.55rem,2.8vw,3.25rem)] font-medium leading-[1.2] tracking-[-0.035em]">具备真实 AI 漫剧商业生产经验，能够把剧本需求转化为可控、一致且可高效交付的视觉资产与视频镜头。</p>
          <div className="mt-14 grid gap-6 border-t border-line pt-6 sm:grid-cols-2">
            <div><p className="eyebrow">商业生产</p><p className="mt-3 text-sm leading-6 text-muted">稳定流程下，单日约完成 2 集、每集约 1.5 分钟的 AI 漫剧视频生成任务，日均约 20 张可用视觉资产。</p></div>
            <div><p className="eyebrow">一致性与全流程</p><p className="mt-3 text-sm leading-6 text-muted">覆盖剧本拆解、角色与场景资产、提示词设计、跨镜头一致性、图生视频、人物表演与镜头衔接；人物资产平均约 3 轮迭代，首轮通过率约 70%。</p></div>
          </div>
        </div>
      </div>
    </section>
  )
}
