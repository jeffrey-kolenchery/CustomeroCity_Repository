/* eslint-disable quotes */
import React from "react"
import styled from "styled-components"
import { BrandLogo } from "../brandLogo"
import { deviceSize } from "../responsive"
import { useMediaQuery } from "react-responsive"

const FooterContainer = styled.div`
  width: 100%;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2em 3em;
  padding-bottom: 0;
  border-top: 0.6px solid rgb(0, 0, 0, 0.3);
  background-color: #F9F6FF;
  @media screen and (max-width: ${deviceSize.mobile}px) {
    padding: 2em 12px;
  }
`

const TopContainer = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 1em;
`

const BottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  padding: 0 10px;
  @media screen and (max-width: ${deviceSize.mobile}px) {
    padding: 0;
  }
`
const LeftBottomContainer = styled.div`
  display: flex;
`

const PrivacyText = styled.h6`
  color: #a3a3a3;
  font-family: Monospace;
  font-size: 11px;
  margin: 0;
  margin-left: 10px;
  display: flex;
  margin-top: 5px;
  align-items: center;
  @media screen and (max-width: ${deviceSize.mobile}px) {
    font-size: 8px;
  }
`

const Container = styled.div`
  width: 430px;
  min-height: 250px;
  display: flex;
  flex-direction: column;
  background-color: #F9F6FF;
  position: relative;
  overflow: hidden;
  @media screen and (max-width: ${deviceSize.mobile}px) {
    width: 330px;
    min-height: 200px;
    margin-left: -12px;
  }
`
const SloganText = styled.h3`
  margin: 0;
  margin-bottom: 20px;
  line-height: 1.4;
  color: #192A3E;
  font-weight: 550;
  font-size: 20px;
  font-family: Monospace;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    font-size: 14px;
    margin-left: 5rem;
  }
`
const SlogText = styled.h3`
  margin: 0;
  margin-top: 15px;
  margin-bottom: 15px;
  line-height: 1.4;
  color: #192A3E;
  font-weight: 10;
  font-size: 14px;
  font-family: Monospace;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    font-size: 14px;
    margin-left: 5rem;
  }
`


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