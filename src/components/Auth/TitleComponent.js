import styled from "styled-components";

function TitleComponent({ children }) {
  return <Title>{children}</Title>;
}

export default TitleComponent;

const Title = styled.h1`
  font-family: "Nerko One", cursive;
  font-size: 25px;
  color: #ffffff;
`;
