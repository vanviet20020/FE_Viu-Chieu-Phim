import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { message } from 'antd';
import useAxiosInstance from '@/utils/axios.customize';
import AdminLayout from '@/components/layouts/Admin';
import MovieManagement from '@/components/Admin/MovieManager';

const MoviePage = () => {
  const axiosInstance = useAxiosInstance();
  const navigate = useNavigate();
  const [data, setData] = useState({
    movies: [],
    count: 0,
    page: 1,
    limit: 20,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axiosInstance.get(`/movie`);
        if (response.status === 200) {
          const { movies, count, page, limit } = response.data;
          setData({ movies, count, page, limit });
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Không thể tải dữ liệu phim');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (movieId) => {
    try {
      const response = await axiosInstance.delete(`/movie/`, {
        data: { id: movieId },
      });
      if (response.status === 204) {
        message.success('Xóa phim thành công');
        setData((prevData) => ({
          ...prevData,
          movies: prevData.movies.filter((movie) => movie._id !== movieId),
        }));
      }
    } catch (error) {
      console.error('Error deleting movie:', error);
      message.error('Xóa phim thất bại');
    }
  };

  const handleUpdate = (movieId) => {
    navigate(`/admin/movie/update/${movieId}`);
  };

  return (
    <AdminLayout>
      <MovieManagement
        data={data}
        loading={loading}
        error={error}
        handleDelete={handleDelete}
        handleUpdate={handleUpdate}
      />
    </AdminLayout>
  );
};

export default MoviePage;
