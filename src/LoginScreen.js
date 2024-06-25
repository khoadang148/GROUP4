import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { Form, Input, Button, Checkbox } from 'antd';
import { login } from './redux/actions/auth.action';
import { FaFacebook, FaTwitter, FaGoogle, FaEnvelope, FaKey } from 'react-icons/fa';

const logoUrl = 'https://gambolthemes.net/html-items/cursus-new-demo/images/logo.svg';
const signBackgroundUrl = 'https://gambolthemes.net/html-items/cursus-new-demo/images/sign.svg';
const signLogoUrl = 'https://gambolthemes.net/html-items/cursus-new-demo/images/sign_logo.png';

const LoginScreen = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const error = useSelector((state) => state.error);

  const handleLogin = async (values) => {
    setLoading(true);
    await dispatch(login(values.username, values.password));
    setLoading(false);
    if (localStorage.getItem('token')) {
      navigate('/home');
    }
  };

  const handleSocialLogin = (provider) => {
    console.log(`Logging in with ${provider}`);
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 relative">
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <img src={signBackgroundUrl} alt="Sign Background" className="w-full h-full object-cover opacity-5" />
      </div>

      <div className="z-10 relative flex flex-col items-center py-8 max-w-md w-full">
        <img src={logoUrl} alt="Cursus Logo" style={{ width: '135px', height: '32px' }} />
        <div className="bg-white p-8 rounded-lg shadow-lg mt-8 w-full">
          <h2 className="text-2xl font-bold mb-2 text-center text-black">Welcome Back</h2>
          <p className="text-center mb-3 text-sm">Log In to Your Cursus Account!</p>

          <div className="flex flex-col space-y-3 mb-4">
            <Button
              className="text-white flex items-center justify-center"
              style={{ backgroundColor: '#3B5998', height: '40px' }}
              onClick={() => handleSocialLogin('Facebook')}
            >
              <FaFacebook className="mr-2" /> Continue with Facebook
            </Button>
            <Button
              className="text-white flex items-center justify-center"
              style={{ backgroundColor: '#1DA1F2', height: '40px' }}
              onClick={() => handleSocialLogin('Twitter')}
            >
              <FaTwitter className="mr-2" /> Continue with Twitter
            </Button>
            <Button
              className="text-white flex items-center justify-center"
              style={{ backgroundColor: '#34A853', height: '40px' }}
              onClick={() => handleSocialLogin('Google')}
            >
              <FaGoogle className="mr-2" /> Continue with Google
            </Button>
          </div>

          {error && <p className="text-red-600 mb-4 text-center">{error}</p>}

          <Form onFinish={handleLogin} className="w-full">
            <Form.Item
              name="username"
              rules={[{ required: true, message: 'Please input your email or phone number!' }]}
            >
              <Input prefix={<FaEnvelope className="mr-2 text-gray-500" />} placeholder="Email Address" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input.Password prefix={<FaKey className="mr-2 text-gray-500" />} placeholder="Password" />
            </Form.Item>
            <Form.Item>
              <Checkbox>Remember Me</Checkbox>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" loading={loading} block style={{ backgroundColor: '#FF0000', borderColor: '#FF0000', color: '#FFFFFF' }}>
                Sign in
              </Button>
            </Form.Item>
          </Form>

          <p className="text-center my-2">
            <span className="text-black">or </span>
            <Link to="/forgot-password" className="text-red-500">Forgot Password</Link>
          </p>

          <p className="text-center my-4">Don't have an account? <span className="text-red-600 cursor-pointer" onClick={() => navigate('/signup')}>Sign Up</span></p>
        </div>
      </div>

      <div className="mt-4 text-center mb-auto z-10">
        <img src={signLogoUrl} alt="Sign Logo" style={{ height: '40px', display: 'inline-block', marginRight: '8px' }} />
        <p className="text-sm inline-block">© 2024 Cursus. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default LoginScreen;
