import React from 'react'
import Hero from './sections/Hero'
import ShowcaseSection from './sections/ShowcaseSection'
import NavBar from './components/NavBar'
import FeatureCards from './sections/FeatureCards'
import LogoSection from './sections/LogoSection'

const App = () => {
  return (
    <main>
      <NavBar />
      <Hero />
      <ShowcaseSection />
      <LogoSection />
      <FeatureCards />
    </main>
  )
}

export default App