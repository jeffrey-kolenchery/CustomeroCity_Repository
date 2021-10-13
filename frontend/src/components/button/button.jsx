import styled from 'styled-components'

export const ButtonWrapper = styled.button`
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
  margin-left: 20px;
  font-family: Monospace;

  &:hover {
    background-color: #885AF8;
  }

  &:focus {
    outline: none;
  }
`