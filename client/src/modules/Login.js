import React, { useState } from 'react'
import { LoginMain, CreateAccount } from '../styles/Login.styles'


const Login = props => {
  const [data, setData] = useState({
    email: '',
    password: '',
  })

  const handleInputChage = event => {
    setData({
      ...data,
      [event.target.name] : event.target.value
    })
  }

  const RequestLogin = event => {
    event.preventDefault()
  }
 
  return (
    <LoginMain>
        <h1>Login</h1>
        <form onSubmit={RequestLogin}>
            <label htmlFor='email'>Email</label><br />
            <input
              type='email'
              id='email'
              name='email'
              onChange={handleInputChage}
            /><br />
            <label htmlFor='password'>Password</label><br />
            <input
              type='password'
              id='password'
              name='password'
              onChange={handleInputChage}
            /><br />
          <p className='green forgot-password'>Forgot your password?</p>
          <button type='submit'>SIGN IN</button>
        </form>
        <CreateAccount>
            <span>Don't Have an account yet?</span>
            <span onClick={() => {
              props.LoginTrigger(false)
              props.SignUpTrigger(true)
            }} className='green'>Create Account</span>
        </CreateAccount>
        <p className='close'>x</p>
    </LoginMain>
  )
}

export default Login