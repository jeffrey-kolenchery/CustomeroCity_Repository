import React from 'react'
import {ButtonWrapper} from './button'
export function Button(props) {
    const { size } = props

    return (
        <ButtonWrapper size={size} className={props.className}>
            {props.children}
        </ButtonWrapper>
    )
}
