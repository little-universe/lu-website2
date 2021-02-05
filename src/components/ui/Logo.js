import React from 'react'
import styled from "styled-components"
import { Link } from "gatsby"
import Text from "./Text"

const StyledLogo = styled.div`
  line-height: 0;
`

const Logo = () => (
  <StyledLogo>
    <Link to="/">
      <Text xsmall>Little Universe</Text>
    </Link>
  </StyledLogo>
)

export default Logo