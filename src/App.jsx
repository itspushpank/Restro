// import React from 'react'

import Navbar from "./components/Navbar"
import About from "./sections/About"
import BookingProcess from "./sections/BookingProcess"
import Dishes from "./sections/Dishes"
import Features from "./sections/Features"
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
      <Features/>
      <BookingProcess/>
    </>
  )
}

export default App