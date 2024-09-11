import { Button, Checkbox, Form, Input, Flex } from 'antd';
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

const LoginForm = ({ onFinish }) => {
  return (
    <Form
      {...formItemLayout}
      name="login"
      initialValues={{
        remember: true,
      }}
      style={{ maxWidth: 600 }}
      onFinish={onFinish}
      className="mt-3"
    >
      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: 'email',
            message: 'Địa chỉ E-mail không hợp lệ!',
          },
          {
            required: true,
            message: 'Vui lòng nhập E-mail của bạn!',
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
      >
        <Input.Password />
      </Form.Item>

      <Form.Item {...tailFormItemLayout}>
        <Flex justify="space-between" align="center">
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Lưu đăng nhập</Checkbox>
          </Form.Item>
          <Link to="">Quên mật khẩu?</Link>
        </Flex>
      </Form.Item>

      <Form.Item {...tailFormItemLayout}>
        <Button
          block
          type="primary"
          htmlType="submit"
          style={{ marginBottom: '8px' }}
        >
          Đăng nhập
        </Button>
        hoặc <Link to="/register">Đăng ký ngay!</Link>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
