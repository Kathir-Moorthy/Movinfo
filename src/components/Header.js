import React from 'react';

const Header = () => (
  <header className="bg-gradient-to-r from-purple-600 via-purple-800 to-indigo-900 text-white p-4 animate-slide-in">
    <div className="container flex items-center gap-4">
      <img
        src="/logo.png"
        alt="Movinfo Logo"
        className="h-10 rounded-md hover:scale-110 transform transition-transform duration-300"
      />
      <h1 className="text-2xl font-bold hover:text-purple-300 transition-colors duration-300">
        Movinfo
      </h1>
    </div>
  </header>
);

export default Header;