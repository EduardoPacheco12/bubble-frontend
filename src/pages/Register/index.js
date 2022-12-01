import styled from "styled-components";
import { useReducer, useState } from "react";
import { Link } from "react-router-dom";
import GlobalStyle from "../../assets/GlobalStyle";
import BubbleComponent from "../../components/General/BubbleComponent";
import BlueStrip from "../../components/Auth/BlueStrip";
import TitleComponent from "../../components/Auth/TitleComponent";
import AuthInput from "../../components/Auth/AuthInput";
import AuthButton from "../../components/Auth/AuthButton";
import AuthSwitchPage from "../../components/Auth/AuthSwitchPage";

function Register() {
  const [load, setLoad] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [picture, setPicture] = useState("");

  return (
    <Container>
      <GlobalStyle />
      <BubbleComponent color="#2e7fda" top="2vh" left="27vw" />
      <Content>
        <BlueStrip>
          <TitleComponent>Bem vindo ao Bubble!</TitleComponent>
        </BlueStrip>
        <Form>
          <AuthInput id="name" text="Nome" type="text" load={load} variable={name} setVariable={setName} />
          <AuthInput id="email" text="Email" type="e-mail" load={load} variable={email} setVariable={setEmail} />
          <AuthInput id="senha" text="Senha" type="password" load={load} variable={password} setVariable={setPassword} />
          <AuthInput id="picture" text="Foto de Perfil" type="url" load={load} variable={picture} setVariable={setPicture} />
          <AuthButton text="Cadastrar" load={load} />
        </Form>
        <Click to="/sign-in">
          <AuthSwitchPage>Já possui cadastro? Faça o seu login por aqui</AuthSwitchPage>
        </Click>
      </Content>
      <BubbleComponent color="#e27319" top="70vh" left="58vw" />
    </Container>
  );
}

export default Register;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  background-color: #ffffff;
  width: 320px;
  height: 485px;
  border-radius: 10px;
  margin-top: 5vh;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Click = styled(Link)`
  text-decoration: none;
`;
