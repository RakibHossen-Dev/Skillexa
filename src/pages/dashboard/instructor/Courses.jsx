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
import { useContext } from "react";

const Courses = () => {
  const { user } = useContext(AuthContext);

  // console.log(user);
  const axiosPublic = useAxiosPublic();
  const { data: instructorCourses } = useQuery({
    queryKey: ["instructorCours", user?.email],
    queryFn: async () => {
      const res = await axiosPublic.get(`/instructorCourse/${user?.email}`);
      return res.data;
    },
  });

  // console.log(instructorCourses);

  const handleUpdateCourse = (id) => {
    console.log(id);
  };
  const handleDeleteCourse = (id) => {
    console.log(id);
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
    </div>
  );
};

export default Courses;
