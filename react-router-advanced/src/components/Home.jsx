
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Home Page!</h1>
      <nav>
        <Link to="/profile">Go to Profile</Link>
        <br />
        <Link to="/user/johndoe">Go to Next page Profile</Link>
      </nav>
    </div>
  );
};

export default Home;
