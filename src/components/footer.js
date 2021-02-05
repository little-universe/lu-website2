import React from "react"
import styled from "styled-components"
import { theme } from "../styles/theme"
import Grid from "./ui/Grid"
import Text from "./ui/Text"
import List from "./ui/List"
import Logo from "./ui/Logo"

const StyledFooter = styled(Grid)`
  max-width: ${({ theme }) => theme.breakpoint.lg}px;
  margin: 0 auto;
  margin-bottom: ${({ theme }) => theme.util.buffer * 5}px;
  padding: ${theme.util.buffer * 3}px; 
`;

const Footer = () => (
  <StyledFooter container>
    <Grid item xs={6} sm={3}><Logo/></Grid>
    {/* <Grid item xs={6} sm={3}>
      <List unordered>
        <li><Text small>Newsletter</Text></li>
        <li><Text small>Privacy Policy</Text></li>
        <li><Text small>Instagram</Text></li>
        <li><Text small>Github</Text></li>
      </List>
    </Grid> */}
  </StyledFooter>
)

export default Footer
