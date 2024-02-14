import React from 'react'
import './NewsLetter.css'
const NewsLetter = () => {
  return (
    <div className='newsletter'>
      <h1>Get Exclisive Offer</h1>
      <p>Subscribe to our channel</p>
      <div>
        <input type='email' placeholder='youe email id' />
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default NewsLetter
