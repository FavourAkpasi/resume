import "./Navbar.css";

const Navbar = () => {
  const NavLinks = ["ABOUT", "PROJECTS", "CONTACT"];
  return (
    <nav className="box-shadow-sharp">
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
