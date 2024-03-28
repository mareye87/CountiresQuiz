import React, { useEffect, useState, useRef } from "react";
import { shuffleArray } from "../utils";
import Loading from "./Loading";

const FlagQuizCard = ({ countriesList }) => {
  const [index, setIndex] = useState(-2);
  const [countries, setCountries] = useState(countriesList);
  const [wrongAnswers, setWrongAnswers] = useState(0);
  const [rightAnswers, setRightAnswers] = useState(0);
  const [totalAnswers, setTotalAnswers] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [isSelected, setIsSelected] = useState();
  const [isNext, setIsNext] = useState();
  let level = 3;
  let selectedAnswer;

  const generateAnswers = (idx) => {
    const answersArray = [];
    answersArray.push(countries[idx].name.common);
    let indexesArray = [idx];
    let randomIndex;
    for (let i = 0; i < level; i++) {
      randomIndex = Math.floor(Math.random() * countries.length);
      if (!indexesArray.includes(randomIndex)) {
        answersArray.push(countries[randomIndex].name.common);
      } else {
        level++;
      }
      indexesArray.push(randomIndex);
    }
    return shuffleArray(answersArray);
  };

  useEffect(() => {
    setCountries(shuffleArray(countriesList));
    setIndex(0);
  }, [countries]);

  let answersArray = generateAnswers(index === -2 || index === -1 ? 0 : index);

  useEffect(() => {
    setAnswers(answersArray);
  }, [index]);

  if (index === -1) {
    return (
      <div className="flex flex-col justify-center gap-y-3 text-center my-3 bg-purple-700 text-white rounded-lg shadow-lg p-10">
        <h2 className="text-3xl">Finished !</h2>
        <h3 className="text-2xl">
          Your score: <span className="ml-1 font-bold">{rightAnswers}</span> out
          of
          <span className="ml-1 font-bold">{totalAnswers}</span>
        </h3>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between  my-8 bg-gradient-to-b from-yellow-500 via-yellow-300 to-yellow-500 px-3 pt-1 pb-[3px]  w-full  text-sm rounded-full tracking-wide font-semibold shadow-md uppercase">
        <h3 className="text-red-500 font-bold">
          Wrong: <span className="text-lg">{wrongAnswers}</span>{" "}
        </h3>
        <h3 className="text-slate-600 ">
          Total <span className="text-lg">{totalAnswers}</span>
        </h3>
        <h3 className="text-green-600 font-bold ">
          right: <span className="text-lg">{rightAnswers}</span>{" "}
        </h3>
      </div>
      <div className="grid sm:grid-cols-2 gap-4 ">
        <div className="">
          {index === -2 ? (
            <Loading />
          ) : (
            <img
              className=" h-40 sm:h-full sm:max-h-64 mx-auto sm:ml-0 "
              src={countries[index].flags.svg}
              alt={countries[index].flags.alt}
            />
          )}
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-6 sm:gap-4 text-center p-2  ">
          {answers.map((answer) => {
            let rightAnswer = countries[index].name.common;

            return (
              <button
                disabled={isSelected}
                onClick={(e) => {
                  selectedAnswer = e.target;
                  if (answer === rightAnswer) {
                    setRightAnswers(rightAnswers + 1);
                    setIsSelected(true);
                  } else {
                    setWrongAnswers(wrongAnswers + 1);
                    selectedAnswer.style.background = "red";
                    setTimeout(() => {
                      selectedAnswer.style.background = null;
                      setIsSelected(true);
                    }, 1500);
                  }
                  setIsNext(true);
                }}
                key={answer}
                className={`${
                  answer === rightAnswer && isNext && "bg-green-500"
                } py-4 shadow-md rounded-md font-semibold sm:text-lg border-white border-t `}
              >
                {answer}
              </button>
            );
          })}
        </div>
      </div>
      <div className="flex mt-8 justify-center">
        {isSelected && (
          <button
            disabled={!isSelected}
            onClick={(e) => {
              if (index == countries.length - 1) {
                setIndex(-1);
                return;
              }
              setIsSelected(false);
              setIsNext(false);
              setTotalAnswers(totalAnswers + 1);
              setIndex((prev) => prev + 1);
            }}
            className=" bg-gradient-to-b from-yellow-500 via-yellow-300 to-yellow-500 px-3 pt-1 pb-[3px]  w-full  text-slate-700 rounded-full tracking-wider font-bold shadow-md uppercase disabled:bg-gray-300"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default FlagQuizCard;
