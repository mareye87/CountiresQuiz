import React from "react";

const ShowContinentsButton = ({ setContinent }) => {
  return (
    <div className="flex items-center justify-center mb-4">
      <button
        onClick={() => {
          setContinent("");
        }}
        className="bg-gradient-to-b from-blue-500 via-blue-300 to-blue-500 px-3 pt-1 pb-[3px] w-full  text-sm rounded-full tracking-wide font-semibold shadow-md uppercase hover:scale-105 transition-all duration-200"
      >
        change continent
      </button>
    </div>
  );
};

export default ShowContinentsButton;
