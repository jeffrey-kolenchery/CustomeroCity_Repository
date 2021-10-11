/* eslint-disable no-unused-vars */
import React, {Component} from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom' 
import styled from 'styled-components'
import SignUp from './components/SignUp'
import Login from './components/Login'
import draftLogin from './components/draftLogin'
import UserProfile from './components/UserProfile'
import Dashboard from './components/Dashboard'
//add thomas part here

class App extends Component {
    render() {
        return (
            <Container>
                <Wrapper>
                    <div className = "container-fluid">
                        <BrowserRouter>
                            <Switch>
                                <Route exact path = "/dashboard" component={Dashboard} />
                                <Route exact path="/login" component={draftLogin} />
                                <Route exact path="/profile" component={UserProfile} />
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