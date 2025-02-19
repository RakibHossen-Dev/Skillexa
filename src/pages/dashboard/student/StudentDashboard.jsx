import useAxiosPublic from "@/hooks/useAxiosPublic";
import { AuthContext } from "@/providers/Authprovider";
import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { FaBookOpen } from "react-icons/fa";

const StudentDashboard = () => {
  const { user } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();
  const { data: myEnrollCourse, refetch } = useQuery({
    queryKey: ["myEnrollCourse", user?.email],
    queryFn: async () => {
      const res = await axiosPublic.get(`/myEnrollCourse/${user?.email}`);
      return res.data;
    },
  });

  //   console.log(myEnrollCourse);
  return (
    <div className="w-11/12 mx-auto my-10">
      <div className="grid grid-cols-3 gap-5">
        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 shadow-lg rounded-lg p-6 flex items-center justify-center">
          <div className="text-center flex flex-col justify-center items-center text-white">
            <h3 className="text-4xl font-semibold">{myEnrollCourse?.length}</h3>
            <div className="flex items-center gap-2">
              <FaBookOpen className="text-2xl " />

              <p className="text-lg mt-2">Enrolled Courses</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
