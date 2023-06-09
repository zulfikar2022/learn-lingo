/* eslint-disable no-unused-vars */
import { Helmet } from "react-helmet-async";
import useAuthContext from "../../hooks/useAuthContext";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const InstructorDashboard = () => {
  const { user } = useAuthContext();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const [userId, setUserId] = useState("");
  useEffect(() => {
    fetch(`http://localhost:5000/userId?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setUserId(data._id);
      });
  }, [user.email]);

  const onSubmit = (data) => {
    // console.log(data.className);
    console.log(typeof data.availableSeats);
    const newCourse = {
      instructorId: userId,
      instructorName: user.displayName,
      courseName: data.className,
      studentCapability: parseInt(data.availableSeats),
      price: parseFloat(data.price),
      approvalStatus: "approved",
      image: data.imageURL,
      enrolledStudent: 0,
    };
    console.log(newCourse);
    fetch(`http://localhost:5000/newCourse`, {
      method: "post",
      body: JSON.stringify(newCourse),
      headers: { "content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire("New course inserted successfully");
          reset();
        }
      });
  };
  return (
    <div>
      <Helmet>
        <title>Learn Lingo | Instructor Dashboard</title>
      </Helmet>
      <p className="bg-[#01a2a6] text-center my-5 p-5 text-3xl font-semibold">
        Add a Class
      </p>
      <div className="bg-[#01a2a6] py-6 px-4">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-2 gap-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Class Name</span>
              </label>
              <select
                id="dropdown"
                name="select"
                required
                className="h-12"
                {...register("className", { required: true })}
              >
                <option value="">Select a Name</option>
                <option value="English">English</option>
                <option value="Spanish">Spanish</option>
                <option value="German">German</option>
                <option value="French">French</option>
                <option value="Chinese">Chinese</option>
                <option value="Latin">Latin</option>
              </select>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Class ImageURL</span>
              </label>
              <input
                type="url"
                placeholder="image url"
                className="input input-bordered"
                {...register("imageURL", { required: true })}
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Instructor Name</span>
              </label>
              <input
                type="text"
                value={`${user?.displayName}`}
                readOnly
                className="input input-bordered font-semibold"
                {...register("instructorName", { required: true })}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Instructor Email</span>
              </label>
              <input
                type="email"
                value={`${user.email}`}
                readOnly
                className="input input-bordered font-semibold"
                {...register("email", { required: true })}
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Available Seats</span>
              </label>
              <input
                type="number"
                className="input input-bordered"
                placeholder="Available seats"
                {...register("availableSeats", { required: true })}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Price</span>
              </label>
              <input
                type="text"
                className="input input-bordered"
                placeholder="Price"
                {...register("price", { required: true })}
              />
            </div>
          </div>
          {/* <button className="btn btn-outline w-full mt-4 bg-[#01a2a6] border border-white">
            Add Class
          </button> */}
          <input
            type="submit"
            value="Add Class"
            className="btn btn-outline w-full mt-4 bg-[#01a2a6] border border-white "
          />
        </form>
      </div>
      <p className="bg-[#01a2a6] text-center my-5 p-5 text-3xl font-semibold">
        My Classes
      </p>
    </div>
  );
};

export default InstructorDashboard;
