import React from "react";
import google from "../../../image/google-logo.png";
import facebook from "../../../image/facebook-logo.png";
import github from "../../../image/github-logo.png";

const SocialLogin = () => {
  return (
    <div>
      <div className="d-flex align-items-center">
        <div
          style={{ height: "1px" }}
          className="bg-secondary-subtle w-50"
        ></div>
        <p className="mt-2 px-2">or</p>
        <div
          style={{ height: "1px" }}
          className="bg-secondary-subtle w-50"
        ></div>
      </div>
      <div>
        <button className="btn btn-dark w-50 d-block mx-auto my-2">
          <img style={{ width: "30px" }} src={google} alt="" />
          <span className="px-2">Google Sign In</span>
        </button>
        <button className="btn btn-dark w-50 d-block mx-auto my-2">
          <img style={{ width: "30px" }} src={facebook} alt="" />
          <span className="px-2">Facebook Sign In</span>
        </button>
        <button className="btn btn-dark w-50 d-block mx-auto">
          <img style={{ width: "30px" }} src={github} alt="" />
          <span className="px-2">Github Sign In</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
