import { useContext } from "react";
import { authContext } from "../AuthProvider/AuthProvider";



const useAuthContext = () => {
    const  auth = useContext(authContext);
    return auth;
};

export default useAuthContext;