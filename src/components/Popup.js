import React, { useEffect, useState } from 'react';

const Popup = () => {
  const [isVisible, setIsVisible] = useState(true); // Controls the visibility of the popup

  const closePopup = () => {
    setIsVisible(false);
  };

  return (
    <>
      {/* Overlay and Popup */}
      {isVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white text-center rounded-lg shadow-lg max-w-sm mx-auto p-6 relative">
            <h2 className="text-2xl font-bold text-purple-700 mb-2">
              Welcome to <span className="text-purple-500">Movinfo!</span>
            </h2>
            <p className="text-gray-700 mb-2">
              Search for movies to view detailed information.
            </p>
            <p className="text-gray-700 mb-2">Click the download button to save movie info cards as images!</p>
            <button
              onClick={closePopup}
              className="mt-4 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-all"
            >
              Got It!
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;