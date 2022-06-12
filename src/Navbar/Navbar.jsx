import "./Navbar.css";

const Navbar = () => {
  const NavLinks = ["ABOUT", "PROJECTS", "CONTACT"];
  return (
    <nav>
      <div className="logo">Akpasi Favour</div>
      <div className="nav-link-group">
        {NavLinks.map((link) => (
          <div className="nav-link">{link}</div>
        ))}
        <div className="resume">resume</div>
      </div>
    </nav>
  );
};

export default Navbar;
