import { useEffect, useState } from 'react'
import { Footer } from './components/layout/Footer'
import { Header } from './components/layout/Header'
import { AboutPage } from './pages/AboutPage'
import { HomePage } from './pages/HomePage'
import { ProjectsPage } from './pages/ProjectsPage'
import { ResumePage } from './pages/ResumePage'

const routes = {
  '/': HomePage,
  '/projects': ProjectsPage,
  '/about': AboutPage,
  '/resume': ResumePage,
}

export default function App() {
  const [path, setPath] = useState(window.location.pathname)

  useEffect(() => {
    const onPopState = () => setPath(window.location.pathname)
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])

  const Page = routes[path as keyof typeof routes] ?? HomePage

  return (
    <div className="min-h-screen overflow-x-clip bg-ink text-warm">
      <Header currentPath={path} onNavigate={setPath} />
      <main>
        <Page />
      </main>
      <Footer />
    </div>
  )
}
