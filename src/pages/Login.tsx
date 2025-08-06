import React, { useState } from 'react';
import InputComponent from '../components/InputComponent';
import AuthFormWrapper from '../components/AuthFormWrapper';

const Login = ({ onToggle }: { onToggle: () => void }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log({ email, password });
  };

  return (
    <AuthFormWrapper>
      <h2 className="text-2xl font-semibold mb-6 text-center">Log In</h2>
      <InputComponent label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <InputComponent label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      
      <button
        onClick={handleLogin}
        className="w-full bg-indigo-600 text-white py-2 rounded-lg mt-4 hover:bg-indigo-700 transition-all"
      >
        Log In
      </button>

      <p className="text-sm text-gray-600 text-center mt-4">
        Don’t have an account?{' '}
        <button onClick={onToggle} className="text-indigo-600 hover:underline">
          Sign Up
        </button>
      </p>
    </AuthFormWrapper>
  );
};

export default Login;
