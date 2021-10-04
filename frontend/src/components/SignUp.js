import React from 'react'
import { useForm } from 'react-hook-form'
import {Container, LogoWrapper, BoxContainer, InputContainer, Form, StyledInput} from './SignUp-styling'

import { userSignUp } from '../api'
// import history from '../history'

class signUp extends React.Component {

  handleLoginButton = () => {
      window.location.assign('/login')
  }

  onSubmit = (data) => {
      try {
          userSignUp(data)
      
      } catch (error) {
          console.log('user login failed')
          console.log(error)
      }
  }


  signUpPanel = () => {

      const { register, handleSubmit, formState: {errors} } = useForm()

      return (
          <Form onSubmit={handleSubmit(this.onSubmit)}>
              <h3>Sign Up</h3><InputContainer>
                  <StyledInput type="fullName" placeholder="Full Name" {...register('givenName', { required: true })} />
                  {errors.email && <p>This field is required</p>}
              </InputContainer><InputContainer>
                  <StyledInput type="email" placeholder="Email" {...register('email', { required: true })} />
                  {errors.email && <p>This field is required</p>}
              </InputContainer><InputContainer>
                  <StyledInput type="phonenumber" placeholder="Phone Number" {...register('phone', { required: true })} />
                  {errors.phone && <p>This field is required</p>}
              </InputContainer><InputContainer>
                  <StyledInput type="password" placeholder="Password" {...register('password', { required: true })} />
                  {errors.password && <p>This field is required</p>}
              </InputContainer>
              <button type="submit">Sign Up</button>
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
                  <button onClick={this.handleLoginButton}> Login </button>
              </LogoWrapper>
              <img className="bottomRight" src="signup.png" height="220px" width="560px" style={{position: 'absolute', bottom: 0, right: 0}}/>
              <BoxContainer>
                  <this.signUpPanel />
              </BoxContainer>
          </Container>
      )
  
    
  }
  
}


export default signUp
