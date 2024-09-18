import { Link } from 'react-router-dom';
import { Button } from 'antd';

const SupplierManagement = ({
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
          <h1>Trang quản lý nhà cung cấp</h1>
          <ul className="breadcrumb">
            <li>
              <Link to="/admin/dashboard">Trang quản lý</Link>
            </li>
          </ul>
        </div>
      </div>
      <Link to="create">Tạo nhà cung cấp mới</Link>

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
                  <th>Giá vé</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {data.suppliers && data.suppliers.length > 0 ? (
                  data.suppliers.map((supplier, index) => (
                    <tr key={index}>
                      <td>{supplier.name || 'N/A'}</td>
                      <td>{supplier.ticket_price || 0}</td>
                      <td>
                        <Link onClick={() => handleUpdate(supplier._id)}>
                          Cập nhật
                        </Link>
                      </td>
                      <td>
                        <Button
                          danger
                          onClick={() => handleDelete(supplier._id)}
                        >
                          Xóa
                        </Button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="7">Không có nhà cung cấp nào được tìm thấy</td>
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

export default SupplierManagement;
