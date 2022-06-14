import { useState } from "react";
import "./Navbar.css";
import { motion } from "framer-motion";

const Navbar = () => {
  const NavLinks = ["ABOUT", "PROJECTS", "CONTACT"];

  const [scroll, setScroll] = useState(false);

  function handleScroll() {
    if (window.scrollY >= 610) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  }

  // When the user scrolls the page, execute handleScroll
  window.onscroll = function () {
    handleScroll();
  };
  return (
    <nav
      className={scroll ? "box-shadow-sharp sticky" : "box-shadow-sharp"}
      id="navbar"
    >
      <div className="logo"> Favour Akpasi</div>
      <div className="nav-link-group">
        {NavLinks.map((link, index) => (
          <div className="nav-link" key={index}>
            {link}
          </div>
        ))}
        <div className="resume box-shadow-diffuse">resume</div>
      </div>
    </nav>
  );
};

export default Navbar;
