/* eslint-disable no-unused-vars */
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../../Shared/SocialLogin/SocialLogin";
import { useState } from "react";
import useAuthContext from "../../hooks/useAuthContext";

const Login = () => {
  const {setUser,user,loginWithEmailPass} = useAuthContext();
  const navigate = useNavigate();
  const location = useLocation();
  // const from = location?.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data.email);
    console.log(data.password);
    loginWithEmailPass(data.email,data.password)
      .then(res => {
        setUser(res.user);
        navigate('/');
      })
     
  };
  const [showPassword,setShowPassword] = useState(false);
  return (
    <div className="hero min-h-screen bg-base-200 my-5">
      <Helmet>
        <title>Learn Lingo | Login</title>
      </Helmet>
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                {...register("email", { required: true })}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={`${showPassword ? "text" : "password"}`}
                placeholder="password"
                className="input input-bordered"
                {...register("password", { required: true })}
              />
              <p>
                <input
                  type="checkbox"
                  onClick={() => setShowPassword(!showPassword)}
                />{" "}
                {showPassword ? "hide password" : "show password"}
              </p>
              {/* <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label> */}
            </div>
            <div className="form-control mt-6">
              <input type="submit" value="Login" className="my-btn" />
            </div>
            <p>
              New to this site?{" "}
              <Link className="text-red-600" to="/register">
                Please Register
              </Link>{" "}
            </p>
            <hr />
            <div className="mx-auto">
              <SocialLogin></SocialLogin>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
