import useAxiosPublic from "@/hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { LuBookCheck } from "react-icons/lu";
import { Link } from "react-router-dom";
// import { TbArrowsSort } from "react-icons/tb";
import { BiSort } from "react-icons/bi";
import { useState } from "react";
const AllCourse = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const axiosPublic = useAxiosPublic();
  const { data: allCourses = [] } = useQuery({
    queryKey: ["allCourse"],
    queryFn: async () => {
      const res = await axiosPublic.get("/allCourses");
      return res.data;
    },
  });

  return (
    <div className=" bg-base-100">
      <div className="w-11/12 mx-auto pb-16 pt-6">
        <div className="flex justify-between items-center my-6">
          <h3 className="text-2xl font-bold">All Courses</h3>
          {/* <button className="border py-1 flex items-center gap-2 px-6 rounded-sm">
            Sort
            <BiSort />
          </button> */}
          <div className="relative ">
            <button
              className="border py-1 flex items-center gap-2 text-blue-700 px-6 rounded-sm"
              onClick={toggleMenu}
            >
              <BiSort />
              Sort By
            </button>
            {isOpen && (
              <div className="absolute right-0 mt-2 bg-white border rounded-sm shadow-lg ">
                <button className="block px-4 py-2 hover:bg-gray-200 w-40">
                  Sort by Price
                </button>
                <button className="block px-4 py-2 hover:bg-gray-200 w-40">
                  Sort by Latest
                </button>
              </div>
            )}
          </div>
        </div>
        <div className="grid grid-cols-12 lg:gap-10">
          <div className="col-span-3 ">
            <div className="space-y-2">
              <h3 className="text-xl font-bold mb-3">Category</h3>
              <div className="flex items-center gap-2">
                <input type="checkbox" defaultChecked className="checkbox " />
                Programming
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" defaultChecked className="checkbox " />
                Language Learning
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" defaultChecked className="checkbox " />
                Content Creation
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" defaultChecked className="checkbox " />
                Online Business
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" defaultChecked className="checkbox " />
                Coaching
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" defaultChecked className="checkbox " />
                Teaching
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" defaultChecked className="checkbox " />
                Passive Income
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" defaultChecked className="checkbox " />
                Photo Graphy
              </div>
            </div>

            <div className="space-y-2 my-4">
              <h3 className="text-xl font-bold mb-3">Level</h3>
              <div className="flex items-center gap-2">
                <input type="checkbox" defaultChecked className="checkbox " />
                Beginner
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" defaultChecked className="checkbox " />
                Intermediate
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" defaultChecked className="checkbox " />
                Expert
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold mb-3">Language</h3>
              <div className="flex items-center gap-2">
                <input type="checkbox" defaultChecked className="checkbox " />
                English
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" defaultChecked className="checkbox " />
                Bangla
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" defaultChecked className="checkbox " />
                Garmany
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" defaultChecked className="checkbox " />
                Hindi
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" defaultChecked className="checkbox " />
                Spanish
              </div>
            </div>
          </div>
          <div className="col-span-9">
            <div className="grid lg:grid-cols-1 md:grid-cols-2 grid-cols-1 gap-4 ">
              {allCourses.map((allCourse) => (
                <Link
                  to={`/courseDetails/${allCourse._id}`}
                  key={allCourse._id}
                >
                  <div className="flex items-center gap-5 shadow-md  border rounded-sm p-3 bg-white">
                    <img
                      className="lg:h-[200px] lg:w-[300px] w-full"
                      src={allCourse.courseBanner}
                      alt=""
                    />
                    <div className="p-3 space-y-1">
                      <h3 className="text-2xl font-bold capitalize">
                        {allCourse.courseTitle}
                      </h3>

                      <p>{allCourse.description.slice(0, 80)}...</p>
                      <p className="flex items-center gap-2">
                        <LuBookCheck />
                        <span>{allCourse.lectures.length} Lecture</span>
                      </p>
                      <p className="text-blue-700 font-semibold">
                        {allCourse.price ? (
                          <>Price: {allCourse.price}$</>
                        ) : (
                          <span className="text-lg font-bold">Free</span>
                        )}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllCourse;
