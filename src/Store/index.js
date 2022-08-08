import { combineReducers, createStore, applyMiddleware } from 'redux'
import { logInReducer } from './reducers/inputReducer'
import { requestDataReducer } from './reducers/requestDataReducer'
import thunk from 'redux-thunk'


const rootStore = combineReducers({
    login: logInReducer,
    requestData: requestDataReducer
})

export const store = createStore(rootStore, applyMiddleware(thunk))