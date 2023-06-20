import React from "react";
import Projects from "../Project";
import portfolioData from "../Data";

function Portfolio() {
  return (
    <div>
      <section>
        <div className="project">
          <h1 className="title">Portfolio: Ryan K</h1>
        </div>
        <div id="data">
          {portfolioData.map((project) => (
            <Projects
              key={project.id}
              image={`${project.image}`}
              name={project.name}
              github={project.github}
              deploy={project.deploy}
              topics={project.topics}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
