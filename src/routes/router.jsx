import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import MainLayout from "../layout/MainLayout";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import BlogDetails from "../pages/BlogDetails";
import DashboardLayout from "../layout/DashboardLayout";
import Dashboard from "../pages/dashboard/instructor/Dashboard";
import AddCourse from "../pages/dashboard/instructor/AddCourse";
import Students from "../pages/dashboard/instructor/Students";
import Courses from "../pages/dashboard/instructor/Courses";
import Profile from "../pages/dashboard/instructor/Profile";

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
    children: [
      {
        path: "instructor",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "addCourse",
        element: <AddCourse></AddCourse>,
      },
      {
        path: "courses",
        element: <Courses></Courses>,
      },
      {
        path: "students",
        element: <Students></Students>,
      },
      {
        path: "profile",
        element: <Profile></Profile>,
      },
    ],
  },
]);

export default router;
