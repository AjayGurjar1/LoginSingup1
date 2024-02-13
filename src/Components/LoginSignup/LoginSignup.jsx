import React from "react";
import "./LoginSignup.css";
import { useNavigate } from "react-router-dom";

const LoginSignup = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="footer">
        <h1> Welcome to PopX</h1>
        <p>Lorem ipsum dolor sit amet ,consectetur adipiscing elit.</p>
        <button className="btn btn-primary" onClick={() => navigate("/Signup")}>
          Create Account
        </button>
        <button
          className="btn btn-secondary"
          onClick={() => navigate("/Login")}
        >
          Alredy Registered? Login
        </button>
      </div>
    </div>
  );
};

export default LoginSignup;
