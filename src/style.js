import styled from "styled-components";
import { ReactComponent as Hide } from "./image/hide-eye.svg";
import { ReactComponent as Show } from "./image/show-eye.svg";
import {ReactComponent as CHecked} from "./image/checked.svg"

export const Container = styled.div`
width:100%;
height:100vh;
background:#4491DE;
display:flex;
justify-content:center;
align-items:center;
`

export const Wrapper = styled.div`
width:400px;
height:700px;
background:#FFFFFF;
border-radius:15px;
margin-left:50px;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`

export const Info=styled.div`
display:flex;
flex-direction:column;
width:350px;
height:600px;
algin-content:center;
justify-content:space-between;
`

export  const Title = styled.div`
  font-size:22px;
  font-weight:800;
`

export const Input = styled.input`
  color:${(props)=>props.color? "black": ""};
  border:${(props)=>props.border? "0.5px solid #ECECEC":""};
  border-radius:${(props)=>props.border? "15px" :""};
  height:35px;
  outline:none;
  padding:5px 20px;
  width:100%;
`


export const Header = styled.div`
  width:100%;
  height:350px;
  display:flex;
  flex-direction:column;
`


export const HideIcon = styled(Hide)`
position:absolute;
left:90%;
top:30%;
width:20px;
height:20px;
cursor:pointer;
display:${(props)=>props.display? props.display : ""}
`


export const ShowIcon = styled(Show)`
position:absolute;
left:90%;
top:30%;
width:20px;
height:20px;
cursor:pointer;
display:${(props)=>props.display? props.display : ""}
`

export const CHeckedIcon = styled(CHecked)`
position:absolute;
left:90%;
top:30%;
width:20px;
height:20px;
`

export const InputWrapper = styled.div`
  display:flex;
  width:100%;
  position:relative;
  margin:25px 0px;
  justify-content:${(props)=>  props.flex?"space-between" : ""}
`


export const InputCheck = styled.div`
  font-size:15px;
  font-weight:800;
`

export const Button = styled.button`
background:#399CFF;
color:white;
font-size:18px;
font-weight:500;
height:40px;
outline:none;
border:none;
padding:5px 20px;
width:100%;
border-radius:15px;
display:flex;
align-items:center;
justify-content:center;
`
export const Footer = styled.div`
  display:flex;
  width:100%;
  justfiy-content:center;
  padding-left:45px;
`

export const Span = styled.span`
  color:#399CFF;
  font-weight:600;
  cursor:pointer;
  margin:0px 8px;
`

export const CheckBox = styled.input`
  width:15px;
  height:13px;
  margin-right:5px;
`