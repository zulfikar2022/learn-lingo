import axios from "axios";


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
  return { axiosNormal, axiosStudents, axiosInstructors, axiosAdmin };
};

export default useAxios;
