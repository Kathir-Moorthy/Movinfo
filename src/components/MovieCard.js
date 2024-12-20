import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import { FaStar } from 'react-icons/fa';
import { BsFillCalendarEventFill, BsClockFill, BsAward } from 'react-icons/bs';
import { MdOutlineDescription, MdLanguage } from 'react-icons/md';
import { AiOutlineUser, AiOutlineTeam } from 'react-icons/ai';
import { BiCalendarEvent } from 'react-icons/bi';

const MovieCard = () => {
  const { data } = useSelector((state) => state.movie);
  const cardRef = useRef();

  return (
    <div
      ref={cardRef}
      className="bg-white shadow-lg rounded-lg p-4 sm:p-6 md:p-8 lg:p-10 mt-6 max-w-sm sm:max-w-md md:max-w-lg lg:max-w-4xl mx-auto transition-all"
    >
      {/* Movie Poster */}
      <img
        src={data.Poster}
        alt={data.Title}
        className="w-full rounded-lg mb-4 object-cover"
      />

      {/* Title and Genre */}
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-2">
        {data.Title}
      </h2>
      <p className="text-center text-gray-500 mb-4 text-sm sm:text-base md:text-lg">
        {data.Genre}
      </p>

      {/* Movie Details */}
      <div className="flex flex-col gap-4 text-xs sm:text-sm md:text-base lg:text-lg">
        <p className="flex items-center">
          <AiOutlineUser className="mr-2 text-blue-500 text-base sm:text-lg lg:text-xl" />
          <strong>Director:</strong>&nbsp; {data.Director}
        </p>
        <p className="flex items-center">
          <AiOutlineTeam className="mr-2 text-green-500 text-base sm:text-lg lg:text-xl" />
          <strong>Cast:</strong>&nbsp; {data.Actors}
        </p>
        <p className="flex items-center">
          <BiCalendarEvent className="mr-2 text-red-500 text-base sm:text-lg lg:text-xl" />
          <strong>Released:</strong>&nbsp; {data.Released}
        </p>
        <p className="flex items-center">
          <MdLanguage className="mr-2 text-purple-500 text-base sm:text-lg lg:text-xl" />
          <strong>Language:</strong>&nbsp; {data.Language}
        </p>
        <p className="flex items-center">
          <FaStar className="mr-2 text-yellow-500 text-base sm:text-lg lg:text-xl" />
          <strong>IMDB Rating:</strong>&nbsp; {data.imdbRating}
        </p>
        <p className="flex items-center">
          <BsClockFill className="mr-2 text-orange-500 text-base sm:text-lg lg:text-xl" />
          <strong>Runtime:</strong>&nbsp; {data.Runtime}
        </p>
        <p className="flex items-center">
          <BsAward className="mr-2 text-pink-500 text-base sm:text-lg lg:text-xl" />
          <strong>Awards:</strong>&nbsp; {data.Awards}
        </p>
        <p className="flex items-start">
          <MdOutlineDescription className="mr-2 mt-1 text-cyan-500 text-base sm:text-lg lg:text-xl" />
          <strong>Plot:</strong>&nbsp; <span>{data.Plot}</span>
        </p>
      </div>
    </div>
  );
};

export default MovieCard;