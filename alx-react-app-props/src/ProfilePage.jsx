import React, { useContext } from "react";
import UserContext from "./UserContext.jsx";

const ProfilePage = () => {
  const { user } = useContext(UserContext);

  return (
    <div>
      <h1>{user.name}'s Profile</h1>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default ProfilePage;
