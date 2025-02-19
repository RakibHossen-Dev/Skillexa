import technology from "../assets/categoryImages/technology.png";
import contentCreation from "../assets/categoryImages/content-creation.png";
import business from "../assets/categoryImages/business.png";
import coaching from "../assets/categoryImages/coaching.png";
import languageLearning from "../assets/categoryImages/languageLearning.png";
import teaching from "../assets/categoryImages/teaching.png";
import passiveIcome from "../assets/categoryImages/passive-income.png";
import photoGraphy from "../assets/categoryImages/photography.png";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const PopularCategories = () => {
  const axiosPublic = useAxiosPublic();
  const { data: allCourses = [] } = useQuery({
    queryKey: ["allCourse"],
    queryFn: async () => {
      const res = await axiosPublic.get("/allCourses");
      return res.data;
    },
  });

  console.log(allCourses);
  return (
    <div className="w-11/12 mx-auto my-20">
      <h2 className="text-center text-3xl font-bold text-black mb-8">
        Popular <span className="text-blue-700">Categories</span>
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="flex  justify-center gap-5 items-center  border rounded-sm p-3 shadow-lg hover:shadow-2xl hover:shadow-blue-200 h-32 ">
          <img className="w-1/2 h-full" src={technology} alt="" />
          <div className="w-1/2">
            <h3 className="text-blue-700 text-2xl font-semibold">Technology</h3>

            <p className="font-semibold">0 Courses</p>
          </div>
        </div>
        <div className="flex justify-center gap-5 items-center border rounded-sm p-3 shadow-lg hover:shadow-blue-200 hover:shadow-2xl h-32 ">
          <img className="w-1/2 h-full" src={contentCreation} alt="" />
          <div className="w-1/2">
            <h3 className="text-blue-700 text-2xl font-semibold">
              Content Creation
            </h3>

            <p className="font-semibold">0 Courses</p>
          </div>
        </div>
        <div className="flex justify-center gap-5 items-center border rounded-sm p-3 shadow-lg hover:shadow-blue-200 hover:shadow-2xl h-32 ">
          <img className="w-1/2 h-full" src={business} alt="" />
          <div className="w-1/2">
            <h3 className="text-blue-700 text-2xl font-semibold">
              Online Business
            </h3>

            <p className="font-semibold">0 Courses</p>
          </div>
        </div>
        <div className="flex justify-center gap-5 items-center border rounded-sm p-3 shadow-lg hover:shadow-blue-200 hover:shadow-2xl h-32 ">
          <img className="w-1/2 h-full" src={coaching} alt="" />
          <div className="w-1/2">
            <h3 className="text-blue-700 text-2xl font-semibold"> Coaching</h3>

            <p className="font-semibold">0 Courses</p>
          </div>
        </div>
        <div className="flex justify-center gap-5 items-center border rounded-sm p-3 shadow-lg hover:shadow-blue-200 hover:shadow-2xl h-32 ">
          <img className="w-1/2 h-full" src={languageLearning} alt="" />
          <div className="w-1/2">
            <h3 className="text-blue-700 text-2xl font-semibold">
              Language Learning
            </h3>

            <p className="font-semibold">0 Courses</p>
          </div>
        </div>
        <div className="flex justify-center gap-5 items-center border rounded-sm p-3 shadow-lg hover:shadow-blue-200 hover:shadow-2xl h-32 ">
          <img className="w-1/2 h-full" src={teaching} alt="" />
          <div className="w-1/2">
            <h3 className="text-blue-700 text-2xl font-semibold"> Teaching</h3>

            <p className="font-semibold">0 Courses</p>
          </div>
        </div>
        <div className="flex justify-center gap-5 items-center border rounded-sm p-3 shadow-lg hover:shadow-blue-200 hover:shadow-2xl h-32 ">
          <img className="w-1/2 h-full" src={passiveIcome} alt="" />
          <div className="w-1/2">
            <h3 className="text-blue-700 text-2xl font-semibold">
              Passive Income
            </h3>

            <p className="font-semibold">0 Courses</p>
          </div>
        </div>
        <div className="flex justify-center gap-5 items-center border rounded-sm p-3 shadow-lg hover:shadow-blue-200 hover:shadow-2xl h-32 ">
          <img className="w-1/2 h-full" src={photoGraphy} alt="" />
          <div className="w-1/2">
            <h3 className="text-blue-700 text-2xl font-semibold">
              Photo Graphy
            </h3>

            <p className="font-semibold">0 Courses</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularCategories;
