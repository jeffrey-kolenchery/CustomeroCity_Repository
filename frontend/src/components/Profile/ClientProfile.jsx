import React, { useState } from 'react'
import { SidebarData } from './SidebarData'
import './UserProfile.css'
import styled from 'styled-components'
import { deviceSize } from '../responsive'
import { View, TextInput } from 'react-native'
import Sidebar from './Sidebar'

const ClientProfile = () => {
    const UselessTextInput = (props) => {
        return (
            <TextInput
                {...props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
                editable
                maxLength={40}
                onFocus={(e)=>e.currentTarget.setSelectionRange(e.currentTarget.value.length, e.currentTarget.value.length)}
            />
        )
    }
    const [value, onChangeText] = useState()
    const [value2, onChangeText2] = useState(null)
    const [value3, onChangeText3] = useState(null)
    const [value4, onChangeText4] = useState(null)
    const [value5, onChangeText5] = useState(null)
    return (
        <>
            <View
                style={{
                    backgroundColor: value,
                    borderColor: '#5D5FEF',
                    borderWidth: 1,
                    position: 'absolute',
                    borderRadius: '8px',
                    top: 100, 
                    left: 500,
                    width: '400px', 
                    height: '120px'

                }}>
                <UselessTextInput
                    multiline
                    numberOfLines={4}
                    onChangeText={text => onChangeText(text)}
                    placeholder = 'Credentials'
                    value={value}
                    style={{padding: 10, width: '399px', 
                        height: '118px', borderRadius: '8px', position: 'absolute'}}
                />
            </View>
            <View
                style={{
                    backgroundColor: value2,
                    borderColor: '#5D5FEF',
                    borderWidth: 1,
                    position: 'absolute',
                    borderRadius: '8px',
                    top: 100, 
                    left: 1000,
                    width: '400px', 
                    height: '120px'

                }}>
                <UselessTextInput
                    multiline
                    numberOfLines={4}
                    onChangeText={text => onChangeText2(text)}
                    placeholder = 'UniqueIdentifiers'
                    value={value2}
                    style={{padding: 10, width: '399px', 
                        height: '118px', borderRadius: '8px', position: 'absolute'}}
                />
            </View>
            <View
                style={{
                    backgroundColor: value3,
                    borderColor: '#5D5FEF',
                    borderWidth: 1,
                    position: 'absolute',
                    borderRadius: '8px',
                    top: 250, 
                    left: 500,
                    width: '400px', 
                    height: '120px'

                }}>
                <UselessTextInput
                    multiline
                    numberOfLines={4}
                    onChangeText={text => onChangeText3(text)}
                    placeholder = '3'
                    value={value3}
                    style={{padding: 10, width: '399px', 
                        height: '118px', borderRadius: '8px', position: 'absolute'}}
                />
            </View>
            <View
                style={{
                    backgroundColor: value4,
                    borderColor: '#5D5FEF',
                    borderWidth: 1,
                    position: 'absolute',
                    borderRadius: '8px',
                    top: 250, 
                    left: 1000,
                    width: '400px', 
                    height: '120px'

                }}>
                <UselessTextInput
                    multiline
                    numberOfLines={4}
                    onChangeText={text => onChangeText4(text)}
                    placeholder = '4'
                    value={value4}
                    style={{padding: 10, width: '399px', 
                        height: '118px', borderRadius: '8px', position: 'absolute'}}
                />
            </View>
            <View
                style={{
                    backgroundColor: value5,
                    borderColor: '#5D5FEF',
                    borderWidth: 1,
                    position: 'absolute',
                    borderRadius: '8px',
                    top: 400, 
                    left: 500,
                    width: '400px', 
                    height: '120px'

                }}>
                <UselessTextInput
                    multiline
                    numberOfLines={4}
                    onChangeText={text => onChangeText5(text)}
                    placeholder = '5'
                    value={value5}
                    style={{padding: 10, width: '399px', 
                        height: '118px', borderRadius: '8px', position: 'absolute'}}
                />
            </View>
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