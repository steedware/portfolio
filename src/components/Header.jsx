import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../hooks/useLanguage.jsx';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { key: 'home', id: 'hero' },
    { key: 'about', id: 'about' },
    { key: 'experience', id: 'experience' },
    { key: 'projects', id: 'projects' },
    { key: 'skills', id: 'skills' },
    { key: 'education', id: 'education' },
    { key: 'contact', id: 'contact' },
  ];

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md shadow-lg"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => scrollToSection('hero')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-white font-bold overflow-hidden">
              <img 
                src="/portfolio2/assets/images/logo.jpg" 
                alt="Szymon Trojan Logo"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = '<span class="text-white font-bold">ST</span>';
                }}
              />
            </div>
            <span className="font-bold text-lg text-gray-900">
              Szymon Trojan
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => scrollToSection(item.id)}
                className="font-medium text-gray-900 transition-colors duration-300 hover:text-gray-600"
              >
                {t(`nav.${item.key}`)}
              </button>
            ))}
          </nav>

          {/* Language Switcher & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            {/* Language Switcher - Modern Toggle */}
            <div className="relative">
              <div
                className="flex items-center p-1 rounded-full border-2 border-gray-300 bg-white/90 cursor-pointer transition-all duration-300 w-20"
                onClick={toggleLanguage}
              >
                <motion.div
                  className="absolute top-1 bottom-1 w-8 rounded-full bg-gray-800 transition-all duration-300"
                  animate={{
                    x: language === 'pl' ? 2 : 36
                  }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
                <div
                  className={`relative z-10 flex-1 text-center py-1 text-xs font-semibold transition-colors duration-300 ${
                    language === 'pl'
                      ? 'text-white'
                      : 'text-gray-800'
                  }`}
                >
                  PL
                </div>
                <div
                  className={`relative z-10 flex-1 text-center py-1 text-xs font-semibold transition-colors duration-300 ${
                    language === 'en'
                      ? 'text-white'
                      : 'text-gray-800'
                  }`}
                >
                  EN
                </div>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-gray-900"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span
                  className={`block h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${
                    isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : '-translate-y-0.5'
                  }`}
                />
                <span
                  className={`block h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${
                    isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                  }`}
                />
                <span
                  className={`block h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${
                    isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-0.5'
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.nav
          className={`md:hidden overflow-hidden ${isMobileMenuOpen ? 'max-h-96' : 'max-h-0'}`}
          initial={false}
          animate={{
            height: isMobileMenuOpen ? 'auto' : 0,
            opacity: isMobileMenuOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="py-4 space-y-2">
            {navItems.map((item, index) => (
              <motion.button
                key={item.key}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-4 py-2 font-medium text-gray-900 hover:bg-gray-100 transition-colors duration-300 rounded-lg"
                initial={{ x: -20, opacity: 0 }}
                animate={{
                  x: isMobileMenuOpen ? 0 : -20,
                  opacity: isMobileMenuOpen ? 1 : 0,
                }}
                transition={{ delay: index * 0.1 }}
              >
                {t(`nav.${item.key}`)}
              </motion.button>
            ))}
          </div>
        </motion.nav>
      </div>
    </motion.header>
  );
};

export default Header;
