import React from 'react'
import styled from "styled-components"
import { theme } from "../../styles/theme"
import Text from "./Text"
import { FaCheck } from 'react-icons/fa';
import { rgba } from 'polished'

const StyledCheckboxWrapper = styled.div` 
  display: flex;
  align-items: center;
`
const StyledCheckbox = styled.div`
  min-height: ${theme.util.buffer*2}px;
  min-width: ${theme.util.buffer*2}px;
  border: 2px solid ${props => props.checked ? theme.color.darkBlue : theme.color.uiLightGray};
  background: ${props => props.checked ? theme.color.darkBlue : theme.color.uiLightGray};
  box-shadow: ${props => !props.checked ? "none" : `${rgba(theme.color.darkBlue, .25)} 0px ${theme.util.buffer}px ${theme.util.buffer*2}px 0px`};
  border-radius: ${theme.util.radius}px;
  margin-right: ${theme.util.buffer*2}px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: ${props => props.theme.util.transition};
`

const Checkbox = ({label, checked, onClick}) => (
  <StyledCheckboxWrapper>
    <StyledCheckbox
      onClick={onClick}
      checked={checked}
    >
      { checked && <FaCheck color="white" size={10} /> }
    </StyledCheckbox>
    <Text isUi secondary>{label}</Text>
  </StyledCheckboxWrapper>
)
export default Checkbox