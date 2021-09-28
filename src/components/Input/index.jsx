import React, { useEffect,useRef,useState,useCallback } from "react";
import { Container } from "./style";
import { useField } from "@unform/core";
export default function Input({name,icon:Icon,...rest}){
  const [isFocused,setIsfocus] = useState(false)
  const inputRef = useRef(null)
  const { fieldName, defaultValue = "", registerField, error } = useField(name);
  const [isFild,setIsFild] = useState(false)

const HandleBlur = useCallback(()=>{
    setIsfocus(false)
    if(inputRef.current?.value){
      
      setIsFild(true)
    }else{
      setIsFild(false)
      
    }
  },[])
  const HandlesFocus = ()=>{
    setIsfocus(true)
  }

  useEffect(()=>{
    registerField({
      name:fieldName,
      ref: inputRef.current,
      path:'value'
    })
  
  },[fieldName,registerField])
 return ( 
 <Container isFocused={isFocused} isField ={isFild}>
  {Icon && <Icon size={20}/>}
    <input 
    onFocus={HandlesFocus}
    onBlur={HandleBlur}
    defaultValue={defaultValue} 
    ref= {inputRef}{...rest}
    
    />
    {error}
  </Container>)
  
}