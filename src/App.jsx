import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import AllCountriesPage from "./pages/AllCountriesPage";
import FlagQuizPage from "./pages/FlagQuizPage";
import CapitalQuizPage from "./pages/CapitalQuizPage";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "countries",
        element: <AllCountriesPage />,
      },
      {
        path: "flag-quiz",
        element: <FlagQuizPage />,
      },
      {
        path: "capital-quiz",
        element: <CapitalQuizPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
