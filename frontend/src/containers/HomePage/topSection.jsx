import React from 'react'
import styled from 'styled-components'
import { deviceSize } from '../../components/responsive'

import TheBestSpecialistsImg from '../../images/Work only with the best.png'

import { Link } from 'react-router-dom'

const TopSectionContainer = styled.div`
  width: 100%;
  height: 800px;
  background-position: 0px -150px;
  background-size: cover;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    height: 700px;
    background-position: 0px 0px;
  }
`

const BackgroundFilter = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
`

const TopSectionInnerContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`

const StandoutImage = styled.div`
  width: 44em;
  height: 30em;
  margin-left: 25rem;
  margin-top: -12rem;

  img {
    width: 100%;
    height: 100%;
  }
  @media screen and (max-width: ${deviceSize.mobile}px) {
    align-items: center;
    margin-top: 1rem;
    margin-left: -3rem;
    width: 38em;
    height: 22em;
  }
`

const LogoContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin-left: 80px;
  @media screen and (max-width: ${deviceSize.mobile}px) {
    align-items: center;
  }
`

const SloganText = styled.h3`
  margin: 0;
  margin-bottom: 20px;
  line-height: 1.4;
  color: #192A3E;
  font-weight: 550;
  font-size: 40px;
  font-family: Monospace;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    font-size: 24px;
    margin-left: -2rem;
  }
`

const SlogText = styled.h3`
  margin: 0;
  margin-top: 15px;
  margin-bottom: 15px;
  line-height: 1.4;
  color: #192A3E;
  font-weight: 600;
  font-size: 30px;
  font-family: Monospace;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    font-size: 24px;
    margin-left: -2rem;
  }
`

const SmallText = styled.h3`
  margin: 0;
  line-height: 1.4;
  color: #22222;
  font-weight: 200;
  font-size: 24px;
  font-family: Monospace;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    font-size: 20px;
    margin-left: -2rem;
  }
`
const MainButton = styled.button`
  border: none;
  outline: none;
  color: #fff;
  height: 30px;
  padding: 6px 3rem;
  font-size: 14px;
  font-weight: 600;
  border-radius: 8px;
  background-color: #885AF8;
  cursor: pointer;
  transition: all 200ms ease-in-out;
  margin-left: 0px; 
  margin-top: 30px; 
  font-family: Monospace;

  &:hover {
    background-color: #885AF8;
  }

  &:focus {
    outline: none;
  }
  @media screen and (max-width: ${deviceSize.mobile}px) {
    margin-left: -2rem;
  }
`

export function TopSection(props) {
    const { children } = props

    return (
        <TopSectionContainer>
            <BackgroundFilter>
                {children}
                <TopSectionInnerContainer>
                    <LogoContainer>
                        <>
                            <SloganText>Welcome to Customer City </SloganText>
                            <SmallText>Online Address Book for great customer </SmallText>
                            <SmallText>relationships</SmallText>
                            <SlogText>Join Us Today!</SlogText>
                            <Link to="/Signup">
                                <MainButton size={15}>Get Started</MainButton>
                            </Link>

                            <StandoutImage>
                                <img src={TheBestSpecialistsImg} alt="best in the field"/>
                            </StandoutImage>
                        </>
                    </LogoContainer>
                </TopSectionInnerContainer>
            </BackgroundFilter>
        </TopSectionContainer>
    )
}
