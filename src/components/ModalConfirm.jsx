import React, { useState } from 'react';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Button, Modal, Space } from 'antd';

const ModalConfirm = ({ onOk, content = '', danger = false }) => {
  const [modal, contextHolder] = Modal.useModal();
  const confirm = () => {
    modal.confirm({
      title: 'Bạn có muốn thực hiện thao tác này không?',
      icon: <ExclamationCircleOutlined />,
      content: `Bạn có chắc muốn xóa dữ liệu ${content} không?`,
      okText: 'Đồng ý',
      cancelText: 'Hủy',
      onOk: () => onOk(),
    });
  };
  return (
    <>
      <Space>
        <Button onClick={confirm} danger={danger}>
          Xóa
        </Button>
      </Space>
      {contextHolder}
    </>
  );
};
export default ModalConfirm;
