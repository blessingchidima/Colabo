
import {createBrowserRouter} from "react-router-dom"
import Layout from "../Components/Common/Layout";
import Register from "../pages/Auth/Register";
import Sigin from "../pages/Auth/Sigin";
import HomeScreen from "../pages/HomeScreen";




export const mainRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,

    children: [
   

      {
        path: "/register",
        element: < Register/>,
      },
      {
        path: "/signin",
        element: < Sigin/>,
      },
      {
        path:"/home",
        element: <HomeScreen/>
      }
   
    
    
     
    ],
  },
]);
