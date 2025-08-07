const AuthFormWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row items-center justify-center lg:justify-between px-4 sm:px-8 lg:px-16 bg-gradient-to-br from-purple-200 to-indigo-200 dark:from-gray-900 dark:to-gray-900 transition-colors duration-300">
      {/* Left side - Auth Form */}
      <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm p-6 sm:p-8 rounded-xl shadow-lg w-full max-w-md animate-fade-in text-gray-900 dark:text-gray-100">
        {children}
      </div>
      
      {/* Right side - Simple Image */}
      <div className="mt-8 lg:mt-0 lg:ml-8">
        <img 
          src="https://i.pinimg.com/736x/18/11/f3/1811f344025539b7b4abb446eb6f910d.jpg" 
          alt="Background illustration" 
          className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 object-cover rounded-2xl shadow-xl"
        />
      </div>
    </div>
  );
};

export default AuthFormWrapper
