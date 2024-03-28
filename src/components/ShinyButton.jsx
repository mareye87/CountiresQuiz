import { Link } from "react-router-dom";

const ShinyButton = ({ text, color }) => {
  return (
    <Link to="flag-quiz">
      <h2
        className={`mt-6 text-lg font-semibold bg-gradient-to-b from-${color}-500 via-${color}-200  to-${color}-500 rounded-full p-2 shadow-md mx-auto capitalize transition duration-300 hover:shadow-xl hover:text-white`}
      >
        {text}
      </h2>
    </Link>
  );
};

export default ShinyButton;
