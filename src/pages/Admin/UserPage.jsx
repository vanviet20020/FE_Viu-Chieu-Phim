import { useState } from 'react';

import AdminLayout from '@/component/layout/Admin';

function UserAdminPage() {
  const [data, setData] = useState();
  return (
    <AdminLayout>
      <main>
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
    </AdminLayout>
  );
}

export default UserAdminPage;
