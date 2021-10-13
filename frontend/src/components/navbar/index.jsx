import React from 'react'
import { BrandLogo } from '../brandLogo'
import { Button } from '../button'
import {NavbarContainer, AccessibilityContainer} from './navbar'

import { Link } from 'react-router-dom'

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