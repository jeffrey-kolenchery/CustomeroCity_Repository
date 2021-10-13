/* eslint-disable quotes */
import React from 'react'
import { useForm } from 'react-hook-form'
import {Container, LogoWrapper, BoxContainer, InputContainer, Form, StyledInput} from './SignUp-styling'

import { customerReturn, customerEmail, escapeHtml } from '../api'
// import history from '../history'

class eMailGenerator extends React.Component {

    state = {
        fromEmail : "",
        toEmail : "",
        subject : "",
        body : "",
        hrefcontent : ""
    }
    

    dataForming = (data) => {
        var toEmail = window.location.search
        toEmail = toEmail.slice(1)
        toEmail = customerReturn()
        this.setState(
            {
                fromEmail : data.fromEmail,
                toEmail : data.toEmail,
                subject : escapeHtml(data.subject),
                body : escapeHtml(data.body)
            }
        )
        this.setState(
            {
                hrefcontent : `mailto:${this.state.toEmail}?subject=${this.state.subject}&body=${this.state.body}`
            }
        )
    }

    handleEmailButton = () => {
        window.location.assign(`${this.state.hrefcontent}`)
    }


    //   onSubmit = () => {
    //       try {
    //           userSignUp(this.state)
      
    //       } catch (error) {
    //           console.log('user signup failed')
    //           console.log(error)
    //       }
    //   }

    emailPanel = () => {

        const { register, handleSubmit, formState: {errors} } = useForm()

        return (
            <Form 
                onSubmit = {handleSubmit((data) => {
                    this.dataForming(data)
                    this.handleEmailButton()
                    console.log(this.state)
                })}
            >
                <h3>Send an email to the Customer</h3><InputContainer>
                    <StyledInput type="email" placeholder="From" {...register("fromEmail", { required: true })} />
                    {errors.givenName && <p>This field is required</p>}
                </InputContainer><InputContainer>
                    <StyledInput type="email" placeholder="To" {...register("toEmail", { required: true })} />
                    {errors.email && <p>This field is required</p>}
                </InputContainer><InputContainer>
                    <StyledInput type="Body" placeholder="Subject" {...register("subject", { required: true })} />
                    {errors.phone && <p>This field is required</p>}
                </InputContainer><InputContainer>
                    <StyledInput type="Body" placeholder="Body" {...register("body", { required: true })} />
                    {errors.password && <p>This field is required</p>}
                </InputContainer>
                <button type="submit"> Send </button>
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
                    <this.emailPanel />
                </BoxContainer>
            </Container>
        )
    
        
    }
    
}


export default eMailGenerator
