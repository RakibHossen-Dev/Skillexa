import React, { useState } from "react";
import { FaEyeSlash, FaRegEye, FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Signin = () => {
  const { googleSignIn } = useAuth();
  const [showPassword, setShowPassword] = useState(false);

  const handleGoogleSign = () => {
    googleSignIn();
  };
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 shadow-xl rounded-lg p-8">
        <h2 className="text-center text-3xl font-bold text-gray-800 dark:text-orange-500">
          Sign In
        </h2>

        <div className="flex justify-bettwen items-center gap-3">
          {/* Google Sign-in Button */}
          <button
            onClick={handleGoogleSign}
            className="border my-3 py-2 border-gray-300 dark:border-orange-500 w-full flex items-center justify-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition"
          >
            <FcGoogle className="text-xl mr-2" />
            <span className="font-medium text-gray-700 dark:text-white">
              {/* Sign in with  */}
              Google
            </span>
          </button>

          {/* Facebook Sign-in Button */}
          <button className="border my-3 py-2 border-blue-600 bg-blue-600 text-white w-full flex items-center justify-center rounded-lg hover:bg-blue-700 transition">
            <FaFacebook className="text-xl mr-2" />
            <span className="font-medium">
              {/* Sign in with  */}
              Facebook
            </span>
          </button>
        </div>

        {/* <p className="text-center text-gray-500 dark:text-gray-300">OR</p> */}

        {/* Sign-in Form */}
        <form className="mt-4">
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-orange-500 font-medium">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600"
              required
            />
          </div>

          <div className="mb-4 relative">
            <label className="block text-gray-700 dark:text-orange-500 font-medium">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-11 text-gray-600 dark:text-gray-300"
            >
              {showPassword ? <FaEyeSlash /> : <FaRegEye />}
            </button>
          </div>

          <div className="text-right mb-4">
            <Link
              to="/forgot-password"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Forgot password?
            </Link>
          </div>

          <button className="w-full py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition dark:bg-orange-500 dark:hover:bg-orange-600">
            Sign In
          </button>
        </form>

        <p className="text-center text-gray-700 dark:text-gray-300 mt-4">
          Don’t have an account?{" "}
          <Link
            className="text-blue-600 dark:text-blue-400 hover:underline"
            to="/signup"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signin;
