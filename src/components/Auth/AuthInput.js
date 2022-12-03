import styled from "styled-components";

function AuthInput({ id, text, type, load, variable, setVariable }) {
  return (
    <Container>
      <Name htmlFor={id}>{text}</Name>
      <Input type={type} id={id} disabled={load ? true : false} onChange={(e) => setVariable(e.target.value)} value={variable} required />
    </Container>
  );
}

export default AuthInput;

const Container = styled.div`
  margin-top: 20px;
  margin-left: 20px;
`;

const Name = styled.label`
  font-family: "Roboto", sans-serif;
  font-size: 15px;
  font-weight: 500;
  color: #3daadc;
`;

const Input = styled.input`
  margin-top: 6px;
  border: 2px solid #3daadc;
  border-radius: 5px;
  height: 35px;
  width: 275px;
`;
