import React, { useRef } from "react";
import { useSelector } from "react-redux";
import { toPng } from "html-to-image";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaStar } from "react-icons/fa";
import { BsClockFill, BsAward } from "react-icons/bs";
import { MdOutlineDescription, MdLanguage } from "react-icons/md";
import { AiOutlineUser, AiOutlineTeam } from "react-icons/ai";
import { BiCalendarEvent } from "react-icons/bi";

const MovieCard = () => {
  const { data } = useSelector((state) => state.movie);
  const cardRef = useRef();
  const buttonRef = useRef();

  const downloadImage = () => {
    const node = cardRef.current;

    // Hide the button temporarily
    const originalStyle = buttonRef.current.style.display;
    buttonRef.current.style.display = "none";

    toPng(node, {
      backgroundColor: "#ffffff", // Ensure the background color is rendered
    })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = `${data.Title}.png`;
        link.href = dataUrl;
        link.click();

        // Show a success toast
        toast.success(`Downloading "${data.Title}" Movie Card`, {
          position: "top-center",
          autoClose: 3000,
        });
      })
      .catch((error) => {
        console.error("Could not generate image", error);

        // Show an error toast
        toast.error("Unable to download the image. Please try again.", {
          position: "top-center",
          autoClose: 3000,
        });
      })
      .finally(() => {
        // Restore the button visibility
        buttonRef.current.style.display = originalStyle;
      });
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 pb-14 p-2">
      <ToastContainer />
      <div
        ref={cardRef}
        style={{
          width: "100%",
          maxWidth: "600px",
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        }}
        className="mt-6 transition-all"
      >
        <img
          src={data.Poster}
          alt={data.Title}
          style={{
            width: "100%",
            borderRadius: "10px",
            marginBottom: "20px",
            objectFit: "cover",
          }}
        />
        <h2 className="text-2xl font-bold text-center mb-2">{data.Title}</h2>
        <p className="text-center text-gray-500 mb-4">{data.Genre}</p>
        <div className="flex flex-col gap-4 text-sm">
          <p className="flex items-center">
            <AiOutlineUser className="mr-2 text-blue-500" />
            <strong>Director:</strong>&nbsp; {data.Director}
          </p>
          <p className="flex items-center">
            <AiOutlineTeam className="mr-2 text-green-500" />
            <strong>Cast:</strong>&nbsp; {data.Actors}
          </p>
          <p className="flex items-center">
            <BiCalendarEvent className="mr-2 text-red-500" />
            <strong>Released:</strong>&nbsp; {data.Released}
          </p>
          <p className="flex items-center">
            <MdLanguage className="mr-2 text-purple-500" />
            <strong>Language:</strong>&nbsp; {data.Language}
          </p>
          <p className="flex items-center">
            <FaStar className="mr-2 text-yellow-500" />
            <strong>IMDB Rating:</strong>&nbsp; {data.imdbRating}
          </p>
          <p className="flex items-center">
            <BsClockFill className="mr-2 text-orange-500" />
            <strong>Runtime:</strong>&nbsp; {data.Runtime}
          </p>
          <p className="flex items-center">
            <BsAward className="mr-2 text-pink-500" />
            <strong>Awards:</strong>&nbsp; {data.Awards}
          </p>
          <p className="flex items-start mb-2">
            <MdOutlineDescription className="mr-2 text-cyan-500" />
            <strong>Plot:</strong>&nbsp; {data.Plot}
          </p>
        </div>
        <button
          ref={buttonRef}
          onClick={downloadImage}
          className="block mx-auto mt-6 bg-purple-500 text-white px-6 py-2 rounded-lg shadow hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-opacity duration-300"
        >
          Download as Image
        </button>
      </div>
    </div>
  );
};

export default MovieCard;