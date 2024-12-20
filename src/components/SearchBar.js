import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchMovie } from '../redux/slices/movieSlice';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();

  const handleSearch = () => {
    if (searchTerm.trim()) {
      dispatch(fetchMovie(searchTerm.trim()));
      setSearchTerm('');
    }
  };

  return (
    <div className="flex items-center justify-center gap-2 w-full max-w-lg mx-auto animate-fade-in">
      {/* Input Field */}
      <input
        type="text"
        placeholder="Search for a movie..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="flex-1 px-2 py-1 border border-gray-300 rounded-md text-gray-800 text-2xl focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all
          sm:w-[60%] sm:px-4 sm:py-2 sm:text-lg"
      />

      {/* Search Button */}
      <button
        onClick={handleSearch}
        className="px-4 py-1 bg-gradient-to-r from-purple-600 to-purple-800 text-white text-2xl rounded-md shadow-md hover:bg-purple-900 transition-all transform hover:scale-105
          sm:px-4 sm:py-2 sm:text-lg"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;