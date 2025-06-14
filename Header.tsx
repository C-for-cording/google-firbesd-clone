
import React from 'react';
import FirebaseLogoIcon from './icons/FirebaseLogoIcon';

const Header: React.FC = () => {
  return (
    <header className="py-5 px-6 sm:px-10 lg:px-16 z-20 w-full">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <FirebaseLogoIcon className="h-8 w-8" />
          <span className="text-white text-xl font-semibold">Firebase Studio</span>
        </div>
        <nav className="flex items-center space-x-6">
          <a href="#" className="text-neutral-300 hover:text-white transition-colors">
            Docs
          </a>
          <a href="#" className="text-neutral-300 hover:text-white transition-colors">
            Support
          </a>
          <button className="bg-orange-500 hover:bg-orange-600 text-black font-semibold py-2 px-5 rounded-lg transition-colors text-sm">
            Get Started
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
