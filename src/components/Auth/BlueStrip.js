import styled from "styled-components";

function BlueStrip({ children }) {
  return <Blue>{children}</Blue>;
}

export default BlueStrip;

const Blue = styled.div`
  background-image: linear-gradient(to right, #28a6f0, #196997);
  width: 100%;
  height: 45px;
  border-radius: 9px 9px 0 0;
  border: 1px solid linear-gradient(to right, #28a6f0, #196997);
  display: flex;
  justify-content: center;
  align-items: center;
`;
