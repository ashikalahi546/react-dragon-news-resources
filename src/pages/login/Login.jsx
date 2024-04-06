import { Link, useLocation, useNavigate } from "react-router-dom";
import Navber from "../shared/Navber";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
    const {singIn} = useContext(AuthContext);
    const location = useLocation();
    console.log('location in the page',location);
    const navigate = useNavigate()
    const handleLogin = e =>{
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email,password);
        singIn(email,password) 
        .then(result => {
            console.log(result.user)
            navigate(location?.state ? location.state : '/')
        }).catch(error =>{
            console.error(error)
        })
    }
  return (
    <div>
      <Navber></Navber>
      <div>
        <h2 className="text-center my-8 text-3xl font-medium">Please Login</h2>
        <div className="card shrink-0 w-full max-w-sm mx-auto shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
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
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <p className="text-center mb-4">Dont’t Have An Account ?<Link to='/register' className="font-medium text-red-500"> Register</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
