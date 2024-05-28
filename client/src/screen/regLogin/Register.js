import React, { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { userRegisterAction } from "../../action/userAction";
import SpinnerCircle from "../../components/SpinnerCircle";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const dispatch = useDispatch();
  const registerdata = useSelector((state) => state.userRegisterReducers);
  const { loading, success } = registerdata;
  const navigate = useNavigate();
  function redirect() {
    alert("Register successfully");
    navigate("/login");
  }
  const submitHandler = () => {
    if (password === cpassword && !isNaN(password) && username.length >= 3) {
      const user = {
        username: username,
        email: email,
        password: password,
      };
      console.log(user);
      dispatch(userRegisterAction(user));
      if (success === true) {
        //navigate("/login");
      } else if (success === false) {
        alert("Please check the details");
      }
    }
  };
  return (
    <>
      {success && redirect()}
      <div className="row justify-content-center">
        <div
          className="col-md-5 m-5"
          style={{
            textAlign: "left",
            paddingRight: "40px",
            paddingLeft: "40px",
          }}
        >
          <h3>Register</h3>
          <hr />
          {loading && (
            <div style={{ textAlign: "center" }}>
              <SpinnerCircle />
            </div>
          )}
          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Valid Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Minimum three character"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="4-digit password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Re-enter the password"
              value={cpassword}
              onChange={(e) => setCpassword(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" onClick={submitHandler} className="mb-3">
            Submit
          </Button>
          <p>
            Do You Have An Account!? <a href="/login"> Login</a>
          </p>
        </div>
      </div>
    </>
  );
}
