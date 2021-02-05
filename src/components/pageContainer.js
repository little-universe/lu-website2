import React from "react"
import styled from "styled-components"
import Layout from "./layout"
import Footer from "./footer"

const StyledPageContainer = styled.div`
  background-color: ${({ theme }) => theme.color.white};
  transition: all .4s ease;
  height: 100vh;
  overflow-y: scroll;
  overflow-x: hidden;
  min-height: 100vh;
`

const PageContainer = ({ children }) => (
  <Layout>
    <StyledPageContainer>
      {children}
      <Footer />
    </StyledPageContainer>
  </Layout>
)
export default PageContainer
