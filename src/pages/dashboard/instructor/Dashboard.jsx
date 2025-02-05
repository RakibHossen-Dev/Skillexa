import { Button } from "@/components/ui/button";

const Dashboard = () => {
  return (
    <div>
      {/* Dashboard Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold">Total Courses</h3>
          <p className="text-3xl font-bold text-blue-600 mt-2">12</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold">Active Students</h3>
          <p className="text-3xl font-bold text-blue-600 mt-2">356</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold">New Signups</h3>
          <p className="text-3xl font-bold text-blue-600 mt-2">22</p>
        </div>
      </div>
      <Button>Click me</Button>
    </div>
  );
};

export default Dashboard;
