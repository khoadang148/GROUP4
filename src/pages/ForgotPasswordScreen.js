import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Input, Button } from 'antd';

// Define logo URL and sign logo URL
const logoUrl = 'https://gambolthemes.net/html-items/cursus-new-demo/images/logo.svg';
const signBackgroundUrl = 'https://gambolthemes.net/html-items/cursus-new-demo/images/sign.svg';
const signLogoUrl = 'https://gambolthemes.net/html-items/cursus-new-demo/images/sign_logo.png';

const ForgotPasswordScreen = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleForgotPassword = async (values) => {
    setLoading(true);
    // Placeholder for sending reset password email
    // Simulate API call or backend logic
    console.log('Submitting forgot password:', values.email);
    setLoading(false);
    navigate('/login'); // Navigate back to login screen after submitting
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 relative">
      {/* Background image */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <img src={signBackgroundUrl} alt="Sign Background" className="w-full h-full object-cover opacity-5" />
      </div>

      {/* Content */}
      <div className="z-10 relative flex flex-col items-center py-8 max-w-md w-full">
        <img src={logoUrl} alt="Cursus Logo" className="w-32 h-8" />

        <div className="bg-white p-8 rounded-lg shadow-lg mt-8 w-full">
          <h2 className="text-2xl font-bold mb-2 text-center text-black">Request a Password Reset</h2>

          {/* Forgot Password Form */}
          <Form onFinish={handleForgotPassword} className="w-full">
            <Form.Item
              name="email"
              rules={[{ required: true, message: 'Please input your email!' }]}
            >
              <Input placeholder="Email Address" />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" loading={loading} block className="bg-red-500 border-red-500 text-white">
                Reset Password
              </Button>
            </Form.Item>
          </Form>

          {/* Return to Login Link */}
          <p className="text-center my-4">Go Back <a href="/login" className="text-blue-600"> Sign In</a></p>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-4 text-center mb-auto z-10">
        <img src={signLogoUrl} alt="Sign Logo" className="h-10 inline-block mr-2" />
        <p className="text-sm inline-block">© 2024 Cursus. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default ForgotPasswordScreen;
