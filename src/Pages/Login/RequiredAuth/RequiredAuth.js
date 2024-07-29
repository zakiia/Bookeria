import React from "react";
import auth from "../../../firebase.init";
import {
  useAuthState,
  useSendEmailVerification,
} from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";
import { toast, ToastContainer } from "react-toastify";

const RequiredAuth = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const location = useLocation();
  const [sendEmailVerification, sending, error] =
    useSendEmailVerification(auth);
  if (loading) {
    return <Loading></Loading>;
  }
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }
  if (!user.emailVerified) {
    return (
      <div>
        <h3 className="text-danger">Your Email is not verified</h3>
        <h5 className="text-success">Please verify your email address</h5>
        <button
          onClick={async () => {
            const success = await sendEmailVerification();
            if (success) {
              toast("Sent email");
            }
          }}
        >
          Verify email
        </button>
        <ToastContainer></ToastContainer>
      </div>
    );
  }
  return children;
};

export default RequiredAuth;
