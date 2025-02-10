import { Button } from "@/components/ui/button";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import { AuthContext } from "@/providers/Authprovider";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { LuBookCheck } from "react-icons/lu";
import { FiBook } from "react-icons/fi";
const MyCourse = () => {
  const { user } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();
  const { data: myEnrollCourse, refetch } = useQuery({
    queryKey: ["myEnrollCourse", user?.email],
    queryFn: async () => {
      const res = await axiosPublic.get(`/myEnrollCourse/${user?.email}`);
      return res.data;
    },
  });

  console.log(myEnrollCourse);
  return (
    <div className="bg-gray-100 py-10">
      <div className="w-11/12 mx-auto ">
        <div className="bg-blue-700 h-[120px] flex justify-center items-center mb-8 rounded-sm">
          <h3 className="text-2xl font-bold mb-4 text-white flex items-center gap-2">
            <FiBook></FiBook>My Courses
          </h3>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
          {myEnrollCourse?.map((popularCourse) => (
            <div
              key={popularCourse._id}
              className="shadow-md rounded-sm border p-2 flex flex-col h-full bg-white"
            >
              <img
                className="rounded-sm lg:h-[160px] w-full"
                src={popularCourse.courseBanner}
                alt=""
              />
              <div className="p-3 flex flex-col flex-grow">
                <div className="space-y-1 flex-grow">
                  <h3 className="text-xl font-bold">
                    {popularCourse.courseTitle}
                  </h3>

                  <p>{popularCourse.description.slice(0, 80)}...</p>
                  <p className="flex items-center gap-2 pb-3">
                    <LuBookCheck />
                    <span>{popularCourse.lectures.length} Lecture</span>
                  </p>
                </div>
                <div>
                  <Button className="w-full  bg-blue-700 hover:bg-blue-900">
                    Start Learning
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyCourse;
