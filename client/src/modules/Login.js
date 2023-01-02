import React from 'react'
import { LoginMain, CreateAccount } from '../styles/Login.styles'


const Login = () => {
  return (
    <LoginMain>
        <h1>Login</h1>
        <form>
            <label htmlFor='email'>Email</label><br />
            <input type='email' id='email' name='email' /><br />
            <label htmlFor='password'>Password</label><br />
            <input type='password' id='password' name='password' /><br />
        </form>
        <p className='green'>Forgot your password?</p>
        <button>SIGN IN</button>
        <CreateAccount>
            <span>Don't Have an account yet?</span>
            <span className='green'>Create Account</span>
        </CreateAccount>
        <p className='close'>x</p>
    </LoginMain>
  )
}

export default Login