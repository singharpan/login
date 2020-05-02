import React, { Component } from "react";
import { Link } from "react-router-dom";

class Logout extends Component {
  constructor(props) {
    super(props);
    localStorage.removeItem("token");
  }
  render() {
    return (
      <>
        <h1>You have been Logged out Successfully</h1>;<Link to="/">Login</Link>
      </>
    );
  }
}
export default Logout;
