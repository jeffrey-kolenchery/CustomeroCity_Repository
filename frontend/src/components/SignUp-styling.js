import styled from 'styled-components'
export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  h3 {
    color: #222222;
    margin-bottom: 2rem;
    font-weight: 600;
    font-size: 22px;
  }
  button {
    width: 75%;
    max-width: 350px;
    min-width: 250px;
    height: 40px;
    border: none;
    margin: 1rem 0;
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

export const BoxContainer = styled.div`
  width: 506px;
  height: 436px;
  display: flex;
  flex-direction: column;
  padding: 30px 10px;
  margin-bottom: 160px;
  margin-top: 100px;
  border-radius: 19px;
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
    margin-bottom: 20px;
    margin-left: 210px;
  }
  hr {
    margin-bottom: -55px;
    width: 1800px;
    border: 0.5px ridge rgb(151, 148, 148);
  }
  button {
    border-radius: 8px;
    padding: 10px 50px;
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
    margin-bottom: -60px;
    margin-left: 1450px;
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
  min-width: 400px;
  backdrop-filter: blur(35px);
  background-color: #fff;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin-bottom: 100rem;
  align-items: center;
  padding: 0 30rem;
  @media (max-width: 1000px) {
    width: 100vw;
    position: absolute;
    padding: 0;
  }
  h4 {
    color: #808080;
    font-weight: bold;
    font-size: 13px;
    margin-top: 2rem;
    span {
      color: #ff8d8d;
      cursor: pointer;
    }
  }
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




