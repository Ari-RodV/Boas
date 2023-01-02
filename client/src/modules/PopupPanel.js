import React from 'react'
import { PopupMain, PopupForm, Background } from '../styles/PopupPanel.styles'

const PopupPanel = props => {
  return (props.trigger) ? (
    <PopupMain>
        <Background  onClick={() => props.setTrigger(false)} />
        <PopupForm>
            {props.children}
            <p className='close' onClick={() => props.setTrigger(false)} >x</p>
        </PopupForm>
    </PopupMain>
  ) : ''
}

export default PopupPanel