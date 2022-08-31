import React from 'react';
import {Info, Title, Wrapper,Input,Header,CheckBox, HideIcon,Span,InputWrapper,CHeckedIcon,ShowIcon,InputCheck, Button,Footer} from './style'

function App(){
  return(
    <Wrapper>
       <Info>
        <Header>
          <Title> Sign Up </Title>

          <InputWrapper>
            <CHeckedIcon/>
            <Input color border  placeholder='@johndoe' type='text'/>
          </InputWrapper>
 
          <InputWrapper>
            <Input color border  placeholder='johndoe@gmail.com' type='text'/>
          </InputWrapper>
 
          <InputWrapper>
            <Input color border  type='password' value={'342424234adasd'}/>
          </InputWrapper>

          <InputWrapper>
            <CHeckedIcon/>
            <Input color border  type='password' value={'342424234adasd'}/>
          </InputWrapper>

          <InputWrapper flex>
            <InputCheck>
              <CheckBox type="checkbox" checked/>
              By signing up you accept the <Span>Term of service</Span>
              and <Span>Privacy Policy</Span>
            </InputCheck>
          </InputWrapper>
          <Button>
             Sign Up
          </Button>
        </Header>
        <Footer>
            Already have an account ?  <Span>Sign In</Span>
        </Footer>
      </Info> 
    </Wrapper>
  )
}

export default App;