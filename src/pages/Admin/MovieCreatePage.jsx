import { message } from 'antd';
import { useNavigate } from 'react-router-dom';
import useAxiosInstance from '@/utils/axios.customize';
import AdminLayout from '@/components/layouts/Admin';
import MovieForm from '@/components/Admin/MovieForm';

const MovieCreatePage = () => {
  const axiosInstance = useAxiosInstance();
  const navigate = useNavigate();

  const movieCreateAction = (data) => {
    return axiosInstance
      .post('/movie', data, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      .then((response) => {
        if (!response.data) {
          throw new Error('Phản hồi từ máy chủ không hợp lệ');
        }
        return { message: 'Tạo phim mới thành công' };
      })
      .catch((error) => {
        return new Error(error.response?.data?.message || error.message);
      });
  };

  const onFinish = async (values) => {
    try {
      if (
        values.name !== '' &&
        values.image !== '' &&
        values.trailer_link !== '' &&
        values.release_date !== '' &&
        values.runtime
      ) {
        const result = await movieCreateAction(values);
        if (result && result.message) {
          message.success(result.message);
          navigate('-1');
        }
      }
    } catch (error) {
      message.error(`Đăng nhập thất bại: ${error.message}`);
    }
  };

  return (
    <AdminLayout>
      <MovieForm onFinish={onFinish} />
    </AdminLayout>
  );
};
export default MovieCreatePage;
