import { createBrowserRouter } from "react-router-dom";
import Layout from "../Components/Common/Layout";
import Register from "../pages/Auth/Register";
import Sigin from "../pages/Auth/Sigin";
import HomeScreen from "../pages/HomeScreen";
import SignLayout from "../Components/Common/SignLayout";

export const mainRouter = createBrowserRouter([
  {
    path: "/",
    element: <SignLayout />,

    children: [
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/signin",
        element: <Sigin />,
      },
    ],
  },
  {
    element: <Layout />,
    path: "/home",
    children: [
      {
        index: true,
        element: <HomeScreen />
      },
    ],
  },
]);
