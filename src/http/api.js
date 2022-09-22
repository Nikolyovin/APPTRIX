import axios from "axios"

const TOKEN = 'perm:cm9vdA==.NDktNQ==.U9qYToWJGGM0yfVz5wjeYYas7FDvGL' 
// export const API_USERS = 'https://demo-apptrix.myjetbrains.com/youtrack/api/'
export const API = '/youtrack/api'

const api = axios.create({
    withCredentials: true,
    baseURL: API,
})

//интерцептор подставляет в заголовки access_token
api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${TOKEN}`
    return config
})

export default api