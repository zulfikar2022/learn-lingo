/* eslint-disable no-unused-vars */
import { Navigate, useLocation } from "react-router-dom";
import useAuthContext from "../hooks/useAuthContext";


const PrivateRoute = ({children}) => {
    const {user,loading} = useAuthContext();
    const location = useLocation();

    if(loading){
        return <span className="loading loading-infinity loading-lg"></span>
    }

    if(user?.email){
        return children;
    }
    
    return <Navigate to={'/login'} state={{from:location}} replace ></Navigate>
};

export default PrivateRoute;