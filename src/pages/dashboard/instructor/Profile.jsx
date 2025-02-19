// import useAuth from "@/hooks/useAuth";
// import { Button } from "@/components/ui/button";
// import { FaFacebook, FaTwitter, FaDribbble, FaGithub } from "react-icons/fa";
// import useUserRole from "@/hooks/useUserRole";

// const Profile = () => {
//   const { user, logOut } = useAuth();
//   const [userRole] = useUserRole();

//   return (
//     <div className="bg-gray-100">
//       <div className="flex justify-center items-center min-h-screen w-11/12 mx-auto ">
//         <div className="w-full max-w-3xl bg-white text-blue-700 rounded-lg overflow-hidden shadow-lg">
//           {/* Cover Image */}
//           <div className="relative">
//             <img
//               src="https://i.ibb.co.com/PZtSSn5S/download-10.png"
//               alt="Cover"
//               className="w-full h-48 object-cover"
//             />
//             <div className="absolute top-4 right-4">
//               <Button className="bg-blue-600 hover:bg-blue-700">Edit</Button>
//             </div>
//           </div>

//           {/* Profile Image & Info */}
//           <div className="flex flex-col items-center -mt-16">
//             <div className="relative">
//               <img
//                 src={user?.photoURL || "https://via.placeholder.com/100"}
//                 alt="Profile"
//                 className="w-32 h-32 rounded-full border-4 border-blue-800"
//               />
//             </div>
//             <h2 className="text-2xl font-semibold mt-3">
//               {user?.displayName || "User Name"}
//             </h2>
//             <p className="text-black capitalize">{userRole}</p>
//           </div>

//           {/* Stats */}
//           <div className="flex justify-center gap-8 mt-4">
//             <div className="text-center">
//               <span className="font-bold text-lg">259</span>
//               <p className="text-black">Posts</p>
//             </div>
//             <div className="text-center">
//               <span className="font-bold text-lg">129K</span>
//               <p className="text-black">Followers</p>
//             </div>
//             <div className="text-center">
//               <span className="font-bold text-lg">2K</span>
//               <p className="text-black">Following</p>
//             </div>
//           </div>

//           {/* About Section */}
//           <div className="text-center mt-6 px-6">
//             <h3 className="text-xl font-semibold">About Me</h3>
//             <p className="text-black mt-2 lg:w-9/12 mx-auto">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//               Pellentesque posuere fermentum urna.
//             </p>
//           </div>

//           {/* Social Links */}
//           <div className="flex justify-center gap-6 mt-6 mb-6">
//             <FaFacebook className="text-2xl cursor-pointer hover:text-blue-500" />
//             <FaTwitter className="text-2xl cursor-pointer hover:text-blue-400" />
//             <FaDribbble className="text-2xl cursor-pointer hover:text-pink-500" />
//             <FaGithub className="text-2xl cursor-pointer hover:text-gray-500" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;

import useAuth from "@/hooks/useAuth";
import { FaPen, FaPenAlt } from "react-icons/fa";
import {
  FaFacebook,
  FaXTwitter,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa6";

const Profile = () => {
  const { user, logOut } = useAuth();
  return (
    <div className=" bg-gray-100 ">
      <div className="w-11/12 mx-auto  lg:p-6">
        <h3 className="mb-5 text-2xl font-semibold mt-3">Profile</h3>
        <div className=" bg-white  rounded-lg p-6 border">
          {/* Profile Header */}
          <h3 className="text-lg font-semibold mb-3">Profile</h3>

          <div className="flex lg:flex-row flex-col justify-center items-center gap-4 border rounded-lg p-4">
            <img
              src={user?.photoURL}
              alt="Profile"
              className="w-20 h-20 rounded-full border"
            />
            <div>
              <h2 className="text-xl font-bold lg:text-start text-center">
                {user?.displayName}
              </h2>
              <p className="text-gray-600 lg:text-start text-center">
                Team Manager | Leeds, United Kingdom
              </p>
            </div>
            <div className="lg:ml-auto flex gap-3">
              <FaFacebook className="text-4xl text-gray-500 cursor-pointer hover:text-blue-600 border p-1.5 rounded-badge" />
              <FaXTwitter className="text-4xl text-gray-500  cursor-pointer hover:text-black border p-1.5 rounded-badge" />
              <FaLinkedin className="text-4xl text-gray-500  cursor-pointer hover:text-blue-500 border p-1.5 rounded-badge" />
              <FaInstagram className="text-4xl text-gray-500  cursor-pointer hover:text-pink-500 border p-1.5 rounded-badge" />
            </div>
            <button className="text-gray-500 lg:w-auto w-full justify-center flex items-center gap-2 border px-3 py-1 rounded-badge">
              <FaPen></FaPen>
              Edit
            </button>
          </div>

          {/* Personal Information */}
          <div className="mt-8 p-4 border rounded-lg">
            <div className="flex lg:flex-row flex-col justify-between items-center">
              <h3 className="text-lg font-semibold">Personal Information</h3>

              <button className="text-gray-500 hidden lg:flex items-center gap-2 border px-3 py-1 rounded-badge">
                <FaPen></FaPen>
                Edit
              </button>
            </div>
            <div className="mt-2 grid grid-cols-1 lg:grid-cols-2 gap-4 text-gray-700">
              <p>
                <span className="text-sm text-gray-500">First Name</span>
                <br />
                <strong>{user?.displayName?.split(" ")[0]}</strong>
              </p>
              <p>
                <span className="text-sm text-gray-500">Last Name</span>
                <br />
                <strong>{user?.displayName?.split(" ")[1]}</strong>
              </p>
              <p>
                <span className="text-sm text-gray-500">Email</span>
                <br />
                <strong>{user?.email}</strong>
              </p>
              <p>
                <span className="text-sm text-gray-500">Phone</span>
                <br />
                <strong>+09 363 398 46</strong>
              </p>
              <p>
                <span className="text-sm text-gray-500">Bio</span>

                <br />
                <strong>Team Manager</strong>
              </p>
              <button className="text-gray-500 lg:hidden justify-center flex items-center gap-2 border px-3 py-1 rounded-badge">
                <FaPen></FaPen>
                Edit
              </button>
            </div>
          </div>

          {/* Address Section */}
          <div className="mt-8 p-4 border rounded-lg">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Address</h3>
              <button className="text-gray-500 hidden  lg:flex items-center gap-2 border px-3 py-1 rounded-badge">
                <FaPen></FaPen>
                Edit
              </button>
            </div>
            <div className="mt-2 grid grid-cols-1 lg:grid-cols-2 gap-4 text-gray-700">
              <p>
                <span className="text-sm text-gray-500">Country</span>
                <br />
                <strong> United Kingdom</strong>
              </p>
              <p>
                <span className="text-sm text-gray-500">City/State</span>
                <br />
                <strong> Leeds, East London</strong>
              </p>

              <p>
                <span className="text-sm text-gray-500">Postal Code</span>
                <br />
                <strong> ERT 2489</strong>
              </p>

              <p>
                <span className="text-sm text-gray-500">TAX ID</span>
                <br />
                <strong> AS4568384</strong>
              </p>
              <button className="text-gray-500 lg:hidden justify-center flex items-center gap-2 border px-3 py-1 rounded-badge">
                <FaPen></FaPen>
                Edit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
