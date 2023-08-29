import React from 'react'
import MainHead from './MainHead'
import Homecarousal from './Homecarousal'
import HomeProduct from './HomeProduct'
import HomeBanner from './HomeBanner'
import Footer from './Footer'

const Home = () => {
  return (
    <div>
      <MainHead />
      <Homecarousal />
      <HomeProduct />
      <HomeBanner />
      <Footer />
    </div>
  )
}

export default Home
