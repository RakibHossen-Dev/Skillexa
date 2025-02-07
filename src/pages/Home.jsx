import PopularCourses from "@/components/PopularCourses";
import Banner from "../components/Banner";
import Blogs from "../components/Blogs";
import Featured from "../components/Featured";
import PopularCategories from "../components/PopularCategories";
// import PopularCategories from "../components/PopularCategories";
import Poster from "../components/Poster";
import Testimonial from "../components/Testimonial";
import UsersPoster from "../components/UsersPoster";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Featured></Featured>
      <PopularCourses></PopularCourses>
      <UsersPoster></UsersPoster>
      {/* <PopularCategories><PopularCategories> */}
      <PopularCategories></PopularCategories>
      <Poster></Poster>
      <Blogs></Blogs>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
