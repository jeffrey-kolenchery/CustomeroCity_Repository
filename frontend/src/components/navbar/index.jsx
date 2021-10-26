/* eslint-disable react/prop-types */
import React from 'react'
import { BrandLogo } from '../brandLogo'
import { Button } from '../button'
import {NavbarContainer, AccessibilityContainer} from './navbar'

import { Link } from 'react-router-dom'

export function Navbar(props) {
    const { useTransparent } = props

    return (
        <>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/material-design-icons/3.0.1/iconfont/material-icons.min.css" integrity="sha256-x8PYmLKD83R9T/sYmJn1j3is/chhJdySyhet/JuHnfY=" crossOrigin="anonymous" />
            <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;700;900&display=swap" rel="stylesheet" />
            <style dangerouslySetInnerHTML={{__html: "\n  html,\nbody {\n  font-family: \"Rubik\", mono;\n}\n\n/* navigation \n - show navigation always on the large screen devices with (min-width:1024)\n*/\n\n@media (min-width: 1024px) {\n  .top-navbar {\n    display: inline-flex !important;\n  }\n}\n\n" }} />
            <nav className="flex items-center bg-white p-3 flex-wrap border-2">
                <a href="/" className="p-2 -ml-2 inline-flex items-center">
                    <span className="text-xl text-purple-600 font-bold font-mono tracking-wide">CustomeroCity</span>
                </a>
                <div className="text-black inline-flex rounded-lg lg:hidden ml-auto hover:text-black outline-none nav-toggler" data-target="#navigation">
                    <a href="/Login" className="lg:inline-flex lg:w-auto w-full px-6 py-1 rounded-lg text-white bg-purple-600 items-center justify-center hover:bg-blue-500 hover:text-white">
                        <span>Login</span>
                    </a>
                    <a href="Signup" className="lg:inline-flex lg:w-auto w-full px-4 py-1 rounded-lg text-white bg-purple-600 items-center justify-center hover:bg-blue-500 hover:text-white">
                        <span>SignUp</span>
                    </a>
                </div>
                <div className="hidden top-navbar w-full lg:inline-flex lg:flex-grow lg:w-auto" id="navigation">
                    <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
                    <a href="/Login" className="lg:inline-flex lg:w-auto w-full px-8 py-1 rounded-lg font-mono text-white bg-purple-600 items-center justify-center hover:bg-blue-500 hover:text-white">
                        <span>Login</span>
                    </a>
                    <a href="Signup" className="lg:inline-flex lg:w-auto w-full px-6 py-1 rounded-lg font-mono text-white bg-purple-600 items-center justify-center ml-2 hover:bg-blue-500 hover:text-white">
                        <span>SignUp</span>
                    </a>
                    </div>
                </div>
            </nav>
        </>
    )
}