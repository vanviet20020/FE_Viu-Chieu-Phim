import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { getCookie, setCookie, removeCookie } from '@/utils/cookie';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(getCookie('token') || null);
  const initialUser = getCookie('user') || null;
  const [user, setUser] = useState(JSON.parse(initialUser));

  const setAuth = (token, user) => {
    setToken(token);
    setUser(user);
  };

  const clearAuth = () => {
    setToken(null);
    setUser(null);
  };

  useEffect(() => {
    try {
      if (token && user) {
        setCookie('token', token);
        setCookie('user', JSON.stringify(user));
      } else {
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
      user,
      setAuth,
      clearAuth,
    }),
    [token, user]
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

export default AuthProvider;
