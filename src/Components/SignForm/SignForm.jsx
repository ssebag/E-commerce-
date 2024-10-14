import React from 'react'
import './SignForm.css'
function SignForm() {
  return (
        <form className="sign-form flex-col">
            <div className="form-header">
                <h1>Log in to Exclusive</h1>
                <p>Enter your details below</p>
            </div>
                <input type="email" name="email" id="email" placeholder='Email or Phone Number' required/>
                <input type="text" name="phone" id="phone" placeholder='Password' required/>
            <div className='flex-bw'>
               <button className='main-buttons'>Log In</button>
               <a href='#'>Forget Password?</a>
            </div>
        </form>
  )
}

export default SignForm