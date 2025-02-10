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

const AdminAllStudents = () => {
  const axiosPublic = useAxiosPublic();
  const { data: allUsers = [], refetch } = useQuery({
    queryKey: ["allUser"],
    queryFn: async () => {
      const res = await axiosPublic.get("/allUsers");
      return res.data;
    },
  });
  console.log(allUsers);

  const handleMakeInstructor = (id) => {
    axiosPublic
      .patch(`/changeRole/${id}`, { role: "instructor" })
      .then((res) => {
        refetch();
        if (res.data.modifiedCount > 0) {
          Swal.fire({
            title: "Updated!",
            text: "User role updated successfully.",
            icon: "success",
          });
        }
      });
  };

  const handleDeleteStudent = (id) => {
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
        axiosPublic.delete(`/deleteUser/${id}`).then((res) => {
          console.log(res);
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your student has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };
  return (
    <div className=" bg-gray-100 py-10">
      <div className="w-11/12 mx-auto">
        <h3 className="text-2xl font-bold mb-4">All Students</h3>

        <div className="border w-full">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[200px]">Image</TableHead>
                <TableHead>Student Name</TableHead>
                <TableHead>Eamil</TableHead>
                <TableHead>Role</TableHead>
                <TableHead className="text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {allUsers
                ?.filter((allUser) => allUser.role === "student")
                .map((allUser) => (
                  <TableRow key={allUser._id}>
                    <TableCell className="font-medium capitalize">
                      <img
                        className="h-20 w-20 shadow-xl rounded-sm"
                        src={allUser?.photo}
                        alt=""
                      />
                    </TableCell>
                    <TableCell>{allUser?.name}</TableCell>
                    <TableCell>{allUser?.email}</TableCell>
                    <TableCell>{allUser?.role}</TableCell>

                    <TableCell className="text-right">
                      <Button
                        onClick={() => handleMakeInstructor(allUser._id)}
                        className="bg-blue-700 hover:bg-blue-900"
                      >
                        Make Instructor
                      </Button>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button
                        onClick={() => handleDeleteStudent(allUser._id)}
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
    </div>
  );
};

export default AdminAllStudents;
