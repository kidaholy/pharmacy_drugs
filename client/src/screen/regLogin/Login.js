import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { userLoginAction } from "../../action/userAction";
import SpinnerCircle from "../../components/SpinnerCircle";
import Error from "../../components/Error";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userdata = useSelector((state) => state.userLoginReducers);
  const { loading, user, error } = userdata;
  function redirect() {
    navigate("/");
  }
  const submitHandler = () => {
    const user = {
      email: email,
      password: password,
    };
    dispatch(userLoginAction(user));
  };
  return (
    <>
      <div className="row justify-content-center">
        <div
          className="col-md-5 m-5"
          style={{
            textAlign: "left",
            paddingRight: "40px",
            paddingLeft: "40px",
          }}
        >
          <h3 className="mb-2">Login</h3>
          <hr />
          {error && (
            <Error
              heading="Oops!! Login failed"
              content="Please check the login details"
            />
          )}
          {loading && (
            <div className="justify-content-center">
              <SpinnerCircle />
            </div>
          )}
          {user && redirect()}
          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" onClick={submitHandler} className="mb-3">
            Login
          </Button>
          <p>
            Don't Have Account!? <a href="/register"> Create One</a>
          </p>
        </div>
      </div>
    </>
  );
}
