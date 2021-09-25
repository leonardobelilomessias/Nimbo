import React from "react";
import { Container,Content, Background } from "./style";
import {FiLogIn,FiMail,FiLock, FiUser, FiArrowLeft} from "react-icons/fi"
import Input from "../../components/Input";
import Button from "../../components/Button";

export default function Singup(){
  return(
    <>
      

    <Container>
    <Background/>
    
        {/* <img src={imgBackground} width={600} height={600} alt="" /> */}
      <Content>
        <h1>NIMBO-LOGO</h1>
        
        <form action="">
          <h1>Faça seu Cadastro</h1>
          <Input name="name" placeholder="Nome" icon={FiUser}/>
          <Input name="email" placeholder="Email" icon={FiMail}/>
          <Input name="password" placeholder="Senha" icon= {FiLock}/>
          <Button type="submit">Cadastrar</Button>
        </form>

        <a href="#">
        <FiArrowLeft/>
         Voltar para logon
          </a>
      </Content>
    </Container>
    </>
  )
}