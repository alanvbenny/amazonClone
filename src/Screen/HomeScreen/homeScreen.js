import React from 'react'
import './homeScreen.css'
import HomeDetail from './HomeDetails/homeDetail'
import HomeBanner from './HomeBanner/homeBanner'

const HomeScreen = () => {
  return (
    <div className="homeScreen">
      <HomeBanner />
      <HomeDetail />
      
    </div>
  )
}

export default HomeScreen