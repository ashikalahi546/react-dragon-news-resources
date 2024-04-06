import { Link, NavLink} from "react-router-dom";
import User from "/assets/user.png";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Navber = () => {



  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then((result) => {
        console.log(result.user);
      })
      .cacth((error) => {
        console.error(error);
      });
  };

  const navLinks = (
    <>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "text-red-500" : "")}
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/career">Career</NavLink>
      </li>
      <li>
        <NavLink to="/login">Login</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden font-medium"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 "
          >
            {navLinks}
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex font-medium">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        <img className="size-10 mr-2" src={User} alt="" />
        {user ? (
          <Link onClick={handleLogOut} className="btn ">sing Out</Link>
        ) : (
          <Link to="/login" className="btn ">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navber;
