import axios from "axios"

const TOKEN = 'perm:cm9vdA==.NDktNQ==.U9qYToWJGGM0yfVz5wjeYYas7FDvGL' 
export const API_URL = 'https://demo-apptrix.myjetbrains.com/youtrack/api/'

const api = axios.create({
    withCredentials: true,
    baseURL: API_URL
})

api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${TOKEN}`
    return config
})

export default api