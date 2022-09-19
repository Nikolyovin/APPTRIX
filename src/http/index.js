import axios from "axios"

const TOKEN = 'perm:cm9vdA==.NDktNQ==.U9qYToWJGGM0yfVz5wjeYYas7FDvGL' 
export const API_URL = 'https://demo-apptrix.myjetbrains.com/youtrack/api/'
export const API_AUTH = 'http://erp.apptrix.ru/api'

const api = axios.create({
    withCredentials: true,
    baseURL: API_AUTH,
    // baseURL:  API_URL
})

//интерцептор подставляет в заголовки access_token
api.interceptors.request.use((config) => {
    // config.headers.Authorization = `Bearer ${TOKEN}`
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config
})

//интерцептор который при 401 ошибке пытается обновить access_token по refresh_token’у

api.interceptors.request.use((config) => { 
    return config
}, async (error) => {
    const originalRequest = error.config
    if (error.response.status == 401 && error.config && !error.config._isRetry){
        originalRequest._isRetry = true
        try {
            
        }
    }
}

export default api