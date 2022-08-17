import React from 'react'
import { Link } from 'react-router-dom'

import './login.scss';

const Login = () => {
  return (
    <>
        <h1>Sign up Form</h1>
        <input type="text" placeholder='Email or Username' />
        <input type="text" placeholder='Password' />
        <input type="text" placeholder='Enter the password' />
        <button>Registration</button>
        <span>Or login with</span>
        <div className='login__form--change'>
          <div className='login__form--change--item'>
            <i class='bx bxl-facebook-circle' ></i>
            <span>Facebook</span>
          </div>
          <div className='login__form--change--item'>
            <i class='bx bxl-google-plus-circle' ></i>
            <span>Google</span>
          </div>
        </div>
        <div className='login__form--singup'>
          Not a menber?
          <Link to="/">Signup now</Link>
      </div>
    </>
  )
}

export default Login