import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";
import auth from "../../../firebase.init";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import PageTitle from "../../Shared/PageTitle/PageTitle";
import axios from "axios";

const SignIn = () => {
  const location = useLocation();
  const navigate = useNavigate();
  let from = location.state?.from?.pathname || "/";
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const userLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    await signInWithEmailAndPassword(email, password);
    const { data } = await axios.post("http://localhost:5000/login", { email });
    localStorage.setItem("token", data.token);
    navigate(from, { replace: true });
  };

  if (user) {
    // navigate(from, { replace: true });
  }

  let err;
  if (error) {
    err = <p>Error: {error.message}</p>;
  }

  return (
    <div className="bg-light py-5">
      {/* page title */}
      <PageTitle title="login -car service" />
      <div className="container">
        <div className="w-50 mx-auto">
          <h1>
            Hi, <span className="text-primary"> Welcome Back</span>
          </h1>
          <form onSubmit={userLogin}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                name="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                name="password"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            {
              // spinner
              loading && (
                <div className="text-center">
                  <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </div>
              )
            }
            {
              /* {error check */
              err
            }
            <button type="submit" className="btn btn-primary d-block w-100">
              Login
            </button>
            <p className="pt-4">
              If your no account?{" "}
              <Link to="/register" className="text-primary">
                Create account now
              </Link>
            </p>
          </form>
          <SocialLogin />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
