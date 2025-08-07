const AuthFormWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
      {/* Left Side - Auth Form */}
      <div className="flex-1 flex items-center justify-center p-8 lg:p-16">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl w-full max-w-md animate-fade-in border dark:border-gray-700">
          {children}
        </div>
      </div>
      
      {/* Right Side - Animated Content */}
      <div className="hidden lg:flex flex-1 items-center justify-center relative overflow-hidden">
        {/* Background Gradient Shapes */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full animate-float opacity-80"></div>
        <div className="absolute top-40 left-20 w-24 h-24 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full animate-float-reverse opacity-70"></div>
        <div className="absolute bottom-32 right-32 w-40 h-40 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full animate-pulse-glow opacity-60"></div>
        <div className="absolute bottom-20 left-16 w-28 h-28 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full animate-float opacity-75"></div>
        <div className="absolute top-1/2 right-1/4 w-20 h-20 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-full animate-float-reverse opacity-80"></div>
        
        {/* Main Content */}
        <div className="text-center z-10 px-8">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 dark:text-white mb-4 leading-tight">
            Changing the way<br />
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              the world writes
            </span>
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-md mx-auto">
            Experience the future of writing with our innovative platform
          </p>
        </div>
        
        {/* Additional decorative elements */}
        <div className="absolute top-1/4 left-1/3 w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg animate-float opacity-60 rotate-45"></div>
        <div className="absolute bottom-1/3 right-1/2 w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-lg animate-float-reverse opacity-70 rotate-12"></div>
      </div>
    </div>
  );
};

export default AuthFormWrapper
