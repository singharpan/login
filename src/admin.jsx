import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
//Will check the token in constructor in Admin page
//now directlty redirecting to admin link will not work
//token get stored in local storage once we login
class Admin extends Component {
  constructor(props) {
    super(props);
    const token = localStorage.getItem("token");
    let loggedIn = true;
    console.log(token);
    if (token === null) {
      loggedIn = false;
    }
    this.state = {
      loggedIn,
    };
  }
  render() {
    if (this.state.loggedIn === false) {
      return <Redirect to="/" />;
    }
    return (
      <>
        <h1>Welcome to admin ...Only Auth people are allowed here</h1>;
        <Link to="/logout">Logout</Link>
      </>
    );
  }
}
export default Admin;
