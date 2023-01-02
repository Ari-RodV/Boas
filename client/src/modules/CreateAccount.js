import React, { useState } from 'react'

const CreateAccount = () => {
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  })

  const handleInputChage = event => {
    setData({
      ...data,
      [event.target.name] : event.target.value
    })
  }

  const RequestSignUp = event => {
    event.preventDefault()
  }

  return (
    <div>
        <h1>Create Account</h1>
        <form  onSubmit={RequestSignUp}>
            <input
              placeholder='FIRST NAME'
              type='text'
              id='firstName'
              name='firstName'
              onChange={handleInputChage}
            /><br />
            <input
              placeholder='LAST NAME'
              type='text'
              id='lastName'
              name='lastName'
              onChange={handleInputChage}
            /><br />
            <input
              placeholder='EMAIL'
              type='email'
              id='email'
              name='email'
              onChange={handleInputChage}
            /><br />
            <input
              placeholder='PASSWORD'
              type='password'
              id='password'
              name='password'
              onChange={handleInputChage}
            /><br />
          <button type='submit'>SIGN IN</button>
        </form>
    </div>
  )
}

export default CreateAccount