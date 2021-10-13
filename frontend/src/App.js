/* eslint-disable no-unused-vars */
import React, {Component} from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom' 
import styled from 'styled-components'
import SignUp from './components/SignUp.js'
import Login from './components/Login.js'
import UserProfile from './components/UserProfile.js'
import eMailGenerator from './components/eMailGenerator.js'

class App extends Component {
  
    render() {
        return (
            <Container>
                <Wrapper>
                    <div className = "container-fluid">
                        <BrowserRouter>
                            <Switch>
                                <Route exact path = "/" component={Login} />
                                <Route exact path = "/signup" component={SignUp} />
                                <Route exact path="/login" component={Login} />
                                <Route exact path="/UserProfile" component={UserProfile} />
                                <Route exact path="/email" component={eMailGenerator} />
                                {/*to send an email use window.sessionstorage to transfer info between pages. transfer currentCustomer = customerId info*/}
                            </Switch>
                        </BrowserRouter>
                    </div>
                </Wrapper>
            </Container>
      
        )
    }
}

const Container = styled.div`
  background: #fff;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`
const Wrapper = styled.div`
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  display: flex;
`

export default App
