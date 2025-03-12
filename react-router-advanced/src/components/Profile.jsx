// src/components/Profile.jsx
import React from "react";
import { Outlet, Link } from "react-router-dom";


import ProfileDetails from "./ProfileDetails";
import ProfileSettings from "./ProfileSettings";

const Profile = () => {
  return (
    <div>
      <h1>Profile</h1>
      <nav>
        <Link to="details">Profile Details</Link>
        <Link to="settings">Profile Settings</Link>
      </nav>
      <Outlet /> 
    </div>
  );
};

export default Profile;


