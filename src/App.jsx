// import React from 'react'

import Navbar from "./components/Navbar"
import About from "./sections/About"
import HeroSection from "./sections/HeroSection"
import Stats from "./sections/Stats"

const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <About />
      <Stats />
    </>
  )
}

export default App