import React, { useState, useEffect } from 'react';

interface MonkeyProps {
  isTyping: boolean;
  isPasswordVisible: boolean;
}

const InteractiveMonkey: React.FC<MonkeyProps> = ({ isTyping, isPasswordVisible }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [eyesOpen, setEyesOpen] = useState(true);

  // Track mouse movement
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Blinking eyes animation
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setEyesOpen(false);
      setTimeout(() => setEyesOpen(true), 150);
    }, 3000 + Math.random() * 3000);
    return () => clearInterval(blinkInterval);
  }, []);

  // Eye movement logic
  const calculateEyeDirection = () => {
    const monkeyRect = {
      left: window.innerWidth * 0.7,
      top: window.innerHeight * 0.4,
    };

    const deltaX = mousePosition.x - monkeyRect.left;
    const deltaY = mousePosition.y - monkeyRect.top;

    const maxMovement = 8;
    const normalizedX = Math.max(-maxMovement, Math.min(maxMovement, deltaX / 20));
    const normalizedY = Math.max(-maxMovement, Math.min(maxMovement, deltaY / 20));

    return { x: normalizedX, y: normalizedY };
  };

  const eyeDirection = calculateEyeDirection();

  const renderEye = () => {
    if (eyesOpen && !isPasswordVisible) {
      return (
        <div
          className="w-6 h-6 bg-black rounded-full transition-all duration-100 ease-out"
          style={{ transform: `translate(${6 + eyeDirection.x}px, ${6 + eyeDirection.y}px)` }}
        >
          <div className="w-2 h-2 bg-white rounded-full ml-1 mt-1" />
        </div>
      );
    }

    if (isPasswordVisible) {
      return (
        <div className="w-full h-full flex items-center justify-center text-2xl">🙈</div>
      );
    }

    return <div className="w-full h-2 bg-black mt-5 rounded-full" />;
  };

  return (
    <div className="relative w-80 h-80 flex items-center justify-center">
      {/* Monkey Face */}
      <div className="relative w-64 h-64 bg-gradient-to-br from-orange-200 to-orange-300 rounded-full shadow-2xl transform transition-all duration-300 hover:scale-105">

        {/* Ears */}
        <div className="absolute -top-8 left-8 w-16 h-16 bg-orange-300 rounded-full" />
        <div className="absolute -top-8 right-8 w-16 h-16 bg-orange-300 rounded-full" />

        {/* Left Eye */}
        <div className="absolute top-16 left-12 w-12 h-12 bg-white rounded-full shadow-inner">
          {renderEye()}
        </div>

        {/* Right Eye */}
        <div className="absolute top-16 right-12 w-12 h-12 bg-white rounded-full shadow-inner">
          {renderEye()}
        </div>

        {/* Nose */}
        <div className="absolute top-28 left-1/2 transform -translate-x-1/2 w-4 h-3 bg-orange-400 rounded-full" />

        {/* Mouth */}
        <div
          className={`absolute top-36 left-1/2 transform -translate-x-1/2 transition-all duration-300 ${isTyping ? 'w-8 h-4' : 'w-6 h-2'
            } bg-orange-400 rounded-full`}
        >
          {isTyping && (
            <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-red-400 rounded-full animate-pulse" />
          )}
        </div>

        {/* Cheeks (only when typing) */}
        {isTyping && (
          <>
            <div className="absolute top-24 left-4 w-6 h-6 bg-pink-300 rounded-full opacity-60 animate-pulse" />
            <div className="absolute top-24 right-4 w-6 h-6 bg-pink-300 rounded-full opacity-60 animate-pulse" />
          </>
        )}
      </div>

      {/* Thought Bubble */}
      {isTyping && (
        <div className="absolute -top-8 -right-4 bg-white rounded-full p-3 shadow-lg animate-bounce">
          <span className="text-lg">💭</span>
        </div>
      )}
    </div>
  );
};

export default InteractiveMonkey;
