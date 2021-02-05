import React from 'react'
import styled from "styled-components"
import { theme } from "../../styles/theme"

const StyledText = styled.span`
  font-family: ${props => props.logo ? theme.text.familyCondensed 
  : props.bold ? theme.text.familyTextMedium
  : theme.text.familyTextRegular};

  font-size: ${props => props.small ? theme.text.sizeSmall 
  : props.xsmall ? theme.text.sizeXSmall
  : theme.text.size}px;

  line-height: ${props => props.small ? theme.text.lineHeightSmall 
  : props.xsmall ? theme.text.lineHeightXSmall
  : theme.text.lineHeight}px;

  ${props => (props.paragraph) &&`
    margin-bottom: ${theme.text.lineHeight}px;
  `}
  ${props => (props.paragraph && props.small) &&`
    margin-bottom: ${theme.text.lineHeightSmall}px;
  `}
  ${props => (props.paragraph && props.xsmall) &&`
    margin-bottom: ${theme.text.lineHeightXSmall}px;
  `}

  display: ${props => (props.paragraph) ? 'block' : 'inline'};
  text-align: ${props => props.center ? 'center' : 'left'};
  color: ${props => props.light ? theme.color.white 
  : props.lightened ? theme.color.gray
  : theme.color.black};
  /* font-weight: ${props => props.bold ? theme.text.weightHeavy : theme.text.weight}; */
`

const Text = ({
  children,
  ...props
}) => (
  <StyledText
    { ...props }
  >
    {children}
  </StyledText>
)

export default Text