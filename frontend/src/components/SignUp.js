import React from 'react'
import styled from 'styled-components'
//import logo from ".assets/logo.svg";
import Input from './Input'

const SignUp = () => {
    return (
        <Container>
            <LogoWrapper>
                <h3>
          CRM Tools
                </h3>
                <hr></hr>
                <button onClick="window.location.href='https://w3docs.com';"> Login </button>
        
            </LogoWrapper>
            <img className="bottomRight" src="signup.png" height="220px" width="560px" style={{position: 'absolute', bottom: 0, right: 0}} alt="signUpPic" />
            <BoxContainer>
                <Form>
                    <h3>Sign Up</h3>
                    <Input placeholder="Full Name" />
                    <Input type="email" placeholder="Email" />
                    <Input type="phonenumber" placeholder="Phone Number" />
                    <Input type="password" placeholder="Password" />
                    <Input type="password" placeholder="Confirm Password" />
                    <button>Sign Up</button>
                </Form>
            </BoxContainer>
        </Container>
    )
}

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  h3 {
    color: #222222;
    margin-bottom: 2rem;
    font-weight: 600;
    font-size: 22px;
  }
  button {
    width: 75%;
    max-width: 350px;
    min-width: 250px;
    height: 40px;
    border: none;
    margin: 1rem 0;
    box-shadow: 0px 14px 9px -15px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    background-color: #885AF8;
    font-size: 14px;
    color: #fff;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease-in;
    &:hover {
      transform: translateY(-3px);
    }
  }
`

const BoxContainer = styled.div`
  width: 506px;
  height: 436px;
  display: flex;
  flex-direction: column;
  padding: 30px 10px;
  margin-bottom: 160px;
  margin-top: 100px;
  border-radius: 19px;
  background-color: #F9F6FF;
  box-shadow: 0 0 2px rgba(15, 15, 15, 0.28);
  position: relative;
  overflow: hidden;
`

const LogoWrapper = styled.div`
  img {
    height: 6rem;
  }
  h3 {
    color: #885AF8;
    text-align: left;
    font-size: 22px;
    margin-bottom: 20px;
    margin-left: 210px;
  }
  hr {
    margin-bottom: -55px;
    width: 1800px;
    border: 0.5px solid rgb(151, 148, 148);
  }
  button {
    border-radius: 8px;
    padding: 10px 50px;
    font-size: 14px;
    font-align: center;
    width: 140px;
    height: 41px;
    box-sizing: border-box;
    display: flex;
    justify-content: right;
    align-items: baseline;
    outline: none;
    cursor: pointer;
    margin-bottom: -60px;
    margin-left: 1450px;
    border: none;
    font-weight: 600;
    box-shadow: 0px 14px 9px -15px rgba(0, 0, 0, 0.25);
    background-color: #885AF8;
    color: rgba(255, 255, 255, 1); 
    transition: all 0.2s ease-in;
    &:hover {
      transform: translateY(-3px);
    }
  }
`

const Container = styled.div`
  min-width: 400px;
  backdrop-filter: blur(35px);
  background-color: #fff;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin-bottom: 100rem;
  align-items: center;
  padding: 0 30rem;
  @media (max-width: 1000px) {
    width: 100vw;
    position: absolute;
    padding: 0;
  }
  h4 {
    color: #808080;
    font-weight: bold;
    font-size: 13px;
    margin-top: 2rem;
    span {
      color: #ff8d8d;
      cursor: pointer;
    }
  }
`

export default SignUp