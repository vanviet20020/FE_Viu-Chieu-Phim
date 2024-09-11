import { Button, message } from 'antd';
import { useNavigate } from 'react-router-dom';

import useAxiosInstance from '@/utils/axios.customize';
import { useAuth } from '@/providers/authProvider';
import { getCookie, removeCookie } from '@/utils/cookie';

const LogoutPage = () => {
  const axiosInstance = useAxiosInstance();
  const { clearAuth } = useAuth();
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
      clearAuth();
      message.success(response.data.message);
      navigate('/');
    } catch (err) {
      console.error('Lỗi trong quá trình đăng xuất:', err);
      message.warning(
        `Đăng xuất thất bại: ${err.response?.data?.message || err.message}`
      );
    }
  };

  return <Button onClick={handleLogout}>Đăng xuất</Button>;
};

export default LogoutPage;
