import styled from "styled-components";

function BubbleComponent({ color1, color2, top, left }) {
  return <Bubble color1={color1} color2={color2} top={top} left={left}></Bubble>;
}

export default BubbleComponent;

const Bubble = styled.div`
  position: fixed;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  background-image: linear-gradient(to right, ${(props) => props.color1}, ${(props) => props.color2});
  width: 150px;
  height: 150px;
  border-radius: 80px;
  z-index: -1;
`;
