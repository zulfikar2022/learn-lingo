/* eslint-disable no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import useAxios from "../../hooks/useAxios";
import Class from "./Class";
import SingleClass from "./Class";

const Classes = () => {
  const { axiosNormal } = useAxios();
  const { data: classes = [], isLoading } = useQuery({
    queryKey: ["classes"],
    queryFn: async () => {
      const result = await axiosNormal.get("/classes");
      return result.data;
    },
  });
  return (
    <div className="grid lg:grid-cols-3 lg:px-0 lg:gap-5 sm:grid-cols-1 sm:gap-2 sm:px-4">
      {classes?.map((c) => (
       <SingleClass name={c.name} course={c.courses} key={c._id}></SingleClass>
      ))}
      
    </div>
  );
};

export default Classes;
