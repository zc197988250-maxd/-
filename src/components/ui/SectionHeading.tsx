type SectionHeadingProps = {
  index: string
  title: string
  description?: string
}

export function SectionHeading({ index, title, description }: SectionHeadingProps) {
  return (
    <div className="mb-10 grid gap-5 border-t border-line pt-5 md:mb-14 md:grid-cols-12">
      <p className="eyebrow md:col-span-3">{index}</p>
      <div className="md:col-span-9">
        <h2 className="section-title">{title}</h2>
        {description && <p className="body-copy mt-5 max-w-2xl">{description}</p>}
      </div>
    </div>
  )
}
