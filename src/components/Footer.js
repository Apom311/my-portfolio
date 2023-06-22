import React from "react";

function Footer() {
  return (
    <div className="footer" id="footer">
      <a href="https://github.com/Apom311">
        <img
          src="https://img.icons8.com/color/48/000000/github.png"
          alt="Github"
          className="icon"
        />
      </a>
      <a href="https://www.linkedin.com/in/ryan-kinslow-b86177240/">
        <img
          src="https://img.icons8.com/color/48/000000/linkedin.png"
          alt="LinkedIn"
          className="icon"
        />
      </a>
      <a href="https://twitter.com/actual_dragonz">
        <img
          src="https://img.icons8.com/color/48/000000/twitter.png"
          alt="Twitter"
          className="icon"
        />
      </a>
      <p id="footnotes">Built with React</p>
    </div>
  );
}

export default Footer;
