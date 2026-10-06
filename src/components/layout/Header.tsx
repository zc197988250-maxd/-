import { useState } from 'react'
import { Dock, type DockItemData } from '../ui/Dock'

const links = [
  { href: '/projects', label: '作品' },
  { href: '/about', label: '关于' },
  { href: '/resume', label: '简历' },
  { href: '#contact', label: '联系' },
]

type HeaderProps = { currentPath: string; onNavigate: (path: string) => void }

export function Header({ currentPath, onNavigate }: HeaderProps) {
  const [open, setOpen] = useState(false)

  const navigate = (href: string) => {
    if (href === '#contact') {
      if (currentPath !== '/') {
        window.history.pushState({}, '', '/')
        onNavigate('/')
      }
      setOpen(false)
      window.setTimeout(() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }), 0)
      return
    }

    window.history.pushState({}, '', href)
    onNavigate(href)
    setOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const dockItems: DockItemData[] = [
    { href: '/', label: '书羽', active: currentPath === '/', onClick: () => navigate('/') },
    ...links.map((link) => ({
      ...link,
      active: currentPath === link.href,
      onClick: () => navigate(link.href),
    })),
  ]

  return (
    <header className={(currentPath === '/' ? 'fixed' : 'sticky bg-ink/95') + ' left-0 right-0 top-0 z-50'}>
      <div className="site-shell flex h-20 items-center justify-center sm:h-24">
        <div className="hidden sm:block">
          <Dock items={dockItems} />
        </div>
        <div className="flex w-full items-center justify-between rounded-full border border-white/15 bg-black/60 px-3 py-2 backdrop-blur-md sm:hidden">
          <a href="/" onClick={(event) => { event.preventDefault(); navigate('/') }} className="px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.18em]" aria-label="返回首页">书羽</a>
          <button type="button" className="px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.16em]" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-label="打开导航">{open ? '关闭' : '菜单'}</button>
        </div>
      </div>
      {open && (
        <nav className="site-shell rounded-card border border-white/15 bg-ink/95 py-3 backdrop-blur-md sm:hidden" aria-label="移动端导航">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={(event) => { event.preventDefault(); navigate(link.href) }} className="block border-b border-line px-5 py-4 text-xl font-medium last:border-0">{link.label}</a>
          ))}
        </nav>
      )}
    </header>
  )
}
