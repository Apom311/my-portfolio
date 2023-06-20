import React from "react";
//!needs to be moved to utils folder
export default function Contact() {
  return (
    <div>
      <h3>Contact Me</h3>
      <p>
        More info to come, for now email me
        <button
          onClick={() => (window.location = "mailto:orangedragonz@gmail.com")}
        >
          Here
        </button>
      </p>
      <h4>
        Check out my{" "}
        <a
          href="https://1drv.ms/w/s!AnXyNyuogRqznC-R2b4BIb5O7uFr?e=1cUSvz"
          className="link"
        >
          resume
        </a>
        <br></br>
      </h4>
    </div>
  );
}
