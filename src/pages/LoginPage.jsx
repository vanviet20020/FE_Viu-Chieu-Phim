import React from 'react';
import { Button, Checkbox, Form, Input, Flex } from 'antd';
import { Link, useNavigate } from 'react-router-dom';

import useAxiosInstance from '@/util/axios.customize';
import { useAuth } from '@/provider/authProvider';
import { setCookie } from '@/util/cookie';

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const LoginPage = () => {
  const axiosInstance = useAxiosInstance();
  const { setToken, setUser } = useAuth();
  const navigate = useNavigate();

  const loginAction = async (data) => {
    try {
      const { email, password, remember } = data;
      const response = await axiosInstance.post('/user/sign-in', {
        email,
        password,
      });

      if (!response.data) {
        throw new Error('Phản hồi từ máy chủ không hợp lệ');
      }

      const { currentUser, token, refreshToken, message } = response.data;

      setToken(token);
      setUser(currentUser);

      if (remember) setCookie('refreshToken', refreshToken, 30 * 24 * 60);

      return { message };
    } catch (err) {
      throw new Error(err.response?.data?.message || err.message);
    }
  };

  const onFinish = async (values) => {
    try {
      if (values.username !== '' && values.password !== '') {
        const result = await loginAction(values);
        if (result && result.message) {
          alert(result.message);
          navigate('/');
        }
      } else {
        alert('Vui lòng nhập thông tin hợp lệ');
      }
    } catch (err) {
      alert(`Đăng nhập thất bại: ${err.message}`);
    }
  };

  return (
    <Form
      {...formItemLayout}
      name="login"
      initialValues={{
        remember: true,
      }}
      style={{
        maxWidth: 600,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item {...tailFormItemLayout}>
        <Flex justify="space-between" align="center">
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
          <Link to="">Forgot password</Link>
        </Flex>
      </Form.Item>

      <Form.Item {...tailFormItemLayout}>
        <Button block type="primary" htmlType="submit">
          Log in
        </Button>
        or <Link to="/register">Register now!</Link>
      </Form.Item>
    </Form>
  );
};
export default LoginPage;
