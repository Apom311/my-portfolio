import React from "react";
//this page is no longer necessary, if it stays unnecessary it will be deleted.
function Resume() {
  return (
    <div>
      <section className="mb-5">
        <h1 className="resume">resume: Ryan Kinslow</h1>
        <hr></hr>
        <div className="row justify-content-center" id="resume">
          <div className="mt-5 pl-5 pr-5">
            <p className="mt-5">
              <a href="https://www.linkedin.com/in/ryan-kinslow-b86177240/">
                <img
                  src="https://img.icons8.com/color/48/000000/linkedin-2.png"
                  alt="Kinslow LinkedIn"
                />
              </a>
            </p>
            <p>
              Check out my{" "}
              <a
                href="https://1drv.ms/w/s!AnXyNyuogRqznC-R2b4BIb5O7uFr?e=1cUSvz"
                className="link"
              >
                resume
              </a>
              <br></br>
            </p>
          </div>
        </div>

        <div className="justify-content-center mt-5">
          <div class="front-back">
            <h2>front end experience</h2>
            <p>
              HTML, CSS (Bootstrap, Foundation, Bulma), JavaScript, jQuery,
              React.js
            </p>
          </div>

          <div class="front-back" className="mt-5">
            <h2>back end experience</h2>
            <p>
              Node.js, Express.js, SQL mySQL, Sequelize, NoSQL (MongoDB,
              Mongoose), API's (third-party, RESTful, server-side), Templating
              (Handlebars)
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Resume;
