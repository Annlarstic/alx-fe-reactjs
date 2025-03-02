import React, { useContext } from "react";
import { UserContext } from "./UserContext";

const ProfilePage = () => {
  const { user } = useContext(UserContext);

  // If user is undefined, show a loading message
  if (!user) return <p>Loading...</p>;

  return (
    <div>
      <h2>Profile Page</h2>
      <p>Name: {user.name}</p>
      <p>Role: {user.role}</p>
    </div>
  );
};

export default ProfilePage;
