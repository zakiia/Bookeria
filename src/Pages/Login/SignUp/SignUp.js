import React, { useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";
import Loading from "../../Shared/Loading/Loading";

const SignUp = () => {
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const [agree, setAgree] = useState(false);

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  const nameRef = useRef("");
  const emailRef = useRef("");

  const passwordRef = useRef("");
  const navigate = useNavigate();

  if (loading || updating) {
    return <Loading></Loading>;
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    // const agree = event.target.terms.checked

    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
    navigate(from, { replace: true });
  };

  const navigateSignUp = (event) => {
    navigate("/login");
  };

  return (
    <div className="container w-50 mx-auto">
      <h2 className="services-title mt-5">Please SignUp</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control ref={nameRef} type="Text" placeholder="Name" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            ref={emailRef}
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            ref={passwordRef}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            className={agree ? "" : "text-danger"}
            onClick={() => setAgree(!agree)}
            type="checkbox"
            label="Accept terms and conditions"
          />
        </Form.Group>
        <Button
          disabled={!agree}
          className="check-more w-50 mx-auto d-block mb-3"
          type="submit"
        >
          Sign Up
        </Button>
      </Form>
      <p>
        Already have an account?!{" "}
        <Link
          to="/login"
          className="text-decoration-none pe-auto text-danger"
          onClick={navigateSignUp}
        >
          Please Login
        </Link>
      </p>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default SignUp;
