/* eslint-disable react/prop-types */
import React from 'react'
import {PageWrapper} from './pagecontainer'
export function PageContainer(props) {
    return <PageWrapper>{props.children}</PageWrapper>
}

