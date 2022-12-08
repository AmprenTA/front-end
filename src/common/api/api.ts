import axios, { AxiosResponse } from 'axios'

const token = localStorage.getItem('token')
const api = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  },
})

// Add a response interceptor
api.interceptors.response.use(
  (response: AxiosResponse<any>) => {
    return response
  },
  (error: any) => {
    return Promise.reject(error)
  },
)

export default api
