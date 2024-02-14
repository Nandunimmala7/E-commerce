import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src='' alt=' add something' />
        <p>Shopper</p>
      </div>

      <ul className="footer-links">
        <li>company</li>
        <li>products</li>
        <li>offices</li>
        <li>about</li>
        <li>contact</li>
      </ul>
      <div className="footer-social-icon">
        <p>add Icons if you want nandu</p>
      </div>
      <div className='footer-copyright'>
        <hr />
        <p>copyright @ 200</p>
      </div>
    </div>
  )
}

export default Footer
