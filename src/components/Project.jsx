import { useState } from "react";

// fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark, faShareAlt } from "@fortawesome/free-solid-svg-icons";

// import react router
import { NavLink } from "react-router-dom";

// import styled components
import styled from "styled-components";

const Project = ({ title, image, location, shortText, saved, id }) => {
  const [isSaved, setIsSaved] = useState(false);

  return (
    <ProjectStyle className="project">
      <ProjectImg className="project_img">
        <img src={image} alt={title} />
      </ProjectImg>

      <div className="project_title">
        <NavLink to={`project/${id}`}>
          <h3>{title}</h3>
        </NavLink>
      </div>

      <div className="about_project">
        <h5>{location}</h5>
        <p>{shortText}</p>
      </div>

      <Line className="line"></Line>

      <Save className="save">
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
        </div>
        <div className="Rent">
          <a href="#">Rent</a>
        </div>
      </Save>
    </ProjectStyle>
  );
};

const ProjectStyle = styled.div`
  width: 300px;
  margin: 15px;
  padding: 5px 10px;
  border: 1px solid #dedede;
  border-radius: 10px;

  .saved {
    color: #e36e89;
  }

  .project_title {
    a {
      text-decoration: none;
      color: blue;
    }
  }

  .about_project {
    color: #9f9f9f;
    h5 {
      margin: 5px 0;
    }
    p {
      margin: 5px 0;
      font-size: smaller;
    }
  }
`;

const ProjectImg = styled.div`
  max-width: 100%;
  img {
    max-width: 100%;
    border-radius: 10px;
  }
`;

const Line = styled.div`
  width: 100%;
  height: 1.5px;
  background: #9f9f9f;
  margin: 10px 0;
`;

const Save = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px 0;

  .save_share {
    display: flex;
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

  a {
    text-decoration: none;
    padding: 7px 30px;
    width: 50px;
    height: 30px;
    background: #e36e89;
    border-radius: 10px;
    color: #ffffff;
    font-size: 20px;
  }
`;

export default Project;
