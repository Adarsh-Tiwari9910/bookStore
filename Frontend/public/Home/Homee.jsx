import React from 'react'
import Navbar from '../../src/components/Navbar'
import Banner from '../../src/components/Banner'
import Freebook from '../../src/components/Freebook'
import Footer from '../../src/components/Footer'

const Home = () => {
  return (
    <div className="overflow-y-hidden">
      <Navbar/>
     <Banner/>
     <Freebook/>
     <Footer/>
    </div>
  )
}

export default Home
