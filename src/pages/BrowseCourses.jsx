import useAxiosPublic from "@/hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { LuBookCheck } from "react-icons/lu";
import { Link, useParams } from "react-router-dom";

const BrowseCourses = () => {
  const { category } = useParams();

  console.log("category:", category);
  const axiosPublic = useAxiosPublic();
  const { data: categoryCourse = [] } = useQuery({
    queryKey: ["categoryCourses"],
    queryFn: async () => {
      const res = await axiosPublic.get(
        `/categoryWaysCourses?category=${category}`
      );
      return res.data;
    },
  });

  console.log(categoryCourse);
  return (
    <div className="pb-10">
      <div className="relative h-[200px] lg:h-[250px] flex items-center justify-center bg-blue-600 shadow-lg">
        <div className="absolute inset-0 bg-black/40 backdrop-blur-md"></div>
        <h3 className="relative text-4xl lg:text-5xl font-extrabold text-white text-center tracking-wide uppercase">
          {category}
        </h3>
      </div>

      {/* Category Details */}
      <div className="w-11/12 mx-auto my-10">
        <h2 className="text-2xl font-semibold text-gray-800">
          {category} Courses ({categoryCourse.length})
        </h2>
        {categoryCourse.length === 0 ? (
          <div className="min-h-[300px] flex flex-col justify-center items-center">
            <p className="text-gray-500 mt-2">
              No courses available in this category.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
            {categoryCourse.map((course) => (
              <Link to={`/courseDetails/${course._id}`} key={course._id}>
                <div className="relative overflow-hidden shadow-lg rounded-xl border border-gray-200  transition-all duration-300 p-3 bg-white hover:shadow-2xl md:h-[450px]">
                  {/* Course Banner */}
                  <div className="relative">
                    <img
                      className="rounded-xl h-[180px] w-full object-cover"
                      src={course.courseBanner}
                      alt="Course Banner"
                    />
                    <span className="absolute top-2 right-2 bg-blue-600 text-white px-3 py-1 text-xs rounded-full shadow-md">
                      {course.difficulty}
                    </span>
                  </div>

                  {/* Course Info */}
                  <div className="p-3 space-y-2">
                    <h3 className="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors">
                      {course.courseTitle}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {course.description.slice(0, 80)}...
                    </p>

                    {/* Lecture Count */}
                    <p className="flex items-center gap-2 text-gray-700 text-sm">
                      <LuBookCheck className="text-blue-500" />
                      <span>{course.lectures.length} Lectures</span>
                    </p>

                    {/* Instructor Info */}
                    <div className="flex items-center gap-3 mt-3">
                      <img
                        src={course.instructorPhoto}
                        alt="Instructor"
                        className="w-8 h-8 rounded-full border border-gray-300"
                      />
                      <span className="text-sm font-semibold text-gray-800">
                        {course.instructorName}
                      </span>
                    </div>

                    {/* Course Price */}
                    <p className="mt-3 text-blue-700 font-semibold text-lg">
                      {course.price ? (
                        <>Price: ${course.price}</>
                      ) : (
                        <span className="text-blue-600 font-bold">Free</span>
                      )}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BrowseCourses;
