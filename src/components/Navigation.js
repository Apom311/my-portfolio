import React from "react";
// import { NavLink } from "react-router-dom";

// function Navigation(props) {
//   return (
//     <div className="row navigation" id="navigation">
//       <NavLink to="/about/">About Me</NavLink>
//       <NavLink to="/portfolio/">Portfolio</NavLink>
//       <NavLink to="/contact/">Contact</NavLink>
//       <NavLink to="/resume/">Resume</NavLink>
//     </div>
//   );
// }

function Navigation({ currentPage, handlePageChange }) {
  return (
    <ul className="navigation">
      <li className="nav-item">
        <a
          href="#about"
          onClick={() => handlePageChange("About")}
          className={currentPage === "About" ? "nav-link active" : "nav-link"}
        >
          About
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          onClick={() => handlePageChange("Contact")}
          className={currentPage === "Contact" ? "nav-link active" : "nav-link"}
        >
          Contact
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#portfolio"
          onClick={() => handlePageChange("Portfolio")}
          className={
            currentPage === "Portfolio" ? "nav-link active" : "nav-link"
          }
        >
          Portfolio
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#resume"
          onClick={() => handlePageChange("Resume")}
          className={currentPage === "Resume" ? "nav-link active" : "nav-link"}
        >
          Resume
        </a>
      </li>
    </ul>
  );
}

export default Navigation;
