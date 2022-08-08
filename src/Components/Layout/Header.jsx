import React from 'react'
import { currentLogin } from '../../Constants'

export const Header = props => {
  return (
    <div className='header_Container'>
      <div >
        <img className='header_Logo' src='/images/logo.png' alt="qwerty" />
      </div>
      <div style={{display: 'flex'}}>
        <div className='header_UserName'>
          {currentLogin}
        </div>
        <div className='header_Logout'></div>
      </div>
    </div>
  )
}

 