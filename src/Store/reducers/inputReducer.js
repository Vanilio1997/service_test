const defaultState = {
    login: '',
    password: '',
    mainMenu: false,
    incorrectLogin: false
}

export const logInReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'CHANGE_LOGIN':
            return {...state, login: action.payload} 
        case 'CHANGE_PASSWORD':
            return {...state, password: action.payload} 
        case 'MAIN_MENU':
            return {...state, mainMenu: action.payload}
        case 'INCORRECTLOGIN':
            return {...state, incorrectLogin: action.payload}
        default:
            return state
    } 
}