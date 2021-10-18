import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const BrandLogoContainer = styled.div`
  display: flex;
  align-items: center;
`

export const LogoTitle = styled.h2`
  margin: 0;
  font-size: 22px;
  color: #885AF8;
  font-weight: 600;
  margin-left: 6px;
  font-family: Monospace;
`

export const StyledLink = styled(Link)`
  text-decoration: none;
`