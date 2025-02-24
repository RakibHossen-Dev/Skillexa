import { AuthContext } from "@/providers/Authprovider";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import useAxiosSecure from "@/hooks/useAxiosSecure";
const Students = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();

  const { data: courseStats = [] } = useQuery({
    queryKey: ["instrutor"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/instructor/${user.email}/students`);
      return res.data;
    },
  });

  return (
    <div>
      <div className=" bg-gray-100 py-10">
        <div className="w-11/12 mx-auto">
          <h3 className="text-2xl font-bold mb-4">All Students</h3>

          <div className="border w-full">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Image</TableHead>
                  <TableHead>Student Name</TableHead>
                  <TableHead>Eamil</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {courseStats?.map((allUser) => (
                  <TableRow key={allUser._id}>
                    <TableCell className="font-medium capitalize">
                      <img
                        className="h-14 w-14 shadow-xl rounded-full"
                        src={allUser?.photo}
                        alt=""
                      />
                    </TableCell>
                    <TableCell>{allUser?.name}</TableCell>
                    <TableCell>{allUser?.email}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Students;
