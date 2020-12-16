// import styled components
import styled from "styled-components";

// import fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

const Lang = () => {
  return (
    <Select>
      <select>
        <option>Arabic</option>
        <option>English</option>
      </select>
      <FontAwesomeIcon icon={faCaretDown} />
    </Select>
  );
};

const Select = styled.div`
  position: relative;
  margin: 10px 0;
  @media (max-width: 1100px) {
    max-width: 250px;
    margin: 10px auto;
  }
  select {
    width: 100%;
    height: 40px;
    padding: 10px;
    outline: none;
    -moz-appearance: none; /* Firefox */
    -webkit-appearance: none; /* Safari and Chrome */
    appearance: none;
    background: transparent;
    cursor: pointer;
  }

  svg {
    font-size: 25px;
    position: absolute;
    right: 10px;
    top: 5px;
    pointer-events: none;
  }
`;

export default Lang;
