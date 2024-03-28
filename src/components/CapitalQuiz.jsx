import { useGetCountriesContinent } from "../useQueryHooks";
import Loading from "./Loading";

import CapitalQuizCard from "./CapitalQuizCard";
import ErrorPage from "../pages/ErrorPage";

const CapitalQuiz = ({ continent }) => {
  const { data, isError, isLoading } = useGetCountriesContinent(continent);

  if (isError)
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
  if (isLoading) return <Loading />;

  return <>{data && <CapitalQuizCard countriesList={data.data} />}</>;
};

export default CapitalQuiz;
