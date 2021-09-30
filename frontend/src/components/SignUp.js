import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import {Container, LogoWrapper, BoxContainer, InputContainer, Form, StyledInput} from './SignUp-styling'

const SignUp = () => {
  const history = useHistory();
  const { register, handleSubmit } = useForm();
  return (
    <Container>
      <LogoWrapper>
        <h3>
          CRM Tools
        </h3>
        <hr></hr>
        <button> Login </button>
      </LogoWrapper>
      <img class="bottomRight" src="signup.png" height="220px" width="560px" style={{position: "absolute", bottom: 0, right: 0}}/>
      <BoxContainer>
        <Form >
        <h3>Sign Up</h3>
        <InputContainer>
          <StyledInput type="fullName" placeholder="Full Name" {...register("fullName", { required: true })}/>
        </InputContainer>
        <InputContainer>
          <StyledInput type="email" placeholder="Email" {...register("email", { required: true })}/>
        </InputContainer>
        <InputContainer>
          <StyledInput type="phonenumber" placeholder="Phone Number" {...register("phonenumber", { required: true })}/>
        </InputContainer>
        <InputContainer>
          <StyledInput type="password" placeholder="Password" {...register("password", { required: true })} />
        </InputContainer>
        <button type="submit">Sign Up</button>
        </Form>
      </BoxContainer>
    </Container>
  );
  
};

export default SignUp;
