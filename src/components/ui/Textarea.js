import React, { useState } from 'react'
import styled from "styled-components"
import { theme } from "../../styles/theme"
import FormProgressIndicator from "./FormProgressIndicator"

const StyledTextareaWrapper = styled.div` 
  width: 100%;
  position: relative;
  display: flex;
  align-items: flex-start;
`
const StyledTextarea = styled.textarea`
  width: 100%;
  border: none;
  border-radius: ${theme.util.radiusMedium}px;
  border: 2px solid ${theme.color.uiLightGray};
  background: ${theme.color.uiLightGray};
  padding: ${theme.util.buffer*2}px;
  outline: none;
  transition: ${props => props.theme.util.transition};
  resize: none;
  min-height: ${theme.text.lineHeight*10}px;
  font-size: ${theme.text.sizeUi}px;
  line-height: ${theme.text.lineHeightUi}px;
  font-family: ${theme.text.familyTextMedium};
  -webkit-appearance: none;
  &::placeholder {
    color: ${theme.color.uiDarkGray};
  }
  &:focus {
    background: white;
    border: 2px solid ${theme.color.uiLightGray};
    transition: ${props => props.theme.util.transition};
  }
`

const Textarea = ({
  placeholder,
  refProp,
  error,
  ...inputProps
}) => {
  const [isFocused, setIsFocused] = useState(false)
  const [isChanged, setIsChanged] = useState(false)
  return (
    <StyledTextareaWrapper>
      <StyledTextarea
        ref={refProp}
        placeholder={placeholder}
        error={error}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChange={() => setIsChanged(true)} 
        {...inputProps}
      />
      <FormProgressIndicator
        isTextarea
        error={error}
        isFocused={isFocused}
        isChanged={isChanged}
      />
    </StyledTextareaWrapper>
  )
}

export default Textarea