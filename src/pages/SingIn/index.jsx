import React from "react";
import { Container,Content, Background } from "./style";
import {FiLogIn,FiMail,FiLock} from "react-icons/fi"
import Input from "../../components/Input";
import Button from "../../components/Button";

export default function SingIn(){
  return(
    <>
    <Container>
    
        {/* <img src={imgBackground} width={600} height={600} alt="" /> */}
      <Content>
        <h1>NIMBO-LOGO</h1>
        
        <form action="">
          <h1>Faça seu login</h1>
          <Input placeholder="Email" icon={FiMail}/>
          <Input placeholder="Senha" icon= {FiLock}/>
          <Button type="submit">Entrar</Button>
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