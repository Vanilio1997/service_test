import React from 'react'
import { currentLogin } from '../../Constants'
import { useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom";

export const Header = props => {

  const mainMenu = useSelector(state => state.login.mainMenu)
  const navigate = useNavigate()
  const exitFromSystem = () => {
    navigate('/')
  }


  return (
    <div className='header_Container'>
      <div >
        <img className='header_Logo' src='/images/logo.png' alt="qwerty" />
      </div>
      { mainMenu 
      ?
      <div style={{display: 'flex'}}>
        <div className='header__Container_UserName'>
         <div  className='header_UserName'> {currentLogin} </div>
        </div>
        <div className='header_Container_Logout'>
          <div 
          onClick={exitFromSystem}
          className='header_Logout'>Exit</div>
        </div>
      </div>
      :
      null 
      }
    </div>
  )
}

 