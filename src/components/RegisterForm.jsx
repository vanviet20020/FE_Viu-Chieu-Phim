import { Button, Form, Input } from 'antd';
import { Link } from 'react-router-dom';

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: { span: 24, offset: 0 },
    sm: { span: 16, offset: 8 },
  },
};

const RegisterForm = ({ onFinish }) => {
  const [form] = Form.useForm();

  return (
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      style={{ maxWidth: 600 }}
      scrollToFirstError
      className="mt-3"
    >
      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: 'email',
            message: 'E-mail không hợp lệ!',
          },
          {
            required: true,
            message: 'Vui lòng nhập E-mail!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="password"
        label="Mật khẩu"
        rules={[
          {
            required: true,
            message: 'Vui lòng nhập mật khẩu!',
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="confirm"
        label="Xác nhận mật khẩu"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Vui lòng xác nhận mật khẩu!',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(
                new Error('Mật khẩu xác nhận không trùng khớp!')
              );
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="fullname"
        label="Họ tên"
        tooltip="Bạn muốn người khác gọi bạn là gì?"
        rules={[
          {
            required: true,
            message: 'Vui lòng nhập họ tên!',
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="phoneNumber"
        label="Số điện thoại"
        rules={[
          {
            required: true,
            message: 'Vui lòng nhập số điện thoại!',
          },
          {
            len: 10,
            message: 'Số điện thoại phải có 10 chữ số!',
          },
        ]}
      >
        <Input
          addonBefore={
            <p
              value="84"
              style={{
                width: 70,
                margin: 'auto',
              }}
            >
              +84
            </p>
          }
          style={{ width: '100%' }}
        />
      </Form.Item>

      <Form.Item {...tailFormItemLayout}>
        <Button
          block
          type="primary"
          htmlType="submit"
          style={{ marginBottom: '8px' }}
        >
          Đăng ký
        </Button>
        đã có tài khoản <Link to="/login">Đăng nhập ngay!</Link>
      </Form.Item>
    </Form>
  );
};

export default RegisterForm;
