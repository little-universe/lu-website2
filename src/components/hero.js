import React from "react"
import styled from "styled-components"
import Grid from "./ui/Grid"
import Text from "./ui/Text"
import Logo from "./ui/Logo"
import Container from "./ui/Container"
import Icon from "./ui/Icon"
import { motion } from "framer-motion"
import { theme } from "../styles/theme"

const spaceEarth = 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2852&q=80'
const earthImage = 'https://images.unsplash.com/photo-1608452781842-b65171b2f154?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2800&q=80'
const usgs1 = 'https://images.unsplash.com/photo-1576158113928-4c240eaaf360?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80'
const earthAerial = 'https://images.unsplash.com/photo-1483651646696-c1b5fe39fc0e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=975&q=80'
const technology = 'https://images.unsplash.com/photo-1581092456744-82cdd366cd15?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=5134&q=80'

const StyledHero = styled.div`
  height: 100vh;
  padding: ${({ theme }) => theme.util.buffer * 3}px ${({ theme }) => theme.util.buffer * 3}px 0 ${({ theme }) => theme.util.buffer * 3}px;
  max-width: ${({ theme }) => theme.breakpoint.lg}px;
  margin: 0 auto;
  max-height: ${({ theme }) => theme.breakpoint.lg/1.35}px;
  @media (max-width: ${({ theme }) => theme.breakpoint.sm}px) {
    height: auto;
  }
`;
const StyledTextHero = styled(Grid)`
  height: 100%;
  @media (max-width: ${({ theme }) => theme.breakpoint.sm}px) {
    height: 60vh;
  }
`;
const StyledCardHero = styled(Grid)`
  height: 100%;
  @media (max-width: ${({ theme }) => theme.breakpoint.sm}px) {
    height: 60vh;
    margin-bottom: ${({ theme }) => theme.util.buffer}px;
  }
`;
const BufferGrid = styled(Grid)`
  @media (max-width: ${({ theme }) => theme.breakpoint.sm}px) {
    display: none;
  }
`;

const Hero = ({ ...props }) => {
  const variants = {
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        delayChildren: .15,
        staggerChildren: .25
      }},
    hidden: { 
      opacity: 0, 
      y: theme.util.buffer,
    },
    transition: {
      type: 'ease-in-out'
    }
  }
  const item = {
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        type: 'ease-in-out'
      }
    },
    hidden: { 
      opacity: 0,
      y: theme.util.buffer 
    }
  }
  const item2 = {
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        delay: .15,
        type: 'ease-in-out'
      }
    },
    hidden: { 
      opacity: 0,
      y: theme.util.buffer 
    }
  }

  return (
    <StyledHero {...props}>
      <motion.div 
          style={{ height: '100%' }}
          initial='hidden'
          animate={ props.inView ? 'visible' : 'hidden' }
          variants={variants}
        >
          <Grid container spacing={3} style={{height: '100%'}}>
            <StyledTextHero item xs={12} sm={5}>
              <Grid
                container 
                flexDirection='column' 
                justifyContent='space-between' 
                style={{height: '100%'}}
                initial='hidden'
                animate={ props.inView ? 'visible' : 'hidden' }
                variants={variants}
              >
                <motion.Grid item variants={item}><Logo>Little Universe</Logo></motion.Grid>
                <motion.Grid item variants={item}><Text>We are a digital product agency specializing in making innovation faster, cheaper, and easier for our partners</Text></motion.Grid>
                <motion.Grid item variants={item}><Icon type='arrow-down'/></motion.Grid>
              </Grid>
            </StyledTextHero>

            <BufferGrid item sm={1} />
            
            <StyledCardHero item xs={12} sm={6}>
              <Container card bgImage={technology} shadow style={{zIndex: '1'}} link inView={props.inView}>
                <Grid container style={{height: '100%'}} alignItems='flex-end'>
                  <Grid item xs={10} sm={8}>
                    <Text light xsmall paragraph bold>Change is coming</Text>
                    <Text light xsmall>The climate crisis is the most existential challenge we face as a species. We are committed to understanding our role as software creators in contributing to the solution.</Text>
                  </Grid>
                  {/* <Grid item container  xs={2} sm={4} alignItems='flex-end'>
                    <Icon type='arrow-right' light size={24}/>
                  </Grid> */}
                </Grid>
              </Container>
            </StyledCardHero>

          </Grid>
          
        </motion.div>
    </StyledHero>  
  )
}

export default Hero
