import React from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h2>Create your PopX account</h2>

      <form action="" id="">
        <div class="form_wrapper">
          <input id="input" type="text" placeholder="Marry Doe"></input>
          <lable for="input" className="required">
            Full Name
          </lable>
        </div>
        <div class="form_wrapper">
          <input id="input" type="text" placeholder="Marry Doe"></input>
          <lable for="input" className="required">
            Phone number
          </lable>
        </div>
        <div class="form_wrapper">
          <input id="input" type="text" placeholder="Marry Doe"></input>
          <lable for="input" className="required">
            Email address
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
          <span class="lighting"></span>
        </div>
        <div class="form_wrapper">
          <input id="input" type="text" placeholder="Marry Doe"></input>
          <lable for="input" className="required">
            Company name
          </lable>
        </div>
        <h5>Are you an Agency?</h5>
        <div class="form-check">
          <input
            type="radio"
            class="form-check-input"
            id="radio1"
            name="optradio"
            value="option1"
            checked
          ></input>
          <label class="form-check-label" for="radio1">
            Yes
          </label>
        </div>
        <div class="form-check">
          <input
            type="radio"
            class="form-check-input"
            id="radio2"
            name="optradio"
            value="option2"
          ></input>
          <label class="form-check-label" for="radio2">
            No
          </label>
        </div>
        <button
          className="btn btn-primary"
          onClick={() => navigate("/Profile")}
        >
          Create Account
        </button>
      </form>
    </div>
  );
};

export default Signup;
