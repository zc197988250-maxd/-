type MediaPlaceholderProps = {
  label: string
  ratio?: 'video' | 'portrait' | 'landscape'
  index?: string
  className?: string
}

const ratios = {
  video: 'aspect-video',
  portrait: 'aspect-[4/5]',
  landscape: 'aspect-[4/3]',
}

export function MediaPlaceholder({ label, ratio = 'landscape', index, className = '' }: MediaPlaceholderProps) {
  return (
    <div className={`relative overflow-hidden bg-[#151515] ${ratios[ratio]} ${className}`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_30%,rgba(214,255,82,0.08),transparent_28%),linear-gradient(135deg,transparent_0%,rgba(255,255,255,0.035)_50%,transparent_50%)]" />
      <div className="absolute inset-4 border border-white/5 sm:inset-6" />
      {index && <span className="absolute left-5 top-5 font-mono text-xs text-white/35 sm:left-7 sm:top-7">{index}</span>}
      <span className="absolute bottom-5 left-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/35 sm:bottom-7 sm:left-7">{label}</span>
    </div>
  )
}
