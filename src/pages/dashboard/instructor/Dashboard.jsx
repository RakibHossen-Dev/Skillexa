import { AuthContext } from "@/providers/Authprovider";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { FaBookOpen, FaUserGraduate, FaDollarSign } from "react-icons/fa";
import { Chart } from "react-google-charts";
import Calendar from "react-calendar";
import React, { useState } from "react";
import "react-calendar/dist/Calendar.css";
import useAxiosSecure from "@/hooks/useAxiosSecure";
const Dashboard = () => {
  const { user } = useContext(AuthContext);
  // const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();

  const { data: courseStats } = useQuery({
    queryKey: ["course"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/instructor/${user.email}/stats`);
      return res.data;
    },
  });
  // console.log(courseStats);
  const data = [
    ["Category", "Count"],
    ["Courses", courseStats?.totalCourses || 0],
    ["Student", courseStats?.totalStudents || 0],
  ];

  // const options = {
  //   title: "My Daily Activities",
  // };
  const options = {
    is3D: true,
    backgroundColor: "transparent",
    fontName: "Poppins",
    fontSize: 16,
    titleTextStyle: {
      fontSize: 22,
      bold: true,
      color: "#4A90E2",
    },
    legend: {
      position: "bottom",
      textStyle: { fontSize: 14, bold: true, color: "#333" },
    },

    tooltip: {
      showColorCode: true,
      textStyle: { fontSize: 14 },
    },
    chartArea: { width: "85%", height: "80%" },
  };

  const [value, onChange] = useState(new Date());
  return (
    <div className="bg-gray-200">
      <div className="lg:w-auto w-11/12 mx-auto">
        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
          {/* Total Courses */}
          <div className="relative bg-white p-8 rounded-xl shadow-md flex items-center gap-6 border border-gray-300 transition-all duration-300 hover:shadow-lg">
            <div className="absolute -top-5 -left-5 bg-blue-100 p-3 rounded-full shadow">
              <FaBookOpen className="text-blue-600 text-4xl" />
            </div>
            <div className="text-gray-800">
              <h3 className="text-xl font-semibold">Total Courses</h3>
              <p className="text-4xl font-bold mt-2">
                {courseStats?.totalCourses || "0"}
              </p>
            </div>
          </div>

          {/* Active Students */}
          <div className="relative bg-white p-8 rounded-xl shadow-md flex items-center gap-6 border border-gray-300 transition-all duration-300 hover:shadow-lg">
            <div className="absolute -top-5 -left-5 bg-green-100 p-3 rounded-full shadow">
              <FaUserGraduate className="text-green-600 text-4xl" />
            </div>
            <div className="text-gray-800">
              <h3 className="text-xl font-semibold">Active Students</h3>
              <p className="text-4xl font-bold mt-2">
                {courseStats?.totalStudents || "0"}
              </p>
            </div>
          </div>

          {/* Earnings */}
          <div className="relative bg-white p-8 rounded-xl shadow-md flex items-center gap-6 border border-gray-300 transition-all duration-300 hover:shadow-lg">
            <div className="absolute -top-5 -left-5 bg-yellow-100 p-3 rounded-full shadow">
              <FaDollarSign className="text-yellow-600 text-4xl" />
            </div>
            <div className="text-gray-800">
              <h3 className="text-xl font-semibold">Earnings</h3>
              <p className="text-4xl font-bold mt-2">
                {courseStats?.totalEarnings
                  ? `${courseStats?.totalEarnings}$`
                  : "0$"}
              </p>
            </div>
          </div>
        </div>

        <div className="flex lg:flex-row flex-col justify-between items-center gap-5 w-11/12 mx-auto mt-10">
          <div className="lg:w-1/2 rounded-lg shadow-xl  lg:h-[350px]">
            <Chart
              chartType="PieChart"
              data={data}
              options={options}
              width={"100%"}
              height="100%"
            />
          </div>
          <div className="lg:w-1/2 relative p-6 rounded-3xl shadow-[0_0_25px_rgba(255,255,255,0.2)] border border-white/20 bg-white/10 backdrop-blur-xl">
            {/* Glow Effect */}
            <div className="relative p-6 rounded-3xl shadow-[0_0_25px_rgba(255,255,255,0.2)] border border-white/20 bg-white/10 backdrop-blur-xl">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-radial from-blue-500/30 to-transparent opacity-50 blur-2xl rounded-3xl"></div>

              <Calendar
                onChange={onChange}
                value={value}
                className="text-black text-lg font-semibold rounded-xl bg-gradient-to-r from-indigo-400 to-blue-600 font-bold scale-105 transition-transform duration-300 w-48 p-4 shadow-lg ring-2 ring-indigo-600 hover:ring-indigo-800 hover:scale-110"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
