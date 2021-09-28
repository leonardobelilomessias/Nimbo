import styled, { css } from "styled-components";
import Tooltip from "../Tooltip";
export const Container = styled.div`
      background:#FFF;
      border-radius: 10px;
      border: 2px solid #FFF;
      padding: 16px;
      width: 100%;
      color: #000;
      display: flex;
      align-items: center;
      color:#a8aBA3;
      &+div{
        margin-top:8px;
      }
      ${props=> props.isErrored && css ` 
      border-color:#c53030;
      `}
      ${props=>props.isFocused && css`
      color:#321292;
      border-color: #321292;
      `}
      ${props=>props.isField && css`
      color:#321292;
      
      `}
    
 input{
      flex: 1;
      border:0;
      background: transparent;
     
      &::placeholder{
        color:#a8aBA3;
      }
    }
    svg{
        margin-right: 16px;
        
      }`
export const Error = styled(Tooltip) `
      margin-left: 16px;
      height: 20px;
      svg{
        margin: 0;
      }
      span{
        background: #c53030;
        color:#fff;
        &::before{
          border-color: #c53030 transparent;
        }
      }
  
      `