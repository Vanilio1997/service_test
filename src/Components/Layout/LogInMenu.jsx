import React, {useRef ,useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {currentPassword, currentLogin} from '../../Constants'
import { useNavigate } from "react-router-dom";

export const LogInMenu = () => {

    const loginInputRef = useRef()
    const passwordInputRef = useRef()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const password = useSelector( state => state.login.password)
    const login = useSelector( state => state.login.login)
    const incorrectLogin = useSelector(state => state.login.incorrectLogin)
    const mainMenu = useSelector (state => state.login.mainMenu)
    const state = useSelector (state => state)
    console.log(state)
    console.log(mainMenu)

    const handlerkeyUp = (e) => {
        if (e.key === 'Enter') {
            passwordInputRef.current.focus()
        }
    }

    const clearFields = () => {
        return (
            dispatch( {type:'CHANGE_LOGIN' , payload: ''} ),
            dispatch( {type: 'CHANGE_PASSWORD' , payload: ''})
        )
    }

    const incorrectLoginCheck = (param) => {
        return dispatch({type: 'INCORRECTLOGIN', payload: param })
    }
    
    const enterLogin = (e) => {
        if(e.key === 'Enter'){
            if (currentLogin === login && currentPassword === password) {
                incorrectLoginCheck(false)
                navigate('/info')
                clearFields()
                dispatch({type:'MAIN_MENU' , payload: true})
            } else {
                incorrectLoginCheck(true)
                clearFields()
            }
        }
    }

    useEffect (() => { 
        loginInputRef.current.focus()
        dispatch(dispatch({type:'MAIN_MENU' , payload: false}))
    }, [])

    return (
        <div className="logInMenu_Block">
            <div className='logInMenu_Container'>
                <div className='logInMenu_Heading_Container'>
                    <p className='logInMenu_Heading'>Autorization</p> 
                </div>
                <div className='logInMenu_TextInput_Container'>
                    <div className='logInMenu_Text_Container'>
                        <p>login</p>
                    </div>
                    <div className='logInMenu_Input_Container'>
                        <input 
                        onKeyUp={handlerkeyUp}
                        ref={loginInputRef}
                        value={login}  
                        onChange={(e) => dispatch({type: 'CHANGE_LOGIN' , payload: e.target.value})}/>
                    </div>
                </div>
                <div className='logInMenu_TextInput_Container'>
                    <div className='logInMenu_Text_Container'>
                        <p>password</p>
                    </div>
                    <div className='logInMenu_Input_Container'>
                        <input  
                        ref={passwordInputRef}
                        onKeyPress={(e) => enterLogin(e)}
                        type='password'  
                        value={password}  
                        onChange={(e) => dispatch({type: 'CHANGE_PASSWORD' , payload: e.target.value})} />
                    </div>
                </div> 
                { incorrectLogin ?             
                <p style={{color: 'red', textAlign: 'center'}}>
                    Your password or username is incorrect.Please try again
                </p> :
                null
                }    
            </div>
        </div>
  )
}

