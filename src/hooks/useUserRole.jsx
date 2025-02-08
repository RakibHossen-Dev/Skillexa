import { useQuery } from "@tanstack/react-query";
// import { useAxiosPublic } from "@/hooks/useAxiosPublic";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";

const useUserRole = () => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();

  const { data: userRole, isLoading: isRoleLoading } = useQuery({
    queryKey: [user?.email, "userRole"],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosPublic.get(`/userRole/${user?.email}`);
      return res.data?.role;
    },
  });

  return [userRole, isRoleLoading];
};

export default useUserRole;
