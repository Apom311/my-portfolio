import React from "react";
import Projects from "../../components/Project";
import "bootstrap/dist/css/bootstrap.min.css";

function Wrapper(props) {
  return <div className="wrapper">{props.childrren}</div>;
}

function Portfolio() {
  return (
    <section>
      <div className="project">
        <h1 className="title">Portfolio: Ryan K</h1>
      </div>
      <Wrapper id="data">
        {Portfolio.map((project) => (
          <Projects
            key={project.id}
            image={project.image}
            name={project.name}
            github={project.github}
            deploy={project.deploy}
            topics={project.topics}
          />
        ))}
      </Wrapper>
    </section>
  );
}

export default Portfolio;
