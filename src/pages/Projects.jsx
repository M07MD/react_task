import { useState } from "react";

// get data
import data from "../data";

// import components
import Project from "../components/Project";
import styled from "styled-components";

const Projects = () => {
  const [projects, setProjects] = useState(data());

  return (
    <ProjectsStyle>
      {projects.map((project) => (
        <Project
          key={project.id}
          id={project.id}
          image={project.image}
          location={project.location}
          title={project.title}
          shortText={project.shortText}
          saved={project.saved}
        />
      ))}
    </ProjectsStyle>
  );
};

const ProjectsStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row wrap;
`;

export default Projects;
