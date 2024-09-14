import { Link } from 'react-router-dom';
import { Button } from 'antd';

const MovieManagement = ({
  data,
  loading,
  error,
  handleDelete,
  handleUpdate,
}) => {
  return (
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
      <Link to="create">Tạo phim mới</Link>

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
                {data.movies && data.movies.length > 0 ? (
                  data.movies.map((movie, index) => (
                    <tr key={index}>
                      <td>{movie.name || 'N/A'}</td>
                      <td>{movie.director || 'N/A'}</td>
                      <td>{movie.cast || 'N/A'}</td>
                      <td>{movie.release_date || 'N/A'}</td>
                      <td>{movie.runtime || 'N/A'}</td>
                      <td>
                        <Link onClick={() => handleUpdate(movie._id)}>
                          Cập nhật
                        </Link>
                      </td>
                      <td>
                        <Button danger onClick={() => handleDelete(movie._id)}>
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
  );
};

export default MovieManagement;
