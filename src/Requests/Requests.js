import { API_URL } from "../Constants"


export const fetchUsers = () => {
    return dispatch => {
        fetch(API_URL + 'users')
        .then(response => response.json())
        .then(json => dispatch({type:'GET_USERS', payload:json}))
    }
}

export const fetchPosts = () => {
    return dispatch => {
        fetch(API_URL + 'posts')
        .then(response => response.json())
        .then(json => dispatch({type:'GET_POSTS', payload:json}))
    }
}

export const fetchPhotos = () => {
    return dispatch => {
        fetch(API_URL + 'photos')
        .then(response => response.json())
        .then(json => dispatch({type:'GET_PHOTOS', payload:json}))
    }
}

