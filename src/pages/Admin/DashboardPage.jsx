import React, { useState, useEffect } from 'react';

import useAxiosInstance from '@/utils/axios.customize';
import AdminLayout from '@/components/layouts/Admin';
import Dashboard from '@/components/Admin/Dashboard';

const DashboardPage = () => {
  const axiosInstance = useAxiosInstance();
  const [data, setData] = useState({
    user: 0,
    ticket: 0,
    sumCoin: 0,
    transactions: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get(`/management`);
        if (response.status === 200) {
          const { user, ticket, sumCoin, transactions } = response.data;
          setData({ user, ticket, sumCoin, transactions });
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <AdminLayout>
      <Dashboard data={data} />
    </AdminLayout>
  );
};

export default DashboardPage;
