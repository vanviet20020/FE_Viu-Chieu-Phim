import { message } from 'antd';
import { useNavigate } from 'react-router-dom';
import useAxiosInstance from '@/utils/axios.customize';
import AdminLayout from '@/components/layouts/Admin';
import SupplierForm from '@/components/Admin/SupplierForm';

const SupplierCreatePage = () => {
  const axiosInstance = useAxiosInstance();
  const navigate = useNavigate();

  const supplierCreateAction = (data) => {
    return axiosInstance
      .post('/supplier', data, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      .then((response) => {
        if (!response.data) {
          throw new Error('Phản hồi từ máy chủ không hợp lệ');
        }
        return { message: 'Tạo nhà cung cấp mới thành công' };
      })
      .catch((error) => {
        return new Error(error.response?.data?.message || error.message);
      });
  };

  const onFinish = async (values) => {
    try {
      if (values.name !== '' && values.ticket_price !== '' && values.image) {
        const result = await supplierCreateAction(values);

        if (result && result.message) {
          message.success(result.message);
          navigate(-1);
        }
      }
    } catch (error) {
      message.error(`Đăng nhập thất bại: ${error.message}`);
    }
  };

  return (
    <AdminLayout>
      <SupplierForm onFinish={onFinish} />
    </AdminLayout>
  );
};
export default SupplierCreatePage;
