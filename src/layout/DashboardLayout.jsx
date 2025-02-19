import { useState } from "react";
import {
  FiMenu,
  FiX,
  FiHome,
  FiBook,
  FiUsers,
  FiSettings,
  FiLogOut,
  FiPlusCircle,
  FiUser,
  FiMoon,
  FiBell,
  FiSearch,
} from "react-icons/fi";
import { FaChalkboardTeacher, FaUserGraduate } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import { MdSpaceDashboard } from "react-icons/md";
// import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";
import { Outlet, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import useUserRole from "@/hooks/useUserRole";
import useAuth from "@/hooks/useAuth";

const DashboardLayout = () => {
  const { user, logOut } = useAuth();
  const [userRole] = useUserRole();

  // State to manage sidebar visibility
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();
  // Function to toggle sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleLogout = () => {
    logOut();
    navigate("/signin");
    toast.success("Logout Successful");
  };
  return (
    <div className="flex h-screen font-quicksand ">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 bg-blue-800 text-white z-50 w-64 p-4 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-300 ease-in-out`}
      >
        {/* Sidebar Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="lg:text-4xl text-3xl font-bold ml-3">Skillexa</h1>

          {/* Close Button for Mobile */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-blue-700"
            onClick={toggleSidebar}
          >
            <FiX size={24} />
          </button>
        </div>

        {/* Sidebar Links */}
        <ul className="space-y-3">
          {userRole === "instructor" && (
            <>
              <Link to="/dashboard/instructor">
                <li className="flex items-center space-x-2 p-3 mb-1  rounded-lg hover:bg-blue-700 cursor-pointer">
                  <FiHome size={20} />
                  <span>Dashboard</span>
                </li>
              </Link>
              <Link to="/dashboard/addCourse">
                <li className="flex items-center space-x-2 p-3  mb-1 rounded-lg hover:bg-blue-700 cursor-pointer">
                  <FiPlusCircle size={20} />
                  <span>Add Course</span>
                </li>
              </Link>

              <Link to="/dashboard/courses">
                <li className="flex items-center space-x-2 p-3  mb-1 rounded-lg hover:bg-blue-700 cursor-pointer">
                  <FiBook size={20} />
                  <span>Courses</span>
                </li>
              </Link>
              <Link to="/dashboard/students">
                <li className="flex items-center space-x-2 p-3  mb-1 rounded-lg hover:bg-blue-700 cursor-pointer">
                  <FiUsers size={20} />
                  <span>Students</span>
                </li>
              </Link>
            </>
          )}
          {userRole === "student" && (
            <>
              <Link to="/dashboard/studentDashboard">
                <li className="flex items-center space-x-2 p-3 mb-1  rounded-lg hover:bg-blue-700 cursor-pointer">
                  <MdSpaceDashboard size={20} />
                  <span>Dashboard</span>
                </li>
              </Link>
              <Link to="/dashboard/myCourse">
                <li className="flex items-center space-x-2 p-3  mb-1 rounded-lg hover:bg-blue-700 cursor-pointer">
                  <FiBook size={20} />
                  <span> My Courses</span>
                </li>
              </Link>
            </>
          )}

          {userRole === "admin" && (
            <>
              <Link to="/dashboard/admintDashboard">
                <li className="flex items-center space-x-2 p-3 mb-1  rounded-lg hover:bg-blue-700 cursor-pointer">
                  <MdSpaceDashboard size={20} />
                  <span>Dashboard</span>
                </li>
              </Link>
              <Link to="/dashboard/adminAllcourses">
                <li className="flex items-center space-x-2 p-3  mb-1 rounded-lg hover:bg-blue-700 cursor-pointer">
                  <FiBook size={20} />
                  <span> All Courses</span>
                </li>
              </Link>
              <Link to="/dashboard/adminAllstudents">
                <li className="flex items-center space-x-2 p-3  mb-1 rounded-lg hover:bg-blue-700 cursor-pointer">
                  <FaUserGraduate size={20} />
                  <span>All Students</span>
                </li>
              </Link>
              <Link to="/dashboard/adminAllinstructor">
                <li className="flex items-center space-x-2 p-3 mb-1 rounded-lg hover:bg-blue-700 cursor-pointer">
                  <FaChalkboardTeacher size={20} />
                  <span>All Instructors</span>
                </li>
              </Link>
            </>
          )}

          <Link to="/dashboard/profile">
            <li className="flex items-center space-x-2 p-3  rounded-lg hover:bg-blue-700 cursor-pointer">
              <FiUser size={20} />
              <span>Profile</span>
            </li>
          </Link>
          <li
            onClick={handleLogout}
            className="flex items-center space-x-2 p-3  rounded-lg hover:bg-blue-700 cursor-pointer"
          >
            <FiLogOut size={20} />
            <span>Logout</span>
          </li>
          <hr />
          <Link to="/">
            <li className="flex items-center space-x-2 p-3 mt-1 rounded-lg hover:bg-blue-700 cursor-pointer">
              <IoHomeOutline size={20} />
              <span>Home</span>
            </li>
          </Link>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-gray-100 min-h-screen md:ml-64">
        {/* Header with Toggle Button */}
        <div>
          <div className=" hidden md:flex lg:justify-between md:justify-end items-center px-10 py-4 bg-white shadow-md">
            <div className="lg:flex items-center md:hidden border border-gray-300 rounded-lg px-3 py-2 w-80">
              <FiSearch
                className="text-gray-400 mr-2 hidden lg:block"
                size={18}
              />
              <input
                type="text"
                placeholder="Search or type command..."
                className="w-full outline-none text-gray-700"
              />
            </div>
            {/* Icons & Profile */}
            <div className="flex  items-center space-x-6">
              <FiMoon className="text-gray-600 cursor-pointer" size={20} />
              <div className="relative">
                <FiBell className="text-gray-600 cursor-pointer" size={20} />
                <span className="absolute top-0 right-0 bg-orange-500 w-2 h-2 rounded-full"></span>
              </div>
              <div className="flex items-center space-x-2 cursor-pointer">
                <img
                  src={user?.photoURL}
                  alt="User"
                  className="w-10 h-10 rounded-full border-2 border-blue-700"
                />
                <span className="text-gray-700 font-medium">
                  {user?.displayName}
                </span>
              </div>
            </div>
          </div>
          {/* <div className="p-4 hidden md:flex justify-end items-end bg-white shadow-md">
            <h1 className="text-2xl font-semibold mr-3 mb-1.5">
              Hey, {user?.displayName}
            </h1>
            <Link to="/dashboard/profile">
              <img
                className="w-12  rounded-full border-2 border-blue-700  h-12"
                src={user?.photoURL}
                alt=""
              />
            </Link>
          </div> */}
          <div className="md:hidden flex items-center justify-between  p-4 bg-white shadow-md">
            <button
              className="md:hidden p-2 bg-blue-600 text-white rounded-lg"
              onClick={toggleSidebar}
            >
              <FiMenu size={24} />
            </button>
            <div className="flex items-center gap-3">
              <FiMoon className="text-gray-600 cursor-pointer" size={20} />
              <div className="relative">
                <FiBell className="text-gray-600 cursor-pointer" size={20} />
                <span className="absolute top-0 right-0 bg-orange-500 w-2 h-2 rounded-full"></span>
              </div>

              <Link to="/dashboard/profile">
                <img
                  className="w-12  rounded-full border-2 border-blue-700  h-12"
                  src={user?.photoURL}
                  alt=""
                />
              </Link>
            </div>
          </div>
        </div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashboardLayout;
