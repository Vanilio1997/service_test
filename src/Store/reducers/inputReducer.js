const defaultState = {
    login: '',
    password: '',
    logIn: false,
    incorrectLogin: false
}

export const logInReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'CHANGE_LOGIN':
            return {...state, login: action.payload} 
        case 'CHANGE_PASSWORD':
            return {...state, password: action.payload} 
        case 'LOG_IN':
            return {...state, logIn: true}
        case 'INCORRECTLOGIN':
            return {...state, incorrectLogin: action.payload}
        default:
            return state
    } 
}