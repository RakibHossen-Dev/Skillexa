import { useState } from "react";
import { FaEyeSlash, FaRegEye } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <div className="my-16 w-11/12 mx-auto">
        <div className="min-h-screen flex justify-center items-center">
          <div className="card shadow-lg dark:border dark:border-orange-500 w-full max-w-lg shrink-0 rounded-none py-4 px-2 md:p-10">
            <h2 className="text-center text-2xl font-semibold dark:text-orange-500">
              Sign-up your account
            </h2>
            <button
              //   onClick={handleLoginWithGoogle}
              className="border my-3 py-2 border-black mx-8  dark:border-orange-500 flex gap-2 items-center justify-center"
            >
              <FcGoogle className="text-xl" />
              <p className="dark:text-white">Signin With Google</p>
            </button>
            <p className="text-center mt-2 dark:text-white">OR</p>
            <form
              // onSubmit={handleRegisterwithEmail}
              className="card-body"
            >
              <div className="form-control">
                <label className="label">
                  <span className="label-text dark:text-orange-500">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="input input-bordered rounded-none"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label ">
                  <span className="label-text dark:text-orange-500">
                    Photo URL
                  </span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="Enter your photo url"
                  className="input input-bordered rounded-none"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label ">
                  <span className="label-text dark:text-orange-500">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  className="input input-bordered rounded-none"
                  required
                />
              </div>

              <div className="form-control relative">
                <label className="label">
                  <span className="label-text dark:text-orange-500">
                    Password
                  </span>
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder=" Enter your password"
                  className="input input-bordered rounded-none"
                  required
                />
                <button
                  onClick={() => setShowPassword(!showPassword)}
                  type="button"
                  className="absolute right-3 bottom-4"
                >
                  {showPassword ? <FaEyeSlash /> : <FaRegEye />}
                </button>
              </div>
              {/* {error && <p className="text-sm text-red-500">{error}</p>} */}
              <div className="form-control mt-6">
                <button className="py-2 rounded-sm text-white bg-blue-700">
                  Sign-up
                </button>
              </div>
            </form>
            <p className="text-center dark:text-white">
              Already Have An Account ? {""}
              <Link className="text-blue-700" to="/signin">
                Sign-in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
