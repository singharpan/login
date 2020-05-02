import React from "react";

import "./App.css";
import List from "./listcomponent";
import NavBar from "./navbar";
import About from "./about";
import Contact from "./contact";
import { BrowserRouter, Route } from "react-router-dom";
import Login from "./login";
import Logout from "./logout";
import Admin from "./admin";

function App() {
  return (
    <div>
      <NavBar />

      <BrowserRouter>
        <Route path="/admin" component={Admin} />
        <Route path="/" component={Login} />
        <Route path="/logout" component={Logout} />

        {/* <Route path="/list" component={List} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
