import React from "react"
import styled from "styled-components"
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { motion, AnimatePresence} from "framer-motion"
import { theme } from "../styles/theme"
import Grid from "./ui/Grid"
import Button from "./ui/Button"

const StyledHeader = styled.div`
  position: fixed;
  width: 100%;
  z-index: 3;
`
const StyledHeaderArea = styled(Grid)`
  padding: ${theme.util.buffer*5}px;
  @media only screen and (max-width: ${({ theme }) => theme.breakpoint.md}px) {
    padding: ${theme.util.buffer*2}px;
  }
`

const Header = ({ hasCTA, accentColor }) => (
    <StyledHeader>
        <StyledHeaderArea container justifyContent="flex-end">
          <AnimatePresence>
            {hasCTA &&
              <motion.div
              initial={{ 
                opacity: 0, 
                x: 0,
                scaleX: .9,
                rotate: 3,
              }}
              animate={{ 
                opacity: 1, 
                x: [0, 10, 0],
                scaleX: 1,
                rotate: 0,
              }}
              exit={{ 
                opacity: 0, 
                x: 0,
                scaleX: -.9,
                rotate: -3,
              }}
              transition={{duration: .5}}
              >
                <Grid item>
                  <AnchorLink //temp while the site is only one page. Will rethink the cta when we have more pages
                    to="#work-with-us-2"
                  >
                    <Button small bgColor={accentColor}>Work With Us</Button>
                  </AnchorLink>
                </Grid>
              </motion.div>
            }
          </AnimatePresence>
        </StyledHeaderArea>
    </StyledHeader>  
)
export default Header
