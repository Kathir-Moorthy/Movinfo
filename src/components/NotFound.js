import React from 'react';
import { BiSad } from 'react-icons/bi';

const NotFound = () => (
  <div className="flex flex-col items-center justify-center mt-8 text-center">
    {/* Sad Icon */}
    <BiSad className="text-6xl text-purple-600 mb-4 animate-pulse" />
    
    {/* Heading */}
    <h2 className="text-2xl font-semibold text-purple-700">
      Movie not found!
    </h2>
    
    {/* Subtext */}
    <p className="text-purple-500">
      Please try searching for another movie.
    </p>
  </div>
);

export default NotFound;