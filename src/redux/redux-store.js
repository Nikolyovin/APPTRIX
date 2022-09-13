import { combineReducers, createStore } from "redux"
import authReducer from "./auth-reducer"

const reducers = combineReducers({
    auth: authReducer,
})

export const store = createStore(reducers)