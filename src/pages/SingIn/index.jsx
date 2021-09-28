import React,{useRef,useCallback}from "react";
import { Container,Content, Background } from "./style";
import {FiLogIn,FiMail,FiLock} from "react-icons/fi"
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Form } from "@unform/web";
import * as Yup from "yup"
import { FormHandles } from "@unform/core";
import getValidation from "../../utils/getValidation";
import

export default function SingIn(){
  const formRef = useRef(null)
  console.log(formRef)
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
    }catch(err){
      console.log(err.errors)
      const errors = getValidation(err)
      formRef.current?.setErrors(errors)
    } 
  },[])
  return(
    <>
    <Container>
    
        { <img src={imgBackground} width={600} height={600} alt="" /> }
      <Content>
        <h1>NIMBO-LOGO</h1>
        
        <Form ref={formRef} onSubmit={HandleSubmit}>
          <h1>Faça seu login</h1>
          <Input placeholder="Email" name="email" icon={FiMail}/>
          <Input placeholder="Senha" name="password"icon= {FiLock}/>
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