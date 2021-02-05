import React, { useState } from 'react'
import styled from "styled-components"
import { theme } from "../../styles/theme"
import FormProgressIndicator from "./FormProgressIndicator"

const StyledInputWrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
`
const StyledInput = styled.input`
  width: 100%;
  border: none;
  border-radius: ${theme.util.radiusMedium}px;
  border: 2px solid ${theme.color.uiLightGray};
  background: ${theme.color.uiLightGray};
  padding: ${theme.util.buffer*2}px;
  outline: none;
  transition: ${props => props.theme.util.transition};
  font-size: ${theme.text.sizeUi}px;
  line-height: 0;
  font-family: ${theme.text.familyTextMedium};
  -webkit-appearance: none;
  &:-webkit-autofill { //fix for yellow bg color on autofill
    box-shadow: inset 0 0 0px 9999px white;
  }

  &::placeholder {
    color: ${theme.color.uiDarkGray};
  }
  &:focus {
    background: white;
    border: 2px solid ${theme.color.uiLightGray};
    transition: ${props => props.theme.util.transition};
  }
`

const Input = ({
  placeholder,
  refProp,
  error,
  ...inputProps
}) => {
  const [isFocused, setIsFocused] = useState(false)
  const [isChanged, setIsChanged] = useState(false)
  return (
    <StyledInputWrapper>
      <StyledInput
        placeholder={placeholder}
        ref={refProp}
        error={error}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChange={() => setIsChanged(true)}
        {...inputProps}
      />
      <FormProgressIndicator
        isFocused={isFocused}
        isChanged={isChanged}
        error={error}
      />
    </StyledInputWrapper>
  )
}

export default Input