import { AuthContext } from "@/providers/Authprovider";
import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
  baseURL: "https://skillexa-server.vercel.app",
});
const useAxiosSecure = () => {
  const navigate = useNavigate();
  const { logOut } = useContext(AuthContext);

  axiosSecure.interceptors.request.use(
    function (config) {
      const token = localStorage.getItem("access-token");
      console.log("request stopped by interceptors");
      config.headers.authorization = `Bearer ${token}`;
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  axiosSecure.interceptors.response.use(
    function (response) {
      return response;
    },
    async function (error) {
      const status = error.response.status;
      console.log("Status error in the interceptors", status);
      if (status === 401 || status === 403) {
        await logOut();
        navigate("/signIn");
      }
      return Promise.reject(error);
    }
  );
  return axiosSecure;
};

export default useAxiosSecure;
