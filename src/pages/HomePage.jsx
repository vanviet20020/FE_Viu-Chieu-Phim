import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import useAxiosInstance from '@/util/axios.customize';
import MainLayout from '@/component/layout/User';
import './HomePage.scss';

function HomePage() {
  const axiosInstance = useAxiosInstance();
  const [moviesShowing, setMoviesShowing] = useState('');
  const [upCommingMovie, setUpCommingMovie] = useState('');

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

  return (
    <MainLayout>
      <h2>Phim đang chiếu</h2>
      <div className="movie-item">
        <div className="movie-thumb">
          <Link to="">
            <img
              src="https://rapchieuphim.com/photos/9/xuyen-khong-cai-menh-gia-toc.jpg"
              alt="XUYÊN KHÔNG CẢI MỆNH GIA TỘC"
            />
          </Link>
        </div>
        <h3 className="movie-title">
          <Link></Link> xuyen-khong-cai-menh-gia-toc
        </h3>
        <div className="movie-release_date">Khởi chiếu 24/9</div>
      </div>
      <div className="movie-item">
        <div className="movie-thumb">
          <Link to="">
            <img
              src="https://rapchieuphim.com/photos/9/xuyen-khong-cai-menh-gia-toc.jpg"
              alt="XUYÊN KHÔNG CẢI MỆNH GIA TỘC"
            />
          </Link>
        </div>
        <h3 className="movie-title">
          <Link></Link> xuyen-khong-cai-menh-gia-toc
        </h3>
        <div className="movie-release_date">Khởi chiếu 24/9</div>
      </div>
      <div className="movie-item">
        <div className="movie-thumb">
          <Link to="">
            <img
              src="https://rapchieuphim.com/photos/9/xuyen-khong-cai-menh-gia-toc.jpg"
              alt="XUYÊN KHÔNG CẢI MỆNH GIA TỘC"
            />
          </Link>
        </div>
        <h3 className="movie-title">
          <Link></Link> xuyen-khong-cai-menh-gia-toc
        </h3>
        <div className="movie-release_date">Khởi chiếu 24/9</div>
      </div>
      <div className="movie-item">
        <div className="movie-thumb">
          <Link to="">
            <img
              src="https://rapchieuphim.com/photos/9/xuyen-khong-cai-menh-gia-toc.jpg"
              alt="XUYÊN KHÔNG CẢI MỆNH GIA TỘC"
            />
          </Link>
        </div>
        <h3 className="movie-title">
          <Link></Link> xuyen-khong-cai-menh-gia-toc
        </h3>
        <div className="movie-release_date">Khởi chiếu 24/9</div>
      </div>
      <div className="movie-item">
        <div className="movie-thumb">
          <Link to="">
            <img
              src="https://rapchieuphim.com/photos/9/xuyen-khong-cai-menh-gia-toc.jpg"
              alt="XUYÊN KHÔNG CẢI MỆNH GIA TỘC"
            />
          </Link>
        </div>
        <h3 className="movie-title">
          <Link></Link> xuyen-khong-cai-menh-gia-toc
        </h3>
        <div className="movie-release_date">Khởi chiếu 24/9</div>
      </div>
      <div className="movie-item">
        <div className="movie-thumb">
          <Link to="">
            <img
              src="https://rapchieuphim.com/photos/9/xuyen-khong-cai-menh-gia-toc.jpg"
              alt="XUYÊN KHÔNG CẢI MỆNH GIA TỘC"
            />
          </Link>
        </div>
        <h3 className="movie-title">
          <Link></Link> xuyen-khong-cai-menh-gia-toc
        </h3>
        <div className="movie-release_date">Khởi chiếu 24/9</div>
      </div>

      <h2>Phim sắp chiếu</h2>
      <div className="movie-item">
        <div className="movie-thumb">
          <Link to="">
            <img
              src="https://rapchieuphim.com/photos/9/xuyen-khong-cai-menh-gia-toc.jpg"
              alt="XUYÊN KHÔNG CẢI MỆNH GIA TỘC"
            />
          </Link>
        </div>
        <h3 className="movie-title">
          <Link></Link> xuyen-khong-cai-menh-gia-toc
        </h3>
        <div className="movie-release_date">24/9</div>
      </div>
    </MainLayout>
  );
}

export default HomePage;
