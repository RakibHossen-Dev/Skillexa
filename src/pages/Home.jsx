import Banner from "../components/Banner";
import Featured from "../components/Featured";
import Poster from "../components/Poster";
import Testimonial from "../components/Testimonial";
import UsersPoster from "../components/UsersPoster";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Featured></Featured>
      <UsersPoster></UsersPoster>
      <Poster></Poster>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
