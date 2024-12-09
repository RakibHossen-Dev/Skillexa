import { Link } from "react-router-dom";
import logo from "../assets/skillexa.png";
import { CiSearch } from "react-icons/ci";
import { GrCart } from "react-icons/gr";
import { IoIosArrowDown } from "react-icons/io";

const Navber = () => {
  return (
    <div className="shadow-lg py-3">
      <nav className=" w-11/12 mx-auto flex  gap-4 justify-between items-center ">
        <div className="flex items-center gap-5">
          <Link>
            <img className="w-60 " src={logo}></img>
          </Link>
          <div className="flex items-center gap-2 py-2 px-4 border text-blue-700 border-blue-700 cursor-pointer">
            <p>Learn</p>
            <IoIosArrowDown className="text-blue-700" />
          </div>
          <div className="border  border-blue-700 py-1  flex justify-between items-center px-2">
            <input
              className=" focus:outline-0 w-96"
              style={{
                WebkitAppearance: "none",
                MozAppearance: "none",
                appearance: "none",
              }}
              type="search"
              name=""
              id=""
            />
            <button className="bg-blue-700 p-2">
              <CiSearch className="text-white" />
            </button>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <div className="flex-none  mt-2 mr-4">
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                // role="button"
                // className="btn btn-ghost btn-circle"
              >
                <div className="indicator">
                  <GrCart className="text-2xl" />

                  <span className=" rounded-full  text-white  bg-blue-700 badge-md indicator-item">
                    1
                  </span>
                </div>
              </div>
              <div
                tabIndex={0}
                className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
              >
                <div className="card-body">
                  <span className="text-lg font-bold">8 Items</span>
                  <span className="text-info">Subtotal: $999</span>
                  <div className="card-actions">
                    <button className="btn btn-primary btn-block">
                      View cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
      </nav>
    </div>
  );
};

export default Navber;
