import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEyeSlash, FaRegEye, FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";
import axios from "axios";
import useAxiosPublic from "../hooks/useAxiosPublic";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const Signup = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();
  const { googleSignIn, facebookSignIn, createUser, updateUserProfile } =
    useAuth();

  const handleGoogleSignIn = async () => {
    await googleSignIn().then((result) => {
      const userInfo = {
        name: result.user?.displayName,
        email: result.user?.email,
        photo: result.user?.photoURL,
        role: "student",
      };
      axiosPublic.post("/users", userInfo).then((res) => {
        console.log(res);
        navigate("/");
        toast.success("Signin Successful");
      });
    });
  };

  const handleFacebookSignIn = async () => {
    await facebookSignIn().then((result) => {
      const userInfo = {
        name: result.user?.displayName,
        email: result.user?.email,
        photo: result.user?.photoURL,
        role: "student",
      };
      axiosPublic.post("/users", userInfo).then((res) => {
        console.log(res);
        navigate("/");
        toast.success("Signin Successful");
      });
    });
  };

  const onSubmit = async (data) => {
    console.log(data);
    const imageFile = { image: data.image[0] };

    const res = await axios.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });

    createUser(data.email, data.password).then((result) => {
      updateUserProfile(data.name, res.data.data.display_url).then(() => {
        const userInfo = {
          name: data.name,
          email: data.email,
          photo: res.data.data.display_url,
          role: "student",
        };
        axiosPublic.post("/users", userInfo).then((res) => {
          navigate("/");
          toast.success("Signup Successful");

          console.log(res);
        });
      });
    });
  };
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100  md:py-20">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 shadow-xl rounded-lg p-8">
        <h2 className="text-center text-3xl font-bold text-gray-800 ">
          Sign Up
        </h2>
        <div className="flex justify-bettwen items-center gap-3">
          {/* Google Sign-up Button */}
          <button
            onClick={handleGoogleSignIn}
            className="border my-3 py-2 border-gray-300  w-full flex items-center justify-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition"
          >
            <FcGoogle className="text-xl mr-2" />
            <span className="font-medium text-gray-700 dark:text-white">
              {/* Sign up with */}
              Google
            </span>
          </button>

          {/* Facebook Sign-up Button */}
          <button
            onClick={handleFacebookSignIn}
            className="border my-3 py-2 border-blue-600 bg-blue-600 text-white w-full flex items-center justify-center rounded-lg hover:bg-blue-700 transition"
          >
            <FaFacebook className="text-xl mr-2" />
            <span className="font-medium">
              {/* Sign up with  */}
              Facebook
            </span>
          </button>
        </div>

        {/* Sign-up Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-orange-500 font-medium">
              Name
            </label>
            <input
              type="text"
              name="name"
              {...register("name", { required: true })}
              placeholder="Enter your name"
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 dark:text-orange-500 font-medium">
              Email
            </label>
            <input
              type="email"
              name="email"
              {...register("email", { required: true })}
              placeholder="Enter your email"
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600"
              required
            />
          </div>

          <div className="mb-4">
            <label className="label">
              <span className="label-text">Profile Picture</span>
            </label>
            <input
              type="file"
              {...register("image", { required: true })}
              accept="image/*"
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600"
            />
          </div>

          <div className="mb-4 relative">
            <label className="block text-gray-700 dark:text-orange-500 font-medium">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              {...register("password", {
                required: true,
                minLength: 6,
                maxLength: 20,
                pattern: /(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d@$!%*#?&]/,
              })}
              placeholder="Enter your password"
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600"
              required
            />
            {errors.password?.type === "minLength" && (
              <p className="mt-2 text-red-400 text-sm">
                Password must be 6 characters{" "}
              </p>
            )}
            {errors.password?.type === "maxLength" && (
              <p className="mt-2 text-red-400 text-sm">
                Password must be less then 20 characters
              </p>
            )}
            {errors.password?.type === "pattern" && (
              <p className="mt-2 text-red-400 text-sm">
                Password must have one uppercase one lower case one number and
                special characters
              </p>
            )}
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-11 text-gray-600 dark:text-gray-300"
            >
              {showPassword ? <FaEyeSlash /> : <FaRegEye />}
            </button>
          </div>

          <button className="w-full py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition dark:bg-orange-500 dark:hover:bg-orange-600">
            Sign Up
          </button>
        </form>

        <p className="text-center text-gray-700 dark:text-gray-300 mt-4">
          Already have an account?{" "}
          <Link
            className="text-blue-600 dark:text-blue-400 hover:underline"
            to="/signin"
          >
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
