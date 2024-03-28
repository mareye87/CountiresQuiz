import React, { useState } from "react";
import HomeButton from "../components/HomeButton";
import ContinentsButtons from "../components/ContinentsButtons";
import ShowContinentsButton from "../components/ShowContinentsButton";
import FlagQuiz from "../components/FlagQuiz";
import QuizStart from "../components/QuizStart";

const FlagQuizPage = () => {
  const [continent, setContinent] = useState("");

  return (
    <div className="max-h-screen">
      <HomeButton />
      {continent === "" ? (
        <ContinentsButtons setContinent={setContinent} continent={continent} />
      ) : (
        <ShowContinentsButton setContinent={setContinent} />
      )}
      {continent === "" ? <QuizStart /> : <FlagQuiz continent={continent} />}
    </div>
  );
};

export default FlagQuizPage;
