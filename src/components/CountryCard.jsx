import React from "react";

const CountryCard = ({ country }) => {
  return (
    <div className="flex flex-col justify-between bg-white rounded-lg  shadow-md hover:shadow-lg ">
      <img
        src={country.flags.svg}
        alt={country.flags.alt}
        className="shadow-lg rounded-md"
      />
      <div className="py-2">
        <h1 className="text-center text-xl font-semibold">
          {country.name.common}
        </h1>
        <h1 className="text-center mt-3">
          Capital: <span className="font-semibold">{country.capital}</span>
        </h1>
      </div>
    </div>
  );
};

export default CountryCard;
