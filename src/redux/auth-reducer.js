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
            console.log('action:', action)
            return {
               ...state,
               ...action.payload
            }
            
        default:
            return { state }
    }
}
///потом удалить пароль из стейта
export const setAuthUserData = (username, password, isAuth) => ({ type: SET_USER_DATA, payload: {} })

export const login = (payload) => async (dispatch) => {
    try {
        const response = await AuthService.login(payload.username, payload.password)
        console.log('response:', response)
        localStorage.setItem('token', response.data.accessToken)
        console.log('payload.username:', payload.username)
        dispatch(setAuthUserData(payload.username, payload.password, true))
    } catch (e) {
        console.log(e)
    }
}

export const logout = () => async (dispatch) => {
    try {
        const response = await AuthService.logout()
        localStorage.removeItem('token')
        
        dispatch(setAuthUserData(null, null, false))
    } catch (e) {
        console.log(e)
    }
}

export default authReducer