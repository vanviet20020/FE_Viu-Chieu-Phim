import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import useAxiosInstance from '@/util/axios.customize';
import AdminLayout from '@/component/layout/Admin';

const AdminPage = () => {
  const axiosInstance = useAxiosInstance();
  const [data, setData] = useState({
    user: 0,
    ticket: 0,
    sumCoin: 0,
    movies: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get(`/movie`);
        if (response.status === 200) {
          const { movies, count, page, limit } = response.data;
          setData({ movies, count, page, limit });
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <AdminLayout>
      <main>
        <div className="head-title">
          <div className="left">
            <h1>Trang quản lý</h1>
            <ul className="breadcrumb">
              <li>
                <Link to="/admin">Trang quản lý</Link>
              </li>
            </ul>
          </div>
        </div>

        <table>
          <thead>
            <tr>
              <th>Email</th>
              <th>Trạng thái</th>
              <th>Lượng coin trước giao dịch</th>
              <th>Lượng coin sau giao dịch</th>
              <th>Nội dung</th>
            </tr>
          </thead>
          <tbody>
            {data.movies &&
              data.movies.map((movie, index) => (
                <tr key={index}>
                  <td>{movie.user.email}</td>
                  <td>{movie.status}</td>
                  <td>{movie.old_coin}</td>
                  <td>{movie.new_coin}</td>
                  <td>{movie.message}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </main>
    </AdminLayout>
  );
};

export default AdminPage;
