import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="text-white z-50 px-5 py-5 absolute top-0 w-full">
      <div className="flex items-center justify-between">
        <div>
          <Link to={"/"}>
            <img
              className="w-[120px] md:w-[180px]"
              src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg"
              alt=""
            />
          </Link>
        </div>
        {user?.email ? (
          <div className="flex gap-4 items-center justify-around">
            <button>
              Account
            </button>
            <button onClick={handleLogout} className="btn">
              Logout
            </button>
          </div>
        ) : (
          <div className="flex gap-4 items-center justify-around">
            <Link className="" to={"/login"}>
              Login
            </Link>
            <Link className="btn" to={"/signUp"}>
              Sign Up
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
