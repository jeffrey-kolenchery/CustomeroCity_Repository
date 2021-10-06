/* eslint-disable quotes */
import React from 'react'
import { useForm } from 'react-hook-form'
import {Container, LogoWrapper, BoxContainer, InputContainer, Form, StyledInput, Text, Text2} from './Login-styling'

import { userSignUp, userLogin } from '../api'
// import history from '../history'

class UserLogin extends React.Component {



    state = {
        username : "",
        password : ""
    }

  handleSignUpButton = () => {
      window.location.assign('/Signup')
  }

  dataForming = (data) => {
      this.setState(
          {
              username : data.email,
              password : data.password
          }
      )
  }

  onSubmit = () => {
      try {
          userLogin(this.state)
      
      } catch (error) {
          console.log('user login failed')
          console.log(error)
      }
  }

  loginPanel = () => {

      const { register, handleSubmit, formState: {errors} } = useForm()

      return (
          <Form 
              onSubmit = {handleSubmit((data) => {
                  this.dataForming(data)
                  this.onSubmit()
              })}
          >
              <h3>Log In</h3>
              <InputContainer>
                  <StyledInput type="username" placeholder="Username" {...register("username", { required: true })} />
                  {errors.username && <p>This field is required</p>}
              </InputContainer>
              <InputContainer>
                  <StyledInput type="password" placeholder="Password" {...register("password", { required: true })} />
                  {errors.password && <p>This field is required</p>}
              </InputContainer>
              <h4>Forgot Password?</h4>
              <button type="submit">Login</button>
              <h5> Dont have an account? Sign Up</h5>
          </Form>

      )
  }

  render() {
      return (
          <Container>
              <LogoWrapper>
                  <h3>
                    CRM Tools
                  </h3>
                  <hr></hr>
                  <button onClick={this.handleSignUpButton}> Sign Up </button>
              </LogoWrapper>
              <img className="topLeft" src="login.png" height="730px" width="920px" style={{position: 'absolute', top: 85, left: 0}}/>
              <Text>Online Address Book</Text>
              <Text2>for great customer relationships</Text2>
              <BoxContainer>
                  <this.loginPanel />
              </BoxContainer>
          </Container>
      )
  
    
  }
  
}


export default UserLogin