import useAxiosPublic from "@/hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { LuBookCheck } from "react-icons/lu";
import { useParams } from "react-router-dom";
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
const CourseDetails = () => {
  const { id } = useParams();
  const axiosPublic = useAxiosPublic();
  const { data: courses } = useQuery({
    queryKey: ["course", id],
    queryFn: async () => {
      const res = await axiosPublic.get(`/courses/${id}`);
      return res.data;
    },
  });

  console.log(courses);
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

          <div className="">
            <Accordion allowZeroExpanded>
              {courses?.lectures?.map((item) => (
                <AccordionItem key={item._id}>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      {item.lectureTitle}
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel className="flex items-center gap-2 ml-8 py-3">
                    <FaPlayCircle className="text-blue-700" />
                    Video
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
                ${courses?.price}
              </p>
              <div className="flex justify-between items-center">
                <p>Ratting : 4.5</p>
                <p className="flex items-center gap-2">
                  <LuBookCheck />
                  {courses?.lectures.length} Lecture
                </p>
              </div>
              <div>
                <Button className="w-full bg-blue-700 hover:bg-blue-900">
                  Enroll Now
                </Button>
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
