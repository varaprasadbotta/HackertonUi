import React, { useState } from 'react';
import InputComponent from '../components/InputComponent';
import AuthFormWrapper from '../components/AuthFormWrapper';

const Login = ({ onToggle }: { onToggle: () => void }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);

  const handleLogin = () => {
    console.log({ email, password });
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setIsTyping(true);
    setTimeout(() => setIsTyping(false), 1000);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    setIsTyping(true);
    setTimeout(() => setIsTyping(false), 1000);
  };

  return (
    <AuthFormWrapper isTyping={isTyping} isPasswordVisible={isPasswordFocused}>
      <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
        Welcome Back
      </h2>
      
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter your email"
            className="w-full px-4 py-3 rounded-xl border border-white/30 dark:border-gray-600/30 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 bg-white/50 dark:bg-gray-700/50 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 backdrop-blur-sm"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            onFocus={() => setIsPasswordFocused(true)}
            onBlur={() => setIsPasswordFocused(false)}
            placeholder="Enter your password"
            className="w-full px-4 py-3 rounded-xl border border-white/30 dark:border-gray-600/30 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 bg-white/50 dark:bg-gray-700/50 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 backdrop-blur-sm"
          />
        </div>
      </div>
      
      <button
        onClick={handleLogin}
        className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-xl mt-8 hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-[1.02] shadow-xl font-medium"
      >
        Sign In
      </button>

      <p className="text-sm text-gray-600 dark:text-gray-300 text-center mt-6">
        Don't have an account?{' '}
        <button onClick={onToggle} className="text-purple-600 hover:text-purple-700 dark:text-purple-400 font-medium">
          Sign up
        </button>
      </p>
    </AuthFormWrapper>
  );
};

export default Login;
