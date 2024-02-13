import React from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h2>Singin to your PopX account</h2>
      <p>Lorem ipsum dolor sit amet ,consectetur adipiscing elit.</p>
      <form action="" id="">
        <div class="form_wrapper">
          <input
            id="input"
            type="text"
            placeholder="Enter email address"
          ></input>
          <lable for="input" className="required">
            Email Address
          </lable>
        </div>
        <div class="form_wrapper">
          <input
            id="password"
            type="password"
            placeholder="Enter password"
          ></input>
          <lable for="password" className="required">
            Password
          </lable>
        </div>
        <button
          className="btn btn-secondary"
          onClick={() => navigate("/Profile")}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
