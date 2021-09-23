import React from "react";
import { Container,Content, Background } from "./style";
import imgBackground from "../../assets/background.svg"
import {FiLogIn} from "react-icons/fi"

export default function SingIn(){
  return(
    <>
    <Container>
    
        {/* <img src={imgBackground} width={600} height={600} alt="" /> */}
      <Content>
        <h1>NIMBO-LOGO</h1>
        
        <form action="">
          <h1>Faça seu login</h1>
          <input type="text" placeholder="E-mail" />
          <input type="password" placeholder="Senha" />
          <button type="submit">Entrar</button>
          <a href="#">Esqueci minha senha</a>
        </form>

        <a href="#">
        <FiLogIn/>
          Criar Conta
          </a>
      </Content>
      <Background/>
    </Container>
    </>
  )
}