// import React from 'react'

import Navbar from "./components/Navbar"
import About from "./sections/About"
import Dishes from "./sections/Dishes"
import HeroSection from "./sections/HeroSection"
import Stats from "./sections/Stats"

const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <About />
      <Stats />
      <Dishes />
    </>
  )
}

export default App