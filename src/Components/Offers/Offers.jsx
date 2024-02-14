import React from 'react'
import Nezuko from '../Assets/Nezuko_chan.png'
import './Offers.css'
const Offers = () => {
  return (
    <div className='offers'>
      <div className="offers-left">
            <h1>EXCLUSIVE</h1>
            <h1>OFFERS FOR YOU</h1>
            <p>only on best sellers product</p>
            <button>Check Now</button>
      </div>
      <div className="offers-right">
            <img src={Nezuko} alt='' />
      </div>
      
    </div>
  )
}

export default Offers
