import React from 'react';
import {Info, Title, Wrapper,Input,Header, HideIcon,Span,InputWrapper,CHeckedIcon,ShowIcon,InputCheck, Button,Footer, CheckBox} from './style'

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
      show:false,  
    }
  render() { 
    const myFunction = () => {
        this.setState((state)=>{
           if(state.show)
           {
              return {show:false};
           }else{
            return {show:true};
           } 
        })
    }
    return(
      <Wrapper>
        <Info>
          <Header>
            <Title> Sign In </Title>
            <InputWrapper>
              <CHeckedIcon/>
              <Input color border  placeholder='johndoe@gmail.com' type='text'/>
            </InputWrapper>
            <InputWrapper>
              <ShowIcon onClick={myFunction} display={this.state.show? "none" : "block"} />
              <HideIcon  onClick={myFunction} display={this.state.show? "block" : "none"}/>
              <Input color border  type={this.state.show? "text" : "password"} value={'342424234adasd'}/>
            </InputWrapper>
            <InputWrapper flex>
              <InputCheck>
                <CheckBox type="checkbox" checked/>
                Remember Me
              </InputCheck>
              <span>Forgot Password ?</span>
            </InputWrapper>
            <Button>
               Sign In
            </Button>
          </Header>
          <Footer>
              Don't have an account ?  <Span>  Create new one</Span>
          </Footer> 
        </Info>
      </Wrapper>
    )
  }
}
 
export default App;

