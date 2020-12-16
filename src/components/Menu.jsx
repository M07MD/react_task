import styled from "styled-components";

const Menu = ({ title, menuItems }) => {
  return (
    <MenuStyle>
      <h4>{title}</h4>
      <UL>
        {menuItems.map((I, index) => (
          <li key={index}>
            <a href="#">{I}</a>
          </li>
        ))}
      </UL>
    </MenuStyle>
  );
};

const MenuStyle = styled.div`
  margin: 10px 0;
  @media (max-width: 1000px) {
    flex-basis: 200px;
  }
`;

const UL = styled.div`
  list-style: none;

  li {
    margin: 5px 0;
  }
  a {
    text-decoration: none;
    color: #000;
  }
`;

export default Menu;
