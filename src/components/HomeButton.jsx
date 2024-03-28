import React from "react";
import { Link } from "react-router-dom";
import { FaArrowAltCircleLeft } from "react-icons/fa";

const HomeButton = () => {
  return (
    <button className="my-4 text-white transition duration-200 hover:text-yellow-300 ">
      <Link
        to="/"
        className="bg-cyan-700 flex items-center shadow-md rounded-full"
      >
        <FaArrowAltCircleLeft className=" text-2xl " />
        <h2 className="ml-2 mr-3 mb-[2px] ">Back</h2>
      </Link>
    </button>
  );
};

export default HomeButton;
