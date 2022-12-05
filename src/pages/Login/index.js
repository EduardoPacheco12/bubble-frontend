import styled from "styled-components";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import GlobalStyle from "../../assets/GlobalStyle";
import UserContext from "../../contexts/UserContext";
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
  const navigate = useNavigate();
  const { setUserData } = useContext(UserContext);

  const FinishLogin = (e) => {
    e.preventDefault();
    setLoad(true);
    const body = {
      email,
      password,
    };
    const url = `${process.env.REACT_APP_API_BASE_URL}/bubble/sign-in`;

    axios
      .post(url, body)
      .then((res) => {
        setUserData(res.data);
        setLoad(false);
        navigate("/home");
      })
      .catch((err) => {
        setLoad(false);
        const status = err?.response.status;
        switch (status) {
          case 401:
            alert("Email ou senha incorreta, tente novamente");
            setLoad(false);
            break;
          case 404:
            alert("Email ou senha incorreta, tente novamente");
            setLoad(false);
            break;
          case 422:
            alert("Por favor preencha os campos corretamente");
            setLoad(false);
            break;
          case 500:
            alert("Erro de servidor!!!");
            setEmail("");
            setPassword("");
            setLoad(false);
            break;
          default:
            setLoad(false);
            break;
        }
      });
  };

  return (
    <Container>
      <GlobalStyle />
      <BubbleComponent color1="#3084e6" color2="#1f59a2" top="13vh" left="27vw" />
      <Content>
        <BlueStrip>
          <TitleComponent>Bem vindo ao Bubble!</TitleComponent>
        </BlueStrip>
        <Form onSubmit={FinishLogin}>
          <AuthInput id="email" text="Email" type="e-mail" load={load} variable={email} setVariable={setEmail} />
          <AuthInput id="senha" text="Senha" type="password" load={load} variable={password} setVariable={setPassword} />
          <AuthButton text="Entrar" load={load} />
        </Form>
        <Click to="/sign-up">
          <AuthSwitchPage>Ainda não possui cadastro? Cadastre-se clicando aqui</AuthSwitchPage>
        </Click>
      </Content>
      <BubbleComponent color1="#e37619" color2="#d45b1a" top="65vh" left="58vw" />
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
