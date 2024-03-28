import { Link } from "react-router-dom";
import ShinyButton from "./ShinyButton";

const Aside = ({ setShowAside }) => {
  return (
    <div className=" bg-cyan-900 px-6 min-h-screen relative capitalize">
      <div
        onClick={() => {
          setShowAside(false);
        }}
        className="w-full mx-auto flex flex-col justify-center pt-36 text-center gap-y-10 "
      >
        <Link to="/countries">
          <h2 className="text-lg font-semibold bg-gradient-to-b from-green-600 via-green-200 to-green-600  rounded-full p-2 shadow-md transition duration-300  mx-auto hover:shadow-xl hover:text-white">
            See all countries
          </h2>
        </Link>
        <Link to="/capital-quiz">
          <h2 className="text-lg font-semibold bg-gradient-to-b from-yellow-600 via-yellow-200 to-yellow-600  rounded-full p-2 shadow-md transition duration-300  mx-auto hover:shadow-xl hover:text-white">
            capital quiz
          </h2>
        </Link>
        <Link to="/flag-quiz">
          <h2 className="text-lg font-semibold bg-gradient-to-b from-blue-600 via-blue-200 to-blue-600  rounded-full p-2 shadow-md transition duration-300  mx-auto hover:shadow-xl hover:text-white">
            flag quiz
          </h2>
        </Link>
      </div>
    </div>
  );
};

export default Aside;
