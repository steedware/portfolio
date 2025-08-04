import React, { useState, useEffect, createContext, useContext } from 'react';
import { translations } from '../data/translations.js';

// Create Language Context
const LanguageContext = createContext();

// Language Provider Component
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('pl');

  useEffect(() => {
    // Check for saved language preference
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage && (savedLanguage === 'pl' || savedLanguage === 'en')) {
      setLanguage(savedLanguage);
    } else {
      // Default to Polish or browser language preference
      const browserLanguage = navigator.language.startsWith('pl') ? 'pl' : 'en';
      setLanguage(browserLanguage);
    }
  }, []);

  const toggleLanguage = () => {
    const newLanguage = language === 'pl' ? 'en' : 'pl';
    setLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
  };

  const t = (key) => {
    const keys = key.split('.');
    let value = translations[language];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  };

  const value = {
    language,
    toggleLanguage,
    t,
    isPolish: language === 'pl',
    isEnglish: language === 'en'
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use the language context
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
