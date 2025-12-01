import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

const BtnChangeTheme = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="flex items-center space-x-3">
      <Sun className={`w-5 h-5 transition-colors duration-300 ${theme === 'light' ? 'text-yellow-500' : 'text-gray-400'}`} />

      <button
        onClick={toggleTheme}
        className={`relative w-14 h-7 rounded-full transition-colors duration-300 focus:outline-none
          ${theme === 'light' ? 'bg-gray-300' : 'bg-gray-700'}
        `}
      >
        <span
          className={`absolute top-0.5 left-0.5 w-6 h-6 rounded-full shadow-md transform transition-transform duration-300
            ${theme === 'dark' ? 'translate-x-7 bg-yellow-400' : 'bg-white'}
          `}
        />
      </button>

      <Moon className={`w-5 h-5 transition-colors duration-300 ${theme === 'dark' ? 'text-yellow-400' : 'text-gray-400'}`} />
    </div>
  );
};

export default BtnChangeTheme;
