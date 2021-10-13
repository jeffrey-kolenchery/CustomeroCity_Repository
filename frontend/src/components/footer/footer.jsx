import styled from 'styled-components'
import { deviceSize } from '../responsive'

export const FooterContainer = styled.div`
  width: 100%;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2em 3em;
  padding-bottom: 0;
  border-top: 0.6px solid rgb(0, 0, 0, 0.3);
  background-color: #F9F6FF;
  @media screen and (max-width: ${deviceSize.mobile}px) {
    padding: 2em 12px;
  }
`

export const TopContainer = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 1em;
`

export const BottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  padding: 0 10px;
  @media screen and (max-width: ${deviceSize.mobile}px) {
    padding: 0;
  }
`
export const LeftBottomContainer = styled.div`
  display: flex;
`

export const PrivacyText = styled.h6`
  color: #a3a3a3;
  font-family: Monospace;
  font-size: 11px;
  margin: 0;
  margin-left: 10px;
  display: flex;
  margin-top: 5px;
  align-items: center;
  @media screen and (max-width: ${deviceSize.mobile}px) {
    font-size: 8px;
  }
`

export const Container = styled.div`
  width: 430px;
  min-height: 250px;
  display: flex;
  flex-direction: column;
  background-color: #F9F6FF;
  position: relative;
  overflow: hidden;
  @media screen and (max-width: ${deviceSize.mobile}px) {
    width: 330px;
    min-height: 200px;
    margin-left: -12px;
  }
`
export const SloganText = styled.h3`
  margin: 0;
  margin-bottom: 20px;
  line-height: 1.4;
  color: #192A3E;
  font-weight: 550;
  font-size: 20px;
  font-family: Monospace;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    font-size: 14px;
    margin-left: 5rem;
  }
`
export const SlogText = styled.h3`
  margin: 0;
  margin-top: 15px;
  margin-bottom: 15px;
  line-height: 1.4;
  color: #192A3E;
  font-weight: 10;
  font-size: 14px;
  font-family: Monospace;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    font-size: 14px;
    margin-left: 5rem;
  }
`