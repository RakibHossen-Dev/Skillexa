import { Link } from "react-router-dom";
import logo from "../assets/skillexa.png";

const Navber = () => {
  return (
    <div>
      This is navber
      <Link>
        <img className="w-60 " src={logo}></img>
      </Link>
    </div>
  );
};

export default Navber;
