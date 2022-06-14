import React from "react";
import About from "./About/About";
import Banner from "./Banner/Banner";
import Navbar from "./Navbar/Navbar";
import Projects from "./Projects/Projects";

function App() {
  return (
    <div>
      <Banner />
      <Navbar />
      <About />
      <Projects />
    </div>
  );
}

export default App;
