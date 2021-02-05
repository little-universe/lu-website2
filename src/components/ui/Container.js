import React from 'react'
import styled from "styled-components"
import { rgba, darken} from 'polished'
import { theme } from "../../styles/theme"
import { motion } from "framer-motion"

const StyledContainer = styled.div`
  background-color: ${props => props.bgColor ? props.bgColor : 'transparent'};
  background-image: ${props => props.bgImage ? `url(${props.bgImage})` : 'none'};
  background-size: ${props => props.bgImage ? '100% auto' : 'none'};
  background-position: ${props => props.bgImage ? 'center' : 'none'};
  width: 100%;
  height: 100%;
  padding: ${props => props.workImg ? `${theme.util.buffer * 8}px`
  : props.card ? `${theme.util.buffer * 3}px` 
  : `${theme.text.lineHeightSmall}px 0 0 0`
  };
  border-radius: ${props => props.workImg ? theme.util.radiusMedium
  : props.card ? theme.util.radiusLarge : 0}px;
  /* border-top: ${props => props.borderTop ? theme.util.border : 0}; */
  box-shadow: ${props => props.shadow ? theme.util.shadowLarge 
  : props.shadowGreen ? `${rgba(theme.color.darkGreen, .2)} 0px 20px 70px 0px`
  : 'none'};
  transition: all .5s ease;
  transition-property: box-shadow, background-size;
  &:hover {
    box-shadow: ${props => props.shadowGreen ? `${rgba(theme.color.darkGreen, .4)} 0px 50px 100px 0px` : 'auto'};
    transition: all .5s ease;
    transition-property: box-shadow, background-size;
    background-size: ${props => props.bgImage ? '105% auto' : 'none'}; //just playing around here
    cursor: ${props => props.link ? 'pointer' : 'auto'};
  }
  display: ${props => props.workImg ? 'flex' : 'block'};
  align-items: ${props => props.workImg ? 'center' : 'none'};
  position: relative;
  &:before {
    position: absolute;
    top: 0;
    border-top: ${props => props.borderTop ? theme.util.border : 0};
    width: ${props => props.inView ? '100%' : '0%'};
    transition: all .5s ease-in-out;
    content: ''
  }
  
`
const StyledWorkImage = styled.img`
  width: 100%;
  height: auto;
  filter: ${props => props.bgColor && `drop-shadow(0px 20px 50px ${rgba(darken(.6, props.bgColor), .1)})`};
`;

const Container = ({ children, workImg, bgColor, ...props }) => {
  const variants = {
    visible: { 
      opacity: 1,
      transition: {
        delayChildren: .15,
        staggerChildren: .15
      }},
    hidden: { 
      opacity: 0, 
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

  return (

      <StyledContainer
        workImg={workImg}
        bgColor={bgColor}
        {...props}
      >
        <motion.div 
          style={{ height: '100%' }}
          initial='hidden'
          animate={ props.inView ? 'visible' : 'hidden' }
          variants={variants}
        >

          {React.Children.map(children, (child, i) =>
            <motion.div key={i} variants={item} style={{display: `${props.card && 'inline'}`}}>{child}</motion.div>
          )}
          
          { workImg && 
            <StyledWorkImage src={workImg} bgColor={bgColor}/>
          }
          
        </motion.div>
      </StyledContainer>

  )
}

export default Container