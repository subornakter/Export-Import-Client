import React, { use } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext.jsx";
import { FaGoogle } from "react-icons/fa";
import { toast } from 'react-toastify';


const Register = () => {
  const { createUser, updateUserProfile, signInWithGoogle } = use(AuthContext);
  const navigate = useNavigate();

  const handleRegister = (event) => {
    event.preventDefault();
    const displayName = event.target.displayName.value.trim();
    const photoURL = event.target.photoURL.value.trim();
    const email = event.target.email.value.trim();
    const password = event.target.password.value;

    if (!displayName || !email || !password) {
      toast.error("Please fill all required fields");
      return;
    }
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

if (!passwordRegex.test(password)) {
  toast.error("Password must be at least 6 characters long and must have an uppercase and a lowercase letters");
  return;
}


    createUser(email, password)
      .then((result) => {
        updateUserProfile(displayName, photoURL)
          .then(() => {
            toast.success("User created successfully!");
            event.target.reset();
            navigate("/");
          })
          .catch((error) => {
            toast.error(error.message);
          });
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        toast.success("User created successfully!");
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
      <title>Alpha Global Trade - Register</title>
      <div className="card-body">
        <h1 className="text-3xl font-bold text-center">Register</h1>
        <form onSubmit={handleRegister}>
          <fieldset className="fieldset">
            <label className="label">Name</label>
            <input
              type="text"
              name="displayName"
              className="input rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="Name"
              required
            />
            <label className="label">PhotoURL</label>
            <input
              type="text"
              name="photoURL"
              className="input rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="Photo URL"
            />
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="Email"
              required
            />
            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              className="input rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="Password"
              required
            />
            {/* <div>
              <a className="link link-hover">Forgot password?</a>
            </div> */}
            <button className="btn text-white mt-4 rounded-full bg-gradient-to-r from-pink-500 to-red-600">
              Register
            </button>
          </fieldset>
        </form>

        <button
          onClick={handleGoogleSignIn}
          className="btn bg-white rounded-full text-black border-[#e5e5e5] mt-3 flex items-center justify-center gap-2"
        >
          <FaGoogle /> Login with Google
        </button>
        <p className="text-center mt-4">
          Already have an account? Please{" "}
          <Link className="text-blue-500 hover:text-blue-800" to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
