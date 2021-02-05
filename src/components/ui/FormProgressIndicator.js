import React from 'react'
import styled from "styled-components"
import { theme } from "../../styles/theme"
import { FaCheck } from 'react-icons/fa';
import { FaExclamation } from 'react-icons/fa';
import { rgba } from 'polished'

const StyledFormProgressIndicator= styled.span`
  min-height: ${theme.util.buffer*2}px;
  min-width: ${theme.util.buffer*2}px;
  background: ${props => props.error ? theme.color.pink 
    : !props.error && props.isFocused ? "transparent"
    : !props.error && !props.isFocused && props.isChanged ? theme.color.lightGreen
    : "transparent"
  };
  border: 3px solid ${props => props.error ? theme.color.pink 
    : !props.error && props.isFocused ? theme.color.lightGreen
    : !props.error && !props.isFocused && props.isChanged ? theme.color.lightGreen
    : theme.color.uiDarkGray
  };
  box-shadow: ${props => props.error ? `${rgba(theme.color.pink, .25)} 0px ${theme.util.buffer}px ${theme.util.buffer*2}px 0px`
    : !props.error && props.isFocused ? "none"
    : !props.error && !props.isFocused && props.isChanged ? `${rgba(theme.color.lightGreen, .25)} 0px ${theme.util.buffer}px ${theme.util.buffer*2}px 0px`
    : theme.color.uiDarkGray
  };
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: ${props => props.isTextarea ? `${theme.util.buffer*2 }px`: null};
  right: ${theme.util.buffer*2}px;
  border-radius: ${theme.util.radiusLarge}px;
  transition: ${props => props.theme.util.transition};
`
// const StyledErrorMessage = styled.div`
//   padding: ${theme.util.buffer/2}px ${theme.util.buffer}px;
//   font-size: ${theme.text.sizeUiSmall}px;
//   position: absolute;
//   right: -150px;
//   width: auto;
//   border-radius: ${theme.util.radius}px;
//   display: flex;
//   justify-content: flex-start;
//   align-items: center;
//   background: ${theme.color.pink};
//   transition: ${props => props.theme.util.transition};
// `
const StyledCheck = styled(FaCheck)`
  transition: ${props => props.theme.util.transition};
  display: ${props => props.error ? "none" : "block"};
`
const StyledClose = styled(FaExclamation)`
  transition: ${props => props.theme.util.transition};
`

const FormProgressIndicator = ({ isTextarea, error, isFocused, isChanged }) => (
  <StyledFormProgressIndicator
    isTextarea={isTextarea}
    error={error}
    isFocused={isFocused}
    isChanged={isChanged}
    >
    {error ? 
    <>
      <StyledClose size={10}/> 
      {/* <StyledErrorMessage>{error}</StyledErrorMessage> */}
    </>
    : !isFocused && isChanged ? 
      <StyledCheck size={10}/> 
    : null}
  </StyledFormProgressIndicator>
)

export default FormProgressIndicator