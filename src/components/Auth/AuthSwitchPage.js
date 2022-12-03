import styled from "styled-components";

function AuthSwitchPage({ children }) {
  return <Text>{children}</Text>;
}

export default AuthSwitchPage;

const Text = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 15px;
  font-weight: 500;
  text-align: center;
  color: #3daadc;
  margin-top: 12px;
  margin-left: 50px;
  margin-right: 50px;
`;
