/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { authContext } from "../../AuthProvider/AuthProvider";
import useAuthContext from "../../hooks/useAuthContext";

const SocialLogin = ({from}) => {
  // const { loginWithGoogle, setUser, user } = useContext(authContext);
  const {loginWithGoogle,setUser,user} = useAuthContext();
  const handleGoogleSignIn = () => {
    loginWithGoogle()
        .then(result => {
            const loggedUser = result.user;
            setUser(loggedUser);
            console.log('The user is  ',user);
        })
  };

  return (
    <div>
      <FaGoogle
        onClick={handleGoogleSignIn}
        className="text-3xl hover:cursor-pointer"
      ></FaGoogle>
    </div>
  );
};

export default SocialLogin;
