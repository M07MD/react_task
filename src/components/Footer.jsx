// import styled components
import styled from "styled-components";

// import components
import Menu from "./Menu";

// import images
import logo from "../images/logo.png";
import playstoreBadge from "../images/google-play.png";
import appstoreBadge from "../images/app-store.png";
import Lang from "./Lang";
import Social from "./Social";

const Footer = () => {
  return (
    <FooterStyle>
      <div className="logo">
        <img src={logo} alt="" />
      </div>

      <Menus className="menus">
        <Menu
          title="General"
          menuItems={[
            "About",
            "Blog",
            "Sign up",
            "Help center",
            "From zero to hero",
          ]}
        />

        <Menu
          title="Quik Links"
          menuItems={["jobs", "companies", "people", "Events"]}
        />

        <Menu title="Help" menuItems={["Help center", "Contact us"]} />
      </Menus>

      <Stores className="stores">
        <h4>DOWNLOAD JOBZELLA MOBILE APP </h4>
        <p>Jobzella mobile app for Android and Iphone</p>
        <div className="imgs">
          <Badge src={playstoreBadge} alt="Playstore Badge" />
          <Badge src={appstoreBadge} alt="Appstore Badge" />
        </div>
        <h5>Download Free</h5>
        <Lang />
      </Stores>
      <Social />
    </FooterStyle>
  );
};

const FooterStyle = styled.footer`
  background: #e9e9e9;
  padding: 0rem 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-flow: row wrap;

  @media (max-width: 1100px) {
    display: block;
    .logo {
      text-align: center;
      img {
        width: 200px;
        height: 200px;
      }
    }
  }
`;

const Menus = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-evenly;
  flex-flow: row wrap;
`;

const Stores = styled.div`
  text-align: center;

  p {
    font-size: smaller;
    margin: 3px 0;
  }
`;

const Badge = styled.img`
  width: 150px;
  height: 40px;
  width: 150px;
  height: 40px;
  object-fit: cover;
  border-radius: 10px;
`;

export default Footer;
