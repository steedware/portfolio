import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = ({ onLoadingComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [shouldFadeOut, setShouldFadeOut] = useState(false);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setShouldFadeOut(true);
      setTimeout(() => {
        setIsVisible(false);
        onLoadingComplete();
      }, 300); // Give time for fade out
    }, 2000);

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  if (!isVisible) return null;

  return (
    <div 
      className={`fixed inset-0 z-50 bg-gray-900 flex items-center justify-center transition-opacity duration-300 ease-out ${
        shouldFadeOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="text-center">
        {/* Logo Container */}
        <motion.div
          className="relative mb-8"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ 
            scale: 1, 
            opacity: 1 
          }}
          transition={{ 
            duration: 0.6, 
            delay: 0.2,
            ease: "easeOut"
          }}
        >
          <div className="w-24 h-24 mx-auto bg-gray-200 rounded-full flex items-center justify-center overflow-hidden">
            {/* Logo */}
            <div className="w-full h-full bg-gray-700 rounded-full flex items-center justify-center text-white font-bold text-2xl overflow-hidden">
              <img 
                src="./assets/images/logo.jpg" 
                alt="Szymon Trojan Logo"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = '<span class="text-white font-bold text-2xl">ST</span>';
                }}
              />
            </div>
          </div>
          
          {/* Enhanced Loading Ring */}
          <motion.div
            className="absolute inset-0 w-24 h-24 mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Outer spinning ring */}
            <motion.div
              className="absolute inset-0 border-4 border-transparent border-t-gray-300 rounded-full"
              animate={{ rotate: 360 }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            
            {/* Inner counter-spinning ring */}
            <motion.div
              className="absolute inset-2 border-3 border-transparent border-b-gray-400 rounded-full"
              animate={{ rotate: -360 }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            
            {/* Pulsing center glow */}
            <motion.div
              className="absolute inset-4 bg-gray-500 rounded-full opacity-20"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.4, 0.2]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </motion.div>

        {/* Loading Text */}
        <motion.div
          className="text-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ 
            duration: 0.4, 
            delay: 0.6,
            ease: "easeOut"
          }}
        >
          <h2 className="text-xl font-semibold mb-2">Szymon Trojan</h2>
          <p className="text-gray-400 text-sm">Junior Java Developer</p>
          
          {/* Enhanced Loading Dots */}
          <div className="flex justify-center items-center mt-6 space-x-1">
            {[0, 1, 2].map((index) => (
              <motion.div
                key={index}
                className="w-2 h-2 bg-gray-300 rounded-full"
                animate={{
                  y: [0, -10, 0],
                  opacity: [0.3, 1, 0.3],
                  scale: [1, 1.2, 1]
                }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  delay: index * 0.15,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LoadingScreen;
