import logo from "../assets/skillexa.png";

import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { GrCart } from "react-icons/gr";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import useAuth from "../hooks/useAuth";
import { LuLayoutDashboard } from "react-icons/lu";
import { IoNotificationsOutline } from "react-icons/io5";
import technology from "../assets/categoryImages/technology.png";
import contentCreation from "../assets/categoryImages/content-creation.png";
import business from "../assets/categoryImages/business.png";
import coaching from "../assets/categoryImages/coaching.png";
import languageLearning from "../assets/categoryImages/languageLearning.png";
import teaching from "../assets/categoryImages/teaching.png";
import passiveIcome from "../assets/categoryImages/passive-income.png";
import photoGraphy from "../assets/categoryImages/photography.png";
import useUserRole from "@/hooks/useUserRole";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
// Hello
const Navbar = () => {
  const { user } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const [open, setOpen] = useState(false);
  // console.log(user);
  const dropdownRef = useRef(null);
  const [userRole] = useUserRole();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setOpen(false); // Close the sidebar when screen size is `lg` or larger
      }
    };

    window.addEventListener("resize", handleResize);

    // Initial check on component mount
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const categories = [
    { name: "Technology", image: technology },
    { name: "Content Creation", image: contentCreation },
    { name: "Online Business", image: business },
    { name: "Coaching", image: coaching },
    { name: "Language Learning", image: languageLearning },
    { name: "Teaching", image: teaching },
    { name: "Passive Income", image: passiveIcome },
    { name: "Photo Graphy", image: photoGraphy },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCourses, setFilteredCourses] = useState([]);
  const axiosPublic = useAxiosPublic();
  const { data: courses = [], isLoading } = useQuery({
    queryKey: ["allCourse"],
    queryFn: async () => {
      const res = await axiosPublic.get("/allCourses");
      return res.data;
    },
  });

  // Update filteredCourses when courses change
  useEffect(() => {
    setFilteredCourses(courses);
  }, [courses]);

  // Search function
  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    console.log(term);
    if (!term.trim()) {
      setFilteredCourses(courses);
    } else {
      const results = courses?.length
        ? courses.filter((course) =>
            course?.courseTitle?.toLowerCase().includes(term.toLowerCase())
          )
        : [];
      setFilteredCourses(results);
    }
  };

  // console.log("NavberCourese", filteredCourses);
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsNotificationOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  const notifications = [
    { id: 1, message: "New course added!" },
    { id: 2, message: "Your payment was successful" },
    { id: 3, message: "New student enrolled in your course" },
  ];
  return (
    <div className="shadow-sm border-b ">
      <nav className="w-11/12 mx-auto  flex gap-4 justify-between items-center py-2 relative">
        {/* Left Section */}
        <div className="flex  items-center gap-5">
          <Link to="/">
            <img className=" w-40 mb-5 " src={logo} alt="Logo" />
          </Link>

          {/* Learn Dropdown */}
          <div className="hidden lg:block">
            <div className="relative z-20">
              <button
                className="flex items-center rounded-lg gap-2 py-2 px-4 border text-blue-700 border-blue-700 cursor-pointer"
                onClick={toggleMenu}
              >
                <p>Learn</p>
                <IoIosArrowDown className="text-blue-700" />
              </button>
              {isOpen && (
                <div className="absolute left-0 mt-6 bg-white border rounded-md shadow-lg p-3 w-[550px]">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                    {categories.map((category, index) => (
                      <Link to={`/browseCourses/${category.name}`} key={index}>
                        <div className="flex flex-col justify-center items-center gap-2 border rounded-md p-2 shadow-md hover:shadow-xl transition-all duration-300">
                          <img
                            className="h-[80px] object-cover"
                            src={category.image}
                            alt={category.name}
                          />
                          <h3 className="text-blue-700 font-semibold">
                            {category.name}
                          </h3>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Search Bar */}
          <div className="hidden lg:block">
            <div className="border rounded-lg border-blue-700 py-1 flex items-center px-3 relative shadow-lg bg-white">
              <input
                className="focus:outline-none w-96 px-2 py-1 text-gray-700 rounded-lg"
                type="search"
                placeholder="Search Any Course..."
                value={searchTerm}
                onChange={handleSearch}
                style={{
                  WebkitAppearance: "none",
                  MozAppearance: "none",
                  appearance: "none",
                }}
              />
              <button className="bg-blue-700 hover:bg-blue-800 transition-all p-2 rounded-lg ml-2">
                <CiSearch className="text-white text-xl" />
              </button>
              {searchTerm && filteredCourses.length > 0 && (
                <div className="absolute left-0 top-full mt-6 w-full z-50 bg-white text-black rounded-sm shadow-xl max-h-60 overflow-auto border border-gray-200">
                  {filteredCourses.map((course) => (
                    <Link
                      to={`/courseDetails/${course._id}`}
                      key={course._id}
                      className="flex justify-between items-center p-3 hover:bg-gray-100 transition-all border-b"
                    >
                      <span className="font-medium text-gray-800">
                        {course.courseTitle}
                      </span>
                      <span className="text-blue-600 hover:text-blue-800 transition-all">
                        View
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="hidden lg:flex items-center gap-4">
          <div className="relative" ref={dropdownRef}>
            {/* Notification Icon */}
            <div
              className="relative flex items-center cursor-pointer"
              onClick={() => setIsNotificationOpen(!isNotificationOpen)}
            >
              <IoNotificationsOutline className="text-blue-700 text-2xl hover:text-blue-900 transition duration-300" />
              {notifications.length > 0 && (
                <span className="absolute text-xs px-1.5 -top-2 left-3 text-white bg-red-500 rounded-full animate-bounce">
                  {notifications.length}
                </span>
              )}
            </div>

            {/* Notification Dropdown */}
            {isNotificationOpen && (
              <div className="absolute right-0 mt-3 w-72 bg-white border border-gray-200 shadow-xl rounded-lg overflow-hidden z-50 transition-all duration-300 ease-in-out">
                <div className="p-4 text-gray-800 font-semibold border-b flex justify-between items-center bg-gray-100">
                  <span>Notifications</span>
                  <button
                    className="text-gray-500 text-sm hover:text-red-500 transition"
                    onClick={() => setIsNotificationOpen(false)}
                  >
                    ✖
                  </button>
                </div>
                <div className="max-h-60 overflow-y-auto">
                  {notifications.length > 0 ? (
                    notifications.map((notif) => (
                      <div
                        key={notif.id}
                        className="p-4 text-sm text-gray-800 hover:bg-gray-50 transition flex items-center gap-3"
                      >
                        <span className="h-2 w-2 bg-green-500 rounded-full"></span>
                        {notif.message}
                      </div>
                    ))
                  ) : (
                    <p className="text-center p-4 text-gray-500">
                      No new notifications
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Sign In/Sign Up */}
          {user ? (
            <>
              {userRole === "instructor" && (
                <Link to="/dashboard/instructor">
                  <button className="border my-3 py-2 px-6 border-blue-600 bg-blue-600 text-white  flex items-center justify-center rounded-lg hover:bg-blue-700 transition">
                    <LuLayoutDashboard className="text-xl mr-2" />
                    <span className="font-medium">Dashboard</span>
                  </button>
                </Link>
              )}
              {userRole === "student" && (
                <Link to="/dashboard/studentDashboard">
                  <button className="border my-3 py-2 px-6 border-blue-600 bg-blue-600 text-white  flex items-center justify-center rounded-lg hover:bg-blue-700 transition">
                    <LuLayoutDashboard className="text-xl mr-2" />
                    <span className="font-medium">Dashboard</span>
                  </button>
                </Link>
              )}
              {userRole === "admin" && (
                <Link to="/dashboard/admintDashboard">
                  <button className="border my-3 py-2 px-6 border-blue-600 bg-blue-600 text-white  flex items-center justify-center rounded-lg hover:bg-blue-700 transition">
                    <LuLayoutDashboard className="text-xl mr-2" />
                    <span className="font-medium">Dashboard</span>
                  </button>
                </Link>
              )}
            </>
          ) : (
            <>
              <Link
                to="/signin"
                className="text-blue-700 border border-blue-700 py-2 px-5 rounded-lg"
              >
                Sign in
              </Link>
              <Link
                to="/signup"
                className="text-white bg-blue-700 py-2 font-bold px-5 rounded-lg"
              >
                Sign up
              </Link>
            </>
          )}
        </div>

        {/* Mobile Section */}
        <div className="lg:hidden flex items-center gap-2">
          {/* Search Icon */}
          <button onClick={() => setOpen(!open)}>
            <CiSearch className="text-blue-700 text-2xl" />
          </button>

          {/* Cart */}
          <div className="relative">
            <div>
              <IoNotificationsOutline className="text-blue-700 text-2xl cursor-pointer" />
              <span className="rounded-full absolute text-[12px] px-1.5 cursor-pointer -top-2 left-2.5 text-white bg-red-500 ">
                1
              </span>
            </div>
          </div>

          {/* Hamburger Menu */}
          <button onClick={() => setOpen(!open)}>
            <HiOutlineBars3BottomRight className="text-blue-700 text-3xl" />
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 right-0 h-full w-9/12 md:w-80 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <ul className="flex flex-col gap-4 p-4">
            <li className="mt-10">
              <div className="border relative border-blue-700 py-1 flex justify-between items-center px-2">
                <input
                  className="focus:outline-none w-96"
                  type="search"
                  placeholder="Search Any Course..."
                  value={searchTerm}
                  onChange={handleSearch}
                  style={{
                    WebkitAppearance: "none",
                    MozAppearance: "none",
                    appearance: "none",
                  }}
                />
                <button className="bg-blue-700 p-2">
                  <CiSearch className="text-white" />
                </button>
                {searchTerm && filteredCourses.length > 0 && (
                  <div className="absolute left-0 top-full mt-6 w-full z-50 bg-white text-black rounded-sm shadow-xl max-h-60 overflow-auto border border-gray-200">
                    {filteredCourses.map((course) => (
                      <Link
                        to={`/courseDetails/${course._id}`}
                        key={course._id}
                        className="flex justify-between items-center p-3 hover:bg-gray-100 transition-all border-b"
                      >
                        <span className="font-medium text-gray-800">
                          {course.courseTitle}
                        </span>
                        <span className="text-blue-600 hover:text-blue-800 transition-all">
                          View
                        </span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </li>
            {/* <li>
              <button className="text-blue-700">Learn</button>
            </li> */}

            {user ? (
              <>
                {userRole === "instructor" && (
                  <Link to="/dashboard/instructor">
                    <button className="border my-3 py-2 px-6 border-blue-600 w-full bg-blue-600 text-white  flex items-center justify-center rounded-lg hover:bg-blue-700 transition">
                      <LuLayoutDashboard className="text-xl mr-2" />
                      <span className="font-medium">Dashboard</span>
                    </button>
                  </Link>
                )}
                {userRole === "student" && (
                  <Link to="/dashboard/studentDashboard">
                    <button className="border my-3 py-2 px-6 border-blue-600  w-full bg-blue-600 text-white  flex items-center justify-center rounded-lg hover:bg-blue-700 transition">
                      <LuLayoutDashboard className="text-xl mr-2" />
                      <span className="font-medium">Dashboard</span>
                    </button>
                  </Link>
                )}
                {userRole === "admin" && (
                  <Link to="/dashboard/admintDashboard">
                    <button className="border my-3 py-2 px-6 border-blue-600  w-full bg-blue-600 text-white  flex items-center justify-center rounded-lg hover:bg-blue-700 transition">
                      <LuLayoutDashboard className="text-xl mr-2" />
                      <span className="font-medium">Dashboard</span>
                    </button>
                  </Link>
                )}
              </>
            ) : (
              <>
                <li>
                  <Link
                    to="/signin"
                    className="text-blue-700 border border-blue-700 py-2 px-4 block text-center"
                  >
                    Sign in
                  </Link>
                </li>
                <li>
                  <Link
                    to="/signup"
                    className="text-white bg-blue-700 py-2 px-4 block text-center"
                  >
                    Sign up
                  </Link>
                </li>
              </>
            )}
          </ul>
          <button
            className="absolute top-4 right-4 text-3xl text-blue-700"
            onClick={() => setOpen(false)}
          >
            &times;
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
