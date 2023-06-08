/* eslint-disable no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import useAxios from "../../hooks/useAxios";
import Instructor from "../HomePage/instructor";

const Instructors = () => {
  const { axiosNormal } = useAxios();
  const { data: instructors = [], isLoading } = useQuery({
    queryKey: ["instructors"],
    queryFn: async () => {
      const result = await axiosNormal.get("/instructors");
      return result.data;
    },
  });
  return (
    <div className="grid lg:grid-cols-3 my-5 gap-5 sm:grid-cols-1">
      {instructors.map((instructor) => (
        <Instructor
          key={instructor._id}
          name={instructor.name}
          email={instructor.email}
          imageLink={instructor.imageLink}
          studentsNumber={instructor.studentsNumber}
          courses={instructor.courses}
        ></Instructor>
      ))}
    </div>
  );
};

export default Instructors;
