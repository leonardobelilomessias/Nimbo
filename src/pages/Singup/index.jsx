import React,{useCallback,useRef} from "react";
import { Container,Content, Background } from "./style";
import {FiLogIn,FiMail,FiLock, FiUser, FiArrowLeft,FiAlertCircle} from "react-icons/fi"
import {Form} from '@unform/web'
import {FormHandles } from "@unform/core"
import Input from "../../components/Input";
import Button from "../../components/Button";
import * as Yup from "yup"
import getValidation from "../../utils/getValidation";

export default function Singup(){
  const formRef = useRef(null)
  console.log(formRef)
  const HandleSubmit = useCallback(async(data)=>{
    try{
        formRef.current?.setErrors({})
        const schema = Yup.object().shape({
        name:Yup.string().required('Nome obrigatorio'),
        email: Yup.string().required('Email obrigatorio').email('Diigite um email valido'),
        password:Yup.string().min(6,'No minimo 6 digitos')
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
    <Background/>
        {/* <img src={imgBackground} width={600} height={600} alt="" /> */}
      <Content>
        <h1>NIMBO-LOGO</h1>
        <Form ref={formRef} onSubmit={HandleSubmit}>
          <h1>Faça seu Cadastro</h1>
          <Input name="name" placeholder="Nome" icon={FiUser}/>
          <Input name="email" placeholder="Email" icon={FiMail}/>
          <Input name="password" type="password" placeholder="Senha" icon= {FiLock}/>
          <Button type="submit">Cadastrar</Button>
        </Form>

        <a href="#">
        <FiArrowLeft/>
         Voltar para logon
          </a>
      </Content>
    </Container>
    </>
  )
}