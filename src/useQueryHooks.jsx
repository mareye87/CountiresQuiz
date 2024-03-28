import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useGetAllCountries = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["countries"],
    queryFn: async () => {
      const { data } = await axios("https://restcountries.com/v3.1/all");
      return { data };
    },
  });
  return { data, isLoading, isError };
};

export const useGetCountriesContinent = (continent) => {
  const url =
    continent !== "All"
      ? `https://restcountries.com/v3.1/region/${continent}`
      : "https://restcountries.com/v3.1/all";
  const { data, isLoading, isError } = useQuery({
    queryKey: ["quiz-countries", continent],
    queryFn: async () => {
      const { data } = await axios(url);
      return { data };
    },
  });
  return { data, isLoading, isError };
};
