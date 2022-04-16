import React from "react";
import googleIcon from "../images/google.png";
import githubIcon from "../images/github.png";
import facebookIcon from "../images/facebook.png";
import auth from "../../../firebase.init";
import {
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithGithub, githubUser, githubLoading, githubError] =
    useSignInWithGithub(auth);
  return (
    <div>
      <div className="d-flex align-items-center">
        <div style={{ height: "1px" }} className="w-100 bg-info"></div>
        <p className="mt-2 px-3">Or</p>
        <div style={{ height: "1px" }} className="w-100 bg-info"></div>
      </div>

      <div className="social">
        <button
          onClick={() => signInWithGoogle()}
          className="btn btn-info d-block w-75 mx-auto"
        >
          {" "}
          <img
            style={{ width: "40px", height: "40px" }}
            src={googleIcon}
            alt=""
          />{" "}
          Google Login
        </button>
        <button
          onClick={() => signInWithGithub()}
          className="btn btn-info d-block w-75 mx-auto my-3"
        >
          {" "}
          <img
            style={{ width: "40px", height: "40px" }}
            src={githubIcon}
            alt=""
          />{" "}
          Github Login
        </button>
        <button className="btn btn-info d-block w-75 mx-auto">
          {" "}
          <img
            style={{ width: "40px", height: "40px" }}
            src={facebookIcon}
            alt=""
          />{" "}
          Facebook Login
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
