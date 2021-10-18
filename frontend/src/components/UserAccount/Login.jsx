/* eslint-disable quotes */
import React from 'react'
import { Navbar } from "../navbar"
import {
    PageContainer,
} from '../pageContainer'
import { userLogin } from '../../api'
import { useForm } from 'react-hook-form'
import {
    Container,
    FormContainer,
    Input,
    BoxContainer,
    InnerContainer,
    StyledInnerContainer,
    TopContainer,
    BackDrop,
    HeaderContainer,
    HeaderText,
    SmallText,

} from './common'

class Login extends React.Component {
    state = {
        username : "",
        password : ""
    }

    dataForming = (data) => {
        this.setState(
            {
                username : data.username,
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
        // window.location.assign('/Search')
    }

  LoginPanel = () => {
      const { register, handleSubmit, formState: {errors} } = useForm()

      return (
          <FormContainer onSubmit = {handleSubmit((data) => {
              this.dataForming(data)
              this.onSubmit()
          })}>
              <Input type="username" placeholder="Username" {...register("username", { required: true })}/>
              {errors.email && <p>This field is required</p>}
              <Input type="password" placeholder="Password" {...register("password", { required: true })} />
              {errors.password && <p>This field is required</p>}

              <button type="submit">Login</button>
          </FormContainer>
      )
  }

  render() {
      return (
          <PageContainer>
              <Navbar />
              <StyledInnerContainer>
                  <BoxContainer>
                      <TopContainer>
                          <HeaderContainer>
                              <HeaderText>Welcome</HeaderText>
                              <HeaderText>Back</HeaderText>
                          </HeaderContainer>
                          <SmallText>Please sign-in to continue!</SmallText>
                      </TopContainer>
                      <InnerContainer>
                          <Container>
                              <this.LoginPanel/>
                          </Container>
                      </InnerContainer>
                  </BoxContainer>
              </StyledInnerContainer>
          </PageContainer>
      ) 
  }
  
}


export default Login