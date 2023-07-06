import React from "react";

function Projects(props) {
  return (
    <div className="project cards">
      <div className="img-container card">
        <a href={props.deploy}>
          <img alt={props.name} src={props.image} />
        </a>
      </div>
      <div className="content">
        <p className="title">{props.name}</p>
        <p id="topics">({props.topics})</p>
        <p>
          <a href={props.github}>
            <img
              src="https://img.icons8.com/color/48/000000/github--v1.png"
              alt="Repository"
              id="project-icon"
            />
          </a>
          <a href={props.deploy}>
            <img
              src="https://img.icons8.com/color/48/000000/monitor.png"
              alt="Deployed Site"
              id="project-icon"
            />
          </a>
        </p>
      </div>
    </div>
  );
}

export default Projects;
