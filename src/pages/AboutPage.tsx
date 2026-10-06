import { AboutSection } from '../components/home/AboutSection'
import { Capabilities } from '../components/home/Capabilities'

export function AboutPage() {
  return (
    <div className="pt-6 sm:pt-10">
      <div className="site-shell pt-14 sm:pt-20"><p className="eyebrow text-accent">Profile</p><h1 className="display-title mt-7">About</h1></div>
      <AboutSection /><Capabilities />
    </div>
  )
}
