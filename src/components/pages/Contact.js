import React from "react";

export default function Contact() {
  return (
    <div>
      <h1>Contact Me</h1>
      <p>
        More info to come, for now email me
        <button
          onClick={() => (window.location = "mailto:frost_bird@hotmail.com")}
        >
          Here
        </button>
      </p>
    </div>
  );
}
