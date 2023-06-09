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

  const [myId, setMyId] = useState("");
  const [myClasses, setMyClasses] = useState([]);

  useEffect(() => {
    fetch(`https://learn-lingo-server.vercel.app/userId?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        const Id = data._id;
        setMyId(Id);
      });
  }, [user.email]);

  useEffect(() => {
    fetch(`https://learn-lingo-server.vercel.app/instructorsClasses?id=${myId}`)
      .then((res) => res.json())
      .then((data) => {
        setMyClasses([...data]);
      });
  }, [myId]);

  const onSubmit = (data) => {
    // console.log(data.className);
    console.log('user Id :  ',myId);
    if (myId) {
      const newCourse = {
        instructorId: myId,
        instructorName: user.displayName,
        courseName: data.className,
        studentCapability: parseInt(data.availableSeats),
        price: parseFloat(data.price),
        approvalStatus: "approved",
        image: data.imageURL,
        enrolledStudent: 0,
      };
      console.log(newCourse);
      fetch(`https://learn-lingo-server.vercel.app/newCourse`, {
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
    }
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
      <div className="grid  lg:grid-cols-3 gap-4">
        {myClasses?.map((myClass) => (
          <div key={myClass._id} className="card bg-[#01a2a6]">
            <figure>
              <img
                src={myClass.image}
                className="w-full h-[300px]"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{myClass.courseName}</h2>
              <p>
                Total Enrolled Students :{" "}
                <span className="font-bold">{myClass.enrolledStudent}</span>
              </p>
              {/* <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstructorDashboard;
