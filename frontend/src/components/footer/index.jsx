/* eslint-disable quotes */
import React from "react"
import { BrandLogo } from "../brandLogo"
import { deviceSize } from "../responsive"
import { useMediaQuery } from "react-responsive"
import {FooterContainer, TopContainer, Container, SloganText, SlogText, BottomContainer, LeftBottomContainer, PrivacyText} from './footer'


export function Footer() {
    const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile })

    return (
        <FooterContainer>
            <TopContainer>
                <Container>
                    <SloganText>Basic Address book</SloganText>
                    <SlogText>Store client information by storing, updating and deleting information of the client with email functionality within the web app. </SlogText>

                </Container>
                <Container>
                    <SloganText>Scan Business Cards</SloganText>
                    <SlogText>Scan a business card of the client and automatically store thier information</SlogText>
                </Container>
                <Container>
                    <SloganText>User Dashboard</SloganText>
                    <SlogText>Storing top interests of each client and displaying the common interests between 
                      all the clients of the user to keep up with the current trends. </SlogText>
                </Container>
            </TopContainer>
            <BottomContainer>
                <LeftBottomContainer>
                    <BrandLogo hideLogo color="#8A8A8A" textSize={isMobile ? 20 : 25} />
                    <PrivacyText> &#169; All Rights Reserved. 2021</PrivacyText>
                </LeftBottomContainer>
            </BottomContainer>
        </FooterContainer>
    )
}