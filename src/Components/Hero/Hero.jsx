import React from 'react'
import './Hero.css'
import logo from '../Assets/IMG_4370.JPG'
const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
        <h2>New ARRIVALS ONLY</h2>
        <div>
            <div className="hand-hand-icon">
                <p>new</p>
                <img src={logo} alt='' />
            </div>
            <p>collection</p>
            <p>for everyone</p>
        </div>
        <div className="hero-latest-btn">
            <div>Latest Collection</div>
            <img src={logo} alt='' />
        </div>
      </div>
      <div className="hero-right">
        <img src={logo} alt='' />
      </div>
    </div>
  )
}

export default Hero
