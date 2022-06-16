import React from "react";
import About from "./About/About";
import Banner from "./Banner/Banner";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";
import Projects from "./Projects/Projects";

function App() {
  return (
    <div>
      <Banner />
      <Navbar />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
