import React, { useState } from 'react';
import AuthFormWrapper from '../components/AuthFormWrapper';

const SignUp = ({ onToggle }: { onToggle: () => void }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);

  const handleSignup = () => {
    console.log({ firstName, lastName, email, password });
  };

  const handleInputChange = (value: string, setter: (value: string) => void) => {
    setter(value);
    setIsTyping(true);
    setTimeout(() => setIsTyping(false), 1000);
  };

  return (
    <AuthFormWrapper isTyping={isTyping} isPasswordVisible={isPasswordFocused}>
      <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
        Join Us
      </h2>
      
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              First Name
            </label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => handleInputChange(e.target.value, setFirstName)}
              placeholder="First name"
              className="w-full px-4 py-3 rounded-xl border border-white/30 dark:border-gray-600/30 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 bg-white/50 dark:bg-gray-700/50 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 backdrop-blur-sm"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Last Name
            </label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => handleInputChange(e.target.value, setLastName)}
              placeholder="Last name"
              className="w-full px-4 py-3 rounded-xl border border-white/30 dark:border-gray-600/30 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 bg-white/50 dark:bg-gray-700/50 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 backdrop-blur-sm"
            />
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => handleInputChange(e.target.value, setEmail)}
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
            onChange={(e) => handleInputChange(e.target.value, setPassword)}
            onFocus={() => setIsPasswordFocused(true)}
            onBlur={() => setIsPasswordFocused(false)}
            placeholder="Create a password"
            className="w-full px-4 py-3 rounded-xl border border-white/30 dark:border-gray-600/30 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 bg-white/50 dark:bg-gray-700/50 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 backdrop-blur-sm"
          />
        </div>
      </div>
      
      <button
        onClick={handleSignup}
        className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-xl mt-8 hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-[1.02] shadow-xl font-medium"
      >
        Create Account
      </button>

      <p className="text-sm text-gray-600 dark:text-gray-300 text-center mt-6">
        Already have an account?{' '}
        <button onClick={onToggle} className="text-purple-600 hover:text-purple-700 dark:text-purple-400 font-medium">
          Sign in
        </button>
      </p>
    </AuthFormWrapper>
  );
};

export default SignUp;
