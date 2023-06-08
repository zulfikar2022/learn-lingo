/* eslint-disable no-unused-vars */
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../../Shared/SocialLogin/SocialLogin";
import Swal from "sweetalert2";
import useAuthContext from "../../hooks/useAuthContext";
import { useState } from "react";

const Register = () => {
  const regex = /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{6,}$/;
  const { updateUserProfile, setUser,createUser } = useAuthContext();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const [showPassword,setShowPassword] = useState(false);
  const [showConfirmPassword,setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();
  const onSubmit = (data) => {
    if (data.password !== data.confirmPassword) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Password an confirmPassword should be same!!",
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    }

    // TODO: users login system should be implemented
    createUser(data.email,data.password)
        .then(result => {
          console.log(result.user);
          updateUserProfile(data.name,data.photoURL)
            .then(() => {
              const createdUser = {name:data.name, email:data.email,role:'student'};
             fetch('http://localhost:5000/users',{
              method:'post',
              body:JSON.stringify(createdUser),
              headers:{'content-type':'application/json'}
             })
                .then(res => res.json())
                .then(data => {
                  if(data.insertedId){
                    reset();
                    Swal.fire({
                      position: "center",
                      icon: "success",
                      title: "user Created Successfully!!",
                      showConfirmButton: false,
                      timer: 1500,
                    });
                    setUser(null);
                    navigate('/');
                  }
                })
            })

        })
        .catch(error => {
          console.log(error.message);
          Swal.fire({
            position: "center",
            icon: "error",
            title: `${error.message}`,
            showConfirmButton: false,
            timer: 1500,
          });
        })

  };
  return (
    <div className="hero min-h-screen bg-base-200 my-5">
      <Helmet>
        <title>Learn Lingo | Register</title>
      </Helmet>
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
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
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered"
                {...register("name", { required: true })}
              />
            </div>
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
                <span className="label-text">PhotoURL</span>
              </label>
              <input
                type="url"
                placeholder="photo url"
                className="input input-bordered"
                {...register("photoURL", { required: true })}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={`${showPassword ? 'text': 'password'}`}
                placeholder="password"
                className="input input-bordered"
                {...register("password", {
                  required: true,
                  pattern: regex,
                  minLength: 6,
                })}
              />
              <p ><input type="checkbox" onClick={() => setShowPassword(!showPassword)}  /> {showPassword ? "hide password" : 'show password'}</p>
              {
                <p className="text-red-500">
                  {errors.password?.type === "pattern" &&
                    "Password must have at least One capital letter and One special character"}
                </p>
              }
              {
                <p className="text-red-500">
                  {errors.password?.type === "minLength" &&
                    "Password should contain at least six characters"}
                </p>
              }
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type={`${showConfirmPassword ? 'text': 'password'}`}
                placeholder="Confirm password"
                className="input input-bordered"
                {...register("confirmPassword", {
                  required: true,
                  pattern: regex,
                  minLength: 6,
                })}
              />
              <p ><input type="checkbox" onClick={() => setShowConfirmPassword(!showConfirmPassword)}  /> {showConfirmPassword ? "hide password" : 'show password'}</p>
              {
                <p className="text-red-500">
                  {errors.confirmPassword?.type === "pattern" &&
                    "Password must have at least One capital letter and One special character"}
                </p>
              }
              {
                <p className="text-red-500">
                  {errors.confirmPassword?.type === "minLength" &&
                    "Password should contain at least six characters"}
                </p>
              }
            </div>
            <div className="form-control mt-6">
              <input type="submit" value="register" className="my-btn" />
            </div>
            <p>
              Already Registered?{" "}
              <Link className="text-red-600" to="/login">
                Please Login
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

export default Register;
