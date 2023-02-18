import React from "react";
import Home from "./Home";
import ErrorPage from "./ErrorPage";
import NoMatch from "./NoMatch";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MyDesigns from "./MyDesigns"
import AllDesigns from "./AllDesigns";
import CreateDesign from "./CreateDesign";
import GetSuggestions from "./GetSuggestions";

const routes = [
  {
    path: "*",
    element: <NoMatch />,
  },
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/myDesigns",
    element : <MyDesigns />,
    errorElement : <ErrorPage />,
  },
  {
    path: "/allDesigns",
    element : <AllDesigns />,
    errorElement : <ErrorPage />,
  },
  {
    path : "/createDesign",
    element : <CreateDesign />,
    errorElement : <ErrorPage />,
  },
  {
    path : "/getSuggestions" , 
    element : <GetSuggestions />,
    errorElement : <ErrorPage />,
  }
];
const router = createBrowserRouter(routes);

const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
