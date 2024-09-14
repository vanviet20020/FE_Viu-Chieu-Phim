import moment from 'moment';
import { Form, message } from 'antd';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useAxiosInstance from '@/utils/axios.customize';
import AdminLayout from '@/components/layouts/Admin';
import MovieForm from '@/components/Admin/MovieForm';

const MovieUpdatePage = () => {
  const axiosInstance = useAxiosInstance();
  const navigate = useNavigate();
  const { movieId } = useParams();
  const [form] = Form.useForm();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axiosInstance.get(`/movie/${movieId}`);
        const movieData = response.data;
        setMovie(movieData);

        form.setFieldsValue({
          name: movieData.name,
          status: movieData.status,
          trailer_link: movieData.trailer_link,
          description: movieData.description,
          release_date: moment(movieData.release_date),
          runtime: movieData.runtime,
          director: movieData.director,
          cast: movieData.cast,
          language: movieData.language,
          genre: movieData.genre,
        });
      } catch (error) {
        console.error('Error fetching movie details:', error);
        message.error('Không thể lấy thông tin phim.');
      }
    };

    fetchMovieDetails();
  }, [movieId, form]);

  const movieUpdateAction = (data) => {
    return axiosInstance
      .patch('/movie', data, {
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
        const dataUpdate = { id: movieId, ...values };

        console.log(dataUpdate);
      }
    } catch (error) {
      console.error('Error updating movie:', error);
      message.error('Cập nhật phim thất bại');
    }
  };

  console.log(movie.image);

  return (
    <AdminLayout>
      <MovieForm form={form} onFinish={onFinish} />
    </AdminLayout>
  );
};
export default MovieUpdatePage;
