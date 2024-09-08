import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';

import useAxiosInstance from '@/util/axios.customize';
import { useAuth } from '@/provider/authProvider';
import { getCookie, removeCookie } from '@/util/cookie';

const LogoutPage = () => {
  const axiosInstance = useAxiosInstance();
  const { setToken, setUser } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const refreshToken = getCookie('refreshToken');
      const response = await axiosInstance.post('/user/sign-off', {
        refreshToken,
      });

      if (!response.data) {
        throw new Error('Phản hồi từ máy chủ không hợp lệ');
      }

      removeCookie('refreshToken');
      setToken();
      setUser();
      alert(response.data.message);
      navigate('/');
    } catch (err) {
      throw new Error(err.response?.data?.message || err.message);
    }
  };

  return <Button onClick={handleLogout}>Đăng xuất</Button>;
};

export default LogoutPage;
