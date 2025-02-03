// import { useState } from "react";
// import { FaEyeSlash, FaRegEye } from "react-icons/fa";
// import { FcGoogle } from "react-icons/fc";
// import { Link } from "react-router-dom";

// const Signup = () => {
//   const [showPassword, setShowPassword] = useState(false);

//   return (
//     <div>
//       <div className="my-16 w-11/12 mx-auto">
//         <div className="min-h-screen flex justify-center items-center">
//           <div className="card shadow-lg  w-full max-w-lg shrink-0 rounded-none py-4 px-2 md:p-10">
//             <h2 className="text-center text-2xl font-semibold ">
//               Sign-up your account
//             </h2>
//             <button
//               //   onClick={handleLoginWithGoogle}
//               className="border my-3 py-2 border-black mx-8  dark:border-orange-500 flex gap-2 items-center justify-center"
//             >
//               <FcGoogle className="text-xl" />
//               <p className="">Signin With Google</p>
//             </button>
//             <p className="text-center mt-2 ">OR</p>
//             <form
//               // onSubmit={handleRegisterwithEmail}
//               className="card-body"
//             >
//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text ">Name</span>
//                 </label>
//                 <input
//                   type="text"
//                   name="name"
//                   placeholder="Enter your name"
//                   className="input input-bordered rounded-none"
//                   required
//                 />
//               </div>

//               <div className="form-control">
//                 <label className="label ">
//                   <span className="label-text dark:text-orange-500">
//                     Photo URL
//                   </span>
//                 </label>
//                 <input
//                   type="text"
//                   name="photo"
//                   placeholder="Enter your photo url"
//                   className="input input-bordered rounded-none"
//                   required
//                 />
//               </div>

//               <div className="form-control">
//                 <label className="label ">
//                   <span className="label-text ">Email</span>
//                 </label>
//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="Enter your email address"
//                   className="input input-bordered rounded-none"
//                   required
//                 />
//               </div>

//               <div className="form-control relative">
//                 <label className="label">
//                   <span className="label-text ">
//                     Password
//                   </span>
//                 </label>
//                 <input
//                   type={showPassword ? "text" : "password"}
//                   name="password"
//                   placeholder=" Enter your password"
//                   className="input input-bordered rounded-none"
//                   required
//                 />
//                 <button
//                   onClick={() => setShowPassword(!showPassword)}
//                   type="button"
//                   className="absolute right-3 bottom-4"
//                 >
//                   {showPassword ? <FaEyeSlash /> : <FaRegEye />}
//                 </button>
//               </div>
//               {/* {error && <p className="text-sm text-red-500">{error}</p>} */}
//               <div className="form-control mt-6">
//                 <button className="py-2 rounded-sm text-white bg-blue-700">
//                   Sign-up
//                 </button>
//               </div>
//             </form>
//             <p className="text-center ">
//               Already Have An Account ? {""}
//               <Link className="text-blue-700" to="/signin">
//                 Sign-in
//               </Link>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Signup;
import { useState } from "react";
import { FaEyeSlash, FaRegEye, FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100  md:py-20">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 shadow-xl rounded-lg p-8">
        <h2 className="text-center text-3xl font-bold text-gray-800 dark:text-orange-500">
          Sign Up
        </h2>
        <div className="flex justify-bettwen items-center gap-3">
          {/* Google Sign-up Button */}
          <button className="border my-3 py-2 border-gray-300 dark:border-orange-500 w-full flex items-center justify-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition">
            <FcGoogle className="text-xl mr-2" />
            <span className="font-medium text-gray-700 dark:text-white">
              {/* Sign up with */}
              Google
            </span>
          </button>

          {/* Facebook Sign-up Button */}
          <button className="border my-3 py-2 border-blue-600 bg-blue-600 text-white w-full flex items-center justify-center rounded-lg hover:bg-blue-700 transition">
            <FaFacebook className="text-xl mr-2" />
            <span className="font-medium">
              {/* Sign up with  */}
              Facebook
            </span>
          </button>
        </div>

        {/* Sign-up Form */}
        <form className="mt-4">
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-orange-500 font-medium">
              Name
            </label>
            <input
              type="text"
              name="name"
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
