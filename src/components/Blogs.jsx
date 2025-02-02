import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { FaRegEye } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { Link } from "react-router-dom";
const Blogs = () => {
  const axiosPublic = useAxiosPublic();
  const { data: blogs = [] } = useQuery({
    queryKey: ["blogs"],
    queryFn: async () => {
      const res = await axiosPublic.get("/blogs");
      return res.data;
    },
  });

  console.log(blogs);
  return (
    <div className="w-11/12 mx-auto my-20">
      <h2 className="text-center text-3xl font-bold text-black mb-8">
        Latest <span className="text-blue-700">Blogs</span>
      </h2>

      <Swiper
        watchSlidesProgress={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          0: {
            slidesPerView: 1,
          },
        }}
        className="mySwiper"
      >
        {blogs.map((blog) => (
          <SwiperSlide key={blog._id}>
            <div className="border p-3 rounded-sm shadow-sm mx-2 lg:h-[470px] h-[500px]">
              <img
                className="w-full h-[240px]"
                src={blog.image}
                alt="blog image"
              />
              <h3 className="my-2 text-2xl font-bold text-blue-600">
                {blog.title}
              </h3>
              <p>{blog.description.slice(0, 110)}...</p>
              <div className="flex justify-between items-center gap-5 mt-3">
                <Link to={`/blogDetails/${blog._id}`}>
                  <button className="py-1.5 rounded-sm px-4 bg-blue-700 text-white ">
                    Read More
                  </button>
                </Link>
                <div className="flex justify-between items-center gap-2  ">
                  <FaRegEye />
                  <p>{blog.viewCount}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Blogs;
