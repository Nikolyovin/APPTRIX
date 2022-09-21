import { UserService, UsersService } from "../services/UserService"

const SET_USERS = "SET_USERS"


const initialState = { 
    users: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return {
               ...state,
               users: action.users 
            }

        default:
            return state 
    }
}

export const setUsers = (users) => ({ type: SET_USERS, users })

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
        const response = await UserService.getUser(userId)
        console.log('response:', response)
    } catch (e) {
        console.log(e)
    }
}


export default usersReducer