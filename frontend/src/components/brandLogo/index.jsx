import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const BrandLogoContainer = styled.div`
  display: flex;
  align-items: center;
`

const LogoTitle = styled.h2`
  margin: 0;
  font-size: 22px;
  color: #885AF8;
  font-weight: 600;
  margin-left: 6px;
  font-family: Monospace;
`

const StyledLink = styled(Link)`
  text-decoration: none;
`

export function BrandLogo() {
    return (
        <BrandLogoContainer>
            <StyledLink to="/">
                <LogoTitle>
                  CustomeroCity
                </LogoTitle>
            </StyledLink>
        </BrandLogoContainer>
    )
}

