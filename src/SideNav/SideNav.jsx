import "./SideNav.css";
import CloseIcon from "@mui/icons-material/Close";

function SideNav({ openSideNav, setOpenSideNav }) {
  return (
    <div className="side_nav" style={{ width: `${openSideNav ? "60%" : "0"}` }}>
      <ul>
        <li onClick={() => setOpenSideNav(!openSideNav)}>
          <a href="#about">About</a>
        </li>
        <li onClick={() => setOpenSideNav(!openSideNav)}>
          <a href="#projects">Projects</a>
        </li>
        <li onClick={() => setOpenSideNav(!openSideNav)}>
          <a href="#contact">Contact</a>
        </li>
        <li id="resume" onClick={() => setOpenSideNav(!openSideNav)}>
          <a
            id="side-nav-resume_btn"
            href="https://drive.google.com/file/d/1_beR3HAohXUph47bsWGRxdEKDgpm6bgN/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>
        </li>
      </ul>
      {openSideNav && (
        <button id="close_btn" onClick={() => setOpenSideNav(!openSideNav)}>
          <CloseIcon />
        </button>
      )}
    </div>
  );
}

export default SideNav;
