import React, { useState } from 'react'
import { HeaderMain, Navigation, Promts, UserShop } from '../styles/Header.styles'
import CreateAccount from './CreateAccount'
import Login from './Login'
import PopupPanel from './PopupPanel'

const Header = () => {
  const [LoginPopup, setLoginPopup] = useState(false)
  const [SignUpPopup, setSignUpPopup] = useState(false)

  return (
    <header>
        <HeaderMain>
          <div>
            <svg x='0px' y='0px' width='30' height='30' viewBox='0 0 50 50'>
              <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z" />
            </svg>
          </div>
          <img alt='Company logo' src='https://cdn.shopify.com/s/files/1/0598/2194/9121/files/BOAS_Logo_Transparent_180x.png?v=1646145898' />
          <UserShop>
            <div className='user'>
              <svg x='0px' y='0px' width='30' height='30' viewBox='0 0 60 60'>
                <path d='M41.2452,33.0349a16,16,0,1,0-18.49,0A26.0412,26.0412,0,0,0,4,58a2,2,0,0,0,2,2H58a2,2,0,0,0,2-2A26.0412,26.0412,0,0,0,41.2452,33.0349ZM20,20A12,12,0,1,1,32,32,12.0137,12.0137,0,0,1,20,20ZM8.09,56A22.0293,22.0293,0,0,1,30,36h4A22.0293,22.0293,0,0,1,55.91,56Z' />
              </svg>
              <div className='hidden'>
                <p onClick={() => setLoginPopup(true)}>Login</p>
                <p onClick={() => setSignUpPopup(true)}>Create Account</p>
              </div>
            </div>
            <div>
              <svg x='0px' y='0px' width='30' height='30' viewBox='0 0 212 212'>
                <path d='M190.85,200.227L178.135,58.626c-0.347-3.867-3.588-6.829-7.47-6.829h-26.221V39.971c0-22.04-17.93-39.971-39.969-39.971  C82.437,0,64.509,17.931,64.509,39.971v11.826H38.27c-3.882,0-7.123,2.962-7.47,6.829L18.035,200.784  c-0.188,2.098,0.514,4.177,1.935,5.731s3.43,2.439,5.535,2.439h157.926c0.006,0,0.014,0,0.02,0c4.143,0,7.5-3.358,7.5-7.5  C190.95,201.037,190.916,200.626,190.85,200.227z M79.509,39.971c0-13.769,11.2-24.971,24.967-24.971  c13.768,0,24.969,11.202,24.969,24.971v11.826H79.509V39.971z M33.709,193.955L45.127,66.797h19.382v13.412  c0,4.142,3.357,7.5,7.5,7.5c4.143,0,7.5-3.358,7.5-7.5V66.797h49.936v13.412c0,4.142,3.357,7.5,7.5,7.5c4.143,0,7.5-3.358,7.5-7.5  V66.797h19.364l11.418,127.158H33.709z' />
              </svg>
            </div>
          </UserShop>
        </HeaderMain>
        <Navigation>
          <ul>
            <li>BABY ▼</li>
            <li>KIDS ▼</li>
            <li>ABOUT US ▼</li>
            <li>CONTACT</li>
            <li>BLOG & PODCAST</li>
          </ul>
        </Navigation>
        <Promts>
          <div>
            <p>ALL PROFITS DONATED TO SAVE KIDS LIVES</p>
          </div>
        </Promts>
        <PopupPanel trigger={LoginPopup} setTrigger={setLoginPopup}>
          <Login />
        </PopupPanel>
        <PopupPanel trigger={SignUpPopup} setTrigger={setSignUpPopup}>
            <CreateAccount />
        </PopupPanel>
    </header>
  )
}

export default Header