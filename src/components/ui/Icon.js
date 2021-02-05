import React from 'react'
import styled from "styled-components"
import {
  Send,
  MessageSquareDetail,
  DownArrow
} from "@styled-icons/boxicons-solid"
import {
  ArrowLeft,
  ArrowRight,
} from '@styled-icons/bootstrap'

const StyledIcon = styled.span`
  svg {
    width: ${props => props.size ? `${props.size}px` : "16px"};
    color: ${props => props.theme.text.color};
    ${props => props.primary ? `color: ${props.theme.color.primary};` : `color: ${props.theme.text.colorLightened};` }
    ${props => props.light && `color: ${props.theme.color.white};` }
    position: relative;
    top: -1px;
    display: inline-block;
    vertical-align: middle;
    overflow: hidden;
  }
  ${props => props.clickable && `
    cursor: pointer;
    &:hover svg {
      color: ${props.theme.color.primary};
    }
  `}
`

const Icon = ({
    className,
    type,
    ...iconProps
  }) => {

  let source;

  if (type === "arrow-left") {
    source = <ArrowLeft />;
  } else if (type === "arrow-right") {
    source = <ArrowRight />;
  } else if (type === "arrow-down") {
    source = <DownArrow />;
  } 

  return (
    <StyledIcon {...iconProps} className={className}>
      {source}
    </StyledIcon>
  );
};

export default Icon