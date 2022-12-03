import styled from "styled-components";
import { useState } from "react";
import { Link } from "react-router-dom";
import GlobalStyle from "../../assets/GlobalStyle";
import BubbleComponent from "../../components/General/BubbleComponent";
import BlueStrip from "../../components/Auth/BlueStrip";
import TitleComponent from "../../components/Auth/TitleComponent";
import AuthInput from "../../components/Auth/AuthInput";
import AuthButton from "../../components/Auth/AuthButton";
import AuthSwitchPage from "../../components/Auth/AuthSwitchPage";

function Login() {
  const [load, setLoad] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Container>
      <GlobalStyle />
      <BubbleComponent color="#2e7fda" top="13vh" left="27vw" />
      <Content>
        <BlueStrip>
          <TitleComponent>Bem vindo ao Bubble!</TitleComponent>
        </BlueStrip>
        <Form>
          <AuthInput id="email" text="Email" type="e-mail" load={load} variable={email} setVariable={setEmail} />
          <AuthInput id="senha" text="Senha" type="password" load={load} variable={password} setVariable={setPassword} />
          <AuthButton text="Entrar" load={load} />
        </Form>
        <Click to="/sign-up">
          <AuthSwitchPage>Ainda não possui cadastro? Cadastre-se clicando aqui</AuthSwitchPage>
        </Click>
      </Content>
      <BubbleComponent color="#e27319" top="65vh" left="58vw" />
    </Container>
  );
}

export default Login;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  background-color: #ffffff;
  width: 320px;
  height: 300px;
  border-radius: 10px;
  margin-top: 25vh;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Click = styled(Link)`
  text-decoration: none;
`;
