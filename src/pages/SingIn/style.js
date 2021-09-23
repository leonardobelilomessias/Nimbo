import styled from "styled-components"
import imgbackgroundSingin from "../../assets/background.svg"
import { shade } from "polished"

export const Container = styled.div`
height: 100vh;
display: flex;
align-items: stretch;

`
export const Content = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width: 100%;
max-width: 700px;

  form{
    margin:40px 0;
    width:340px;
    text-align: center;
    align-items: center;
    h1{
      margin-bottom: 24px;
    }
    input{
      background:#FFF;
      border-radius: 10px;
      border: 2px solid #FFF;
      padding: 16px;
      width: 100%;
      color: white;
      &+input{
        margin-top:8px;
      }
      &::placeholder{
        color:#000000;
      }
    }
    button{
      background:#321292;
      height: 56px;
      border-radius: 10px;
      border: 0;
      padding:0 16px;
      width: 100%;
      color: #F5Fe23;
      font-weight: 500;
      margin-top: 16px;
      transition: background-color 0.2s;
      &:hover{
        background:${shade(0.2,'#321292')}
      }
    }
    >a{
      line-height: 100px;
      color:#f4edf8;
      display: block;
      margin-top: 2px;
      text-decoration: none;
      transition: color 0.2s;
     
     

      &:hover{
        color:${shade(0.2,'#f4edf8')}
      }
    }
    
  }

 > a{
      color:#f4edf8;
      display: block;
      margin-top: 0px;
      text-decoration: none;
      transition: color 0.2s;
      display: flex;
      justify-content: center;
      align-items: center;
      &:hover{
        color:${shade(0.2,'#f4edf8')}
      }


      svg{
        margin-right: 16px;
      }

 }
` 
export const Background = styled.div`
flex: 1;
background: url(${imgbackgroundSingin}) no-repeat center;
background-size: cover;

` 