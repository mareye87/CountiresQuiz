import React from "react";
import HomeButton from "../components/HomeButton";

const ErrorPage = () => {
  return (
    <div className="grid place-items-center bg-slate-200 h-screen">
      <div className="">
        <h1 className="text-xl sm:text-3xl text-center">
          Sorry, there was an error...
        </h1>
        <div className="text-center">
          <HomeButton />
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
