import useAxiosPublic from "@/hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { LuBookCheck } from "react-icons/lu";
import { Link } from "react-router-dom";

const AllCourse = () => {
  const axiosPublic = useAxiosPublic();
  const { data: allCourses = [] } = useQuery({
    queryKey: ["allCourse"],
    queryFn: async () => {
      const res = await axiosPublic.get("/allCourses");
      return res.data;
    },
  });

  return (
    <div className="w-11/12 mx-auto my-16">
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
        {allCourses.map((allCourse) => (
          <Link to={`/courseDetails/${allCourse._id}`} key={allCourse._id}>
            <div className="shadow-md rounded-md">
              <img
                className="rounded-t-md lg:h-[160px] w-full"
                src={allCourse.courseBanner}
                alt=""
              />
              <div className="p-3 space-y-1">
                <h3 className="text-xl font-bold">{allCourse.courseTitle}</h3>

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
  );
};

export default AllCourse;
