import axios from 'axios';

const baseUrl2 = process.env.NODE_ENV == 'development' ? '/api/v1/' : 'https://api.servicelogsolutions.com/api/v1';

const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
  Authorization : `Bearer ${localStorage.getItem("token")}`,
};

export const $authHost = axios.create({
  baseURL: baseUrl2,
  headers,
  withCredentials: true,
})

$authHost.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = 'Bearer ' + token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

$authHost.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && error.config && !error.config._isRetry) {
      originalRequest._isRetry = true;
      try {
        localStorage.removeItem('token');
      } catch (e) {
        console.log('Unauthenticated');
      }
    }
    throw error;
  },
);