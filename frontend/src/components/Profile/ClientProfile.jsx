import React, { useState } from 'react'
import { SidebarData } from './SidebarData'
import './UserProfile.css'
import styled from 'styled-components'
import { deviceSize } from '../responsive'
import { View, TextInput } from 'react-native'
import Sidebar from './Sidebar'

import { customerReturn, userView } from '../../api'

const ClientProfile = () => {
    var currentCustomer = customerReturn()
    console.log(userView())
    console.log(currentCustomer)
    return (
        <>
            <link href="https://cdn.jsdelivr.net/npm/@tailwindcss/custom-forms@0.2.1/dist/custom-forms.css" rel="stylesheet"/>
            <label className="block text-left">
              <textarea className="form-textarea mt-1 block w-full" rows="3" placeholder="Credentials" style={{
                    borderColor: '#5D5FEF',
                    borderWidth: 1,
                    position: 'absolute',
                    borderRadius: '8px',
                    top: 100, 
                    left: 500,
                    width: '400px', 
                    height: '120px'}}></textarea>
              <textarea className="form-textarea mt-1 block w-full" rows="3" placeholder="Unique Identifiers" style={{
                borderColor: '#5D5FEF',
                borderWidth: 1,
                position: 'absolute',
                borderRadius: '8px',
                top: 100, 
                left: 1000,
                width: '400px', 
                height: '120px'}}></textarea>
              <textarea className="form-textarea mt-1 block w-full" rows="3" placeholder="3" style={{
              borderColor: '#5D5FEF',
              borderWidth: 1,
              position: 'absolute',
              borderRadius: '8px',
              top: 250, 
              left: 500,
              width: '400px', 
              height: '120px'}}>

              </textarea>
              <textarea className="form-textarea mt-1 block w-full" rows="3" placeholder="4" style={{
              borderColor: '#5D5FEF',
              borderWidth: 1,
              position: 'absolute',
              borderRadius: '8px',
              top: 250, 
              left: 1000,
              width: '400px', 
              height: '120px'}}>
                
              </textarea>
              <textarea className="form-textarea mt-1 block w-full" rows="3" placeholder="5" style={{
              borderColor: '#5D5FEF',
              borderWidth: 1,
              position: 'absolute',
              borderRadius: '8px',
              top: 400, 
              left: 500,
              width: '400px', 
              height: '120px'}}>
                
              </textarea>
            </label>
            <MainButton style={{position: 'absolute', top: 15 , left: 1000}}>Edit Fields</MainButton>
            <MainButton style={{position: 'absolute', top: 15 , left: 1200}}>Clear Fields</MainButton>
            <Title style={{position: 'absolute', top: 530 , left: 695}}>Location</Title>
            <Sidebar/>
        </>
    )
}

export const Container = styled.div`
  width: 430px;
  min-height: 406px;
  display: flex;
  flex-direction: column;
  background-color: #D8C9FE;
  position: relative;
  overflow: hidden;
  border-bottom: 6px solid white;  
  @media screen and (max-width: ${deviceSize.mobile}px) {
    width: 330px;
    min-height: 200px;
    margin-left: -12px;
  }
`
export const ContainerInside = styled.div`
  width: 320px;
  min-height: 100px;
  display: flex;
  flex-direction: column;
  background-color: #5D5FEF;
  position: relative;
  overflow: hidden;
  margin-left: 40px; 
  margin-top: 10px; 
  @media screen and (max-width: ${deviceSize.mobile}px) {
    width: 270px;
    min-height: 80px;
    margin-left: 40px;
  }
`
export const ContainerDown = styled.div`
  width: 430px;
  min-height: 406px;
  display: flex;
  flex-direction: column;
  background-color: #D8C9FE;
  position: relative;
  overflow: hidden;
  @media screen and (max-width: ${deviceSize.mobile}px) {
    width: 330px;
    min-height: 344px;
    margin-left: -12px;
  }
`
export const LogoTitle = styled.h2`
  margin: 0;
  font-size: 18px;
  color: #885AF8;
  font-weight: 550;
  margin-left: -13rem;
  margin-top: 1rem;
  font-family: Monospace;
  @media screen and (max-width: ${deviceSize.mobile}px) {
    margin-left: -8rem;
  }
`
export const Input = styled.input`
    width: 400px;
    height: 120px;
    font-size: 14px;
    background: white;
    border: 1px solid #5D5FEF;
    display: flex;
    text-align: center;
    border-radius: 8px;
`
export const Location = styled.input`
    width: 900px;
    height: 180px;
    font-size: 14px;
    background: white;
    border: 1px solid #5D5FEF;
    display: flex;
    text-align: center;
    border-radius: 8px;
`
export const MainButton = styled.button`
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
export const Title = styled.h2`
  margin: 0;
  font-size: 18px;
  color: #885AF8;
  font-weight: 550;
  margin-left: -12rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  font-family: Monospace;
  @media screen and (max-width: ${deviceSize.mobile}px) {
    margin-left: -8rem;
  }
`

export default ClientProfile