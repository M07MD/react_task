//import logo
import logo from "../images/logo.png";
// import styled components
import styled from "styled-components";

// import react router
import { Link } from "react-router-dom";

// import fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  return (
    <NavStyle className="nav">
      <div className="nav_links">
        <img src={logo} alt="logo" />
        <ul>
          <li>
            <Link to="/">projects</Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/community">community</Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/courses">courses</Link>{" "}
          </li>
        </ul>
      </div>

      <User className="user">
        <FontAwesomeIcon icon={faBell} />
        <h5>user</h5>
      </User>
    </NavStyle>
  );
};

const NavStyle = styled.nav`
  width: 100%;
  padding: 0rem 5rem;
  background: #ffffff;
  display: flex;
  @media (max-width: 867px) {
    display: block;
  }
  .nav_links {
    flex: 1;
    display: flex;
    align-items: center;
    flex-flow: row wrap;
    @media (max-width: 867px) {
      display: block;
      text-align: center;
    }
    img {
      width: 100px;
      height: 100px;
      @media (max-width: 867px) {
        height: 70px;
        object-fit: cover;
      }
    }
    ul {
      list-style: none;
      display: flex;
      @media (max-width: 867px) {
        justify-content: center;
      }
      a {
        text-decoration: none;
        font-size: 1.1rem;
        margin: 0 2rem;
        color: #000;
        @media (max-width: 867px) {
          margin: 0.5rem;
        }
      }
    }
  }
`;

const User = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
  @media (max-width: 867px) {
    justify-content: center;
  }
  h5 {
    font-size: 1rem;
    margin: 0 1rem;
  }
`;

export default Nav;
