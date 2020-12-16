import styled from "styled-components";

const Socialimg = ({ src, alt }) => {
  return (
    <div style={{ display: "inline-block" }}>
      <a href="#">
        <Img src={src} alt={alt} />
      </a>
    </div>
  );
};

const Img = styled.img`
  width: 25px;
  height: 25px;
  margin: 5px;
  opacity: 0.7;
`;

export default Socialimg;
