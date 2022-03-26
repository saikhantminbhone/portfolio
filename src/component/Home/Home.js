import React from 'react'
import './Home.css'
import Profile from './Profile/Profile'
import HomeFooter from './HomeFooter/HomeFooter'

const Home = () => {
  return (
    <div className='home-container' id="home">
      <Profile />
      <HomeFooter />
    </div>
  )
}

export default Home
