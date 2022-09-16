import axios from "axios"

const TOKEN = 'perm:cm9vdA==.NDktNQ==.U9qYToWJGGM0yfVz5wjeYYas7FDvGL' 
export const API_URL = 'https://demo-apptrix.myjetbrains.com/youtrack/api/'
export const API_AUTH = 'http://erp.apptrix.ru/api'

const api = axios.create({
    withCredentials: true,
    baseURL: API_AUTH,
    // baseURL:  API_URL
})

api.interceptors.request.use((config) => {
    // config.headers.Authorization = `Bearer ${TOKEN}`
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config
})

export default api