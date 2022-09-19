import axios from "axios"
import { API_AUTH } from "../http"
import AuthService from "../services/AuthService"

const SET_USER_DATA = "SET_USER_DATA"
const IS_SHHOW_LOADING = "IS_SHHOW_LOADING"

const initialState = { 
    username: null,
    isAuth: false,
    isLoading: false,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
               ...state,
               ...action.payload
            }
        
            case IS_SHHOW_LOADING:
            return {
               ...state,
               isLoading: action.isLoading
            }

        default:
            return state 
    }
}

export const setAuthUserData = (username, isAuth) => ({ type: SET_USER_DATA, payload: { username, isAuth } })
export const isShowLoading = (isLoading) => ({type: IS_SHHOW_LOADING, isLoading})

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
    
    dispatch(isShowLoading(true))
    
    try {
        const response = await axios.post(`${API_AUTH}/token/refresh/`, {
            refresh: localStorage.getItem('refresh')
        },
        { withCredentials: true })
        
        localStorage.setItem('access', response.data.access)
        const username = localStorage.getItem('username')
        dispatch(setAuthUserData(username,  true))
        
    } catch (e) {
        console.log(e)
    } finally {
        
        dispatch(isShowLoading(false))
       
    }
}

export default authReducer