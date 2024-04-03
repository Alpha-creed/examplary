import React from 'react'
import Hero from '../components/Hero/Hero'
import Navbar from '../components/Navbar/Navbar'
import Features from '../components/Features/Feature'
import Content from '../components/Content/Content'
import { heroOne, heroThree, heroTwo } from '../data/HeroData'
import Carosuel from '../components/Carousel/Carosuel'

 const Home = () => {
  return (
    <>    
        <Hero/>
        <Features/>
        <Content {...heroOne}/>
        <Content {...heroTwo}/>
        <Content {...heroThree}/>
        <Carosuel/>  
    </>
  )
}

export default Home