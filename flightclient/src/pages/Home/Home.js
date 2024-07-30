import React from 'react'
import Navbar from "../../components/Navbar/Navbar"
import Features from '../../components/Features/Features.js';
import Testimonials from '../../components/Testimonials/Testimonials.js';
import Footer from '../../components/Footer/Footer.js';
import Hero from '../../components/Hero/Hero.js';

const Home = () => {

  return (<>
    <Navbar/>
    <Hero />
    <Features />
    <Testimonials />
    <Footer />
  </>
  )
}

export default Home