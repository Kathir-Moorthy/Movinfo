// src/components/Loader.js
import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player'; // Correctly import the Lottie Player
import animationData from '../lottie/loading.json'; // Ensure this path points to your JSON file

const Loader = () => {
  return (
    <div className="flex justify-center items-center mt-8 h-screen">
      <Player
        autoplay
        loop
        src={animationData}
        style={{ height: '150px', width: '150px' }}
      />
    </div>
  );
};

export default Loader;