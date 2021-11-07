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
            
            <nav className="flex items-center bg-white p-3 flex-wrap border-2 font-mono">
                <a href="/" className="p-2 -ml-2 inline-flex items-center">
                    <span className="text-xl text-purple-600 font-bold font-mono tracking-wide">CustomeroCity</span>
                </a>
                <div className="text-black inline-flex rounded-lg lg:hidden ml-auto hover:text-black outline-none nav-toggler" data-target="#navigation">
                    <a href="/Login" className="bg-purple-500 hover:bg-blue text-white rounded-xl font-semibold hover:text-white py-1 px-8 border border-blue hover:border-transparent">
                        <span>Login</span>
                    </a>
                    <a href="Signup" className="bg-purple-500 hover:bg-blue text-white rounded-xl font-semibold hover:text-white py-1 px-6 border border-blue hover:border-transparent">
                        <span>SignUp</span>
                    </a>
                </div>
                <div className="hidden top-navbar w-full lg:inline-flex lg:flex-grow lg:w-auto" id="navigation">
                    <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
                        <a href="/Login" className="bg-purple-500 hover:bg-blue text-white rounded-xl font-semibold hover:text-white py-1 px-8 border border-blue hover:border-transparent">
                            <span>Login</span>
                        </a>
                        <a href="Signup" className="bg-purple-500 hover:bg-blue text-white rounded-xl font-semibold hover:text-white py-1 px-6 border border-blue hover:border-transparent">
                            <span>SignUp</span>
                        </a>
                    </div>
                </div>
            </nav>
        </>
    )
}