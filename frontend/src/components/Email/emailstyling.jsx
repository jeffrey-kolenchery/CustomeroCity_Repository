import styled from 'styled-components'
import { motion } from 'framer-motion'
import {InnerPageContainer} from '../pageContainer/pagecontainer'

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`

export const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  button {
    padding: 11px 35%;
    margin-top: 150px;
    width: 100%;
    color: #fff;
    font-size: 15px;
    font-weight: 600;
    font-family: Monospace;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: all, 240ms ease-in-out;

    background-color: #885AF8;

    &:focus {
      outline: none;
    }

    &:hover {
      filter: brightness(1.03);
    }
  }
`

export const MutedLink = styled.a`
  color: #5C5C5C;
  font-size: 11px;
  font-weight: 500;
  font-family: Monospace;
  margin: 10px 0;
  text-decoration: none;
`

export const BoldLink = styled.a`
  color: #885AF8;
  font-weight: 600;
  font-size: 11px;
  font-family: Monospace;
  text-decoration: underline;
  margin: 0 3px;
`

export const Input = styled.input`
  width: 100%;
  height: 42px;
  outline: none;
  border: 1px solid rgba(200, 200, 200, 0.03);
  padding: 0 10px;
  font-size: 12px;
  transition: all, 200ms ease-in-out;
  box-sizing: border-box;
  border-bottom: 1.4px solid transparent;
  font-family: Monospace;

  &::placeholder {
    color: rgba(170, 170, 170, 1);
  }

  &:not(:last-of-type) {
    border-bottom: 1.4px solid rgba(200, 200, 200, 0.4);
  }

  &:focus {
    outline: none;
    //box-shadow: 0px 0px 2px rgba(200, 200, 200, 1);
    border-bottom: 2px solid #5963c3;
  }
`
export const InputBig = styled.input`
  width: 100%;
  height: 82px;
  outline: none;
  border: 1px solid rgba(200, 200, 200, 0.03);
  padding: 0 10px;
  transition: all, 200ms ease-in-out;
  box-sizing: border-box;
  border-bottom: 1.4px solid transparent;
  font-family: Monospace;

  &::placeholder {
    color: rgba(170, 170, 170, 1);
  }

  &:not(:last-of-type) {
    border-bottom: 1.4px solid rgba(200, 200, 200, 0.4);
  }

  &:focus {
    outline: none;
    //box-shadow: 0px 0px 2px rgba(200, 200, 200, 1);
    border-bottom: 2px solid #5963c3;
  }
`

export const SubmitButton = styled.button`
  padding: 11px 40%;
  margin-top: 40px;
  width: 100%;
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all, 240ms ease-in-out;
  font-family: Monospace;

  background-color: #885AF8;

  &:focus {
    outline: none;
  }

  &:hover {
    filter: brightness(1.03);
  }
`

export const BoxContainer = styled.div`
  width: 500px;
  min-height: 600px;
  display: flex;
  flex-direction: column;
  background-color: #F9F6FF;
  box-shadow: 0px 0px 2.7px rgba(15, 15, 15, 0.28);
  position: relative;
  overflow: hidden;
`
export const TopContainer = styled.div`
  width: 100%;
  height: 245px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0 1.8em;
  padding-bottom: 5em;
`

export const BackDrop = styled(motion.div)`
  position: absolute;
  width: 160%;
  height: 250px;
  margin-left: -30px;
  background-color: #F9F6FF;
`

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const HeaderText = styled.h2`
  font-weight: 600;
  font-family: Monospace;
  color: #22222;
  z-index: 10;
  margin: 0;
  font-size: 30px;
  line-height: 1.24;
`

export const SmallText = styled.h5`
  font-weight: 500;
  font-family: Monospace;
  color: #22222;
  z-index: 10;
  font-size: 13px;
  line-height: 1.24;
`

export const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1.7em;
`
export const StyledInnerContainer = styled(InnerPageContainer)`
  margin-top: 4em;
`