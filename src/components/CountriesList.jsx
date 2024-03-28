import CountryCard from "./CountryCard";

const CountriesList = ({ countries, continent }) => {
  const filteredCountries = countries.filter((country) =>
    country.continents.includes(continent)
  );

  return (
    <div className="my-12 grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {continent === "All"
        ? countries.map((country, index) => {
            return <CountryCard key={index} country={country} />;
          })
        : filteredCountries.map((country, index) => {
            return <CountryCard key={index} country={country} />;
          })}
    </div>
  );
};

export default CountriesList;
