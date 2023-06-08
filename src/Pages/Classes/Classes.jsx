/* eslint-disable no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import useAxios from "../../hooks/useAxios";
import Class from "./Class";
import SingleClass from "./Class";
import { useEffect, useState } from "react";
import useAuthContext from "../../hooks/useAuthContext";

const Classes = () => {
  const { axiosNormal } = useAxios();
  const { data: classes = [], isLoading } = useQuery({
    queryKey: ["classes"],
    queryFn: async () => {
      const result = await axiosNormal.get("/classes");
      return result.data;
    },
  });

  const { setUser, user } = useAuthContext();
  const [userRole, setUserRole] = useState("");
  const userEmail = user?.email;
  useEffect(() => {
    console.log('from inside the useEffect');
    fetch(`http://localhost:5000/userRole?email=${userEmail}`)
        .then(res => res.json())
        .then(data => setUserRole(data.role))    
  }, [userEmail]);

  return (
    <div className="grid lg:grid-cols-3 lg:px-0 lg:gap-5 sm:grid-cols-1 sm:gap-2 sm:px-4 my-5">
      {classes?.map((c) => (
        <SingleClass
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
        ></SingleClass>
      ))}
    </div>
  );
};

export default Classes;
