import React from 'react'

const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>signup</h1>
        <div className="loginsignup-fields">
          <input type='text' placeholder='name' />
          <input type='email' placeholder='email.com'  />
          <input type='password' placeholder='password' />
        </div>
        <button>Continue</button>
        <p className='loginsignup-login'>Already have ana account<span>Login here</span></p>

        <div className="loginsignup-agree">
          <input type='checkbox' name='' id='' />
          <p>By continuing agrre with terms and conditions
          </p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup
