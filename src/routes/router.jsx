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
import MyCourse from "@/pages/dashboard/student/MyCourse";
import VideoLessons from "@/pages/dashboard/student/VideoLessons";
import Payments from "@/pages/Payments";
import NotFound from "@/pages/NotFound";
import StudentDashboard from "@/pages/dashboard/student/StudentDashboard";
import AdminDashboard from "@/pages/dashboard/admin/AdminDashboard";
import BrowseCourses from "@/pages/BrowseCourses";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "*",
        element: <NotFound></NotFound>,
      },
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
        path: "/browseCourses/:category",
        element: <BrowseCourses></BrowseCourses>,
      },
      {
        path: "/payment",
        element: (
          <PrivateRoute>
            <Payments></Payments>,
          </PrivateRoute>
        ),
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
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>,
      </PrivateRoute>
    ),
    children: [
      {
        path: "instructor",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "studentDashboard",
        element: <StudentDashboard></StudentDashboard>,
      },
      {
        path: "admintDashboard",
        element: <AdminDashboard></AdminDashboard>,
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
        path: "myCourse",
        element: <MyCourse></MyCourse>,
      },
      {
        path: "videoLessons/:id",
        element: <VideoLessons></VideoLessons>,
      },
      {
        path: "profile",
        element: <Profile></Profile>,
      },
    ],
  },
]);

export default router;
