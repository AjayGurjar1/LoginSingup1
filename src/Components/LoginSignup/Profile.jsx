import React from "react";
import "./Profile.css";
import { useNavigate } from "react-router-dom";
const Profile = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="container">
        <button
          className="btn btn-primary btn1"
          onClick={() => navigate("/Login")}
        >
          Back
        </button>
        <header>
          <h1 className="header">Account Setting</h1>
        </header>

        <div className="profile">
          <img src="./ajayphotohd.jpg" class="rounded" alt="Cinque Terre"></img>
          <h1>Marry doe</h1>
        </div>
        <p>
          Student Of MITS Gwalior With Computer Science Stream . I Am Currently
          Pursuing My Bachelor's Degree In May 2024. My Area Of Interest Is
          Software Development. Skilled In C++, Python, JavaScript , Problem
          Solving Skills , Web Development - Html , CSS ,EJS, Node js , Mongodb,
          Sql ,Basic React .
        </p>
      </div>
    </>
  );
};

export default Profile;
