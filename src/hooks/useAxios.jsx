import axios from "axios";


const axiosNormal = axios.create({
  baseURL: "https://learn-lingo-server.vercel.app/",
});
const axiosStudents = axios.create({
  baseURL: "https://learn-lingo-server.vercel.app/",
});
const axiosInstructors = axios.create({
  baseURL: "https://learn-lingo-server.vercel.app/",
});
const axiosAdmin = axios.create({
  baseURL: "https://learn-lingo-server.vercel.app/",
});
const useAxios = () => {
  return { axiosNormal, axiosStudents, axiosInstructors, axiosAdmin };
};

export default useAxios;
