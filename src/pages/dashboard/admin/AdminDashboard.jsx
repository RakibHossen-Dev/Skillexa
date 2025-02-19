import { FaUsers, FaBookOpen, FaDollarSign, FaUserPlus } from "react-icons/fa";
import { Chart } from "react-google-charts";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
const AdminDashboard = () => {
  const axiosPublic = useAxiosPublic();
  const { data: adminStats } = useQuery({
    queryKey: ["adminStats"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/admin/stats`);
      return res.data;
    },
  });
  console.log(adminStats);
  const data = [
    ["Element", "Density", { role: "style" }],
    ["All User", adminStats?.totalUsers, "#e74c3c"],
    ["Students", adminStats?.studentsCount, "#3498db"],
    ["Instructors", adminStats?.instructorsCount, "#2ecc71"],
    ["Total Courses", adminStats?.totalCourses, "color: #8e44ad"],
  ];

  const options = {
    title: "Platform Statistics",
    titleTextStyle: { fontSize: 18, bold: true, color: "#2c3e50" },
    chartArea: { width: "80%", height: "70%" },
    hAxis: {
      textStyle: { fontSize: 12, color: "#34495e" },
      gridlines: { color: "#ecf0f1" },
    },
    vAxis: {
      textStyle: { fontSize: 12, color: "#34495e" },
      gridlines: { color: "#ecf0f1" },
    },
    bar: { groupWidth: "55%" },
    legend: { position: "none" },
  };

  return (
    <div className="bg-gray-100">
      <div className="w-11/12 mx-auto py-10">
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-6 ">
          {/* All Users */}
          <div className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center justify-center hover:shadow-xl transition-shadow duration-300">
            <FaUsers className="text-blue-500 text-4xl" />
            <h3 className="text-lg font-semibold text-gray-700 mt-3">
              All Users
            </h3>
            <p className="text-3xl font-bold text-gray-900">
              {adminStats?.totalUsers}
            </p>
          </div>

          {/* Total Courses */}
          <div className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center justify-center hover:shadow-xl transition-shadow duration-300">
            <FaBookOpen className="text-green-500 text-4xl" />
            <h3 className="text-lg font-semibold text-gray-700 mt-3">
              Total Courses
            </h3>
            <p className="text-3xl font-bold text-gray-900">
              {adminStats?.totalCourses}
            </p>
          </div>

          {/* Total Revenue */}
          <div className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center justify-center hover:shadow-xl transition-shadow duration-300">
            <FaDollarSign className="text-red-500 text-4xl" />
            <h3 className="text-lg font-semibold text-gray-700 mt-3">
              Total Revenue
            </h3>
            <p className="text-3xl font-bold text-gray-900">
              ${adminStats?.totalRevenue}
            </p>
          </div>
        </div>
        <div className="my-8 rounded-xl">
          <Chart
            chartType="ColumnChart"
            width="100%"
            height="400px"
            options={options}
            data={data}
            loader={
              <div className="text-center text-lg font-semibold">
                Loading Chart...
              </div>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
