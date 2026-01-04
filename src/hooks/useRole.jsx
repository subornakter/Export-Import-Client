import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useAuth from "./useAuth";

const useRole = () => {
  const { user, loading } = useAuth();

  const {
    data: role = "user",      // default to "user" if undefined
    isLoading: roleLoading,
    refetch,
  } = useQuery({
    queryKey: ["role", user?.email],
    queryFn: async () => {
      if (!user?.email) return "user";
      const res = await axios.get(`https://import-export-server-lac.vercel.app/users/role?email=${user.email}`);
      return res.data.role;
    },
    enabled: !!user?.email && !loading, // only fetch when user exists and not loading
  });

  return { role, roleLoading, refetch };
};

export default useRole;
