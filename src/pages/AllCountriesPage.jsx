import { useState } from "react";
import HomeButton from "../components/HomeButton";
import { useGetAllCountries } from "../useQueryHooks";
import Loading from "../components/Loading";
import CountriesList from "../components/CountriesList";
import ContinentsButtons from "../components/ContinentsButtons";
import ShowContinentsButton from "../components/ShowContinentsButton";
import QuizStart from "../components/QuizStart";
import ErrorPage from "./ErrorPage";

const AllCountriesPage = () => {
  const { data, isLoading, isError } = useGetAllCountries();
  const [continent, setContinent] = useState("");

  if (isError) {
    return (
      <div className="mt-16">
        <h1 className="text-xl sm:text-3xl text-center">
          Sorry, there was an error...
        </h1>
        <div className="text-center">
          <HomeButton />
        </div>
      </div>
    );
  }

  if (isLoading) return <Loading />;

  return (
    <div>
      <HomeButton />
      {continent === "" ? (
        <ContinentsButtons setContinent={setContinent} continent={continent} />
      ) : (
        <ShowContinentsButton setContinent={setContinent} />
      )}
      {continent !== "All" ? (
        <h2 className=" text-center block tracking-widest text-3xl uppercase font-bold    rounded-full">
          {continent}
        </h2>
      ) : (
        <h2 className=" text-center tracking-widest text-3xl uppercase font-bold  rounded-full">
          All Countries
        </h2>
      )}
      {continent === "" ? (
        <QuizStart />
      ) : (
        <CountriesList countries={data.data} continent={continent} />
      )}
    </div>
  );
};

export default AllCountriesPage;
