import styled from 'styled-components'
export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  h3 {
    color: #222222;
    font-weight: 600;
    font-size: 22px;
    padding: 50px 60px;
  }
  h4 {
    color: #5C5C5C;
    font-weight: 200;
    align: center;
    padding: 10px 350px;
    font-size: 12px;
    text-decoration: underline;
  }
  h5 {
    color: #222222;
    font-weight: 200;
    padding: 10px 70px;
    font-size: 12px;
    text-decoration: underline;
  }
  button {
    width: 75%;
    max-width: 360px;
    min-width: 250px;
    height: 40px;
    border: none;
    margin: 1rem 4rem;
    box-shadow: 0px 14px 9px -15px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    background-color: #885AF8;
    font-size: 14px;
    color: #fff;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease-in;
    &:hover {
      transform: translateY(-3px);
    }
  }
`
export const Text = styled.div`
  position: absolute;
  top: 100px;
  left: 30px;
  font-size: 40px;
  colour: #192A3E;
  font-weight: 500;
`
export const Text2 = styled.div`
  position: absolute;
  top: 150px;
  left: 40px;
  font-size: 25px;
  colour: #020202;
  font-weight: 200;
`
export const BoxContainer = styled.div`
  width: 500px;
  height: 780px;
  display: flex;
  flex-direction: column;
  padding: 10px 10px;
  margin-left: 920px;
  margin-top: 15px;
  background-color: #F9F6FF;
  box-shadow: 0 0 2px rgba(15, 15, 15, 0.28);
  position: relative;
  overflow: hidden;
`

export const LogoWrapper = styled.div`
  img {
    height: 6rem;
  }
  h3 {
    color: #885AF8;
    text-align: left;
    font-size: 22px;
    padding: 20px 0px;
    margin-left: 20px;
  }
  hr {
    margin-bottom: -55px;
    width: 1440px;
    border: 0.5px solid rgb(151, 148, 148);
  }
  h7 {
    color: #885AF8;
    font-size: 22px;
  }
  button {
    border-radius: 8px;
    padding: 10px 45px;
    font-size: 14px;
    font-align: center;
    width: 140px;
    height: 41px;
    box-sizing: border-box;
    display: flex;
    justify-content: right;
    align-items: baseline;
    outline: none;
    cursor: pointer;
    margin-left: 1280px;
    border: none;
    font-weight: 600;
    box-shadow: 0px 14px 9px -15px rgba(0, 0, 0, 0.25);
    background-color: #885AF8;
    color: rgba(255, 255, 255, 1); 
    transition: all 0.2s ease-in;
    &:hover {
      transform: translateY(-3px);
    }
  }
`

export const Container = styled.div`
  height: 100vh;
  max-height: 100vh;
  width: 100vw;
  max-width: 100vw;
  backdrop-filter: blur(35px);
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`

export const StyledInput = styled.input`
  width: 80%;
  max-width: 350px;
  min-width: 250px;
  height: 40px;
  border: none;
  margin: 0.5rem 0;
  background-color: #fff;
  box-shadow: 0px 14px 9px -15px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  padding: 0 1rem;
  transition: all 0.2s ease-in;
`

export const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Status = styled.div`
  height: 10px;
  width: 10px;
  background: #9d9d9d;
  border-radius: 10px;
  margin-left: 1rem;
  ${StyledInput}:focus + & {
    background: #ffa689;
  }
  ${StyledInput}:invalid + & {
    background: #fe2f75;
  }
  ${StyledInput}:valid + & {
    background: #70edb9;
  }
`