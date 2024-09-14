import useAxiosInstance from '@/utils/axios.customize';
import { useNavigate } from 'react-router-dom';
import MainLayout from '@/components/layouts/User';
import RegisterForm from '@/components/RegisterForm'; // Đường dẫn tới component RegisterForm

const RegisterPage = () => {
  const axiosInstance = useAxiosInstance();
  const navigate = useNavigate();

  const loginAction = async (data) => {
    try {
      const { email, password, fullname, phoneNumber: phone_number } = data;
      const response = await axiosInstance.post('/user/sign-up', {
        email,
        password,
        fullname,
        phone_number,
      });

      if (!response.data) {
        throw new Error('Phản hồi từ máy chủ không hợp lệ');
      }

      const { message } = response.data;
      return { message };
    } catch (err) {
      throw new Error(err.response?.data?.message || err.message);
    }
  };

  const onFinish = async (values) => {
    try {
      if (
        values.email !== '' &&
        values.password !== '' &&
        values.fullname !== '' &&
        values.phoneNumber !== ''
      ) {
        const result = await loginAction(values);
        if (result && result.message) {
          alert(result.message);
          navigate('/login');
        }
      } else {
        alert('Vui lòng nhập thông tin hợp lệ');
      }
    } catch (err) {
      alert(`Đăng nhập thất bại: ${err.message}`);
    }
  };

  return (
    <MainLayout>
      <RegisterForm onFinish={onFinish} />
    </MainLayout>
  );
};

export default RegisterPage;
