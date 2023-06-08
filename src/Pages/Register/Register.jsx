/* eslint-disable no-unused-vars */
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import SocialLogin from "../../Shared/SocialLogin/SocialLogin";
import Swal from "sweetalert2";
import useAuthContext from "../../hooks/useAuthContext";

const Register = () => {
  const regex = /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{6,}$/;
  const { updateUserProfile, setUser } = useAuthContext();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data.name);
    console.log(data.email);
    console.log(data.password);
    console.log(data.confirmPassword);
    console.log(data.photoURL);
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
    updateUserProfile(data.name, data.photoURL)
        .then()
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
                type="password"
                placeholder="password"
                className="input input-bordered"
                {...register("password", {
                  required: true,
                  pattern: regex,
                  minLength: 6,
                })}
              />
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
                type="password"
                placeholder="Confirm password"
                className="input input-bordered"
                {...register("confirmPassword", {
                  required: true,
                  pattern: regex,
                  minLength: 6,
                })}
              />
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
