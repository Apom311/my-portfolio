import React from "react";
import Contact from "./Contact";

function About() {
  return (
    <div>
      <section id="about-section">
        <h1>about: Ryan Kinslow</h1>
        <p>
          Passionate and driven software developer with a strong desire to
          embark on a new career path.
        </p>
        <p>
          I am a proud graduate of the Vanderbilt Fullstack Bootcamp, completed
          in November of 2022, where over the course of 6 months I gained
          hands-on experience and expertise in the MERN stack (MongoDB,
          Express.js, React, Node.js).
        </p>
        <p>
          As a fresh software developer, I am eager to continue expanding my
          knowledge and skills while contributing to impactful projects.
        </p>
        <p>
          I thrive in collaborative environments and enjoy tackling complex
          challenges with innovative solutions. With a growth mindset and a
          dedication to lifelong learning, I am excited to take on new
          opportunities and contribute to the ever-evolving world of software
          development.
        </p>
      </section>
      <Contact />
    </div>
  );
}
export default About;
