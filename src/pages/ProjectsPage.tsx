import { SelectedWork } from '../components/home/SelectedWork'

export function ProjectsPage() {
  return (
    <div className="pt-6 sm:pt-10">
      <div className="site-shell pt-14 sm:pt-20"><p className="eyebrow text-accent">Portfolio Index</p><h1 className="display-title mt-7">Projects</h1><p className="body-copy mt-7 max-w-2xl">角色、场景、道具与 AI 视频作品索引。当前为第一阶段结构占位。</p></div>
      <SelectedWork />
    </div>
  )
}
