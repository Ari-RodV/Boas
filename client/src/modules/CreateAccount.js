import React from 'react'

const CreateAccount = () => {
  return (
    <div>
        <h1>Create Account</h1>
        <form>
            <input placeholder='FIRST NAME' type='text' id='firstName' name='firstName' /><br />
            <input placeholder='LAST NAME' type='text' id='lastName' name='lastName' /><br />
            <input placeholder='EMAIL' type='email' id='email' name='email' /><br />
            <input placeholder='PASSWORD' type='password' id='password' name='password' /><br />
        </form>
        <button>SIGN IN</button>
    </div>
  )
}

export default CreateAccount