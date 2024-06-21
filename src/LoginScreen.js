// src/LoginScreen.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Form, Input, Button } from 'antd';
import { login } from './redux/actions/auth.action';

const LoginScreen = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const error = useSelector((state) => state.error);
  const user = useSelector((state) => state.auth.user);
  console.log('user',(user))
  const handleLogin = async (values) => {
    setLoading(true);
    console.log(values)
    await dispatch(login(values.username, values.password));
    setLoading(false);
    if (user) {
      navigate('/home');
    }
  };

  return (
    <div className='max-w-[300px] my-[100px] mx-auto'>
      <h2>Login</h2>
      {error && <p className='text-red-600'>{error}</p>}
      <Form onFinish={handleLogin}>
        <Form.Item name="username" rules={[{ required: true, message: 'Please input your username!' }]}>
          <Input placeholder="Username" />
        </Form.Item>
        <Form.Item name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
          <Input.Password placeholder="Password" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading} block>
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginScreen;
