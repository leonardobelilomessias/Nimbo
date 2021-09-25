import styled from "styled-components";
export const Container = styled.div`
      background:#FFF;
      border-radius: 10px;
      border: 2px solid #FFF;
      padding: 16px;
      width: 100%;
      color: #000;
      display: flex;
      align-items: center;
      &+div{
        margin-top:8px;
      }
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
        color:#a8aBA3;
      }`