import React from 'react'
import styled from 'styled-components'
import { BrandLogo } from '../brandLogo'
import { Button } from '../button'

import { Link } from 'react-router-dom'

const NavbarContainer = styled.div`
  width: 100%;
  height: 65px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.5em;
  border-bottom: 0.5px solid rgb(176, 174, 174);
`

const AccessibilityContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`

export function Navbar(props) {
    const { useTransparent } = props

    return (
        <NavbarContainer useTransparent={useTransparent}>
            <BrandLogo />
            <AccessibilityContainer>
                <Link to="/Signup">
                    <Button size={15}>Sign Up</Button>
                </Link>
                <Link to="/Login">
                    <Button size={15}>Login</Button>
                </Link>
            </AccessibilityContainer>
        </NavbarContainer>
    )
}