
import React from "react";
import { useParams } from "react-router-dom";

const UserProfile = () => {
  const { username } = useParams();  

  return (
    <div>
      <h2>Profile of {username}</h2>
      <p>Details for user: {username}...</p>
    </div>
  );
};

export default UserProfile;
