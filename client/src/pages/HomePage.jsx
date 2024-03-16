import React from 'react'
import Navber from '../components/Navber'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import ImageSection from '../components/ImageSection'
import HowItWork from '../components/HowItWork'
import Choose from '../components/Choose'
import Partners from '../components/Patners'

const HomePage = () => {
  return (
    <div>
        <Navber/>
        <Hero/>
        <ImageSection/>
        <HowItWork/>
        <Choose/>
        <Partners/>
        <Footer/>
    </div>
  )
}

export default HomePage