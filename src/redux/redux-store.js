import { applyMiddleware, combineReducers, createStore } from "redux"
import authReducer from "./auth-reducer"
import thunkMiddleware from 'redux-thunk'
import usersReducer from "./users-reducer"

const reducers = combineReducers({
    auth: authReducer,
    users: usersReducer
})

export const store = createStore(reducers, (applyMiddleware(thunkMiddleware)))
