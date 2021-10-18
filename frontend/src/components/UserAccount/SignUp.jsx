/* eslint-disable quotes */
//import { userSignUp } from '../api'
import React from 'react'
import styled from 'styled-components'
import { motion } from "framer-motion"
import { Navbar } from "../navbar"
import {
    PageContainer,
} from '../pageContainer'
import {InnerPageContainer} from '../pageContainer/pagecontainer'
import { userSignUp} from '../../api'
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

class SignUp extends React.Component {
      state = {
          givenName : "",
          email : "",
          phone : "",
          password : ""
      }

    handleLoginButton = () => {
        window.location.assign('/login')
    }

    dataForming = (data) => {
        this.setState(
            {
                givenName : data.givenName,
                email : data.email,
                phone : data.phone,
                password : data.password
            }
        )
    }

    onSubmit = () => {
        try {
            userSignUp(this.state)
            window.location.assign('/Search')
        
        } catch (error) {
            console.log('user signup failed')
            console.log(error)
        }
    }

  signUpPanel = () => {
      const { register, handleSubmit, formState: {errors} } = useForm()

      return (
          <FormContainer onSubmit = {handleSubmit((data) => {
              this.dataForming(data)
              this.onSubmit()
          })}>
              <Input type="fullName" placeholder="Full Name" {...register("givenName", { required: true })}/>
              {errors.givenName && <p>This field is required</p>}
              <Input type="email" placeholder="Email" {...register("email", { required: true })}/>
              {errors.email && <p>This field is required</p>}
              <Input type="phonenumber" placeholder="Phone Number" {...register("phone", { required: true })} />
              {errors.phone && <p>This field is required</p>}
              <Input type="password" placeholder="Password" {...register("password", { required: true })} />
              {errors.password && <p>This field is required</p>}

              <button type="submit">Signup</button>
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
                          </HeaderContainer>
                          <SmallText>Please sign-up to continue!</SmallText>
                      </TopContainer>
                      <InnerContainer>
                          <Container>
                              <this.signUpPanel/>
                          </Container>
                      </InnerContainer>
                  </BoxContainer>
              </StyledInnerContainer>
          </PageContainer>
      ) 
  }
  
}


export default SignUp