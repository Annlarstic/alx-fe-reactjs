// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";  


import Home from "./components/Home";
import Profile from "./components/Profile";
import ProfileDetails from "./components/ProfileDetails";
import ProfileSettings from "./components/ProfileSettings";
import UserProfile from "./components/UserProfile";

const App = () => {
  return (
    <div>
      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="profile" element={<Profile />}>
          <Route path="details" element={<ProfileDetails />} />
          <Route path="settings" element={<ProfileSettings />} />
        </Route>
        <Route path="user/:username" element={<UserProfile />} />
      </Routes>
    </div>
  );
};

export default App;

