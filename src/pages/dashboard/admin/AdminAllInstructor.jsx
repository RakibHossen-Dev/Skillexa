// const AdminAllInstructor = () => {
//   return (
//     <div className="w-11/12 mx-auto my-10">This is AdminAllInstructor</div>
//   );
// };

// export default AdminAllInstructor;

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
const AdminAllInstructor = () => {
  const axiosPublic = useAxiosPublic();
  const { data: allUsers = [], refetch } = useQuery({
    queryKey: ["allUser"],
    queryFn: async () => {
      const res = await axiosPublic.get("/allUsers");
      return res.data;
    },
  });
  console.log(allUsers);
  return (
    <div className="w-11/12 mx-auto my-10">
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
                      // onClick={() => handleUpdateCourse(instructorCourss._id)}
                      className="bg-blue-700 hover:bg-blue-900"
                    >
                      Make Admin
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

export default AdminAllInstructor;
