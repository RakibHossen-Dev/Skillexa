import useAuth from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { FaFacebook, FaTwitter, FaDribbble, FaGithub } from "react-icons/fa";
import useUserRole from "@/hooks/useUserRole";

const Profile = () => {
  const { user, logOut } = useAuth();
  const [userRole] = useUserRole();

  return (
    <div className="flex justify-center items-center min-h-screen w-11/12 mx-auto ">
      <div className="w-full max-w-3xl bg-white text-blue-700 rounded-lg overflow-hidden shadow-lg">
        {/* Cover Image */}
        <div className="relative">
          <img
            src="https://i.ibb.co.com/PZtSSn5S/download-10.png"
            alt="Cover"
            className="w-full h-48 object-cover"
          />
          <div className="absolute top-4 right-4">
            <Button className="bg-blue-600 hover:bg-blue-700">Edit</Button>
          </div>
        </div>

        {/* Profile Image & Info */}
        <div className="flex flex-col items-center -mt-16">
          <div className="relative">
            <img
              src={user?.photoURL || "https://via.placeholder.com/100"}
              alt="Profile"
              className="w-32 h-32 rounded-full border-4 border-blue-800"
            />
          </div>
          <h2 className="text-2xl font-semibold mt-3">
            {user?.displayName || "User Name"}
          </h2>
          <p className="text-black capitalize">{userRole}</p>
        </div>

        {/* Stats */}
        <div className="flex justify-center gap-8 mt-4">
          <div className="text-center">
            <span className="font-bold text-lg">259</span>
            <p className="text-black">Posts</p>
          </div>
          <div className="text-center">
            <span className="font-bold text-lg">129K</span>
            <p className="text-black">Followers</p>
          </div>
          <div className="text-center">
            <span className="font-bold text-lg">2K</span>
            <p className="text-black">Following</p>
          </div>
        </div>

        {/* About Section */}
        <div className="text-center mt-6 px-6">
          <h3 className="text-xl font-semibold">About Me</h3>
          <p className="text-black mt-2 lg:w-9/12 mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque posuere fermentum urna.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mt-6 mb-6">
          <FaFacebook className="text-2xl cursor-pointer hover:text-blue-500" />
          <FaTwitter className="text-2xl cursor-pointer hover:text-blue-400" />
          <FaDribbble className="text-2xl cursor-pointer hover:text-pink-500" />
          <FaGithub className="text-2xl cursor-pointer hover:text-gray-500" />
        </div>
      </div>
    </div>
  );
};

export default Profile;
