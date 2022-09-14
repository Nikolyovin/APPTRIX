import { applyMiddleware, combineReducers, createStore } from "redux"
import authReducer from "./auth-reducer"
import thunkMiddleware from 'redux-thunk'

const reducers = combineReducers({
    auth: authReducer,
})

export const store = createStore(reducers, (applyMiddleware(thunkMiddleware)))
