import React, { Component } from "react";
import { Redirect } from "react-router-dom";

//For authentication we have to save token in local storage

class Login extends Component {
  state = {
    username: "",
    password: "",
    loggedIn: false,
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  //token can be any random string
  submitForm = (e) => {
    e.preventDefault();

    const { username, password } = this.state;

    if (username === "A" && password === "B") {
      localStorage.setItem("token", "sdfghjjkkdfhgfkgjhbn");
      this.setState({
        loggedIn: true,
      });
    }
  };

  render() {
    console.log(this.state.loggedIn);
    if (this.state.loggedIn) {
      return <Redirect to="/admin" />;
    }
    return (
      <React.Fragment>
        <h1>Login</h1>
        <form onSubmit={this.submitForm}>
          <input
            type="text"
            placeholder="username"
            name="username"
            value={this.state.username}
            onChange={this.onChange}
          />

          <input
            type="text"
            placeholder="password"
            name="password"
            value={this.state.password}
            onChange={this.onChange}
          />
          <input type="submit" />
        </form>
      </React.Fragment>
    );
  }
}

export default Login;
