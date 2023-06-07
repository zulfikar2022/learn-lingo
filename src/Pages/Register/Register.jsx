/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Register = () => {
    const regex = /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{6,}$/;
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
  };
  return (
    <div className="hero min-h-screen bg-base-200 my-5">
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
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                {...register("password", { required: true,pattern: regex, minLength:6  })}
              />
              {
                <p className="text-red-500">{errors.password?.type==='pattern'  && 'Password must have at least One capital letter and One special character'}</p>
              }
              {
                <p className="text-red-500">{errors.password?.type==='minLength'  && "Password should contain at least six characters"}</p>
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
                {...register("confirmPassword", { required: true,pattern:regex,minLength:6 })}
              />
                {
                <p className="text-red-500">{errors.confirmPassword?.type==="pattern"  && 'Password must have at least One capital letter and One special character'}</p>
              }
               {
                <p className="text-red-500">{errors.confirmPassword?.type==='minLength'  && "Password should contain at least six characters"}</p>
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
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
