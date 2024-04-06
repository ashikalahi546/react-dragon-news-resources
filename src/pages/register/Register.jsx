import { Link } from "react-router-dom";
import Navber from "../shared/Navber";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);

    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");
    console.log(name, photo, email, password);
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .cacth((error) => {
        console.error(error);
      });
  };
  return (
    <div>
      <Navber></Navber>
      <div>
        <h2 className="text-center my-8 font-medium text-3xl">
          Register your account
        </h2>
        <div className="card shrink-0 w-full max-w-sm mx-auto shadow-2xl bg-base-100">
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                name="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text "
                placeholder="Photo"
                name="photo"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
          <p className="text-center mb-4">
            Already Have An Account ?
            <Link to="/login" className="font-medium text-red-500">
              {" "}
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
