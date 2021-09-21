import React, {Component} from "react";
import {BrowserRouter, Switch, Route} from 'react-router-dom'; 
import styled from "styled-components";
import SignUp from "./components/SignUp";
//add thomas part here

class App extends Component {
  
  render() {
    return (
      <Container>
        <Wrapper>
          <div className = "container-fluid">
            <BrowserRouter>
              <Switch>
                <Route path = "/" component={SignUp} />
                <Route path = "/SignUp" component={SignUp} />
              </Switch>
              </BrowserRouter>
          </div>
        </Wrapper>
     </Container>
      
    );
  }
}

const Container = styled.div`
  background: #fff;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;
const Wrapper = styled.div`
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  display: flex;
`;

export default App;