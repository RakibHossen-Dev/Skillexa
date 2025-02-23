import useAxiosPublic from "@/hooks/useAxiosPublic";
import { AuthContext } from "@/providers/Authprovider";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { FaBookOpen, FaUserGraduate, FaDollarSign } from "react-icons/fa";
import { Chart } from "react-google-charts";
import Calendar from 'react-calendar';
import React, { useState } from "react";
import 'react-calendar/dist/Calendar.css';
const Dashboard = () => {
  const { user } = useContext(AuthContext);
  // const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();
  const { data: courseStats } = useQuery({
    queryKey: ["course"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/instructor/${user.email}/stats`);
      return res.data;
    },
  });
  console.log(courseStats);
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
      {/* Dashboard Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
        {/* Total Courses */}
        <div className="relative group bg-gradient-to-br from-blue-500 to-purple-600 p-10 rounded-3xl shadow-2xl flex items-center gap-6 border border-white/20 backdrop-blur-lg transition-all duration-500  hover:shadow-blue-500/50">
          <div className="absolute -top-6 -left-6 bg-white p-3 rounded-full shadow-xl transform group-hover:rotate-[360deg] transition-all duration-500">
            <FaBookOpen className="text-blue-600 text-5xl drop-shadow-lg" />
          </div>
          <div className="text-white">
            <h3 className="text-3xl font-semibold drop-shadow-lg">
              Total Courses
            </h3>
            <p className="text-6xl font-bold mt-2 drop-shadow-xl">
              {courseStats?.totalCourses}
            </p>
          </div>
          {/* Animated Glow */}
          <div className="absolute inset-0 bg-gradient-radial from-transparent to-blue-500 opacity-20 rounded-3xl group-hover:opacity-40 transition-all duration-500"></div>
        </div>

        {/* Active Students */}
        <div className="relative group bg-gradient-to-br from-green-500 to-teal-600 p-10 rounded-3xl shadow-2xl flex items-center gap-6 border border-white/20 backdrop-blur-lg transition-all duration-500  hover:shadow-green-500/50">
          <div className="absolute -top-6 -left-6 bg-white p-3 rounded-full shadow-xl transform group-hover:rotate-[360deg] transition-all duration-500">
            <FaUserGraduate className="text-green-600 text-5xl drop-shadow-lg" />
          </div>
          <div className="text-white">
            <h3 className="text-3xl font-semibold drop-shadow-lg">
              Active Students
            </h3>
            <p className="text-6xl font-bold mt-2 drop-shadow-xl">
              {courseStats?.totalStudents}
            </p>
          </div>
          {/* Animated Glow */}
          <div className="absolute inset-0 bg-gradient-radial from-transparent to-green-500 opacity-20 rounded-3xl group-hover:opacity-40 transition-all duration-500"></div>
        </div>

        {/* Earnings */}
        <div className="relative group bg-gradient-to-br from-yellow-500 to-orange-600 p-10 rounded-3xl shadow-2xl flex items-center gap-6 border border-white/20 backdrop-blur-lg transition-all duration-500  hover:shadow-yellow-500/50">
          <div className="absolute -top-6 -left-6 bg-white p-3 rounded-full shadow-xl transform group-hover:rotate-[360deg] transition-all duration-500">
            <FaDollarSign className="text-yellow-600 text-5xl drop-shadow-lg" />
          </div>
          <div className="text-white">
            <h3 className="text-3xl font-semibold drop-shadow-lg">Earnings</h3>
            <p className="text-6xl font-bold mt-2 drop-shadow-xl">
              {courseStats?.totalEarnings
              ?
              <>{

              courseStats?.totalEarnings 
              }$
              </>
              :
              "0$"
              }
            </p>
          </div>
          {/* Animated Glow */}
          <div className="absolute inset-0 bg-gradient-radial from-transparent to-yellow-500 opacity-20 rounded-3xl group-hover:opacity-40 transition-all duration-500"></div>
        </div>
      </div>

      <div className="flex justify-between items-center gap-5 w-11/12 mx-auto mt-10">
        <div className="lg:w-1/2 rounded-lg shadow-xl  lg:h-[300px]">
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
  );
};

export default Dashboard;
