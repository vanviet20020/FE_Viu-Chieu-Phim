import { Link } from 'react-router-dom';

const Dashboard = ({ data }) => {
  return (
    <main>
      <div className="head-title">
        <div className="left">
          <h1>Trang quản lý</h1>
          <ul className="breadcrumb">
            <li>
              <Link to="/admin/dashboard">Trang quản lý</Link>
            </li>
          </ul>
        </div>
      </div>

      <ul className="box-info">
        <li>
          <i className="bx bxs-group"></i>
          <span className="text">
            <h3>{data.user || 0}</h3> <p>Người dùng mới trong 30 ngày</p>
          </span>
        </li>
        <li>
          <i className="bx bxs-calendar-check"></i>
          <span className="text">
            <h3>{data.ticket || 0}</h3> <p>Số vé bán được trong tháng</p>
          </span>
        </li>
        <li>
          <i className="bx bxs-dollar-circle"></i>
          <span className="text">
            <h3>{data.sumCoin || 0} VND</h3> <p>Thu nhập tháng</p>
          </span>
        </li>
      </ul>

      <div className="table-data">
        <div className="order">
          <div className="head">
            <h3>Lịch sử giao dịch trên website</h3>
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
              {data.transactions && data.transactions.length > 0 ? (
                data.transactions.map((transaction) => (
                  <tr key={transaction.id}>
                    <td>{transaction.user?.email || 'N/A'}</td>
                    <td>{transaction.status || 'N/A'}</td>
                    <td>{transaction.old_coin || 0}</td>
                    <td>{transaction.new_coin || 0}</td>
                    <td>{transaction.message || 'N/A'}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5">Không có giao dịch</td>
                </tr>
              )}
            </tbody>
          </table>
          <div className="todo">
            <div className="todo-list">
              {data.todoList?.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
