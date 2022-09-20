import axios from "axios"

export const API_AUTH = 'http://erp.apptrix.ru/api'

const apiAuth = axios.create({
    withCredentials: true,
    baseURL: API_AUTH,
})

//интерцептор подставляет в заголовки access_token
apiAuth.interceptors.request.use((config) => {
    // config.headers.Authorization = `Bearer ${TOKEN}`
    config.headers.Authorization = `Bearer ${localStorage.getItem('access')}`
    return config
})

//интерцептор который при 401 ошибке пытается обновить access_token по refresh_token’у

apiAuth.interceptors.request.use((config) => { 
    return config
}, async (error) => {
    const originalRequest = error.config
    if (error.response.status == 401 && error.config && !error.config._isRetry){ //проверка чтобы избежать бесконечного цикла 
        originalRequest._isRetry = true
        try {
            const response = await axios.post(`${API_AUTH}/token/refresh/`, {
                refresh: localStorage.getItem('refresh')
            },
            { withCredentials: true })
            localStorage.setItem('access', response.data.access)
            localStorage.setItem('refresh', response.data.refresh)
            localStorage.setItem('username', username)
        } catch (e) {
            // localStorage.removeItem('access')
            // localStorage.removeItem('refresh')
            // localStorage.removeItem('username')
            // dispatch(setAuthUserData(null, false))
            console.log('НЕ АВТОРИЗОВАН');
        }
    }
    throw error
})

export default apiAuth