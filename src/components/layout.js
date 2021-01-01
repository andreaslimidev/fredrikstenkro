/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import { Topbar } from "./topbar"
import "./layout.css"
import { ThemeProvider } from "styled-components"
import styled from "styled-components"
import { createGlobalStyle } from "styled-components"

const Container = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1rem 1.3rem 1.45rem;

  @media (max-width: 802px) {
    padding-top: 4rem;
  }
`

const Layout = ({ children }) => {
  // global theme for whole site
  const theme = {
    main: "#A23333",
    mobile: "802px",
  }

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <ThemeProvider theme={theme}>
        <Container>
          <Topbar />
          <main>{children}</main>
          <footer
            style={{
              marginTop: `2rem`,
            }}
          >
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.com">Gatsby</a>
          </footer>
        </Container>
      </ThemeProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
