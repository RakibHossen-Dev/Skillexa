import useAxiosPublic from "@/hooks/useAxiosPublic";
import { AuthContext } from "@/providers/Authprovider";
import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { FaBookOpen, FaDollarSign } from "react-icons/fa";
import { Chart } from "react-google-charts";

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

  const totalPrice =
    myEnrollCourse?.reduce((sum, course) => sum + parseInt(course.price), 0) ||
    0;

  const data = [
    ["Category", "Value"],
    ["Total Price", totalPrice],
    ["Enrolled Courses", myEnrollCourse?.length || 0],
  ];

  const options = {
    // title: "My Daily Activities",
    pieHole: 0.4,
    is3D: false,
    colors: ["#4F46E5", "#F43F5E"],
    legend: { position: "bottom" },
  };

  return (
    <div className="bg-gray-100">
    <div className="w-11/12 mx-auto my-10">
      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Enrolled Courses Card */}
        <div className="bg-white border shadow-xl rounded-2xl p-6 flex items-center justify-center">
          <div className="text-center flex flex-col justify-center items-center text-gray-800">
            <h3 className="text-5xl font-bold">{myEnrollCourse?.length}</h3>
            <div className="flex items-center gap-2 mt-2">
              <FaBookOpen className="text-3xl text-blue-500" />
              <p className="text-lg font-medium">Enrolled Courses</p>
            </div>
          </div>
        </div>

        {/* Total Price Card */}
        <div className="bg-white border shadow-xl rounded-2xl p-6 flex items-center justify-center">
          <div className="text-center flex flex-col justify-center items-center text-gray-800">
            <h3 className="text-5xl font-bold">${totalPrice}</h3>
            <div className="flex items-center gap-2 mt-2">
              <FaDollarSign className="text-3xl text-green-500" />
              <p className="text-lg font-medium">Total Spent</p>
            </div>
          </div>
        </div>
      </div>

      {/* Pie Chart Section */}
      <div className="mt-10 bg-white border shadow-xl rounded-2xl p-8 ">
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">
          Course Statistics
        </h2>
        <Chart chartType="PieChart" width="100%" height="400px" data={data} options={options} />
      </div>
    </div>
    </div>
  );
};

export default StudentDashboard;
