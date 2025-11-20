import React from 'react'
import Hero from './sections/Hero'
import ShowcaseSection from './sections/ShowcaseSection'
import NavBar from './components/NavBar'

const App = () => {
  return (
    <main>
      <NavBar />
      <Hero />
      <ShowcaseSection />
    </main>
  )
}

export default App