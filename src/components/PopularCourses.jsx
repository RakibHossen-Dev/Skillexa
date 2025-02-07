import useAxiosPublic from "@/hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { LuBookCheck } from "react-icons/lu";
const PopularCourses = () => {
  const axiosPublic = useAxiosPublic();
  const { data: popularCourses = [] } = useQuery({
    queryKey: ["popularCourse"],
    queryFn: async () => {
      const res = await axiosPublic.get("/popularCourses");
      return res.data;
    },
  });

  console.log(popularCourses);
  return (
    <div className="w-11/12 mx-auto my-20">
      <h2 className="text-center text-3xl font-bold text-black mb-8">
        Popular <span className="text-blue-700">Courses</span>
      </h2>

      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
        {popularCourses.map((popularCourse) => (
          <Link
            to={`/courseDetails/${popularCourse._id}`}
            key={popularCourse._id}
          >
            <div className="shadow-md rounded-md">
              <img
                className="rounded-t-md lg:h-[160px] w-full"
                src={popularCourse.courseBanner}
                alt=""
              />
              <div className="p-3 space-y-1">
                <h3 className="text-xl font-bold">
                  {popularCourse.courseTitle}
                </h3>

                <p>{popularCourse.description.slice(0, 80)}...</p>
                <p className="flex items-center gap-2">
                  <LuBookCheck />
                  <span>{popularCourse.lectures.length} Lecture</span>
                </p>
                <p className="text-blue-700 font-semibold">
                  {popularCourse.price ? (
                    <>Price: {popularCourse.price}$</>
                  ) : (
                    <span className="text-lg font-bold">Free</span>
                  )}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="text-center mt-7">
        <Link to="/allCourse">
          <Button className="bg-blue-700 hover:bg-blue-900">All Coures</Button>
        </Link>
      </div>
    </div>
  );
};

export default PopularCourses;
