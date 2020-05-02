import React, { Component } from "react";

class Login extends Component {
  state = {
    username: "",
    password: "",
    loggedIn: false,
  };

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
          />

          <input
            type="text"
            placeholder="password"
            name="password"
            value={this.state.password}
          />
          <button>Submit</button>
        </form>
      </React.Fragment>
    );
  }
}

export default Login;
