import CountUp from "react-countup";

const UsersPoster = () => {
  return (
    <div className="my-10 bg-blue-700 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 w-11/12 mx-auto">
        <div className="bg-[#ECEDEF] p-4 rounded-lg text-center">
          <h3 className="text-5xl font-bold mb-3 text-blue-700">
            <CountUp start={0} end={2000} duration={3} />+
          </h3>
          <p className="text-2xl font-semibold">CLASSES</p>
        </div>
        <div className="bg-[#ECEDEF] p-4 rounded-lg text-center">
          {/* <h3 className="text-5xl font-bold mb-3 text-blue-700">100+</h3> */}
          <h3 className="text-5xl font-bold mb-3 text-blue-700">
            <CountUp start={0} end={100} duration={5} />+
          </h3>
          <p className="text-2xl font-semibold">TEACHERS</p>
        </div>
        <div className="bg-[#ECEDEF] p-4 rounded-lg text-center">
          <h3 className="text-5xl font-bold mb-3 text-blue-700">
            <CountUp start={0} end={10000} duration={2} />+
          </h3>
          <p className="text-2xl font-semibold">MEMBERS</p>
        </div>
        <div className="bg-[#ECEDEF] p-4 rounded-lg text-center">
          <h3 className="text-5xl font-bold mb-3 text-blue-700">
            <CountUp start={0} end={5} duration={5} />
          </h3>
          <p className="text-2xl font-semibold">RATING</p>
        </div>
      </div>
    </div>
  );
};

export default UsersPoster;
