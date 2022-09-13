
const SET_USER_DATA = "SET_USER_DATA"

const initialState = {
    userId: null,
    email: null,
    username: null,
    isAuth: false,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
         return {
            ...state,
            ...action.payload
         }
    }
}

export const setAuthUserData = (userId, email, username, isAuth) => ({ type: SET_USER_DATA, payload: { userId, email, username, isAuth } })

export default authReducer