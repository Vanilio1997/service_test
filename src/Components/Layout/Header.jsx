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
        {
          size.width > 550
          ?  
        <img className='header_Logo' src='/images/logo.png' alt="notFound" />
        :
        <img className='header_LittleLogo' src='/images/little_logo.png' alt='notFound' />
        } 
      </div>
      { mainMenu 
      ?
      <div style={{display: 'flex'}}>
        <div className='header__Container_UserName'>
          { size.width > 960 
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

 