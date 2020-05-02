import React, { Component } from "react";

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

  //[] is used for the reusablity of code
  //for this input "name" should be same as state name

  render() {
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
