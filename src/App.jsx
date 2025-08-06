import React, { useEffect, useState } from 'react';
import SignUp from './pages/SignUp';
import Login from './pages/Login';

function App() {
  const [isSignUp, setIsSignUp] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const html = document.documentElement;
    if (isDarkMode) {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleForm = () => setIsSignUp(!isSignUp);
  const toggleDarkMode = () => setIsDarkMode((prev) => !prev);

  return (
    <>
      {/* 🔥 Your Image in Top-Left */}
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuH0mCwHxsked2zMzQSJAUHF3Z6c5VziASwA&s"
        alt="Corner Image"
        className="absolute top-4 left-4 w-16 h-16 rounded-md shadow-md"
      />

      {/* 🌗 Dark Mode Toggle */}
      <div className="absolute top-4 right-4">
        <button
          onClick={toggleDarkMode}
          className="px-4 py-2 text-sm rounded-md border dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-all"
        >
          {isDarkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>
      </div>

      {/* 🔄 Auth Forms */}
      {isSignUp ? <SignUp onToggle={toggleForm} /> : <Login onToggle={toggleForm} />}
    </>
  );
}

export default App;
