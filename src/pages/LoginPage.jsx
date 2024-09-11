import { useNavigate } from 'react-router-dom';
import { message } from 'antd';
import useAxiosInstance from '@/utils/axios.customize';
import { useAuth } from '@/providers/authProvider';
import { setCookie } from '@/utils/cookie';
import MainLayout from '@/components/layouts/User';
import LoginForm from '@/components/LoginForm';

const LoginPage = () => {
  const axiosInstance = useAxiosInstance();
  const { setAuth } = useAuth();
  const navigate = useNavigate();

  const loginAction = async (data) => {
    try {
      const { email, password, remember } = data;
      const response = await axiosInstance.post('/user/sign-in', {
        email,
        password,
      });

      if (!response.data) {
        throw new Error('Phản hồi từ máy chủ không hợp lệ');
      }

      const { currentUser, token, refreshToken, message } = response.data;

      setAuth(token, currentUser);

      if (remember) setCookie('refreshToken', refreshToken, 30 * 24 * 60);

      return { message };
    } catch (err) {
      throw new Error(err.response?.data?.message || err.message);
    }
  };

  const onFinish = async (values) => {
    try {
      if (values.email !== '' && values.password !== '') {
        const result = await loginAction(values);
        if (result && result.message) {
          message.success(result.message);
          navigate('/');
        }
      } else {
        message.warning('Vui lòng nhập thông tin hợp lệ');
      }
    } catch (err) {
      message.warning(`Đăng nhập thất bại: ${err.message}`);
    }
  };

  return (
    <MainLayout>
      <LoginForm onFinish={onFinish} />
    </MainLayout>
  );
};

export default LoginPage;
