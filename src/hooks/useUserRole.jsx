/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import useAuthContext from "./useAuthContext";

const useUserRole = () => {
  const { user } = useAuthContext();
  const [userRole, setUserRole] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const userEmail = user?.email;
  const authorization = localStorage.getItem("access-token");
  useEffect(() => {
    console.log("from inside the useEffect");
    fetch(`https://learn-lingo-server.vercel.app/userRole?email=${userEmail}`)
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false);
        setUserRole(data.role);
      });
  }, [userEmail, authorization]);
  console.log("user role is ", userRole, " from inside the useUserRole hooke");
  return { userRole, isLoading };
};

export default useUserRole;
