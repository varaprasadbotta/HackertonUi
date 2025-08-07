import React, { useEffect, useState } from 'react';
import SignUp from './pages/SignUp';
import Login from './pages/Login';

function App() {
  const [isSignUp, setIsSignUp] = useState(false); // Start with login
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
    <div className="relative">
      {/* Dark Mode Toggle */}
      <div className="absolute top-6 right-6 z-20">
        <button
          onClick={toggleDarkMode}
          className="px-4 py-2 text-sm rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700 transition-all shadow-lg"
        >
          {isDarkMode ? '☀️ Light' : '🌙 Dark'}
        </button>
      </div>

      {/* Auth Forms */}
      {isSignUp ? <SignUp onToggle={toggleForm} /> : <Login onToggle={toggleForm} />}
    </div>
  );
}

export default App;
