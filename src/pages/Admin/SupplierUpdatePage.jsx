import { Form, message } from 'antd';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useAxiosInstance from '@/utils/axios.customize';
import AdminLayout from '@/components/layouts/Admin';
import SupplierForm from '@/components/Admin/SupplierForm';

const SupplierUpdatePage = () => {
  const axiosInstance = useAxiosInstance();
  const navigate = useNavigate();
  const { supplierId } = useParams();
  const [form] = Form.useForm();
  const [supplier, setSupplier] = useState(null);

  useEffect(() => {
    const fetchSupllierDetails = () => {
      return axiosInstance
        .get(`/supplier/${supplierId}`)
        .then((response) => {
          if (!response.data) {
            throw new Error('Phản hồi từ máy chủ không hợp lệ');
          }

          const supplierData = response.data;
          setSupplier(supplierData);

          form.setFieldsValue({
            name: supplierData.name,
            ticket_price: supplierData.ticket_price,
          });
        })
        .catch((error) => {
          return new Error(error.response?.data?.message || error.message);
        });
    };

    fetchSupllierDetails();
  }, [supplierId, form]);

  const supplierCreateAction = (data) => {
    return axiosInstance
      .patch('/supplier', data, {
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
      if (values.name !== '' && values.ticket_price !== '') {
        const dataUpdate = { id: supplierId, ...supplier, ...values };
        const result = await supplierCreateAction(dataUpdate);

        if (!result || !result.message) {
          message.error(
            'Cập nhật nhà cung cấp thất bại: phản hồi không hợp lệ hoặc không có dữ liệu.'
          );
        }

        message.success(result.message);
        navigate(-1);
      }
    } catch (error) {
      console.error('Error updating movie:', error);
      message.error('Cập nhật nhà cung cấp thất bại');
    }
  };

  return (
    <AdminLayout>
      <SupplierForm form={form} onFinish={onFinish} />
    </AdminLayout>
  );
};
export default SupplierUpdatePage;
