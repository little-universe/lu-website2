import React, { useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import styled from "styled-components"
import { theme } from "../styles/theme"

const StyledSection = styled.div`
  padding: ${props => props.bigTopPadding ? `${theme.util.buffer * 27}px ${theme.util.buffer * 3}px 0px ${theme.util.buffer * 3}px`
  : props.bigBottomPadding ?  `0px ${theme.util.buffer * 3}px ${theme.util.buffer * 27}px ${theme.util.buffer * 3}px`
  : `${theme.util.buffer * 3}px ${theme.util.buffer * 3}px 0px ${theme.util.buffer * 3}px`};
  max-width: ${({ theme }) => theme.breakpoint.lg}px;
  margin: 0 auto;
  /* opacity: ${props => props.inView ? '1' : '0'};
  transition: all 1s ease; */
`

const Section = ({ children, ...props }) => {

  return (
    <StyledSection
      {...props}
    >
      {children}
    </StyledSection>
  )
}

export default Section
