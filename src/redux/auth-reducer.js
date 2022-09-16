import axios from "axios"
import { API_AUTH, API_URL } from "../http"
import AuthService from "../services/AuthService"

const SET_USER_DATA = "SET_USER_DATA"

const initialState = {
    userId: null,
    email: null,
    username: null,
    isAuth: false,
    password: null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
               ...state,
               ...action.payload
            }
            
        default:
            return state 
    }
}
///потом удалить пароль из стейта
//убрать isAuth из логина
export const setAuthUserData = (username, isAuth) => ({ type: SET_USER_DATA, payload: { username, isAuth } })

export const login = ({ username, password }) => async (dispatch) => {
    try {
        const response = await AuthService.login(username, password)
        localStorage.setItem('access', response.data.access)
        localStorage.setItem('refresh', response.data.refresh)
        localStorage.setItem('username', username)
        dispatch(setAuthUserData(username, true))
    } catch (e) {
        console.log(e)
    }
}

export const logout = () => async (dispatch) => {
    try {
        // const response = await AuthService.logout()
        localStorage.removeItem('access')
        localStorage.removeItem('refresh')
        localStorage.removeItem('username')
        dispatch(setAuthUserData(null, false))
    } catch (e) {
        console.log(e)
    }
}

export const checkAuth = () => async (dispatch) => {
    try {
        const response = await axios.post(`${API_AUTH}/token/refresh/`, {
            refresh: localStorage.getItem('refresh')
        })
        localStorage.setItem('access', response.data.access)
        const username = localStorage.getItem('username')
        dispatch(setAuthUserData(username,  true))
        console.log('*********************test')
    } catch (e) {
        console.log(e)
    }
}

export default authReducer