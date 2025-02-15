import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import banner1 from "../assets/banner1.png";
import banner2 from "../assets/banner2.png";
import banner3 from "../assets/banner3.png";

import "swiper/css";
import "swiper/css/pagination";
import { useContext } from "react";
import { AuthContext } from "@/providers/Authprovider";
const Banner = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <div
            className="h-[600px] bg-cover bg-center  relative"
            style={{
              backgroundImage: `url(${banner1})`,
            }}
          >
            <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-center">
              <div className="text-white relative z-10 w-9/12 mx-auto md:w-full">
                <h2 className="lg:text-5xl text-2xl font-bold mb-5 lg:w-9/12  mx-auto">
                  Master Skills That Matter – Only on Skillexa
                </h2>
                <p className="md:w-1/2 mx-auto">
                  From Basics to Expert – Upskill Yourself with Skillexa.
                  Discover top-notch courses, learn at your pace, and unlock
                  your true potential today!
                </p>

                <div className="md:flex  justify-center items-center gap-3">
                  {user ? (
                    <button className="py-2 mt-5 px-4 w-full md:w-60 bg-blue-700 rounded-md hover:border-blue-900  hover:bg-blue-900  border border-blue-700 ease-linear duration-200">
                      My Courses
                    </button>
                  ) : (
                    <button className="py-2 md:w-auto w-full mt-5 px-4 bg-blue-700 rounded-md hover:bg-blue-900  ease-linear duration-200">
                      Create your free account
                    </button>
                  )}
                  <button className="py-2 mt-5 px-4 w-full md:w-60 rounded-md hover:border-blue-900  hover:bg-blue-900  border border-blue-700 ease-linear duration-200">
                    View Courses
                  </button>
                </div>
              </div>
            </div>
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60 "></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="h-[600px] bg-cover bg-center relative"
            style={{
              backgroundImage: `url(${banner3})`,
            }}
          >
            <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-center">
              <div className="text-white relative z-10 w-9/12 mx-auto md:w-full">
                <h2 className="lg:text-5xl text-2xl font-bold mb-5 lg:w-9/12  mx-auto">
                  Skillexa – Where Learning Meets Growth!
                </h2>
                <p className="md:w-1/2 mx-auto">
                  One Platform. Infinite Learning Opportunities. Explore
                  expert-led courses, master new skills, and shape your future
                  with Skillexa.
                </p>
                <div className="md:flex justify-center items-center gap-3">
                  {user ? (
                    <button className="py-2 mt-5 px-4 w-full md:w-60 bg-blue-700 rounded-md hover:border-blue-900  hover:bg-blue-900  border border-blue-700 ease-linear duration-200">
                      My Courses
                    </button>
                  ) : (
                    <button className="py-2 md:w-auto w-full mt-5 px-4 bg-blue-700 rounded-md hover:bg-blue-900  ease-linear duration-200">
                      Create your free account
                    </button>
                  )}
                  <button className="py-2 mt-5 px-4 w-full md:w-60 rounded-md hover:border-blue-900  hover:bg-blue-900  border border-blue-700 ease-linear duration-200">
                    View Courses
                  </button>
                </div>
              </div>
            </div>
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60 "></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="h-[600px] bg-cover bg-center relative"
            style={{
              backgroundImage: `url(${banner2})`,
            }}
          >
            <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-center">
              <div className="text-white relative z-10 w-9/12 mx-auto md:w-full">
                <h2 className="lg:text-5xl text-2xl font-bold mb-5 lg:w-9/12  mx-auto">
                  Empower Your Future with Skillexa
                </h2>
                <p className="md:w-1/2 mx-auto">
                  Your Path to Knowledge Starts Here. Explore expert courses,
                  gain new skills, and achieve success with Skillexa!
                </p>
                <div className="md:flex  justify-center items-center gap-3">
                  {user ? (
                    <button className="py-2 mt-5 px-4 w-full md:w-60 bg-blue-700 rounded-md hover:border-blue-900  hover:bg-blue-900  border border-blue-700 ease-linear duration-200">
                      My Courses
                    </button>
                  ) : (
                    <button className="py-2 md:w-auto w-full mt-5 px-4 bg-blue-700 rounded-md hover:bg-blue-900  ease-linear duration-200">
                      Create your free account
                    </button>
                  )}
                  <button className="py-2 mt-5 px-4 w-full md:w-60 rounded-md hover:border-blue-900  hover:bg-blue-900  border border-blue-700 ease-linear duration-200">
                    View Courses
                  </button>
                </div>
              </div>
            </div>
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60 "></div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
