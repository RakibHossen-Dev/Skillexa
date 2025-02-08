import useAxiosPublic from "@/hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
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
import Swal from "sweetalert2";
const AdminAllCoures = () => {
  const axiosPublic = useAxiosPublic();
  const { data: adminAllCourses = [], refetch } = useQuery({
    queryKey: ["allCourse"],
    queryFn: async () => {
      const res = await axiosPublic.get("/allCourses");
      return res.data;
    },
  });
  console.log(adminAllCourses);
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
              <TableHead className="text-right">Delete</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {adminAllCourses?.map((instructorCourss) => (
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

export default AdminAllCoures;
