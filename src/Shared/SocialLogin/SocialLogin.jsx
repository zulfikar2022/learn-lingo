/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { authContext } from "../../AuthProvider/AuthProvider";
import useAuthContext from "../../hooks/useAuthContext";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const SocialLogin = ({ from }) => {
  // const { loginWithGoogle, setUser, user } = useContext(authContext);
  const { loginWithGoogle, setUser, user } = useAuthContext();
  const navigate = useNavigate();
  const handleGoogleSignIn = () => {
    loginWithGoogle().then((result) => {
      const loggedUser = result.user;
      setUser(loggedUser);
      const newUser = { name: loggedUser.displayName, email: loggedUser.email,role:'student'};
      fetch(`http://localhost:5000/users`, {
        method: "post",
        body: JSON.stringify(newUser),
        headers: { "content-type": "application/json" },
      })
          .then(res => res.json())
          .then(data => {
            if(!data.insertedId){
              Swal.fire('this mail address already exists');
            }
          })
    });
    navigate('/')
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
