import React from "react";

function Resume() {
  return (
    <section class="mb-5">
      <h1 className="resume">resume: Ryan Kinslow</h1>
      <hr></hr>
      <div class="row justify-content-center" id="resume">
        <div class="mt-5 pl-5 pr-5">
          Filler content
          <p class="mt-5">
            <a href="https://www.linkedin.com/in/ryan-kinslow-b86177240/">
              <img
                src="https://img.icons8.com/color/48/000000/linkedin-2.png"
                alt="Kinslow LinkedIn"
              />
            </a>
          </p>
          <p>
            Download my full{" "}
            <a
              href="https://github.com/Apom311/my-portfolio/raw/main/src/assets/resume-full.pdf"
              class="link"
            >
              resume
            </a>
            <br></br>
          </p>
        </div>
      </div>

      <div class="justify-content-center mt-5">
        <div id="front-back">
          <h2>front end experience</h2>
          <p>
            HTML, CSS (Bootstrap, Foundation, Bulma), JavaScript, jQuery,
            React.js
          </p>
        </div>

        <div id="front-back" class="mt-5">
          <h2>back end experience</h2>
          <p>
            Node.js, Express.js, SQL mySQL, Sequelize, NoSQL (MongoDB,
            Mongoose), API's (third-party, RESTful, server-side), Templating
            (Handlebars)
          </p>
        </div>
      </div>
    </section>
  );
}

export default Resume;
