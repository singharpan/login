import React from "react";
import { Link } from "react-router-dom";

const Admin = () => {
  return (
    <>
      <h1>Welcome to admin ...Only Auth people are allowed here</h1>;
      <Link to="/logout">Logout</Link>
    </>
  );
};
export default Admin;
