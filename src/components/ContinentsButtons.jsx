import ShinyButton from "./ShinyButton";

const ContinentsButtons = ({ setContinent, continent }) => {
  return (
    <div className="grid gap-x-4 gap-y-6 grid-cols-2 sm:grid-cols-3 my-4 bg-[rgba(255,255,255,0.3)] shadow-md rounded-lg p-4 border-t border-white">
      <button
        onClick={() => {
          setContinent("Europe");
        }}
        className="bg-gradient-to-b from-blue-500 via-blue-300 to-blue-500 px-3 pb-[1px]  text-sm rounded-full tracking-wide font-semibold shadow-md hover:scale-105 transition-all duration-200"
      >
        Europe
      </button>

      <button
        onClick={() => {
          setContinent("Asia");
        }}
        className="bg-gradient-to-b from-red-500 via-red-300 to-red-500 px-3 pb-[1px]  text-sm rounded-full tracking-wide font-semibold shadow-md hover:scale-105 transition-all duration-200"
      >
        Asia
      </button>
      <button
        onClick={() => {
          setContinent("Africa");
        }}
        className="bg-gradient-to-b from-yellow-600 via-yellow-300 to-yellow-600 px-3 pb-[1px]  text-sm rounded-full tracking-wide font-semibold shadow-md hover:scale-105 transition-all duration-200"
      >
        Africa
      </button>
      <button
        onClick={() => {
          setContinent("Oceania");
        }}
        className="bg-gradient-to-b from-green-500 via-green-300 to-green-500 px-3 pb-[1px]  text-sm rounded-full tracking-wide font-semibold shadow-md hover:scale-105 transition-all duration-200"
      >
        Oceania
      </button>
      <button
        onClick={() => {
          setContinent("North America");
        }}
        className="bg-gradient-to-b from-purple-500 via-purple-300 to-purple-500 px-3 pb-[1px]  text-sm rounded-full tracking-wide font-semibold shadow-md hover:scale-105 transition-all duration-200"
      >
        North America
      </button>
      <button
        onClick={() => {
          setContinent("South America");
        }}
        className="bg-gradient-to-b from-pink-500 via-pink-300 to-pink-500 px-3 pb-[1px]  text-sm rounded-full tracking-wide font-semibold shadow-md hover:scale-105 transition-all duration-200"
      >
        South America
      </button>
      <button
        onClick={() => {
          setContinent("All");
        }}
        className="bg-gradient-to-b from-yellow-400 via-yellow-100 to-yellow-400 px-3 mx-6 pb-[1px]  text-sm rounded-full tracking-wide font-semibold shadow-md hover:scale-105 transition-all duration-200 col-span-2 sm:col-span-3 "
      >
        All Countries
      </button>
    </div>
  );
};

export default ContinentsButtons;
