/* eslint-disable no-unused-vars */
import { Helmet } from "react-helmet-async";
import Slider from "../../HomePageCompo/Slider/Slider";
import useAxios from "../../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import Instructor from "./instructor";

const HomePage = () => {
  const { axiosNormal } = useAxios();
  const { data: instructors = [], isLoading } = useQuery({
    queryKey: ["instructors"],
    queryFn: async () => {
      const res = await axiosNormal.get("/instructors");
      return res.data;
    },
  });
  if (!isLoading) {
    // const {name,email,imageLink,studentsNumber,courses} = instructors;
  }
  return (
    <div>
      <Helmet>
        <title>Learn Lingo | Home</title>
      </Helmet>

      <Slider></Slider>
      <p className="bg-[#01a2a6] text-center p-3 text-4xl font-semibold my-6">
        Our Popular Classes
      </p>
      {/* TODO: codes for popular classes will be here  */}
      <p className="bg-[#01a2a6] text-center p-3 text-4xl font-semibold my-6">
        Our Popular Instructors
      </p>
      <div className="grid grid-cols-3 gap-4">
        {instructors?.map((instructor) => (
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
    </div>
  );
};

export default HomePage;
