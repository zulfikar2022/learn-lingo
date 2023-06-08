import axios from "axios";
import useAuthContext from "./useAuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const axiosNormal = axios.create({
  baseURL: "http://localhost:5000/",
});
const axiosStudents = axios.create({
  baseURL: "http://localhost:5000/",
});
const axiosInstructors = axios.create({
  baseURL: "http://localhost:5000/",
});
const axiosAdmin = axios.create({
  baseURL: "http://localhost:5000/",
});
const useAxios = () => {
  const {  logOutUser } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    axiosStudents.interceptors.request.use((config) => {
      const token = localStorage.getItem("access-token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });

    axiosStudents.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (
          error.response &&
          (error.response.status === 401 || error.response.status === 403)
        ) {
          await logOutUser();
          navigate("/login");
        }
        return Promise.reject(error);
      }
    );
  }, [logOutUser, navigate]);
  return { axiosNormal, axiosStudents, axiosInstructors, axiosAdmin };
};

export default useAxios;
