import { Link } from 'react-router-dom';

function Dashboard({ data }) {
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
            <h3>{data.user}</h3>
            <p>Người dùng mới trong 30 ngày</p>
          </span>
        </li>
        <li>
          <i className="bx bxs-calendar-check"></i>
          <span className="text">
            <h3>{data.ticket}</h3>
            <p>Số vé bán được trong tháng</p>
          </span>
        </li>
        <li>
          <i className="bx bxs-dollar-circle"></i>
          <span className="text">
            <h3>{data.sumCoin} VND</h3>
            <p>Thu nhập tháng</p>
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
              {data.transactions &&
                data.transactions.map((transaction, index) => (
                  <tr key={index}>
                    <td>{transaction.user.email}</td>
                    <td>{transaction.status}</td>
                    <td>{transaction.old_coin}</td>
                    <td>{transaction.new_coin}</td>
                    <td>{transaction.message}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}

export default Dashboard;
