import React, { Children } from "react";
import { Container } from "./styles";
export default function Tooltip({className,title,children}){
  return(
    <Container className={className}>
      {children}
      <span>{title}</span>
    </Container>
  )
}