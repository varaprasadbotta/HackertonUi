import InteractiveMonkey from './InteractiveMonkey';

interface AuthFormWrapperProps {
  children: React.ReactNode;
  isTyping?: boolean;
  isPasswordVisible?: boolean;
}

const AuthFormWrapper = ({ children, isTyping = false, isPasswordVisible = false }: AuthFormWrapperProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-200 via-pink-100 to-indigo-200 dark:from-gray-900 dark:via-purple-900 dark:to-gray-900 transition-all duration-500">
      <div className="flex items-center justify-center gap-8 lg:gap-16 p-8 w-full max-w-6xl">
        
        {/* Left side - Auth Form */}
        <div className="bg-white/30 dark:bg-gray-800/30 backdrop-blur-lg border border-white/20 dark:border-gray-700/20 p-8 rounded-3xl shadow-2xl w-full max-w-md animate-fade-in text-gray-900 dark:text-gray-100 relative">
          {/* Glassmorphism effect overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-3xl"></div>
          <div className="relative z-10">
            {children}
          </div>
        </div>
        
        {/* Right side - Interactive Monkey */}
        <div className="hidden lg:flex items-center justify-center">
          <InteractiveMonkey isTyping={isTyping} isPasswordVisible={isPasswordVisible} />
        </div>
        
      </div>
      
      {/* Floating decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-1/4 w-6 h-6 bg-purple-400/30 rounded-full animate-float"></div>
        <div className="absolute bottom-32 right-1/4 w-4 h-4 bg-pink-400/30 rounded-full animate-float-reverse"></div>
        <div className="absolute top-1/2 left-1/5 w-8 h-8 bg-blue-400/20 rounded-full animate-pulse-glow"></div>
      </div>
    </div>
  );
};

export default AuthFormWrapper
