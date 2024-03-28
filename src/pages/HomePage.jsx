import React from "react";
import { Link } from "react-router-dom";
import ShinyButton from "../components/ShinyButton";

const HomePage = () => {
  return (
    <main>
      <div className="flex flex-col justify-center text-2xl sm:text-3xl md:text-4xl  mt-20 font-semibold">
        <h1 className="text-center mb-2 ">Welcome to </h1>
        <h1 className="font-bold uppercase text-center">
          <span className="mr-2 text-red-500">Flags</span>
          <span className="mr-2 text-yellow-500">of</span>
          <span className="mr-2 text-blue-500">the</span>
          <span className=" text-green-500">world</span>
        </h1>
      </div>
      <div className="flex flex-col justify-center gap-y-8 mt-8 text-center text-cyan-950 capitalize">
        <Link to="/countries">
          <h2 className="text-lg font-semibold bg-gradient-to-b from-green-600 via-green-300 to-green-600  rounded-full p-2 shadow-md transition duration-300  mx-auto hover:shadow-xl hover:text-white">
            see all countries
          </h2>
        </Link>
        <Link to="/capital-quiz">
          <h2 className="text-lg font-semibold bg-gradient-to-b from-yellow-500 via-yellow-200 to-yellow-500  rounded-full p-2 shadow-md transition duration-300  mx-auto hover:shadow-xl hover:text-white">
            capital quiz
          </h2>
        </Link>

        <Link to="/flag-quiz">
          <h2 className="text-lg font-semibold bg-gradient-to-b from-blue-600 via-blue-300 to-blue-600  rounded-full p-2 shadow-md transition duration-300  mx-auto hover:shadow-xl hover:text-white">
            flag quiz
          </h2>
        </Link>
      </div>
    </main>
  );
};

export default HomePage;
