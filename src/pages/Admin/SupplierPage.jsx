import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { message } from 'antd';
import useAxiosInstance from '@/utils/axios.customize';
import AdminLayout from '@/components/layouts/Admin';
import SupplierManagement from '@/components/Admin/SupplierManagement';

const MoviePage = () => {
  const axiosInstance = useAxiosInstance();
  const navigate = useNavigate();
  const [data, setData] = useState({
    suppliers: [],
    count: 0,
    page: 1,
    limit: 20,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axiosInstance.get(`/supplier`);
        if (response.status === 200) {
          const { suppliers, count, page, limit } = response.data;
          setData({ suppliers, count, page, limit });
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Không thể tải dữ liệu nhà cung cấp');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (supplierId) => {
    try {
      const response = await axiosInstance.delete(`/supplier/`, {
        data: { id: supplierId },
      });
      if (response.status === 204) {
        message.success('Xóa nhà cung cấp thành công');
        setData((prevData) => ({
          ...prevData,
          suppliers: prevData.suppliers.filter(
            (supplier) => supplier._id !== supplierId
          ),
        }));
      }
    } catch (error) {
      console.error('Error deleting supplier:', error);
      message.error('Xóa nhà cung cấp thất bại');
    }
  };

  const handleUpdate = (supplierId) => {
    navigate(`/admin/supplier/update/${supplierId}`);
  };

  return (
    <AdminLayout>
      <SupplierManagement
        data={data}
        loading={loading}
        error={error}
        handleDelete={handleDelete}
        handleUpdate={handleUpdate}
      />
    </AdminLayout>
  );
};

export default MoviePage;
