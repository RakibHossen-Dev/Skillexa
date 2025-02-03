import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import MainLayout from "../layout/MainLayout";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import BlogDetails from "../pages/BlogDetails";
import DashboardLayout from "../layout/DashboardLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/blogDetails/:id",
        element: <BlogDetails></BlogDetails>,
      },
      {
        path: "/signin",
        element: <Signin></Signin>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout></DashboardLayout>,
  },
]);

export default router;
