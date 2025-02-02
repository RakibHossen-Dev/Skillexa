import logo from "../assets/skillexa.png";

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { GrCart } from "react-icons/gr";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  // Close sidebar on larger screen sizes
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
            <div className="flex items-center gap-2 py-2 px-4 border text-blue-700 border-blue-700 cursor-pointer">
              <p>Learn</p>
              <IoIosArrowDown className="text-blue-700" />
            </div>
          </div>

          {/* Search Bar */}
          <div className="hidden lg:block">
            <div className="border border-blue-700 py-1 flex items-center px-2">
              <input
                className="focus:outline-none w-96"
                type="search"
                placeholder="Search Any Course"
                style={{
                  WebkitAppearance: "none",
                  MozAppearance: "none",
                  appearance: "none",
                }}
              />
              <button className="bg-blue-700 p-2">
                <CiSearch className="text-white" />
              </button>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Cart */}
          <div className="relative">
            <div className="indicator cursor-pointer">
              <GrCart className="text-2xl" />
              <span className="rounded-full text-white bg-blue-700 badge-md indicator-item">
                1
              </span>
            </div>
          </div>

          {/* Sign In/Sign Up */}
          <Link
            to="/signin"
            className="text-blue-700 border border-blue-700 py-2 px-5"
          >
            Sign in
          </Link>
          <Link
            to="/signup"
            className="text-white bg-blue-700 py-2 font-bold px-5"
          >
            Sign up
          </Link>
        </div>

        {/* Mobile Section */}
        <div className="lg:hidden flex items-center gap-2">
          {/* Search Icon */}
          <button onClick={() => setOpen(!open)}>
            <CiSearch className="text-blue-700 text-2xl" />
          </button>

          {/* Cart */}
          <div className="relative">
            <div className="indicator cursor-pointer">
              <GrCart className="text-2xl" />
              <span className="rounded-full text-white bg-blue-700 badge-md indicator-item">
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
          className={`fixed top-0 right-0 h-full w-9/12 md:w-4/6 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <ul className="flex flex-col gap-4 p-4">
            <li className="mt-10">
              <div className="border border-blue-700 py-1 flex justify-between items-center px-2">
                <input
                  className="focus:outline-none w-96"
                  type="search"
                  placeholder="Search Any Course"
                  style={{
                    WebkitAppearance: "none",
                    MozAppearance: "none",
                    appearance: "none",
                  }}
                />
                <button className="bg-blue-700 p-2">
                  <CiSearch className="text-white" />
                </button>
              </div>
            </li>
            <li>
              <Link to="/learn" className="text-blue-700">
                Learn
              </Link>
            </li>
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
