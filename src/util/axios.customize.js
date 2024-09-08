import axios from 'axios';
import { getCookie, setCookie, removeCookie } from '@/util/cookie';
import { useAuth } from '@/provider/authProvider';

const useAxiosInstance = () => {
  const { token, setToken, setUser } = useAuth();

  const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  axiosInstance.interceptors.request.use(
    async (config) => {
      let currentToken = token;

      if (!currentToken) {
        const refreshToken = getCookie('refreshToken');
        if (refreshToken) {
          try {
            const response = await axios.post('/user/refresh-token', {
              refreshToken,
            });
            const { token: newToken, currentUser } = response.data;
            setCookie('token', newToken);
            setToken(newToken);
            setUser(currentUser);
            currentToken = newToken;
          } catch (err) {
            removeCookie('token');
            removeCookie('refreshToken');
            setToken(null);
            setUser(null);
            window.location = '/login';
          }
        }
      }

      if (currentToken) {
        config.headers['Authorization'] = 'Bearer ' + currentToken;
      }

      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  axiosInstance.interceptors.response.use(
    (response) => {
      return response;
    },
    async (error) => {
      const originalConfig = error.config;
      if (originalConfig.url !== '/user/sign-in' && error.response) {
        if (error.response.status === 401 && !originalConfig._retry) {
          originalConfig._retry = true;
          const refreshToken = getCookie('refreshToken');
          if (refreshToken) {
            try {
              const response = await axios.post('/user/refresh-token', {
                refreshToken,
              });
              const { token: newToken, user: currentUser } = response.data;
              setToken(newToken);
              setUser(currentUser);
              axios.defaults.headers.common['Authorization'] =
                'Bearer ' + newToken;
              return axiosInstance(originalConfig);
            } catch (err) {
              removeCookie('refreshToken');
              setToken(null);
              setUser(null);
              window.location = '/login';
            }
          }
        }
      }
      return Promise.reject(error);
    }
  );

  return axiosInstance;
};

export default useAxiosInstance;
