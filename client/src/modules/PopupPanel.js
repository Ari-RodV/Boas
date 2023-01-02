import React from 'react'
import { PopupMain, PopupForm, Background } from '../styles/PopupPanel.styles'

const PopupPanel = props => {
  return (
    <PopupMain>
        <Background />
        <PopupForm>
            {props.children}
            <p className='close'>x</p>
        </PopupForm>
    </PopupMain>
  )
}

export default PopupPanel