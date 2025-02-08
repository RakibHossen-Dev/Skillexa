import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

import useAuth from "@/hooks/useAuth";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import { AuthContext } from "@/providers/Authprovider";
import { useQuery } from "@tanstack/react-query";
import { useContext, useState } from "react";
import { Input } from "@/components/ui/input";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import axios from "axios";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const Courses = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { user } = useContext(AuthContext);
  const [updateId, setUpdatedId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  // console.log(user);
  const axiosPublic = useAxiosPublic();
  const { data: instructorCourses, refetch } = useQuery({
    queryKey: ["instructorCours", user?.email],
    queryFn: async () => {
      const res = await axiosPublic.get(`/instructorCourse/${user?.email}`);
      return res.data;
    },
  });

  // console.log(instructorCourses);

  const handleUpdateCourse = (id) => {
    setUpdatedId(id);
    setIsModalOpen(true);
  };

  const onSubmit = async (data) => {
    console.log(data);

    console.log(data);
    const imageFile = { image: data.image[0] };

    const res = await axios.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });

    const courseUpdateInfo = {
      courseTitle: data.courseTitle,
      courseBanner: res.data.data.display_url,
      price: data.price,
    };
    axiosPublic
      .patch(`/instructorCourseUpdate/${updateId}`, courseUpdateInfo)
      .then((res) => {
        console.log(res);
        if (res.data.modifiedCount > 0) {
          refetch();
          Swal.fire({
            title: "Updated!",
            text: "Your course has been updated .",
            icon: "success",
          });
        }
      });

    console.log(courseUpdateInfo);
    // console.log(updateId);
    setIsModalOpen(false);
  };

  const handleDeleteCourse = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPublic.delete(`/instructorCourseDelete/${id}`).then((res) => {
          console.log(res);
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };
  return (
    <div className="w-11/12 mx-auto my-10">
      <div className="border w-full">
        <Table>
          {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
          <TableHeader>
            <TableRow>
              <TableHead className="w-[200px]">Course Title</TableHead>
              <TableHead>Instructor Name</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Date</TableHead>
              <TableHead className="text-right">Price</TableHead>
              <TableHead className="text-right">Update</TableHead>
              <TableHead className="text-right">Delete</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {instructorCourses?.map((instructorCourss) => (
              <TableRow key={instructorCourss._id}>
                <TableCell className="font-medium capitalize">
                  {instructorCourss?.courseTitle}
                </TableCell>
                <TableCell>{instructorCourss?.instructorName}</TableCell>
                <TableCell>{instructorCourss?.category}</TableCell>
                <TableCell>{instructorCourss?.date}</TableCell>
                <TableCell className="text-right">
                  {instructorCourss?.price ? (
                    <>{instructorCourss?.price}$</>
                  ) : (
                    "Free"
                  )}
                </TableCell>
                <TableCell className="text-right">
                  <Button
                    onClick={() => handleUpdateCourse(instructorCourss._id)}
                    className="bg-blue-700 hover:bg-blue-900"
                  >
                    Update
                  </Button>
                </TableCell>
                <TableCell className="text-right">
                  <Button
                    onClick={() => handleDeleteCourse(instructorCourss._id)}
                    className="bg-red-200 text-red-600 hover:text-white hover:bg-red-900"
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      {/* Modal for updating course */}
      {isModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-600 bg-opacity-50">
          <div className="modal-box rounded-sm bg-white w-11/12 md:w-1/3 p-6">
            <button
              onClick={() => setIsModalOpen(false)}
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </button>
            <h3 className="font-bold text-lg">Update Course</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="mt-4 space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Course Title
                </label>
                <Input
                  type="text"
                  {...register("courseTitle", { required: true })}
                  placeholder="Enter Course Title"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Upload Banner Image
                </label>
                <Input
                  type="file"
                  accept="image/*"
                  {...register("image", { required: true })}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Price ($)
                </label>
                <Input
                  type="number"
                  {...register("price", { required: true })}
                  placeholder="Enter Price"
                  required
                />
              </div>
              <div className="flex justify-end">
                <Button type="submit" className="bg-blue-700 hover:bg-blue-900">
                  Update Course
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Courses;
