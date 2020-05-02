import React from "react";
import { Link } from "react-router-dom";

const Logout = () => {
  return (
    <>
      <h1>You have been Logged out Successfully</h1>;<Link to="/">Login</Link>
    </>
  );
};
export default Logout;
