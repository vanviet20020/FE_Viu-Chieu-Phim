import moment from 'moment';
import { useEffect, useState } from 'react';
import useAxiosInstance from '@/utils/axios.customize';
import MainLayout from '@/components/layouts/User';
import MovieItem from '@/components/MovieItem/MovieItem';
import { MOVIE_STATUS } from '@/utils/constant';

const HomePage = () => {
  const axiosInstance = useAxiosInstance();

  const [moviesShowing, setMoviesShowing] = useState({
    movies: [],
    count: 0,
    page: 1,
    limit: 10,
  });
  const [moviesUpComming, setMoviesUpComming] = useState({
    movies: [],
    count: 0,
    page: 1,
    limit: 10,
  });
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [responseMoviesShowing, responseMoviesUpComming] =
          await Promise.all([
            axiosInstance.get(`/movie`, {
              params: { status: MOVIE_STATUS.screening },
            }),
            axiosInstance.get(`/movie`, {
              params: { status: MOVIE_STATUS.comingSoon },
            }),
          ]);

        if (responseMoviesShowing.status === 200) {
          const { movies, count, page, limit } = responseMoviesShowing.data;
          setMoviesShowing({ movies, count, page, limit });
        }

        if (responseMoviesUpComming.status === 200) {
          const { movies, count, page, limit } = responseMoviesUpComming.data;
          setMoviesUpComming({ movies, count, page, limit });
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Đã xảy ra lỗi khi tải dữ liệu. Vui lòng thử lại sau.');
      }
    };

    fetchData();
  }, []);

  return (
    <MainLayout>
      {error && <p className="error-message">{error}</p>}

      <h2>Phim đang chiếu</h2>
      {moviesShowing.movies.length > 0 ? (
        moviesShowing.movies.map((item, index) => (
          <MovieItem
            key={index}
            link={item.link}
            name={item.name}
            imgLink={item.image}
            releaseDate={moment(item.release_date).format('DD/MM/YYYY')}
          />
        ))
      ) : (
        <p>Hiện không có phim nào đang chiếu.</p>
      )}

      <h2>Phim sắp chiếu</h2>
      {moviesUpComming.movies.length > 0 ? (
        moviesUpComming.movies.map((item, index) => (
          <MovieItem
            key={index}
            link={item.link}
            name={item.name}
            imgLink={item.image}
            releaseDate={moment(item.release_date).format('DD/MM/YYYY')}
          />
        ))
      ) : (
        <p>Không có phim sắp chiếu.</p>
      )}
    </MainLayout>
  );
};

export default HomePage;
