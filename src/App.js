import React from "react";

import "./App.css";
import List from "./listcomponent";
import NavBar from "./navbar";
import About from "./about";
import Contact from "./contact";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <NavBar />

      <BrowserRouter>
        <Route path="/list" component={List} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </BrowserRouter>
    </div>
  );
}

export default App;
