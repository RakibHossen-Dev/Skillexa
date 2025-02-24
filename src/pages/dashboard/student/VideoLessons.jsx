import useAxiosPublic from "@/hooks/useAxiosPublic";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import { FaPlayCircle, FaBookOpen, FaVideo } from "react-icons/fa";
import { useParams } from "react-router-dom";

const VideoLessons = () => {
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();

  const axiosPublic = useAxiosPublic();
  const { data: courses } = useQuery({
    queryKey: ["course", id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/enrollCourses/${id}`);
      return res.data;
    },
  });
  // const [selectedVideo, setSelectedVideo] = useState("");
  const [selectedVideo, setSelectedVideo] = useState(
    courses?.lectures?.[0]?.lectureVideo || ""
  );

  // console.log("selectedVideo", selectedVideo);
  return (
    <div className="w-11/12 mx-auto my-10 bg-gradient-to-r from-blue-100 to-white dark:from-gray-800 dark:to-gray-900 shadow-xl rounded-md border border-gray-300 dark:border-gray-700 min-h-[500px] p-4 transition-all duration-500">
      {/* Header */}
      <h2 className="text-3xl font-extrabold text-blue-800 dark:text-blue-300  mb-6">
        🎓 Video Lessons
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Video Player Section */}
        <div className="md:col-span-8 bg-white dark:bg-gray-800 rounded-md p-4 shadow-lg flex flex-col items-center justify-center border border-gray-200 dark:border-gray-700  duration-300">
          <div className="w-full lg:h-[350px]">
            <video
              key={selectedVideo}
              // controls="controls autoplay"
              controls
              autoPlay
              playsInline
              preload="auto"
              className="w-full h-full"
            >
              <source src={selectedVideo} type="video/mp4" />
            </video>
          </div>
        </div>

        {/* Lesson Sidebar */}
        <div className="md:col-span-4 bg-gray-50 dark:bg-gray-700 shadow-lg rounded-md p-6 border border-gray-200 dark:border-gray-600 transition-all duration-300">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4 flex items-center gap-2">
            <FaBookOpen className="text-blue-600 dark:text-blue-300" /> Course
            Lessons
          </h3>
          <Accordion allowZeroExpanded className="space-y-3">
            {courses?.lectures?.map((item, index) => (
              <AccordionItem
                key={item._id}
                className="border rounded-lg overflow-hidden shadow-md transition-all duration-300"
              >
                <AccordionItemHeading>
                  <AccordionItemButton className="py-3 px-5 bg-gray-100 dark:bg-gray-600 hover:bg-blue-100 dark:hover:bg-blue-500 transition-colors flex gap-2 justify-between items-center">
                    <span className="text-gray-800 dark:text-gray-200">
                      {index + 1}. {item.lectureTitle}
                    </span>
                    <FaVideo className="text-blue-600 text-lg dark:text-blue-300" />
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel
                  onClick={() => setSelectedVideo(item.lectureVideo)}
                  className="flex items-center gap-2 p-3 text-gray-700 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-300 cursor-pointer transition-all duration-300"
                >
                  <FaPlayCircle className="text-blue-500 dark:text-blue-300 text-lg" />
                  Watch Video
                </AccordionItemPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default VideoLessons;
