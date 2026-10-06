import { motion, useMotionValue, useSpring, useTransform, type MotionValue, type SpringOptions } from 'motion/react'
import { useRef } from 'react'
import './Dock.css'

export type DockItemData = {
  href: string
  label: string
  active?: boolean
  onClick: () => void
}

type DockItemProps = DockItemData & {
  mouseX: MotionValue<number>
  spring: SpringOptions
  distance: number
  magnification: number
  baseItemSize: number
}

function DockItem({ href, label, active, onClick, mouseX, spring, distance, magnification, baseItemSize }: DockItemProps) {
  const ref = useRef<HTMLAnchorElement>(null)
  const mouseDistance = useTransform(mouseX, (value) => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect || !Number.isFinite(value)) return distance
    return value - rect.left - rect.width / 2
  })
  const targetSize = useTransform(mouseDistance, [-distance, 0, distance], [baseItemSize, magnification, baseItemSize])
  const size = useSpring(targetSize, spring)
  const fontSize = useTransform(size, [baseItemSize, magnification], [12, 14])

  return (
    <motion.a
      ref={ref}
      href={href}
      onClick={(event) => {
        event.preventDefault()
        onClick()
      }}
      className={`portfolio-dock-item ${active ? 'is-active' : ''}`}
      style={{ width: size, height: size, fontSize }}
      aria-current={active ? 'page' : undefined}
    >
      {label}
    </motion.a>
  )
}

type DockProps = {
  items: DockItemData[]
  distance?: number
  panelHeight?: number
  baseItemSize?: number
  magnification?: number
  spring?: SpringOptions
}

export function Dock({
  items,
  distance = 140,
  panelHeight = 62,
  baseItemSize = 48,
  magnification = 60,
  spring = { mass: 0.12, stiffness: 170, damping: 16 },
}: DockProps) {
  const mouseX = useMotionValue(Infinity)

  return (
    <div className="portfolio-dock-outer">
      <motion.nav
        className="portfolio-dock-panel"
        style={{ height: panelHeight }}
        onMouseMove={(event) => mouseX.set(event.clientX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        aria-label="主导航"
      >
        {items.map((item) => (
          <DockItem
            key={item.href}
            {...item}
            mouseX={mouseX}
            spring={spring}
            distance={distance}
            magnification={magnification}
            baseItemSize={baseItemSize}
          />
        ))}
      </motion.nav>
    </div>
  )
}
