/* eslint-disable quotes */
import React, { useState }from 'react'
import { useForm } from 'react-hook-form'
import {FormContainer, Input, BoxContainer, TopContainer, BackDrop, StyledInnerContainer, HeaderContainer, HeaderText, Container, InnerContainer, SmallText, InputBig} from './emailstyling'
import {NavbarContainer} from '../navbar/navbar'
import {BrandLogo} from '../brandLogo'
import { customerReturn, customerEmail, escapeHtml } from '../../api'
import {
    PageContainer,
} from '../pageContainer'
import { View, TextInput } from 'react-native'
// import history from '../history'


class emailgenerator extends React.Component {

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
        const UselessTextInput = (data) => {
            return (
                <TextInput
                    {...data} // Inherit any props passed to it; e.g., multiline, numberOfLines below
                    editable
                    maxLength={40}
                    autoFocus
                    onFocus={(e)=>e.currentTarget.setSelectionRange(e.currentTarget.value.length, e.currentTarget.value.length)}
                />
            )
        }
        const [value, onChangeText] = useState()

        const { register, handleSubmit, formState: {errors} } = useForm()

        return (
            <FormContainer onSubmit = {handleSubmit((data) => {
                this.dataForming(data)
                this.handleEmailButton()
                console.log(this.state)
            })}>
                <Input type="email" placeholder="To" {...register("toEmail", { required: true })} />
                {errors.password && <p>This field is required</p>}
                <Input type="subject" placeholder="Subject" {...register("subject", { required: true })} />
                {errors.body && <p>This field is required</p>}
                <View
                    style={{
                        backgroundColor: '#fff',
                        bordertopColor: '#5D5FEF',
                        position: 'absolute',
                        width: '447px', 
                        height: '100px',
                        top: '350px',
                        fontSize: '12px',
                        fontFamily: 'Monospace'
                    }}>
                    <UselessTextInput
                        multiline
                        numberOfLines={4}
                        onChangeText={text => onChangeText(text)}
                        value={value}
                        placeholder = {'Message'}
                        style={{padding: 10, width: '445px', 
                            height: '98px', borderRadius: '8px', position: 'absolute', fontSize: '12px', fontFamily: 'MonoSpace'}}
                    />
                </View>
  
                <button type="submit">Send Email</button>
            </FormContainer>
        )
    }

    render() {
        return (
            <PageContainer>
                <NavbarContainer>
                    <BrandLogo />
                </NavbarContainer>
                <StyledInnerContainer>
                    <BoxContainer>
                        <TopContainer>
                            <BackDrop
                            />
                            <HeaderContainer>
                                <HeaderText>Email Client</HeaderText>
                            </HeaderContainer>
                            <SmallText>Fill the form with your message</SmallText>
                        </TopContainer>
                        <InnerContainer>
                            <Container>
                                <this.emailPanel/>
                            </Container>
                        </InnerContainer>
                    </BoxContainer>
                </StyledInnerContainer>
            </PageContainer>
        )
    
        
    }
    
}


export default emailgenerator