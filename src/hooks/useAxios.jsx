import axios from "axios";

const useAxios = () => {
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
    baseURL:'http://localhost:5000/',
  })

  return { axiosNormal, axiosStudents, axiosInstructors, axiosAdmin };
};

export default useAxios;
