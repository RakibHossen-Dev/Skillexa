import { Link, useParams } from "react-router-dom";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { FaArrowLeft, FaEye, FaHeart } from "react-icons/fa";

const BlogDetails = () => {
  const { id } = useParams();
  const axiosPublic = useAxiosPublic();
  const { data: blog } = useQuery({
    queryKey: ["blogs", id],
    queryFn: async () => {
      const res = await axiosPublic.get(`/blogs/${id}`);
      return res.data;
    },
  });

  return (
    <div>
      <div className="max-w-3xl mx-auto my-10 p-6 ">
        <Link to="/">
          <button
            //   onClick={() => navigate("/")}
            className="flex items-center gap-2 bg-blue-700 text-white px-4 py-2 rounded-sm mb-4 hover:bg-blue-900 transition-all duration-300"
          >
            <FaArrowLeft /> Back to Home
          </button>
        </Link>

        <img
          src={blog?.image}
          alt={blog?.title}
          className="w-full h-64 object-cover "
        />
        <div className="mt-6">
          <h1 className="text-3xl font-bold text-gray-800">{blog?.title}</h1>
          <p className="text-gray-500 mt-2">
            {blog?.publishedDate} • {blog?.category}
          </p>

          <div className="flex items-center gap-4 mt-4">
            <img
              src={blog?.authorPhoto}
              alt={blog?.author}
              className="w-12 h-12 rounded-full border-2 border-gray-300"
            />
            <p className="text-gray-700 font-semibold">{blog?.author}</p>
          </div>

          <p className="text-gray-700 mt-4">{blog?.description}</p>

          <div className="flex flex-wrap gap-2 mt-4">
            {blog?.tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
              >
                #{tag}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between mt-6">
            <div className="flex items-center gap-2 text-gray-600">
              <FaEye className="text-xl" /> <span>{blog?.viewCount} Views</span>
            </div>
            <div className="flex items-center gap-2 ">
              <FaHeart className="text-xl" />{" "}
              <span className="text-blue-500">{blog?.likeCount} Likes</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
