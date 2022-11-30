import styled from "styled-components";
import { ThreeDots } from "react-loader-spinner";

function AuthButton({ load, text }) {
  return (
    <Button type="submit" disabled={load ? true : false}>
      {load ? <ThreeDots color="#FFFFFF" height={80} width={80} /> : text}
    </Button>
  );
}

export default AuthButton;

const Button = styled.button`
  margin-top: 30px;
  width: 130px;
  height: 35px;
  background-image: linear-gradient(to right, #28a6f0, #196997);
  border: none;
  border-radius: 5px;
  font-size: 17px;
  font-family: "Nerko One", cursive;
  color: #ffffff;
  &:hover {
    cursor: pointer;
    color: #000000;
  }
`;
