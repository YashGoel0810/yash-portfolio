import Contact from './components/Contact'
import Dock from './components/Dock'
import Hero from './components/Hero'
import Journey from './components/Journey'
import Projects from './components/Projects'
import Splash from './components/Splash'
import Stack from './components/Stack'
import Story from './components/Story'
import Ventures from './components/Ventures'

export default function App() {
  return (
    <>
      <a className="skip" href="#work">
        Skip to content
      </a>
      <Splash />
      <main>
        <Hero />
        <Story />
        <Projects />
        <Journey />
        <Ventures />
        <Stack />
        <Contact />
      </main>
      <Dock />
    </>
  )
}
