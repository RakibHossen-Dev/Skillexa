// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import Select from "react-select";
// import { useForm, Controller } from "react-hook-form";
// import { useRef, useState } from "react";
// import axios from "axios";

// const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
// const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
// const options = [
//   { value: "chocolate", label: "Chocolate" },
//   { value: "strawberry", label: "Strawberry" },
//   { value: "vanilla", label: "Vanilla" },
// ];

// const AddCourse = () => {
//   const { register, handleSubmit, control, setValue, getValues } = useForm();
//   const [lectures, setLectures] = useState([{ title: "", video: null }]);

//   // videlo upload
//   const [videoUrl, setVideoUrl] = useState(null);
//   const fileInputRef = useRef(null);
//   // videlo upload
//   // console.log(lectures);
//   const addLecture = () => {
//     setLectures([...lectures, { title: "", video: null }]);
//   };

//   const handleLectureChange = (index, field, value) => {
//     const updatedLectures = [...lectures];
//     updatedLectures[index][field] = value;
//     setLectures(updatedLectures);
//   };

//   const removeLecture = (index) => {
//     const updatedLectures = lectures.filter((_, i) => i !== index);
//     setLectures(updatedLectures);
//   };

//   const onSubmit = async (data) => {
//     // console.log("Form Data:", data);
//     const imageFile = { image: data.image[0] };

//     const res = await axios.post(image_hosting_api, imageFile, {
//       headers: {
//         "content-type": "multipart/form-data",
//       },
//     });
//     const courseInfo = {
//       courseTitle: data.courseTitle,
//       courseBanner: res.data.data.display_url,
//       date: data.startDate,
//       category: data.category,
//       language: data.language,
//       difficulty: data.difficulty,
//       price: data.price,
//       skills: data.skills,
//       lectures: [...lectures],
//       description: data.description,
//     };

//     console.log("courseInfo", courseInfo);
//   };

//   return (
//     <div className="lg:m-14 md:m-8 m-3">
//       <div className="bg-white p-5 border rounded-lg">
//         <form onSubmit={handleSubmit(onSubmit)}>
//           <div className="flex justify-between items-center">
//             <h2 className="md:text-2xl text-xl font-semibold">
//               Create New Courses
//             </h2>
//             <Button type="submit" className="bg-blue-700 hover:bg-blue-800">
//               Add Course
//             </Button>
//           </div>

//           <div className="border m-2 md:m-5 md:p-3 px-3 rounded-lg">
//             <div>
//               <Button
//                 className="bg-blue-700 hover:bg-blue-800"
//                 type="button"
//                 onClick={addLecture}
//               >
//                 Add Lecture
//               </Button>

//               {lectures.map((lecture, index) => (
//                 <div
//                   key={index}
//                   className="flex flex-col gap-2 my-5 max-w-[700px] border p-5 rounded-lg"
//                 >
//                   <div className="flex justify-between items-center">
//                     <label className="font-semibold">Lecture Title</label>
//                     {lectures.length > 1 && (
//                       <button
//                         type="button"
//                         onClick={() => removeLecture(index)}
//                       >
//                         X
//                       </button>
//                     )}
//                   </div>
//                   <Input
//                     type="text"
//                     placeholder="Your Lecture Title"
//                     value={lecture.title}
//                     onChange={(e) =>
//                       handleLectureChange(index, "title", e.target.value)
//                     }
//                   />

//                   <label className="font-semibold">Upload Video</label>
//                   <Input
//                     type="file"
//                     accept="video/*"
//                     onChange={(e) =>
//                       handleLectureChange(index, "video", e.target.files[0])
//                     }
//                   />
//                 </div>
//               ))}
//             </div>

//             <div className="my-5 flex flex-col gap-3">
//               <div className="flex md:flex-row flex-col items-center gap-4">
//                 <div className="w-full">
//                   <label className="font-semibold">Course Title</label>
//                   <Input
//                     type="text"
//                     placeholder="Your course title"
//                     {...register("courseTitle", { required: true })}
//                   />
//                 </div>
//                 <div className="w-full">
//                   <label className="font-semibold">Upload Image</label>
//                   <Input type="file" accept="image/*" {...register("image")} />
//                 </div>
//               </div>

//               {/* <div className="flex md:flex-row flex-col items-center gap-4">
//                 <div className="w-full">
//                   <label className="font-semibold">Instructor Name</label>
//                   <Input
//                     type="text"
//                     placeholder="Instructor name"
//                     {...register("instructorName", { required: true })}
//                   />
//                 </div>
//                 <div className="w-full">
//                   <label className="font-semibold">Instructor Image</label>
//                   <Input type="file" {...register("instructorImage")} />
//                 </div>
//               </div> */}

//               <div className="flex md:flex-row flex-col items-center gap-4">
//                 <div className="w-full">
//                   <label className="font-semibold">Start Date</label>
//                   <Input
//                     type="date"
//                     {...register("startDate", { required: true })}
//                   />
//                 </div>
//                 <div className="w-full">
//                   <label className="font-semibold">Category</label>
//                   <select
//                     className="w-full border rounded-lg p-2"
//                     {...register("category")}
//                   >
//                     <option value="Programming">Programming</option>
//                     <option value="Design">Design</option>
//                   </select>
//                 </div>
//               </div>

//               <div className="flex md:flex-row flex-col items-center gap-4">
//                 <div className="w-full">
//                   <label className="font-semibold">Language</label>
//                   <select
//                     className="w-full border rounded-lg p-2"
//                     {...register("language")}
//                   >
//                     <option value="English">English</option>
//                     <option value="Bangla">Bangla</option>
//                     <option value="German">German</option>
//                   </select>
//                 </div>
//                 <div className="w-full">
//                   <label className="font-semibold">Difficulty Level</label>
//                   <select
//                     className="w-full border rounded-lg p-2"
//                     {...register("difficulty")}
//                   >
//                     <option value="Beginner">Beginner</option>
//                     <option value="Intermediate">Intermediate</option>
//                     <option value="Expert">Expert</option>
//                   </select>
//                 </div>
//               </div>

//               <div className="flex md:flex-row flex-col items-center gap-4">
//                 <div className="w-full">
//                   <label className="font-semibold">Course Price</label>
//                   <Input
//                     type="number"
//                     placeholder="Course price"
//                     {...register("price", { required: true })}
//                   />
//                 </div>
//                 <div className="w-full">
//                   <label className="font-semibold">Skills</label>
//                   <Controller
//                     name="skills"
//                     control={control}
//                     render={({ field }) => (
//                       <Select {...field} isMulti options={options} />
//                     )}
//                   />
//                 </div>
//               </div>

//               <div className="flex flex-col gap-2">
//                 <label className="font-semibold">Course Description</label>
//                 <Textarea
//                   className="min-h-32"
//                   placeholder="Type your course description."
//                   {...register("description", { required: true })}
//                 />
//               </div>
//             </div>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AddCourse;

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Select from "react-select";
import { useForm, Controller } from "react-hook-form";
import { useRef, useState } from "react";
import axios from "axios";
import useAuth from "@/hooks/useAuth";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import toast from "react-hot-toast";
import useAxiosSecure from "@/hooks/useAxiosSecure";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const CLOUDINARY_UPLOAD_PRESET = "skillexa";
const CLOUDINARY_CLOUD_NAME = "duhybktme";
const CLOUDINARY_UPLOAD_URL = `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/video/upload`;

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const AddCourse = () => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  const { register, handleSubmit, control } = useForm();
  const [lectures, setLectures] = useState([{ title: "", video: null }]);
  const [selectedOption, setSelectedOption] = useState(null);
  const addLecture = () => {
    setLectures([...lectures, { title: "", video: null }]);
  };

  const handleLectureChange = (index, field, value) => {
    const updatedLectures = [...lectures];
    updatedLectures[index][field] = value;
    setLectures(updatedLectures);
  };

  const removeLecture = (index) => {
    const updatedLectures = lectures.filter((_, i) => i !== index);
    setLectures(updatedLectures);
  };

  const uploadVideoToCloudinary = async (videoFile) => {
    const formData = new FormData();
    formData.append("file", videoFile);
    formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);

    try {
      const response = await axios.post(CLOUDINARY_UPLOAD_URL, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      return response.data.secure_url;
    } catch (error) {
      console.error("Error uploading video:", error);
      return null;
    }
  };

  const onSubmit = async (data) => {
    const imageFile = { image: data.image[0] };

    // Upload Image
    const imgRes = await axios.post(image_hosting_api, imageFile, {
      headers: { "content-type": "multipart/form-data" },
    });

    // Upload Videos to Cloudinary
    const uploadedLectures = await Promise.all(
      lectures.map(async (lecture) => {
        if (lecture.video) {
          const videoUrl = await uploadVideoToCloudinary(lecture.video);
          return { lectureTitle: lecture.title, lectureVideo: videoUrl };
        }
        return lecture;
      })
    );
    const tagsArray = selectedOption?.map((option) => option.value);
    const courseInfo = {
      courseTitle: data.courseTitle,
      courseBanner: imgRes.data.data.display_url,
      date: data.startDate,
      category: data.category,
      language: data.language,
      difficulty: data.difficulty,
      price: data.price,
      skills: tagsArray,
      instructorName: user?.displayName,
      instructorEmail: user?.email,
      instructorPhoto: user?.photoURL,
      lectures: uploadedLectures,
      description: data.description,
    };

    axiosSecure.post("/courses", courseInfo).then((res) => {
      // console.log(res);
      console.log(res.data.insertedId);
      if (res.data.insertedId) {
        toast.success("Course added successfully! ✅");
      }
    });

    // console.log("courseInfo", courseInfo);
    // console.log(user.email, user.displayName, user.photoURL);
  };

  return (
    <div className="lg:m-14 md:m-8 m-3">
      <div className="bg-white p-5 border rounded-lg">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex justify-between items-center">
            <h2 className="md:text-2xl text-xl font-semibold">
              Create New Courses
            </h2>
            <Button type="submit" className="bg-blue-700 hover:bg-blue-800">
              Add Course
            </Button>
          </div>

          <div className="border m-2 md:m-5 md:p-3 px-3 rounded-lg">
            <div>
              <Button
                className="bg-blue-700 hover:bg-blue-800"
                type="button"
                onClick={addLecture}
              >
                Add Lecture
              </Button>

              {lectures.map((lecture, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-2 my-5 max-w-[700px] border p-5 rounded-lg"
                >
                  <div className="flex justify-between items-center">
                    <label className="font-semibold">Lecture Title</label>
                    {lectures.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeLecture(index)}
                      >
                        X
                      </button>
                    )}
                  </div>
                  <Input
                    type="text"
                    placeholder="Your Lecture Title"
                    value={lecture.title}
                    onChange={(e) =>
                      handleLectureChange(index, "title", e.target.value)
                    }
                  />

                  <label className="font-semibold">Upload Video</label>
                  <Input
                    type="file"
                    accept="video/*"
                    onChange={(e) =>
                      handleLectureChange(index, "video", e.target.files[0])
                    }
                  />
                </div>
              ))}
            </div>

            <div className="my-5 flex flex-col gap-3">
              <div className="flex md:flex-row flex-col items-center gap-4">
                <div className="w-full">
                  <label className="font-semibold">Course Title</label>
                  <Input
                    type="text"
                    placeholder="Your course title"
                    {...register("courseTitle", { required: true })}
                  />
                </div>
                <div className="w-full">
                  <label className="font-semibold">Upload Image</label>
                  <Input type="file" accept="image/*" {...register("image")} />
                </div>
              </div>

              <div className="flex md:flex-row flex-col items-center gap-4">
                <div className="w-full">
                  <label className="font-semibold">Start Date</label>
                  <Input
                    type="date"
                    {...register("startDate", { required: true })}
                  />
                </div>
                <div className="w-full">
                  <label className="font-semibold">Category</label>
                  <select
                    className="w-full border rounded-lg p-2"
                    {...register("category")}
                  >
                    <option value="Programming">Programming</option>
                    <option value="Design">Design</option>
                  </select>
                </div>
              </div>

              <div className="flex md:flex-row flex-col items-center gap-4">
                <div className="w-full">
                  <label className="font-semibold">Language</label>
                  <select
                    className="w-full border rounded-lg p-2"
                    {...register("language")}
                  >
                    <option value="English">English</option>
                    <option value="Bangla">Bangla</option>
                    <option value="German">German</option>
                  </select>
                </div>
                <div className="w-full">
                  <label className="font-semibold">Difficulty Level</label>
                  <select
                    className="w-full border rounded-lg p-2"
                    {...register("difficulty")}
                  >
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Expert">Expert</option>
                  </select>
                </div>
              </div>
              <div className="flex md:flex-row flex-col items-center gap-4">
                <div className="w-full">
                  <label className="font-semibold">Course Price</label>
                  <Input
                    type="number"
                    placeholder="Course price"
                    {...register("price", { required: true })}
                  />
                </div>
                <div className="w-full">
                  <label className="font-semibold">Skills</label>
                  <Controller
                    name="skills"
                    control={control}
                    render={({ field }) => (
                      <Select
                        name="tag"
                        isMulti
                        defaultValue={selectedOption}
                        onChange={setSelectedOption}
                        options={options}
                      />
                    )}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-semibold">Course Description</label>
                <Textarea
                  className="min-h-32"
                  placeholder="Type your course description."
                  {...register("description", { required: true })}
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCourse;
