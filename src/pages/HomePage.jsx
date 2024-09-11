import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import useAxiosInstance from '@/utils/axios.customize';
import MainLayout from '@/components/layouts/User';
import MovieItem from '@/components/MovieItem/MovieItem';

function HomePage() {
  // const axiosInstance = useAxiosInstance();
  // const [moviesShowing, setMoviesShowing] = useState([]);
  // const [moviesUpComming, setMoviesUpComming] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const responseMoviesShowing = await axiosInstance.get(`/movie`, {
  //         status: 'Screening',
  //       });
  //       if (responseUpCommingMovie.status === 200) {
  //         const { movies, count, page, limit } = responseMoviesShowing.data;
  //         setMoviesShowing({ movies, count, page, limit });
  //       }

  //       const responseUpCommingMovie = await axiosInstance.get(`/movie`, {
  //         status: 'Coming soon',
  //       });
  //       if (responseUpCommingMovie.status === 200) {
  //         const { movies, count, page, limit } = responseUpCommingMovie.data;
  //         setUpCommingMovie({ movies, count, page, limit });
  //       }
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  const moviesShowing = [
    {
      link: '',
      name: 'XUYÊN KHÔNG CẢI MỆNH GIA TỘ',
      imgLink:
        'https://rapchieuphim.com/photos/9/xuyen-khong-cai-menh-gia-toc.jpg',
      releaseDate: 'Khởi chiếu 24/9',
    },
    {
      link: '',
      name: 'XUYÊN KHÔNG CẢI MỆNH GIA TỘ',
      imgLink:
        'https://rapchieuphim.com/photos/9/xuyen-khong-cai-menh-gia-toc.jpg',
      releaseDate: 'Khởi chiếu 24/9',
    },
    {
      link: '',
      name: 'XUYÊN KHÔNG CẢI MỆNH GIA TỘ',
      imgLink:
        'https://rapchieuphim.com/photos/9/xuyen-khong-cai-menh-gia-toc.jpg',
      releaseDate: 'Khởi chiếu 24/9',
    },
    {
      link: '',
      name: 'XUYÊN KHÔNG CẢI MỆNH GIA TỘ',
      imgLink:
        'https://rapchieuphim.com/photos/9/xuyen-khong-cai-menh-gia-toc.jpg',
      releaseDate: 'Khởi chiếu 24/9',
    },
    {
      link: '',
      name: 'XUYÊN KHÔNG CẢI MỆNH GIA TỘ',
      imgLink:
        'https://rapchieuphim.com/photos/9/xuyen-khong-cai-menh-gia-toc.jpg',
      releaseDate: 'Khởi chiếu 24/9',
    },
    {
      link: '',
      name: 'XUYÊN KHÔNG CẢI MỆNH GIA TỘ',
      imgLink:
        'https://rapchieuphim.com/photos/9/xuyen-khong-cai-menh-gia-toc.jpg',
      releaseDate: 'Khởi chiếu 24/9',
    },
    {
      link: '',
      name: 'XUYÊN KHÔNG CẢI MỆNH GIA TỘ',
      imgLink:
        'https://rapchieuphim.com/photos/9/xuyen-khong-cai-menh-gia-toc.jpg',
      releaseDate: 'Khởi chiếu 24/9',
    },
    {
      link: '',
      name: 'XUYÊN KHÔNG CẢI MỆNH GIA TỘ',
      imgLink:
        'https://rapchieuphim.com/photos/9/xuyen-khong-cai-menh-gia-toc.jpg',
      releaseDate: 'Khởi chiếu 24/9',
    },
    {
      link: '',
      name: 'XUYÊN KHÔNG CẢI MỆNH GIA TỘ',
      imgLink:
        'https://rapchieuphim.com/photos/9/xuyen-khong-cai-menh-gia-toc.jpg',
      releaseDate: 'Khởi chiếu 24/9',
    },
  ];

  const moviesUpComming = [
    {
      link: '',
      name: 'XUYÊN KHÔNG CẢI MỆNH GIA TỘ',
      imgLink:
        'https://rapchieuphim.com/photos/9/xuyen-khong-cai-menh-gia-toc.jpg',
      releaseDate: 'Khởi chiếu 24/9',
    },
    {
      link: '',
      name: 'XUYÊN KHÔNG CẢI MỆNH GIA TỘ',
      imgLink:
        'https://rapchieuphim.com/photos/9/xuyen-khong-cai-menh-gia-toc.jpg',
      releaseDate: 'Khởi chiếu 24/9',
    },
    {
      link: '',
      name: 'XUYÊN KHÔNG CẢI MỆNH GIA TỘ',
      imgLink:
        'https://rapchieuphim.com/photos/9/xuyen-khong-cai-menh-gia-toc.jpg',
      releaseDate: 'Khởi chiếu 24/9',
    },
    {
      link: '',
      name: 'XUYÊN KHÔNG CẢI MỆNH GIA TỘ',
      imgLink:
        'https://rapchieuphim.com/photos/9/xuyen-khong-cai-menh-gia-toc.jpg',
      releaseDate: 'Khởi chiếu 24/9',
    },
    {
      link: '',
      name: 'XUYÊN KHÔNG CẢI MỆNH GIA TỘ',
      imgLink:
        'https://rapchieuphim.com/photos/9/xuyen-khong-cai-menh-gia-toc.jpg',
      releaseDate: 'Khởi chiếu 24/9',
    },
  ];
  return (
    <MainLayout>
      <h2>Phim đang chiếu</h2>
      {moviesShowing.length > 0 ? (
        moviesShowing.map((item, index) => (
          <MovieItem
            key={index}
            link={item.link}
            name={item.name}
            imgLink={item.imgLink}
            releaseDate={item.releaseDate}
          />
        ))
      ) : (
        <p>Hiện không có phim nào đang chiếu.</p>
      )}
      <h2>Phim sắp chiếu</h2>
      {moviesUpComming.length > 0 ? (
        moviesUpComming.map((item, index) => (
          <MovieItem
            key={index}
            link={item.link}
            name={item.name}
            imgLink={item.imgLink}
            releaseDate={item.releaseDate}
          />
        ))
      ) : (
        <p>Không có phim sắp chiếu.</p>
      )}
    </MainLayout>
  );
}
export default HomePage;
