/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

import useUserRole from "../../hooks/useUserRole";

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);

  const { userRole } = useUserRole();
  useEffect(() => {
    fetch(`http://localhost:5000/allUsers?role=${userRole}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUsers(data);
      });
  }, [userRole]);
  // console.log('users ',users);
  return (
    <div>
      <Helmet>
        <title>Learn Lingo | Admin Dashboard</title>
      </Helmet>
      <p className="bg-[#01a2a6] text-center my-5 p-5 text-3xl font-semibold">
        All Users
      </p>
      <div className="grid grid-cols-3 gap-5">
        {users.map((user) => (
          <div key={user._id} className=" bg-[#01a2a6] ">
            <div className="card-body">
              <h2 className="card-title">
                Role: <span className="text-bold">{user.role}</span>
              </h2>
              {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
              <p>
                Name: <span className="font-bold">{user.name}</span>{" "}
              </p>
              <div className="card-actions justify-end">
                <button className="btn btn-outline">delete user</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
