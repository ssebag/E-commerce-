import React from 'react'
import SignForm from '../../Components/SignForm/SignForm'
import SignImg from './../../assets/sign-from-img.png'
import './SignUp.css'
function SignUp() {
  return (
    <div className='signUp'>
      <div className="container flex-bw">
        <img src={SignImg} alt="" />
        <SignForm />
      </div>
    </div>
  )
}

export default SignUp