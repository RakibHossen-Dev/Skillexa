import useAxiosPublic from "@/hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { LuBookCheck } from "react-icons/lu";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MdOutlineDateRange } from "react-icons/md";
import { GrLanguage } from "react-icons/gr";
import "react-accessible-accordion/dist/fancy-example.css";
import { FaPlayCircle } from "react-icons/fa";
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@radix-ui/react-accordion";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import useAuth from "@/hooks/useAuth";
import toast from "react-hot-toast";
import { useContext } from "react";
import { AuthContext } from "@/providers/Authprovider";
const CourseDetails = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const axiosPublic = useAxiosPublic();
  const { data: courses } = useQuery({
    queryKey: ["course", id],
    queryFn: async () => {
      const res = await axiosPublic.get(`/courses/${id}`);
      return res.data;
    },
  });

  const handleEnrollCourse = (courses) => {
    const enrollCourseInfo = {
      coursesId: courses._id,
      courseTitle: courses.courseTitle,
      courseBanner: courses.courseBanner,
      date: courses.date,
      category: courses.category,
      language: courses.language,
      difficulty: courses.difficulty,
      price: courses.price,
      skills: courses.skills,
      enrollStudentEmail: user?.email,
      instructorName: courses.instructorName,
      instructorEmail: courses.instructorEmail,
      instructorPhoto: courses.instructorPhoto,
      lectures: courses.lectures,
      description: courses.description,
    };
    console.log("enrollCourseInfo", enrollCourseInfo);
    axiosPublic.post("/EnrollmentCourses", enrollCourseInfo).then((res) => {
      console.log(res);
      console.log(res.data.insertedId);
      if (res.data.insertedId) {
        toast.success("Course enrolled successfully! ✅");
      }
    });
  };

  const navigate = useNavigate();
  const handleEnroll = () => {
    navigate("/payment", { state: { courses } });
  };
  return (
    <div className="w-11/12 mx-auto mt-10 mb-20 ">
      <div className="flex justify-around items-center gap-5">
        <div className="lg:w-1/2 space-y-4">
          <h3 className="text-2xl font-bold capitalize">
            {courses?.courseTitle}
          </h3>
          <div className="flex items-center gap-4">
            <p className="flex items-center gap-2">
              Category : {courses?.category}
            </p>
            <p className="flex items-center gap-2">
              <MdOutlineDateRange />
              {courses?.date}
            </p>
            <p className="flex items-center gap-2">
              <GrLanguage />
              {courses?.language}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <img
              className="w-12 h-12 rounded-full"
              src={courses?.instructorPhoto}
              alt=""
            />
            <p className="font-bold">{courses?.instructorName}</p>
          </div>

          <div className="max-w-xl mx-auto my-6">
            <Accordion allowZeroExpanded>
              {courses?.lectures?.map((item) => (
                <AccordionItem key={item._id} className="mb-1  overflow-hidden">
                  <AccordionItemHeading>
                    <AccordionItemButton className="w-full px-5 py-3 text-left text-gray-800 font-medium bg-gray-100 hover:bg-gray-200 transition-all">
                      {item.lectureTitle}
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel className="flex items-center gap-3 px-5 py-3 bg-white">
                    <FaPlayCircle className="text-blue-600 text-lg" />
                    <span className="text-gray-700 font-medium">Video</span>
                  </AccordionItemPanel>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          <p className="font-bold">Learn This Skills</p>
          <p>
            {courses?.skills.map((skill) => (
              <button className="cursor-default bg-blue-200 text-blue-500 mx-3 px-3 py-1 rounded-lg">
                {skill}
              </button>
            ))}
          </p>
          <p className="font-bold ">Course Description</p>
          <p>{courses?.description}</p>
          {/* <Accordion type="single" collapsible className="border">
            <AccordionItem value="item-1">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
          </Accordion> */}
        </div>
        <div className="">
          <div className="shadow-lg max-w-[360px]  ">
            <img
              className="w-full lg:h-[200px]"
              src={courses?.courseBanner}
              alt=""
            />
            <div className="p-3 space-y-2">
              <p className="text-3xl font-bold text-blue-500">
                {courses?.price ? <>${courses?.price}</> : "Free"}
              </p>
              <div className="flex justify-between items-center">
                <p>Ratting : 4.5</p>
                <p className="flex items-center gap-2">
                  <LuBookCheck />
                  {courses?.lectures.length} Lecture
                </p>
              </div>
              <div>
                {courses?.price ? (
                  <Button
                    onClick={handleEnroll}
                    className="w-full bg-blue-700 hover:bg-blue-900"
                  >
                    Enroll Now
                  </Button>
                ) : (
                  // <Link to="/payment">
                  //   <Button className="w-full bg-blue-700 hover:bg-blue-900">
                  //     Enroll Now
                  //   </Button>
                  // </Link>
                  <Link to={`/dashboard/myCourse`}>
                    <Button
                      onClick={() => handleEnrollCourse(courses)}
                      className="w-full bg-blue-700 hover:bg-blue-900"
                    >
                      {/* Start Learning */}
                      Enroll Now
                    </Button>
                  </Link>
                )}
              </div>
              <h3 className="text-lg font-semibold">What's in the courese</h3>
              {/* <ul> */}
              <div className="ml-2">
                <li className="list-disc">Lifetime access with free updates</li>
                <li className="list-disc">Download resources</li>
                <li className="list-disc">Certificate of completion</li>
              </div>
              {/* </ul> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
