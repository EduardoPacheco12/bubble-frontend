import styled from "styled-components";

function AuthSelect({ setVariable }) {
  return (
    <Container onChange={(e) => setVariable(e.target.value)}>
      <SelectOne>
        <input type="radio" value="Aluno" name="category" />
        <p>Aluno</p>
      </SelectOne>
      <SelectTwo>
        <input type="radio" value="Professor" name="category" />
        <p>Professor</p>
      </SelectTwo>
    </Container>
  );
}

export default AuthSelect;

const Container = styled.div`
  margin-top: 15px;
  display: flex;

  p {
    font-family: "Roboto", sans-serif;
    font-size: 15px;
    font-weight: 500;
    color: #3daadc;
  }
`;

const SelectOne = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
`;

const SelectTwo = styled.div`
  display: flex;
  align-items: center;
`;
