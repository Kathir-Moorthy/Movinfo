import React from 'react';

const Footer = () => (
  <footer className="bg-gradient-to-r from-purple-600 via-purple-800 to-indigo-900 text-white text-center p-4 animate-fade-in">
    <p>&copy; {new Date().getFullYear()} Movinfo. All rights reserved.</p>
  </footer>
);

export default Footer;