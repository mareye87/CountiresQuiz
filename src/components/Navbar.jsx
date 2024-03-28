import { Link } from "react-router-dom";
import { TfiMenu } from "react-icons/tfi";
import { PiGlobeLight } from "react-icons/pi";
import { FcGlobe } from "react-icons/fc";
import { useState } from "react";
import Aside from "./Aside";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [showAside, setShowAside] = useState(false);

  return (
    <nav className="fixed w-full bg-gradient-to-b from-cyan-800 from-5%  via-cyan-950 via-20% to-cyan-800 to-95% text-slate-700 border-b  border-black z-20 ">
      <div className="flex justify-between items-center px-3 py-2 max-w-3xl mx-auto">
        <Link
          to="/"
          onClick={() => {
            setShowAside(false);
          }}
          className=" pr-16 border-b-2 border-cyan-500 border-dotted"
        >
          <div className="uppercase flex flex-col text-xl font-bold leading-none hover:translate-x-16 transition duration-500">
            <h1 className="text-yellow-500 tracking-tighter">
              <span className="text-blue-500">w</span>
              <span className="text-red-500">o</span>
              <span className="text-purple-500">r</span>
              <span className="text-green-500">l</span>
              <span className="text-yellow-500">d</span>
            </h1>
            <h1 className="text-green-400 tracking-widest">
              <span className="text-red-500">f</span>
              <span className="text-green-500">l</span>
              <span className="text-yellow-500">a</span>
              <span className="text-blue-500">g</span>
              <span className="text-orange-500">s</span>
            </h1>
          </div>
        </Link>

        {showAside ? (
          <IoMdClose
            onClick={() => {
              setShowAside(false);
            }}
            className="text-4xl sm:hidden text-white"
          />
        ) : (
          <TfiMenu
            onClick={() => {
              setShowAside(true);
            }}
            className="text-4xl sm:hidden text-white"
          />
        )}

        <div
          className={` absolute -left-full top-14 w-full  transition duration-300 ${
            showAside && "translate-x-full "
          }`}
        >
          <Aside setShowAside={setShowAside} />
        </div>
        <div className="hidden sm:flex items-center gap-x-4 ">
          <Link
            to="/countries"
            className="bg-gradient-to-b from-yellow-500 via-yellow-200 to-yellow-500 px-3 pb-[1px]  text-sm rounded-full tracking-wide font-semibold shadow-md hover:scale-105  transition duration-200"
          >
            Learn
          </Link>
          <Link
            to="/flag-quiz"
            className="bg-gradient-to-b from-green-600 via-green-300 to-green-600 px-3 pb-[1px]  text-sm rounded-full tracking-wide font-semibold shadow-md hover:scale-105  transition duration-200"
          >
            Flag Quiz
          </Link>
          <Link
            to="/capital-quiz"
            className="bg-gradient-to-b from-blue-500 via-blue-300 to-blue-500 px-3 pb-[1px]  text-sm rounded-full tracking-wide font-semibold shadow-md hover:scale-105 transition-all duration-200 "
          >
            Capital Quiz
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
