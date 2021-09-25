import React from "react";
import { Container } from "./style";

export default function Button({children, ...rest}){
  return(
    <Container type="submit"{...rest}>
      {children}
      
    </Container>
    
  )

}