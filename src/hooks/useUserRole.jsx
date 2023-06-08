/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import useAuthContext from "./useAuthContext";


const useUserRole = () => {
    const {user} = useAuthContext();
    const [userRole, setUserRole] = useState("");
    const userEmail = user?.email;
    useEffect(() => {
        console.log('from inside the useEffect');
        fetch(`http://localhost:5000/userRole?email=${userEmail}`)
            .then(res => res.json())
            .then(data => setUserRole(data.role))    
      }, [userEmail]);
    return userRole;
};

export default useUserRole;