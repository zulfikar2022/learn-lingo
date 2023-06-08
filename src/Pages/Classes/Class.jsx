/* eslint-disable no-unused-vars */
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuthContext from "../../hooks/useAuthContext";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";

const SingleClass = ({
  instructorId,
  instructorName,
  courseName,
  studentCapability,
  enrolledStudent,
  price,
  approvalStatus,
  image,
   id,
}) => {
  
  const {user} = useAuthContext();
  const location = useLocation();
  const navigate = useNavigate();
  const handleSelect = (id) => {
      console.log(id);
      if(!user){
        Swal.fire({
          position: 'center',
          icon: 'info',
          title: 'You need to login first to select any course',
          showConfirmButton: false,
          timer: 1500
        })
        navigate("/login", { state: { from: location } });
      }
      // TODO : What else is not yet done

  }

  return (
    <div className={`border bg-[#01a2a6] ${(studentCapability-enrolledStudent)=== 0 && 'bg-red-500' }`}>
      <figure>
        <img src={image} alt="Shoes" className="w-full h-[300px]" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{courseName}</h2>
        <p>
          Instructor: <span className="font-bold">{instructorName}</span>
        </p>
        <p>
          Available Seats:{" "}
          <span className="font-bold">
            {studentCapability - enrolledStudent}
          </span>
        </p>
        <p>Price: <span className="font-bold">${price}</span></p>
        <div className="card-actions justify-end">
          <button onClick={() => handleSelect(id)} disabled={(studentCapability-enrolledStudent)===0} className="btn btn-outline">Select</button>
        </div>
      </div>
    </div>
  );
};

export default SingleClass;
