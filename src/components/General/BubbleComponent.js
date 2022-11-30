import styled from "styled-components";

function BubbleComponent({ color, top, left }) {
  return <Bubble color={color} top={top} left={left}></Bubble>;
}

export default BubbleComponent;

const Bubble = styled.div`
  position: fixed;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  background-color: ${(props) => props.color};
  width: 150px;
  height: 150px;
  border-radius: 80px;
  z-index: -1;
`;
