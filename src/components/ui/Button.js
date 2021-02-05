import React from 'react'
import styled from "styled-components"
import { rgba, darken } from 'polished'
import { Link } from "gatsby"
import { theme } from "../../styles/theme"
import Text from "./Text"

const StyledButton = styled.button`
  padding: ${props => props.small ? `${theme.util.buffer}px ${theme.util.buffer*2}px`  : `${theme.util.buffer*2}px ${theme.util.buffer*3}px`};
  border-radius: ${theme.util.radiusLarge}px;
  background: ${props => props.disabled ? theme.color.uiLightGray : props.bgColor};
  border: 2px solid ${props => props.disabled ? theme.color.uiLightGray : props.bgColor};
  color: ${props => props.disabled ? theme.color.uiDarkGray : theme.color.white};
  outline: none;
  transition: ${theme.util.transition};
  width: ${props => props.full && "100%"};
  pointer-events: ${props => props.disabled ? "none" : "auto"};
  box-shadow: ${props => props.disabled ? "none" : ` 0px 20px 50px 0px ${rgba(props.bgColor, .25)}`};
  outline: none;
  &:hover {
    cursor: ${props => !props.disabled && "pointer"};
    transition: ${theme.util.transition};
    background: ${props => props.bgColor ? darken(.02, props.bgColor) : theme.color.darkBlue};
    border: 2px solid ${props => props.bgColor ? darken(.02, props.bgColor) : theme.color.darkBlue};
    color: white;
    box-shadow: ${props => props.disabled ? "none" : ` 0px 20px 100px 0px ${rgba(props.bgColor, .5)}`};
  }
`
const StyledButtonGatsbyLink = styled(Link)`
  width: ${props => props.full && "100%"};
  pointer-events: ${props => props.disabled ? "none" : "auto"};
  cursor: ${props => !props.disabled && "pointer"};
`;

const Button = ({ 
  children,
  to,
  full,
  small,
  disabled,
  bgColor, 
}) => (
  <StyledButtonGatsbyLink
    to={to}
    full={full}
    disabled={disabled}
  >
    <StyledButton 
      full={full}
      small={small}
      disabled={disabled}
      bgColor={bgColor}
    >
      <Text isUi>{children}</Text>
    </StyledButton>
  </StyledButtonGatsbyLink>
)

export default Button