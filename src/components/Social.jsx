// import styled components
import styled from "styled-components";

// import components
import Socialimg from "./Socialimg";

// import images
import facebook from "../images/facebook.png";
import googlePlus from "../images/google-plus.png";
import linkedin from "../images/linkedin.png";
import instagram from "../images/instagram.png";
import twitter from "../images/twitter.png";
import youtube from "../images/youtube.png";

const Social = () => {
  return (
    <SocialStyle>
      <Socialimg src={facebook} alt="facebook icon" />
      <Socialimg src={googlePlus} alt="google icon" />
      <Socialimg src={instagram} alt="instagram icon" />
      <Socialimg src={linkedin} alt="linkedin icon" />
      <Socialimg src={twitter} alt="twitter icon" />
      <Socialimg src={youtube} alt="youtube icon" />
    </SocialStyle>
  );
};

const SocialStyle = styled.div`
  width: 100%;
`;

export default Social;
