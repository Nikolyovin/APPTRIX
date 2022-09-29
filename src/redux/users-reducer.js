import { UsersService } from "../services/UserService"

const SET_USERS = "SET_USERS"
const SET_CURRENT_USER = "SET_CURRENT_USER"


const initialState = { 
    users: [],
    currentUser: {}
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return {
               ...state,
               users: action.users 
            }

        case SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload
            }

        default:
            return state 
    }
}

export const setUsers = (users) => ({ type: SET_USERS, users })
export const setCurrentUser = (payload) => ({ type: SET_CURRENT_USER, payload })

export const requestUsers = () => async (dispatch) => {
    try {
        const response = await UsersService.getUsers()
        dispatch(setUsers(response.data))
        // dispatch(setAuthUserData(username, true))
    } catch (e) {
        console.log(e)
    }
}

export const requestUser = (userId) => async (dispatch) => {
    try {
        const response = await UsersService.getUser(userId)
        dispatch(setCurrentUser(response.data))
    } catch (e) {
        console.log(e)
    }
}


export default usersReducer