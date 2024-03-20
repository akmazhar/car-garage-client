import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Error from "../Error/Error";
import Service from "../Pages/Service/Service";
import About from "../Pages/About/About";
import Blog from "../Pages/Blog/Blog";
import Contact from "../Pages/Contact/Contact";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement : <Error></Error>,
      children: [
        {
            path: "/",
            element: <Home></Home>,
        },
        {
          path: "contact",
          element: <Contact></Contact>,
      },
      {
        path: "blog",
        element: <Blog></Blog>,
    },
    {
      path: "about",
      element: <About></About>,
  },        
  {
    path: "service",
    element: <Service></Service>,
},
{
  path: "login",
  element: <Login></Login>,
},
{
  path: "signup",
  element: <SignUp></SignUp>,
},
      ]
    },
  ]);

export default router;