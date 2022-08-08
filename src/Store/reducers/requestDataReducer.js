const defaultState = {
    users : [],
    posts : [],
    photos: [],
}

export const requestDataReducer = (state = defaultState, action) =>{
    switch (action.type) {
        case 'GET_USERS':
            return {...state , users: action.payload}
        case 'GET_POSTS':
            return {...state , posts: action.payload}
        case 'GET_PHOTOS':
            return {...state , photos: action.payload}
        default:
            return state
    }
}