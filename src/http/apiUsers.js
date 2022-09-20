import axios from "axios"

const TOKEN = 'perm:cm9vdA==.NDktNQ==.U9qYToWJGGM0yfVz5wjeYYas7FDvGL' 
// export const API_USERS = 'https://demo-apptrix.myjetbrains.com/youtrack/api/'
export const API_USERS = '/youtrack/api/admin'

const apiUsers = axios.create({
    withCredentials: true,
    baseURL: API_USERS,
    // baseURL: '/proxy',
})

//интерцептор подставляет в заголовки access_token
apiUsers.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${TOKEN}`
    return config
})

export default apiUsers