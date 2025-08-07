const AuthFormWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row items-center justify-center lg:justify-between px-4 sm:px-8 lg:px-16 bg-gradient-to-br from-purple-200 to-indigo-200 dark:from-gray-900 dark:to-gray-900 transition-colors duration-300 relative overflow-hidden">
      {/* Left side - Auth Form */}
      <div className="bg-white/40 dark:bg-gray-800/40 backdrop-blur-md p-6 sm:p-8 rounded-xl shadow-xl w-full max-w-md animate-fade-in text-gray-900 dark:text-gray-100 z-10 relative">
        {children}
      </div>
      
      {/* Right side - Interactive Person Image */}
      <div className="relative mt-8 lg:mt-0 lg:ml-8 w-full lg:w-auto flex justify-center lg:justify-end">
        {/* Main person image that appears to watch the form */}
        <div className="relative group">
          <img 
            src="https://i.pinimg.com/736x/18/11/f3/1811f344025539b7b4abb446eb6f910d.jpg" 
            alt="Person watching form" 
            className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 object-cover rounded-2xl shadow-2xl transform transition-all duration-500 hover:scale-105 animate-float"
          />
          
          {/* Peeking effect - person appears to be looking from behind the form */}
          <div className="absolute -left-20 top-1/2 transform -translate-y-1/2 opacity-70 lg:opacity-100">
            <div className="w-16 h-20 bg-gradient-to-r from-transparent via-orange-200 to-orange-300 rounded-full animate-pulse-glow"></div>
          </div>
          
          {/* Eyes following cursor effect */}
          <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="flex space-x-2">
              <div className="w-2 h-2 bg-gray-800 rounded-full animate-ping"></div>
              <div className="w-2 h-2 bg-gray-800 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
            </div>
          </div>
        </div>
        
        {/* Thought bubble when user types */}
        <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-800/90 p-3 rounded-full shadow-lg animate-bounce opacity-80">
          <span className="text-2xl">👀</span>
        </div>
        
        {/* Hidden behind form effect on mobile */}
        <div className="lg:hidden absolute -bottom-10 left-1/2 transform -translate-x-1/2 opacity-60">
          <div className="w-32 h-8 bg-gradient-to-t from-purple-300 to-transparent rounded-full animate-pulse"></div>
        </div>
      </div>
      
      {/* Interactive particles that react to form interaction */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-purple-400 rounded-full animate-float opacity-40"></div>
        <div className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-pink-400 rounded-full animate-float-reverse opacity-50"></div>
        <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-blue-400 rounded-full animate-pulse-glow opacity-60"></div>
      </div>
    </div>
  );
};

export default AuthFormWrapper
