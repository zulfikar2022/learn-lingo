/* eslint-disable no-unused-vars */
import { Helmet } from "react-helmet-async";
import Slider from "../../HomePageCompo/Slider/Slider";
import useAxios from "../../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import Instructor from "./instructor";
import SingleClass from "../Classes/Class";
import { useEffect, useState } from "react";
import useAuthContext from "../../hooks/useAuthContext";
import useUserRole from "../../hooks/useUserRole";

const HomePage = () => {
  const {user} = useAuthContext();
  const userRole = useUserRole();
  
  const { axiosNormal } = useAxios();
  const { data: instructors = [], isLoading } = useQuery({
    queryKey: ["popularInstructors"],
    queryFn: async () => {
      const res = await axiosNormal.get("/popularInstructors");
      return res.data;
    },
  });

  const {data:classes=[]} = useQuery({
    queryKey:['popularClasses'],
    queryFn:async() => {
      const res = await axiosNormal.get('/popularClasses');
      return res.data;
    }
  })

  return (
    <div>
      <Helmet>
        <title>Learn Lingo | Home</title>
      </Helmet>

      <Slider className="z-0"></Slider>
      <p className="bg-[#01a2a6] text-center p-3 text-4xl font-semibold my-6">
        Our Popular Classes
      </p>
   
      <div className="grid lg:grid-cols-3 gap-5 sm:grid-cols-1">
        {
          classes.map(c => <SingleClass 
            key={c._id}
            id={c._id}
            instructorId={c.instructorId}
            instructorName={c.instructorName}
            courseName={c.courseName}
            studentCapability={c.studentCapability}
            enrolledStudent={c.enrolledStudent}
            price={c.price}
            image={c.image}
            approvalStatus={c.approvalStatus}
            role={userRole}
            ></SingleClass>)
        }
      </div>
      <p className="bg-[#01a2a6] text-center p-3 text-4xl font-semibold my-6">
        Our Popular Instructors
      </p>
      <div className="grid  lg:grid-cols-3 gap-4 ">
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
