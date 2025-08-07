const AuthFormWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex items-center justify-start pl-8 lg:pl-16 bg-gradient-to-br from-purple-200 to-indigo-200 dark:from-gray-900 dark:to-gray-900 transition-colors duration-300">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg w-full max-w-md animate-fade-in text-gray-900 dark:text-gray-100">
        {children}
      </div>
    </div>
  );
};

export default AuthFormWrapper
