import Marquee from "react-fast-marquee";
import Featured1 from "../assets/Featured1.png";
import Featured2 from "../assets/Featured2.png";
import Featured3 from "../assets/Featured3.png";
import Featured4 from "../assets/Featured4.png";
import Featured5 from "../assets/Featured5.png";
import Featured6 from "../assets/Featured6.png";
import Featured7 from "../assets/Featured7.png";
import Featured8 from "../assets/Featured8.png";

const Featured = () => {
  return (
    <div className="my-8 w-111/12 mx-auto">
      <Marquee className="space-x-5">
        <img className="lg:w-52 w-40 lg:mr-5 mr-3" src={Featured1} alt="" />
        <img className="lg:w-52 w-40 lg:mr-5 mr-3" src={Featured2} alt="" />
        <img className="lg:w-52 w-40 lg:mr-5 mr-3" src={Featured3} alt="" />
        <img className="lg:w-52 w-40 lg:mr-5 mr-3" src={Featured4} alt="" />
        <img className="lg:w-52 w-40 lg:mr-5 mr-3" src={Featured5} alt="" />
        <img className="lg:w-52 w-40 lg:mr-5 mr-3" src={Featured6} alt="" />
        <img className="lg:w-52 w-40 lg:mr-5 mr-3" src={Featured7} alt="" />
        <img className="lg:w-52 w-40 lg:mr-5 mr-3" src={Featured8} alt="" />
      </Marquee>
    </div>
  );
};

export default Featured;
