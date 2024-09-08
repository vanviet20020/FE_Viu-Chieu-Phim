import { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { useAuth } from '@/provider/authProvider';
import useAxiosInstance from '@/util/axios.customize';

export const ProtectedRoute = () => {
  const { token, setToken, setUser } = useAuth();
  // const axiosInstance = useAxiosInstance();
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const checkRefreshToken = async () => {
  //     if (!token) {
  //       const refreshToken = getCookie('refreshToken');
  //       if (refreshToken) {
  //         try {
  //           console.log(refreshToken);

  //           const response = await axios.post('/user/refresh-token', {
  //             refreshToken,
  //           });
  //           const { token: newToken, user: currentUser } = response.data;
  //           setToken(newToken);
  //           setUser(currentUser);
  //           axios.defaults.headers.common['Authorization'] =
  //             'Bearer ' + newToken;
  //           return axiosInstance(originalConfig);
  //         } catch (err) {
  //           removeCookie('refreshToken');
  //           setToken(null);
  //           setUser(null);
  //           window.location = '/login';
  //         }
  //       }
  //     }
  //     setLoading(false);
  //   };

  //   checkRefreshToken();
  // }, [token, setToken, setUser, axiosInstance]);

  // if (loading) return <div>Loading...</div>;
  if (!token) return <Navigate to="/login" replace={true} />;
  return <Outlet />;
};
