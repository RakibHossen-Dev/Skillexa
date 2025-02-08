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
import CourseDetails from "@/pages/CourseDetails";
import AllCourse from "@/pages/AllCourse";
import AdminAllCoures from "@/pages/dashboard/admin/AdminAllCoures";
import AdminAllStudents from "@/pages/dashboard/admin/AdminAllStudents";
import AdminAllInstructor from "@/pages/dashboard/admin/AdminAllInstructor";

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
        path: "/courseDetails/:id",
        element: <CourseDetails></CourseDetails>,
      },
      {
        path: "/signin",
        element: <Signin></Signin>,
      },
      {
        path: "/allCourse",
        element: <AllCourse></AllCourse>,
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
        path: "adminAllcourses",
        element: <AdminAllCoures></AdminAllCoures>,
      },
      {
        path: "adminAllstudents",
        element: <AdminAllStudents></AdminAllStudents>,
      },
      {
        path: "adminAllinstructor",
        element: <AdminAllInstructor></AdminAllInstructor>,
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
