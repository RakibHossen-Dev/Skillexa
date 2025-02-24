import useAxiosPublic from "@/hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { LuBookCheck } from "react-icons/lu";
import { Link } from "react-router-dom";
import { BiSort } from "react-icons/bi";
import { useState } from "react";

const AllCourse = () => {
  const axiosPublic = useAxiosPublic();
  const { data: allCourses = [] } = useQuery({
    queryKey: ["allCourse"],
    queryFn: async () => {
      const res = await axiosPublic.get("/allCourses");
      return res.data;
    },
  });

  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const [selectedCategory, setSelectedCategory] = useState([]);
  const [selectedDifficulty, setSelectedDifficulty] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState([]);
  const [sortOption, setSortOption] = useState(""); // Sorting state

  const handleFilterChange = (type, value) => {
    if (type === "category") {
      setSelectedCategory((prev) =>
        prev.includes(value)
          ? prev.filter((c) => c !== value)
          : [...prev, value]
      );
    } else if (type === "difficulty") {
      setSelectedDifficulty((prev) =>
        prev.includes(value)
          ? prev.filter((d) => d !== value)
          : [...prev, value]
      );
    } else if (type === "language") {
      setSelectedLanguage((prev) =>
        prev.includes(value)
          ? prev.filter((l) => l !== value)
          : [...prev, value]
      );
    }
  };

  // Sort function
  const handleSortChange = (option) => {
    setSortOption(option);
    setIsOpen(false);
  };

  const filteredCourses = allCourses
    .filter(
      (course) =>
        (selectedCategory.length === 0 ||
          selectedCategory.includes(course.category)) &&
        (selectedDifficulty.length === 0 ||
          selectedDifficulty.includes(course.difficulty)) &&
        (selectedLanguage.length === 0 ||
          selectedLanguage.includes(course.language))
    )
    .sort((a, b) => {
      if (sortOption === "price") {
        return (a.price || 0) - (b.price || 0);
      } else if (sortOption === "date") {
        return new Date(b.date) - new Date(a.date);
      }
      return 0;
    });

  return (
    <div className="bg-base-100">
      <div className="w-11/12 mx-auto pb-16 pt-6">
        <div className="flex justify-between items-center my-6">
          <h3 className="text-2xl font-bold">All Courses</h3>

          {/* Sort Button */}
          <div className="relative">
            <button
              onClick={toggleMenu}
              className="border py-1 flex items-center gap-2 text-blue-700 px-6 rounded-sm"
            >
              <BiSort />
              {sortOption === "price"
                ? "Price"
                : sortOption === "date"
                ? "Latest"
                : "Sort By"}
            </button>
            {isOpen && (
              <div className="absolute right-0 mt-2 bg-white border rounded-sm shadow-lg">
                <button
                  className={`block px-4 py-2 hover:bg-gray-200 w-40 ${
                    sortOption === "price" ? "bg-gray-300" : ""
                  }`}
                  onClick={() => handleSortChange("price")}
                >
                  Sort by Price
                </button>
                <button
                  className={`block px-4 py-2 hover:bg-gray-200 w-40 ${
                    sortOption === "date" ? "bg-gray-300" : ""
                  }`}
                  onClick={() => handleSortChange("date")}
                >
                  Sort by Latest
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="grid lg:grid-cols-12 lg:gap-10">
          {/* Filter Sidebar */}
          <div className="lg:col-span-3 lg:flex lg:flex-col grid grid-cols-2 gap-3">
            <div className="space-y-2">
              <h3 className="text-xl font-bold mb-3">Category</h3>
              {[
                "Programming",
                "Language Learning",
                "Content Creation",
                "Online Business",
                "Coaching",
                "Teaching",
                "Passive Income",
                "Photography",
              ].map((category) => (
                <div key={category} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="checkbox"
                    onChange={() => handleFilterChange("category", category)}
                  />
                  {category}
                </div>
              ))}
            </div>

            <div className="space-y-2 my-4">
              <h3 className="text-xl font-bold mb-3">Level</h3>
              {["Beginner", "Intermediate", "Expert"].map((level) => (
                <div key={level} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="checkbox"
                    onChange={() => handleFilterChange("difficulty", level)}
                  />
                  {level}
                </div>
              ))}
            </div>

            <div className="space-y-2 mb-5">
              <h3 className="text-xl font-bold mb-3">Language</h3>
              {["English", "Bangla", "German", "Hindi", "Spanish"].map(
                (lang) => (
                  <div key={lang} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      className="checkbox"
                      onChange={() => handleFilterChange("language", lang)}
                    />
                    {lang}
                  </div>
                )
              )}
            </div>
          </div>

          {/* Course Cards */}
          <div className="lg:col-span-9">
            <div className="grid lg:grid-cols-1 md:grid-cols-2 grid-cols-1 gap-4">
              {filteredCourses.map((course) => (
                <Link to={`/courseDetails/${course._id}`} key={course._id}>
                  <div className="flex lg:flex-row flex-col items-center gap-5 shadow-md border rounded-sm p-3 bg-white">
                    <img
                      className="lg:h-[200px] lg:w-[300px] w-full"
                      src={course.courseBanner}
                      alt=""
                    />
                    <div className="p-3 space-y-1">
                      <h3 className="text-2xl font-bold capitalize">
                        {course.courseTitle}
                      </h3>
                      <p>{course.description.slice(0, 80)}...</p>
                      <p className="flex items-center gap-2">
                        <LuBookCheck />
                        <span>{course.lectures.length} Lecture</span>
                      </p>
                      <p className="text-blue-700 font-semibold">
                        {course.price ? (
                          `Price: ${course.price}$`
                        ) : (
                          <span className="text-lg font-bold">Free</span>
                        )}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllCourse;
