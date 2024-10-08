import { useState, useEffect, memo } from 'react';
import { Button, Form, Input, Upload, InputNumber } from 'antd';
const urlServer = import.meta.env.VITE_SERVER_URL;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 14 },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: { span: 24, offset: 0 },
    sm: { span: 8, offset: 6 },
  },
};

const SupplierForm = ({ onFinish, form, oldImageLink = null }) => {
  const [fileList, setFileList] = useState([]);

  useEffect(() => {
    if (oldImageLink) {
      setFileList([
        {
          uid: '-1',
          name: 'current_image.png',
          status: 'done',
          url: urlServer + oldImageLink,
        },
      ]);
    }
  }, [oldImageLink]);

  const handleChange = (info) => {
    setFileList(info.fileList);
  };

  const handleSubmit = (values) => {
    let fileData = null;

    if (fileList.length > 0 && fileList[0].originFileObj) {
      fileData = fileList[0].originFileObj;
    } else if (oldImageLink) {
      fileData = oldImageLink;
    }

    Object.assign(values, { image: fileData });

    onFinish(values);
  };

  return (
    <Form
      form={form}
      {...formItemLayout}
      onFinish={handleSubmit}
      className="mt-4"
    >
      <Form.Item
        label="Tên Nhà cung cấp"
        name="name"
        rules={[{ required: true, message: 'Vui lòng nhập tên Nhà cung cấp!' }]}
      >
        <Input placeholder="Nhập tên Nhà cung cấp" />
      </Form.Item>

      <Form.Item
        label="Ảnh thumnail"
        name="image"
        getValueFromEvent={(e) => (Array.isArray(e) ? e : e?.fileList[0])}
        rules={[{ required: !oldImageLink, message: 'Vui chọn ảnh giá vé!' }]}
      >
        <Upload
          accept="image/*"
          beforeUpload={() => false}
          listType="picture-card"
          maxCount={1}
          fileList={fileList}
          onChange={handleChange}
        >
          <button style={{ border: 0, background: 'none' }} type="button">
            <i className="bx bx-image-add" style={{ fontSize: '32px' }}></i>
            <div style={{ marginTop: 8 }}>
              {fileList.length < 1 && <div>+ Tải ảnh lên</div>}
            </div>
          </button>
        </Upload>
      </Form.Item>

      <Form.Item label="Giá vé" name="ticket_price">
        <InputNumber
          min={1000}
          step={1000}
          formatter={(value) => `${value} VND`}
          parser={(value) => value?.replace('VND', '')}
        />
      </Form.Item>

      <Form.Item {...tailFormItemLayout}>
        <Button block type="primary" htmlType="submit">
          Thực hiện
        </Button>
      </Form.Item>
    </Form>
  );
};

export default memo(SupplierForm);
