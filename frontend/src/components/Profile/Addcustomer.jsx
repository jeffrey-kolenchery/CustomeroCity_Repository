/* eslint-disable quotes */
//import { userSignUp } from '../api'
import React from 'react'
import styled from 'styled-components'
import { userSignUp} from '../../api'
import { useForm } from 'react-hook-form'
import {
    Container,
    FormContainer,
    Input,
} from './styling-profile'
import { deviceSize } from '../responsive'
import Sidebar from './Sidebar'


const BoxContainer = styled.div`
  width: 450px;
  min-height: 550px;
  display: flex;
  flex-direction: column;
  background-color: #F9F6FF;
  margin-left: 45em;
  margin-top: -45em;
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
  padding-bottom: 8em;
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
const LogoTitle = styled.h2`
  margin: 0;
  font-size: 18px;
  color: #885AF8;
  font-weight: 550;
  margin-left: -13rem;
  margin-top: 1rem;
  font-family: Monospace;
  @media screen and (max-width: ${deviceSize.mobile}px) {
    margin-left: -8rem;
  }
`

class Addcustomer extends React.Component {
      state = {
          givenName : "",
          designation: "",
          company: "",
          email : "",
          phone : "",
          age: "",
          interests: ""
      }

    handleLoginButton = () => {
        window.location.assign('/login')
    }

    dataForming = (data) => {
        this.setState(
            {
                givenName : data.givenName,
                designation: data.designation,
                company: data.company,
                email : data.email,
                phone : data.phone,
                age : data.age,
                interests: data.interests
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

  addCustomer = () => {
      const { register, handleSubmit, formState: {errors} } = useForm()

      return (
          <FormContainer onSubmit = {handleSubmit((data) => {
              this.dataForming(data)
              this.onSubmit()
          })}>
              <Input type="fullName" placeholder="Full Name" {...register("givenName", { required: true })}/>
              {errors.givenName && <p>This field is required</p>}
              <Input type="designation" placeholder="Designation" {...register("designation", { required: true })}/>
              {errors.designation && <p>This field is required</p>}
              <Input type="company" placeholder="Company" {...register("company", { required: true })}/>
              {errors.company && <p>This field is required</p>}
              <Input type="email" placeholder="Email" {...register("email", { required: true })}/>
              {errors.email && <p>This field is required</p>}
              <Input type="phonenumber" placeholder="Phone Number" {...register("phone", { required: true })} />
              {errors.phone && <p>This field is required</p>}
              <Input type="age" placeholder="Age" {...register("age", { required: true })} />
              {errors.age && <p>This field is required</p>}
              <Input type="interests" placeholder="Interests" {...register("interests", { required: true })} />
              {errors.interests && <p>This field is required</p>}

              <button type="submit">Add</button>
          </FormContainer>
      )
  }

  render() {
      return (
          <>
              <Sidebar/>
              <BoxContainer>
                  <TopContainer>
                      <HeaderContainer>
                          <HeaderText>Add Customer</HeaderText>
                      </HeaderContainer>
                      <SmallText>Fill customer details</SmallText>
                  </TopContainer>
                  <InnerContainer>
                      <Container>
                          <this.addCustomer/>
                      </Container>
                  </InnerContainer>
              </BoxContainer>
          </>
      ) 
  }
  
}
export const ContainerList = styled.div`
  width: 430px;
  min-height: 406px;
  display: flex;
  flex-direction: column;
  background-color: #D8C9FE;
  position: relative;
  overflow: hidden;
  border-bottom: 6px solid white;  
  @media screen and (max-width: ${deviceSize.mobile}px) {
    width: 330px;
    min-height: 200px;
    margin-left: -12px;
  }
`
export const ContainerDown = styled.div`
  width: 430px;
  min-height: 440px;
  display: flex;
  flex-direction: column;
  background-color: #D8C9FE;
  position: relative;
  overflow: hidden;
  @media screen and (max-width: ${deviceSize.mobile}px) {
    width: 330px;
    min-height: 344px;
    margin-left: -12px;
  }
`
export const ContainerInside = styled.div`
  width: 320px;
  min-height: 100px;
  display: flex;
  flex-direction: column;
  background-color: #5D5FEF;
  position: relative;
  overflow: hidden;
  margin-left: 40px; 
  margin-top: 10px; 
  @media screen and (max-width: ${deviceSize.mobile}px) {
    width: 270px;
    min-height: 80px;
    margin-left: 40px;
  }
`
export const Title = styled.h2`
  margin: 0;
  font-size: 18px;
  color: #885AF8;
  font-weight: 550;
  margin-left: -12rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  font-family: Monospace;
  @media screen and (max-width: ${deviceSize.mobile}px) {
    margin-left: -8rem;
  }
`


export default Addcustomer