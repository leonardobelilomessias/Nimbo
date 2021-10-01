import React,{useRef,useCallback,useContext}from "react";
import { Container,Content, Background } from "./style";
import {FiLogIn,FiMail,FiLock} from "react-icons/fi"
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Form } from "@unform/web";
import * as Yup from "yup"

import getValidation from "../../utils/getValidation";
import titulo from "../../assets/titulo.png"
import {AuthContext} from "../../context/AuthContext";

export default function SingIn(){
  const formRef = useRef(null)
  //console.log(formRef)
  const {singIn} = useContext(AuthContext)
  const HandleSubmit = useCallback(async(data)=>{
    try{
        formRef.current?.setErrors({})
        const schema = Yup.object().shape({
      
        email: Yup.string().required('Email obrigatorio').email('Diigite um email valido'),
        password:Yup.string().required('Senha obrigatoria')
      })
      await schema.validate(data,{
        abortEarly:false
      })
      singIn({
        email:data.email,
        password:data.password
      })
    }catch(err){
      console.log(err.errors)
      const errors = getValidation(err)
      formRef.current?.setErrors(errors)
    } 
  },[singIn])
  
  return(
    <>
    <Container>
      <Content>
      { <img src={titulo} width={300} height={100} alt="" /> }
      <span>A maior rede  de agentes colaborativos do Brasil</span>
        
        <Form ref={formRef} onSubmit={HandleSubmit}>
          <h1>Faça seu login</h1>
          <Input placeholder="Email" name="email" icon={FiMail}/>
          <Input placeholder="Senha"type="password" name="password"icon= {FiLock}/>
          <Button type="submit">Entrar</Button>
          <a href="#">Esqueci minha senha</a>
        </Form>

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