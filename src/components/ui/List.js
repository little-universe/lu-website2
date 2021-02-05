import React from 'react'
import styled from "styled-components"

const StyledUnordered = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  li {
    line-height: 0;
  }
`

const List = ({children, unordered}) => (
  unordered && <StyledUnordered>{children}</StyledUnordered>
)

export default List