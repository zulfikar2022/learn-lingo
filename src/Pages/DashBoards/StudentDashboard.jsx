/* eslint-disable no-unused-vars */
import { Helmet } from "react-helmet-async";
import useAuthContext from "../../hooks/useAuthContext";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";

const StudentDashboard = () => {
  const { user } = useAuthContext();
  const [selectedClasses, setSelectedClasses] = useState([]);
  const [classDetails, setClassDetails] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/studentClasses?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setSelectedClasses(data);
        // console.log(data);
      });
  }, [user.email]);
  console.log("selected classes   ", selectedClasses);

  useEffect(() => {
    const temp = [];
    selectedClasses.map((sc) => {
      fetch(`http://localhost:5000/getCourse?id=${sc}`)
        .then((res) => res.json())
        .then((data) => {
          console.log("data from inside the second useEffect  ", data);
          temp.push(data);
          setClassDetails([...temp]);
          // console.log('data ',data);
        });
    });
  }, [selectedClasses]);
  console.log("class details  ", classDetails);

  const handleCourseDelete = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/deleteCourseFormUser?id=${id}`,{
        method:"delete",
    })
        // .then(res => {
        //     console.log(res)
        // })
  }

  return (
    <div>
      <Helmet>
        <title>Learn Lingo | Student Dashboard</title>
      </Helmet>
      <p className="text-center bg-[#01a2a6] my-5 p-5 text-3xl font-semibold">
        My Selected Classes
      </p>
      <div className="grid grid-cols-3 gap-5">
        {classDetails.map((sc) => (
          <div key={sc?._id} className=" border">
            <figure>
              <img src={sc.image} alt="Shoes" className="w-full h-[300px]" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{sc?.courseName}</h2>
              {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
              <p>Instructor Name: {sc.instructorName} </p>
              <p>price: ${sc.price} </p>
              <div className="card-actions justify-end">
                <button onClick={() => handleCourseDelete(sc._id)} className="btn btn-outline">Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentDashboard;
