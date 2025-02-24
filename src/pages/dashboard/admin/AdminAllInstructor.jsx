// const AdminAllInstructor = () => {
//   return (
//     <div className="w-11/12 mx-auto my-10">This is AdminAllInstructor</div>
//   );
// };

// export default AdminAllInstructor;

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
import useAxiosSecure from "@/hooks/useAxiosSecure";
const AdminAllInstructor = () => {
  const axiosSecure = useAxiosSecure();

  const { data: allUsers = [], refetch } = useQuery({
    queryKey: ["allUser"],
    queryFn: async () => {
      const res = await axiosSecure.get("/allUsers");
      return res.data;
    },
  });
  // console.log(allUsers);

  const handleMakeAdmin = (id) => {
    // console.log(admin, id);
    axiosSecure.patch(`/changeRole/${id}`, { role: "admin" }).then((res) => {
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

  const handleDeleteInstructor = (id) => {
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
        axiosSecure.delete(`/deleteUser/${id}`).then((res) => {
          console.log(res);
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your Instrutor has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };
  return (
    <div className="bg-gray-100 py-10">
      <div className="w-11/12 mx-auto ">
        <h3 className="text-2xl font-bold mb-4">All Instructors</h3>

        <div className="border w-full ">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[200px]">Image</TableHead>
                <TableHead>Student Name</TableHead>
                <TableHead>Eamil</TableHead>
                <TableHead>Role</TableHead>
                <TableHead className="text-right">Action</TableHead>
                <TableHead className="text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {allUsers
                ?.filter((allUser) => allUser.role === "instructor")
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
                        onClick={() => handleMakeAdmin(allUser._id)}
                        className="bg-blue-700 hover:bg-blue-900"
                      >
                        Make Admin
                      </Button>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button
                        onClick={() => handleDeleteInstructor(allUser._id)}
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

        <div className="overflow-x-auto border rounded-sm hidden">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Image</th>
                <th>Student Name</th>
                <th>Eamil</th>
                <th>Role</th>
                <th>Action</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {allUsers
                ?.filter((allUser) => allUser.role === "instructor")
                .map((allUser) => (
                  <tr key={allUser._id}>
                    <th>
                      {" "}
                      <img
                        className="h-20 w-20 shadow-xl rounded-sm"
                        src={allUser?.photo}
                        alt=""
                      />
                    </th>
                    <td>{allUser?.name}</td>
                    <td>{allUser?.email}</td>
                    <td>{allUser?.role}</td>
                    <td>
                      {" "}
                      <Button
                        onClick={() => handleMakeAdmin(allUser._id)}
                        className="bg-blue-700 hover:bg-blue-900"
                      >
                        Make Admin
                      </Button>
                    </td>
                    <td>
                      <Button
                        onClick={() => handleDeleteInstructor(allUser._id)}
                        className="bg-red-200 text-red-600 hover:text-white hover:bg-red-900"
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminAllInstructor;
