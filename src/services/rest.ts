import axios from 'axios'

const rest = axios.create({ baseURL: 'https://api.escuelajs.co/api/v1' })

rest.interceptors.request.use((request) => {
    const token = localStorage.getItem('access_token')
    if (token) {
        request.headers.Authorization = `Bearer ${token}`
    }
    return request
})

rest.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.status === 401) {
            window.location.replace('/login')
        }
        return Promise.reject(error)
    }
)

export default rest
