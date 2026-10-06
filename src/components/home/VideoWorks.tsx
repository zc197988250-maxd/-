import { SectionHeading } from '../ui/SectionHeading'

type VideoWork = {
  title: string
  category: string
  description: string
  src: string
  poster?: string
  portrait?: boolean
}

const videoWorks: VideoWork[] = [
  {
    title: '熟地黄宣传微短剧',
    category: 'AI 漫剧成片',
    description: '熟地黄主题宣传微短剧完整作品。',
    src: '/assets/projects/video/shudihuang-short-drama.mp4',
    poster: '/assets/projects/video/shudihuang-short-drama-poster.jpg',
    portrait: true,
  },
  {
    title: '唐风舞蹈',
    category: '人物动态',
    description: '古风人物舞蹈、服装运动与动态表现展示。',
    src: '/assets/projects/video/tang-dance.mp4',
  },
  {
    title: '打斗 01',
    category: '动作镜头',
    description: '动作节奏、人物运动与镜头配合展示。',
    src: '/assets/projects/video/fight-01.mp4',
  },
  {
    title: '热痕冷 · 开场 01',
    category: 'AI 漫剧开场',
    description: 'AI 漫剧开场片段与氛围镜头展示。',
    src: '/assets/projects/video/rehen-opening-01.mp4',
  },
  {
    title: '泰华 · 完整视频 01',
    category: 'AI 漫剧成片',
    description: 'AI 漫剧完整视频作品展示。',
    src: '/assets/projects/video/taihua-episode-01.mp4',
    portrait: true,
  },
  {
    title: '泰华 · 完整视频 02',
    category: 'AI 漫剧成片',
    description: 'AI 漫剧完整视频作品展示。',
    src: '/assets/projects/video/taihua-episode-02.mp4',
    portrait: true,
  },
  {
    title: '老人与女儿',
    category: 'AI 漫剧片段',
    description: '人物关系、情绪表演与叙事镜头展示。',
    src: '/assets/projects/video/elder-and-daughter.mp4',
  },
]

export function VideoWorks() {
  return (
    <section className="site-shell section-space">
      <SectionHeading index="03 / Video" title="视频作品" />
      <div className="grid gap-x-6 gap-y-14 md:grid-cols-2 lg:gap-x-8 lg:gap-y-20">
        {videoWorks.map((video, index) => (
          <article key={video.src} className={index % 2 === 1 ? 'md:mt-20' : ''}>
            <div className={`overflow-hidden rounded-card border border-line bg-black ${video.portrait ? 'mx-auto max-w-[360px]' : ''}`}>
              <video
                className={`${video.portrait ? 'aspect-[9/16]' : 'aspect-video'} w-full object-cover`}
                src={video.src}
                poster={video.poster}
                controls
                playsInline
                preload="metadata"
                aria-label={`${video.title}视频播放`}
              />
            </div>
            <div className={`mt-5 ${video.portrait ? 'mx-auto max-w-[360px]' : ''}`}>
              <p className="eyebrow text-accent">{video.category}</p>
              <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em] sm:text-3xl">{video.title}</h3>
              <p className="mt-3 max-w-lg text-sm leading-6 text-muted">{video.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
