import { useState, useEffect } from "react";

import data from "../data";

import { useHistory } from "react-router-dom";

import Project from "../components/Project";

// fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark, faShareAlt } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const ProjectDetails = () => {
  const history = useHistory();
  const url = history.location.pathname;

  const [projects, setProjects] = useState(data());
  const [project, setProject] = useState(null);
  const [isSaved, setIsSaved] = useState(false);

  // useEffect
  useEffect(() => {
    const currentProject = projects.filter((p) => p.url === url);
    setProject(currentProject[0]);
    console.log(setProjects);
  }, [projects, url]);

  return (
    <>
      {project && (
        <Container>
          <ProjectsStyle className="otherProjects">
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

          <ProjectStyle className="project">
            <ProjectHead className="project_head">
              <Title className="title">
                <h4>{project.title}</h4>
                <p>{project.location}</p>
              </Title>

              <div className="save_share">
                <div className="svg">
                  {" "}
                  <FontAwesomeIcon
                    onClick={() => setIsSaved(!isSaved)}
                    className={isSaved ? "saved" : ""}
                    icon={faBookmark}
                  />{" "}
                  <h6>save</h6>{" "}
                </div>

                <div className="svg">
                  {" "}
                  <FontAwesomeIcon icon={faShareAlt} /> <h6>share</h6>{" "}
                </div>

                <div className="Rent">
                  <a href="#">Rent</a>
                </div>
              </div>
            </ProjectHead>

            <Image>
              <img src={project.image} alt={project.title} />
            </Image>

            <p>{project.shortText}</p>

            <p>{project.longText}</p>
          </ProjectStyle>
        </Container>
      )}
    </>
  );
};

const Container = styled.div`
  padding: 15px 5rem;
  display: flex;
  justify-content: center;
  flex-flow: row;
  @media (max-width: 900px) {
    flex-flow: column;
    padding: 15px 0;
  }
`;

const ProjectStyle = styled.div`
  background: #fff;
  margin: 20px 10px;
  padding: 10px 25px;

  p {
    font-size: smaller;
    color: #9f9f9f;
    margin: 20px auto;
  }
`;

const ProjectHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 767px) {
    flex-flow: column;
  }

  .saved {
    color: #e36e89;
  }

  .save_share {
    display: flex;
    flex-flow: row wrap;
    @media (max-width: 767px) {
      justify-content: center;
    }

    .svg {
      margin: 5px 10px;
      display: flex;
      color: #9f9f9f;
      font-size: 15px;

      svg {
        cursor: pointer;
        font-size: 20px;
      }
      h6 {
        margin: 0 5px;
        font-size: 15px;
      }
    }

    .Rent {
      margin: 10px auto;
    }

    a {
      text-decoration: none;
      padding: 7px 30px;
      width: 50px;
      height: 30px;
      background: #e36e89;
      border-radius: 10px;
      color: #ffffff;
      font-size: 20px;
      margin: 5px auto;
    }
  }
`;

const Title = styled.div`
  h4 {
    color: blue;
  }
  p {
    color: #9f9f9f;
  }
`;

const Image = styled.div`
  width: 100%;
  margin: 20px auto;
  img {
    width: 100%;
    height: 400px;
    object-fit: contain;
    border-radius: 5px;
  }
`;

const ProjectsStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row wrap;
`;

export default ProjectDetails;
