import { createBrowserRouter } from "react-router";
import App from "./App";
import Home from "./Pages/Home/Home.jsx";
import About from "./Pages/About/About.jsx";
import Services from "./Pages/Services/Services.jsx";
import Blogs from "./Pages/Blogs/Blogs.jsx";
import Career from "./Pages/Career/Career.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        path: "",
        Component: Home,
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/services",
        Component: Services,
      },
      {
        path:"/blogs",
        Component: Blogs
      },
      {
        path:"/career",
        Component: Career
      }
    ],
  },
]);
