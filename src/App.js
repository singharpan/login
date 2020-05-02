import React from "react";

import "./App.css";
import List from "./listcomponent";
import NavBar from "./navbar";
import About from "./about";
import Contact from "./contact";

function App() {
  return (
    <div>
      <NavBar />
      <List />
      <About />
      <Contact />
    </div>
  );
}

export default App;
