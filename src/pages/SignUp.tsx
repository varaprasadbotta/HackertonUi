import React, { useState } from 'react';
import InputComponent from '../components/InputComponent';
import AuthFormWrapper from '../components/AuthFormWrapper';

const SignUp = ({ onToggle }: { onToggle: () => void }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    console.log({ firstName, lastName, email, password });
  };

  return (
    <AuthFormWrapper>
      <h2 className="text-2xl font-semibold mb-6 text-center">Sign Up</h2>
      <InputComponent label="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
      <InputComponent label="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
      <InputComponent label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <InputComponent label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      
      <button
        onClick={handleSignup}
        className="w-full bg-purple-600 text-white py-2 rounded-lg mt-4 hover:bg-purple-700 transition-all"
      >
        Sign Up
      </button>

      <p className="text-sm text-gray-600 text-center mt-4">
        Already have an account?{' '}
        <button onClick={onToggle} className="text-purple-600 hover:underline">
          Log In
        </button>
      </p>
    </AuthFormWrapper>
  );
};

export default SignUp;
