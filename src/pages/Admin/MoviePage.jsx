import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, message } from 'antd';
import useAxiosInstance from '@/utils/axios.customize';
import AdminLayout from '@/components/layouts/Admin';

const MoviePage = () => {
  const axiosInstance = useAxiosInstance();
  const navigate = useNavigate();
  // const [data, setData] = useState({
  //   movies: [],
  //   count: 0,
  //   page: 1,
  //   limit: 20,
  // });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       setLoading(true);
  //       const response = await axiosInstance.get(`/movie`);
  //       if (response.status === 200) {
  //         const { movies, count, page, limit } = response.data;
  //         setData({ movies, count, page, limit });
  //       }
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //       setError('Không thể tải dữ liệu phim');
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, []);

  const data = {
    movies: [
      {
        name: 'The Lost Kingdom',
        image: 'https://example.com/movie1.jpg',
        trailer_link: 'https://example.com/trailer1',
        description:
          'An epic tale of bravery and adventure in a forgotten land.',
        director: 'James Cameron',
        cast: 'Leonardo DiCaprio, Kate Winslet',
        release_date: '2022-12-01T00:00:00Z',
        runtime: '120 phút',
        language: 'English',
        genre: 'Action',
        status: 'Screening',
      },
      {
        name: 'The Haunting Shadows',
        image: 'https://example.com/movie2.jpg',
        trailer_link: 'https://example.com/trailer2',
        description:
          'A suspenseful horror that will keep you on the edge of your seat.',
        director: 'Steven Spielberg',
        cast: 'Tom Hanks, Meryl Streep',
        release_date: '2023-02-10T00:00:00Z',
        runtime: '105 phút',
        language: 'English',
        genre: 'Horror',
        status: 'Coming soon',
      },
      {
        name: 'Comedy in Paris',
        image: 'https://example.com/movie3.jpg',
        trailer_link: 'https://example.com/trailer3',
        description:
          'A light-hearted comedy about love and life in the city of lights.',
        director: 'Woody Allen',
        cast: 'Owen Wilson, Rachel McAdams',
        release_date: '2021-08-15T00:00:00Z',
        runtime: '95 phút',
        language: 'French',
        genre: 'Comedy',
        status: 'Expired',
      },
      {
        name: 'The Galactic War',
        image: 'https://example.com/movie4.jpg',
        trailer_link: 'https://example.com/trailer4',
        description: 'A futuristic battle between worlds to save humanity.',
        director: 'Ridley Scott',
        cast: 'Matt Damon, Jessica Chastain',
        release_date: '2023-06-30T00:00:00Z',
        runtime: '135 phút',
        language: 'English',
        genre: 'Sci-Fi',
        status: 'Screening',
      },
      {
        name: 'Mystery Island',
        image: 'https://example.com/movie5.jpg',
        trailer_link: 'https://example.com/trailer5',
        description:
          'A group of friends find themselves trapped on a mysterious island.',
        director: 'J.J. Abrams',
        cast: 'Chris Pratt, Bryce Dallas Howard',
        release_date: '2022-05-20T00:00:00Z',
        runtime: '115 phút',
        language: 'English',
        genre: 'Adventure',
        status: 'Expired',
      },
      {
        name: 'Romance in Rome',
        image: 'https://example.com/movie6.jpg',
        trailer_link: 'https://example.com/trailer6',
        description:
          'A romantic journey of two strangers meeting in the heart of Italy.',
        director: 'Nancy Meyers',
        cast: 'Julia Roberts, George Clooney',
        release_date: '2021-10-12T00:00:00Z',
        runtime: '98 phút',
        language: 'Italian',
        genre: 'Romance',
        status: 'Expired',
      },
      {
        name: 'The Last Samurai',
        image: 'https://example.com/movie7.jpg',
        trailer_link: 'https://example.com/trailer7',
        description: 'An emotional story of honor, courage, and redemption.',
        director: 'Edward Zwick',
        cast: 'Tom Cruise, Ken Watanabe',
        release_date: '2023-03-18T00:00:00Z',
        runtime: '154 phút',
        language: 'Japanese',
        genre: 'Action',
        status: 'Screening',
      },
      {
        name: 'Space Explorers',
        image: 'https://example.com/movie8.jpg',
        trailer_link: 'https://example.com/trailer8',
        description:
          'A thrilling adventure through space to discover new worlds.',
        director: 'Christopher Nolan',
        cast: 'Matthew McConaughey, Anne Hathaway',
        release_date: '2024-01-01T00:00:00Z',
        runtime: '165 phút',
        language: 'English',
        genre: 'Sci-Fi',
        status: 'Coming soon',
      },
      {
        name: 'The Great Heist',
        image: 'https://example.com/movie9.jpg',
        trailer_link: 'https://example.com/trailer9',
        description:
          'A team of skilled criminals plan the biggest heist of the century.',
        director: 'Guy Ritchie',
        cast: 'Jason Statham, Hugh Grant',
        release_date: '2022-07-22T00:00:00Z',
        runtime: '110 phút',
        language: 'English',
        genre: 'Action',
        status: 'Expired',
      },
      {
        name: 'The Forgotten Realm',
        image: 'https://example.com/movie10.jpg',
        trailer_link: 'https://example.com/trailer10',
        description:
          'A magical kingdom lost in time, rediscovered by a young adventurer.',
        director: 'Peter Jackson',
        cast: 'Elijah Wood, Ian McKellen',
        release_date: '2023-09-25T00:00:00Z',
        runtime: '140 phút',
        language: 'English',
        genre: 'Fantasy',
        status: 'Screening',
      },
    ],
    count: 0,
    page: 1,
    limit: 20,
  };

  const handleDelete = async (movieId) => {
    try {
      const response = await axiosInstance.delete(`/movie/${movieId}`);
      if (response.status === 200) {
        message.success('Xóa phim thành công');
        setData((prevData) => ({
          ...prevData,
          movies: prevData.movies.filter((movie) => movie.id !== movieId),
        }));
      }
    } catch (error) {
      console.error('Error deleting movie:', error);
      message.error('Xóa phim thất bại');
    }
  };

  const handleUpdate = (movieId) => {
    navigate(`/movie/update/${movieId}`);
  };

  console.log(data.movies);

  return (
    <AdminLayout>
      <main>
        <div className="head-title">
          <div className="left">
            <h1>Trang quản lý phim</h1>
            <ul className="breadcrumb">
              <li>
                <Link to="/admin/dashboard">Trang quản lý</Link>
              </li>
            </ul>
          </div>
        </div>
        <Link to="">Tạo phim mới</Link>

        {loading ? (
          <p>Đang tải dữ liệu...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <div className="table-data">
            <div className="order">
              <table>
                <thead>
                  <tr>
                    <th>Tên</th>
                    <th>Đạo diễn</th>
                    <th>Diễn viên</th>
                    <th>Ngày chiếu</th>
                    <th>Thời lượng</th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {data.movies.length > 0 ? (
                    data.movies.map((movie, index) => (
                      <tr key={index}>
                        <td>{movie.name}</td>
                        <td>{movie.director}</td>
                        <td>{movie.cast}</td>
                        <td>{movie.release_date}</td>
                        <td>{movie.runtime}</td>
                        <td>
                          <Link onClick={() => handleUpdate(movie.id)}>
                            Cập nhật
                          </Link>
                        </td>
                        <td>
                          <Button danger onClick={() => handleDelete(movie.id)}>
                            Xóa
                          </Button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="7">Không có phim nào được tìm thấy</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </main>
    </AdminLayout>
  );
};

export default MoviePage;
