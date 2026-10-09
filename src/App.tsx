import { Contact } from './components/Contact'
import { Divider } from './components/Divider'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Location } from './components/Location'
import { Menu } from './components/Menu'
import { OpeningHours } from './components/OpeningHours'
import { StickyCallBar } from './components/StickyCallBar'

export default function App() {
  return (
    <>
      <Hero />
      <main>
        <Menu />
        <Divider from="cream" to="tint" />
        <OpeningHours />
        <Divider from="tint" to="cream" />
        <Location />
        <Divider from="cream" to="tomato" />
        <Contact />
      </main>
      <Divider from="tomato" to="basil" />
      <Footer />
      <StickyCallBar />
    </>
  )
}
