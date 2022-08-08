import React from 'react'
import { currentLogin } from '../../Constants'
import { useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom";
import  useWindowSize   from '../../Hooks/UseWindowSize';

export const Header = props => {

  const size = useWindowSize()
  const mainMenu = useSelector(state => state.login.mainMenu)
  const navigate = useNavigate()
  const exitFromSystem = () => {
    navigate('/')
  }
  console.log(size.width)


  return (
    <div className='header_Container'>
      <div >
        <img className='header_Logo' src='/images/logo.png' alt="qwerty" />
      </div>
      { mainMenu 
      ?
      <div style={{display: 'flex'}}>
        <div className='header__Container_UserName'>
          { size.width > 769 
          ? 
          <div  className='header_UserName'> {currentLogin} </div>
          :
          null
          }
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

 