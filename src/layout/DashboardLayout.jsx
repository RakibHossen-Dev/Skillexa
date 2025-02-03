import { useState } from "react";
import {
  FiMenu,
  FiX,
  FiHome,
  FiBook,
  FiUsers,
  FiSettings,
  FiLogOut,
} from "react-icons/fi";
import useAuth from "../hooks/useAuth";

const DashboardLayout = () => {
  const { user } = useAuth();
  // State to manage sidebar visibility
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Function to toggle sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className="flex h-screen font-quicksand">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 bg-blue-800 text-white w-64 p-4 transform ${
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
        <ul className="space-y-4">
          <li className="flex items-center space-x-2 p-3 rounded-lg hover:bg-blue-700 cursor-pointer">
            <FiHome size={20} />
            <span>Dashboard</span>
          </li>
          <li className="flex items-center space-x-2 p-3 rounded-lg hover:bg-blue-700 cursor-pointer">
            <FiBook size={20} />
            <span>Courses</span>
          </li>
          <li className="flex items-center space-x-2 p-3 rounded-lg hover:bg-blue-700 cursor-pointer">
            <FiUsers size={20} />
            <span>Students</span>
          </li>
          <li className="flex items-center space-x-2 p-3 rounded-lg hover:bg-blue-700 cursor-pointer">
            <FiSettings size={20} />
            <span>Settings</span>
          </li>
          <li className="flex items-center space-x-2 p-3 rounded-lg hover:bg-blue-700 cursor-pointer">
            <FiLogOut size={20} />
            <span>Logout</span>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-gray-100 min-h-screen md:ml-64">
        {/* Header with Toggle Button */}
        <div className="p-4 hidden md:flex justify-end items-end bg-white shadow-md">
          <h1 className="text-2xl font-semibold mr-3 mb-1.5">
            {user.displayName}
          </h1>
          <img
            className="w-12  rounded-badge border-2 border-blue-700  h-12"
            src={user.photoURL}
            alt=""
          />
        </div>
        <div className="md:hidden flex items-center justify-between  p-4 bg-white shadow-md">
          <button
            className="md:hidden p-2 bg-blue-600 text-white rounded-lg"
            onClick={toggleSidebar}
          >
            <FiMenu size={24} />
          </button>
          <img
            className="w-12  rounded-badge border-2 border-blue-700  h-12"
            src={user.photoURL}
            alt=""
          />
        </div>

        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">Total Courses</h3>
            <p className="text-3xl font-bold text-blue-600 mt-2">12</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">Active Students</h3>
            <p className="text-3xl font-bold text-blue-600 mt-2">356</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">New Signups</h3>
            <p className="text-3xl font-bold text-blue-600 mt-2">22</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
