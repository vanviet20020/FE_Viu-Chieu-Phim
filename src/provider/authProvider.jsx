import { createContext, useContext, useEffect, useMemo, useState } from 'react';

import { getCookie, setCookie, removeCookie } from '@/util/cookie';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [token, setToken_] = useState(getCookie('token') || null);
  const [user, setUser_] = useState(getCookie('user') || null);

  const setToken = (newToken) => {
    setToken_(newToken);
  };

  const setUser = (newUser) => {
    setUser_(newUser);
  };

  useEffect(() => {
    try {
      if (token && user) {
        // axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
        setCookie('token', token);
        setCookie('user', JSON.stringify(user));
      } else {
        // delete axios.defaults.headers.common['Authorization'];
        removeCookie('token');
        removeCookie('user');
      }
    } catch (error) {
      console.error('Error handling cookies:', error);
    }
  }, [token, user]);

  const contextValue = useMemo(
    () => ({
      token,
      setToken,
      user,
      setUser,
    }),
    [token, user]
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthProvider;
