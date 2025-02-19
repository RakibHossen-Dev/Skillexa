import { Button } from "@/components/ui/button";
import notFound from "/notfound.png";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center  min-h-screen ">
      <img src={notFound} alt="" />
      <Link to="/">
        <Button className="bg-blue-700 hover:bg-blue-900">Back To Home</Button>
      </Link>
    </div>
  );
};

export default NotFound;
