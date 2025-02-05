// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { useState } from "react";
// import { Textarea } from "@/components/ui/textarea";
// import Select from "react-select";
// // import { Select } from "@/components/ui/select";
// const options = [
//   { value: "chocolate", label: "Chocolate" },
//   { value: "strawberry", label: "Strawberry" },
//   { value: "vanilla", label: "Vanilla" },
// ];
// const AddCourse = () => {
//   const [isCircular, setIsCircular] = useState(true);
//   const [selectedOption, setSelectedOption] = useState(null);

//   return (
//     <div className="lg:m-14  md:m-8 m-3">
//       <div className="bg-white p-5 border rounded-lg">
//         <div className="flex justify-between items-center">
//           <h2 className="text-2xl font-semibold">Create New Courses</h2>
//           <Button className="bg-blue-700 hover:bg-blue-800">Add Course</Button>
//         </div>

//         <div className="border m-5 p-3 rounded-lg">
//           {/* ghifughiu */}

//           <div className="flex  gap-4 my-4 border p-2 rounded-lg w-[250px]">
//             <Button
//               onClick={() => setIsCircular(true)}
//               className={`px-3 py-2 rounded-lg shadow  transition ${
//                 isCircular ? "bg-blue-700 text-white" : "bg-gray-200 text-black"
//               }`}
//             >
//               Curriculum
//             </Button>

//             <Button
//               onClick={() => setIsCircular(false)}
//               className={`px-3 py-2 rounded-lg shadow transition ${
//                 !isCircular
//                   ? "bg-blue-700 text-white"
//                   : "bg-gray-200 text-black"
//               }`}
//             >
//               Course Details
//             </Button>
//           </div>
//           {isCircular && (
//             <div>
//               <Button className="bg-blue-700 hover:bg-blue-800">
//                 Add Lecture
//               </Button>
//             </div>
//           )}
//           <div>
//             {isCircular ? (
//               <div className="flex flex-col gap-2 my-5 max-w-[700px] border p-5 rounded-lg">
//                 <Input type="email" placeholder="Your Lecture Title" />

//                 <Input id="picture" type="file" />
//               </div>
//             ) : (
//               <div className="my-5 flex flex-col gap-3">
//                 <div className="flex md:flex-row flex-col items-center gap-4">
//                   <Input type="title" placeholder="Your coures title" />
//                   <Input id="picture" type="file" />
//                 </div>
//                 <div className="flex md:flex-row flex-col items-center gap-4">
//                   <Input type="date" />
//                   <select className="w-full border rounded-lg p-2 ">
//                     <option value="Hello">Programming</option>
//                     <option value="Hello">Programming</option>
//                   </select>
//                 </div>
//                 <div className="flex md:flex-row flex-col items-center gap-4">
//                   <select className="w-full border rounded-lg p-2 ">
//                     <option value="Hello">English</option>
//                     <option value="Hello">Bangla</option>
//                     <option value="Hello">Garmay</option>
//                   </select>
//                   <select className="w-full border rounded-lg p-2 ">
//                     <option value="Hello">Beginner</option>
//                     <option value="Hello">Intermediate</option>
//                     <option value="Hello">Expart</option>
//                   </select>
//                 </div>
//                 <div className="flex md:flex-row flex-col items-center gap-4">
//                   <Input type="number" placeholder="Your course price" />
//                   <Select
//                     className="w-full  rounded-lg py-2 "
//                     defaultValue={selectedOption}
//                     onChange={setSelectedOption}
//                     isMulti
//                     options={options}
//                   />
//                 </div>
//                 <div className="flex items-center gap-4">
//                   <Textarea
//                     className="min-h-32"
//                     placeholder="Type your course description."
//                   />
//                 </div>
//               </div>
//             )}
//           </div>
//           {/* ghifughiu */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddCourse;
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import Select from "react-select";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const AddCourse = () => {
  const [isCircular, setIsCircular] = useState(true);
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div className="lg:m-14 md:m-8 m-3">
      <div className="bg-white p-5 border rounded-lg">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold">Create New Courses</h2>
          <Button className="bg-blue-700 hover:bg-blue-800">Add Course</Button>
        </div>

        <div className="border m-5 p-3 rounded-lg">
          <div className="flex gap-4 my-4 border p-2 rounded-lg w-[250px]">
            <Button
              onClick={() => setIsCircular(true)}
              className={`px-3 py-2 rounded-lg shadow transition ${
                isCircular ? "bg-blue-700 text-white" : "bg-gray-200 text-black"
              }`}
            >
              Curriculum
            </Button>

            <Button
              onClick={() => setIsCircular(false)}
              className={`px-3 py-2 rounded-lg shadow transition ${
                !isCircular
                  ? "bg-blue-700 text-white"
                  : "bg-gray-200 text-black"
              }`}
            >
              Course Details
            </Button>
          </div>
          {isCircular && (
            <div>
              <Button className="bg-blue-700 hover:bg-blue-800">
                Add Lecture
              </Button>
            </div>
          )}
          <div>
            {isCircular ? (
              <div className="flex flex-col gap-2 my-5 max-w-[700px] border p-5 rounded-lg">
                <label className="font-semibold ">Lecture Title</label>
                <Input type="text" placeholder="Your Lecture Title" />

                <label className="font-semibold">Upload File</label>
                <Input id="picture" type="file" />
              </div>
            ) : (
              <div className="my-5 flex flex-col gap-3">
                <div className="flex md:flex-row flex-col items-center gap-4">
                  <div className="w-full">
                    <label className="font-semibold ">Course Title</label>
                    <Input type="text" placeholder="Your course title" />
                  </div>
                  <div className="w-full">
                    <label className="font-semibold">Upload Image</label>
                    <Input id="picture" type="file" />
                  </div>
                </div>
                <div className="flex md:flex-row flex-col items-center gap-4">
                  <div className="w-full">
                    <label className="font-semibold ">Instructor Name</label>
                    <Input type="text" placeholder="Your course title" />
                  </div>
                  <div className="w-full">
                    <label className="font-semibold">Instructor Image</label>
                    <Input id="picture" type="file" />
                  </div>
                </div>
                <div className="flex md:flex-row flex-col items-center gap-4">
                  <div className="w-full">
                    <label className="font-semibold">Start Date</label>
                    <Input type="date" />
                  </div>
                  <div className="w-full">
                    <label className="font-semibold">Category</label>
                    <select className="w-full border rounded-lg p-2">
                      <option value="Programming">Programming</option>
                      <option value="Design">Design</option>
                    </select>
                  </div>
                </div>
                <div className="flex md:flex-row flex-col items-center gap-4">
                  <div className="w-full">
                    <label className="font-semibold">Language</label>
                    <select className="w-full border rounded-lg p-2">
                      <option value="English">English</option>
                      <option value="Bangla">Bangla</option>
                      <option value="German">German</option>
                    </select>
                  </div>
                  <div className="w-full">
                    <label className="font-semibold">Difficulty Level</label>
                    <select className="w-full border rounded-lg p-2">
                      <option value="Beginner">Beginner</option>
                      <option value="Intermediate">Intermediate</option>
                      <option value="Expert">Expert</option>
                    </select>
                  </div>
                </div>
                <div className="flex md:flex-row flex-col items-center gap-4">
                  <div className="w-full">
                    <label className="font-semibold">Course Price</label>
                    <Input type="number" placeholder="Your course price" />
                  </div>
                  <div className="w-full">
                    <label className="font-semibold">Skills</label>
                    <Select
                      className="w-full rounded-lg py-2"
                      defaultValue={selectedOption}
                      onChange={setSelectedOption}
                      isMulti
                      options={options}
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-semibold">Course Description</label>
                  <Textarea
                    className="min-h-32"
                    placeholder="Type your course description."
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCourse;
