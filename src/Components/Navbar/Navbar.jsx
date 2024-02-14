import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../Assets/IMG_4370.JPG'
import './Navbar.css'

const Navbar = () => {
    const [menu,setMenu] = useState('shop')
  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="WAIT" />
        <p>SUKUNA</p>
      </div>
      <ul className="nav-menu">
        <li onClick={() =>{setMenu("shop")}}>
            <Link style={{textDecoration:'none'}} to='/'> Shop</Link>{menu==="shop"? <hr /> : <> </>}</li>
        <li onClick={() =>{setMenu("men")}}>
        <Link style={{textDecoration:'none'}} to='/Men'>Men</Link> {menu==="men"? <hr /> : <> </>}</li>
        <li onClick={() =>{setMenu("women")}}>
        <Link style={{textDecoration:'none'}} to='/Women'> Woman</Link> {menu==="women"? <hr /> : <> </>}</li>
        <li onClick={() =>{setMenu("kids")}}>
        <Link style={{textDecoration:'none'}} to='/Kids'> Kids</Link>{menu==="kids"? <hr /> : <> </>}</li>
      </ul>
      <div className="nav-login-cart">
       <Link  style={{textDecoration:'none'}} to='login'> <button>Login</button> </Link>
       <Link  style={{textDecoration:'none'}} to='/cart'> <img src={logo} alt='' /> </Link>
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  )
}

export default Navbar
