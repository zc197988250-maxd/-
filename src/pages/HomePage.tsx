import { AboutSection } from '../components/home/AboutSection'
import { Contact } from '../components/home/Contact'
import { Hero } from '../components/home/Hero'
import { ProductionMetrics } from '../components/home/ProductionMetrics'
import { SelectedWork } from '../components/home/SelectedWork'
import { VideoWorks } from '../components/home/VideoWorks'

export function HomePage() {
  return <><Hero /><ProductionMetrics /><SelectedWork /><VideoWorks /><AboutSection /><Contact /></>
}