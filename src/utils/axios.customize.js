import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '@/providers/authProvider';
import { getCookie, removeCookie } from '@/utils/cookie';

const useAxiosInstance = () => {
  const navigate = useNavigate();
  const { token, setAuth, clearAuth } = useAuth();

  const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  axiosInstance.interceptors.request.use(
    async (config) => {
      if (token) {
        config.headers['Authorization'] = 'Bearer ' + token;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );

  axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
      const originalConfig = error.config;
      if (
        (originalConfig && originalConfig.url === '/user/sign-in') ||
        !error.response
      ) {
        return Promise.reject(error);
      }

      if (error.response.status === 401 && !originalConfig._retry) {
        originalConfig._retry = true;
        const refreshToken = getCookie('refreshToken');
        if (!refreshToken) {
          clearAuth();
          navigate('/login');
          return Promise.reject(error);
        }

        try {
          const response = await axios.post('/user/refresh-token', {
            refreshToken,
          });
          const { token: newToken, user: currentUser } = response.data;
          setAuth(newToken, currentUser);
          originalConfig.headers['Authorization'] = `Bearer ${newToken}`;
          return axiosInstance(originalConfig);
        } catch (err) {
          removeCookie('refreshToken');
          clearAuth();
          navigate('/login');
        }
      }

      return Promise.reject(error);
    }
  );

  return axiosInstance;
};

export default useAxiosInstance;
