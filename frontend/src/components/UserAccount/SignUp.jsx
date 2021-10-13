/* eslint-disable quotes */
//import { userSignUp } from '../api'
import React from 'react'
import styled from 'styled-components'
import { motion } from "framer-motion"
import { Navbar } from "../navbar"
import {
    InnerPageContainer,
    PageContainer,
} from '../pageContainer'
import { userSignUp} from '../../api'
import { useForm } from 'react-hook-form'
import {
    Container,
    FormContainer,
    Input,
} from './common'

const BoxContainer = styled.div`
  width: 450px;
  min-height: 550px;
  display: flex;
  flex-direction: column;
  background-color: #F9F6FF;
  box-shadow: 0px 0px 2.7px rgba(15, 15, 15, 0.28);
  position: relative;
  overflow: hidden;
`
const TopContainer = styled.div`
  width: 100%;
  height: 245px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0 1.8em;
  padding-bottom: 5em;
`

const BackDrop = styled(motion.div)`
  position: absolute;
  width: 160%;
  height: 250px;
  margin-left: -30px;
  background-color: #F9F6FF;
`

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const HeaderText = styled.h2`
  font-weight: 600;
  font-family: Monospace;
  color: #22222;
  z-index: 10;
  margin: 0;
  font-size: 30px;
  line-height: 1.24;
`

const SmallText = styled.h5`
  font-weight: 500;
  font-family: Monospace;
  color: #22222;
  z-index: 10;
  font-size: 13px;
  line-height: 1.24;
`

const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1.7em;
`
const StyledInnerContainer = styled(InnerPageContainer)`
  margin-top: 4em;
`

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
                          <BackDrop
                          />
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