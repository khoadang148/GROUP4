import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
import { Form, Input, Button } from 'antd';

const LoginScreen = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      navigate('/home'); // Redirect to home if token exists
    }
  }, [navigate]);

  const handleLogin = async (values) => {
    setLoading(true);
    try {
      const { username, password } = values;
      const response = await fakeAuthApi(username, password);
      login(response.token);
      localStorage.setItem('token', response.token); // Save token to localStorage
      setLoading(false);
      navigate('/home');
    } catch (error) {
      console.error('Login failed:', error);
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: '300px', margin: '100px auto' }}>
      <h2>Login</h2>
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

const fakeAuthApi = (username, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === 'instructor' && password === 'password') {
        resolve({ token: 'fake-jwt-token-instructor' });
      } else if (username === 'student' && password === 'password') {
        resolve({ token: 'fake-jwt-token-student' });
      } else {
        reject('Invalid credentials');
      }
    }, 1000);
  });
};

export default LoginScreen;