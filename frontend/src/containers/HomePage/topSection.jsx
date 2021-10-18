/* eslint-disable react/prop-types */
import React from 'react'
import TheBestSpecialistsImg from '../../images/Work only with the best.png'
import { Link } from 'react-router-dom'
import {TopSectionContainer, BackgroundFilter, TopSectionInnerContainer, LogoContainer, SloganText, SmallText, SlogText, MainButton, StandoutImage} from './styling'

export function TopSection(props) {
    const { children } = props

    return (
        <TopSectionContainer>
            <BackgroundFilter>
                {children}
                <TopSectionInnerContainer>
                    <LogoContainer>
                        <>
                            <SloganText>Welcome to CustomeroCity </SloganText>
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
