import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Image from "./image"
import img from "../images/gatsby-icon.png"

export const Items = ({ open }) => {
  const Nav = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;

    @media (max-width: ${props => props.theme.mobile}) {
      flex-direction: column;
    }
  `

  const Image = styled(Img)`
    display: none;
    margin: 0;
  `

  const List = styled.ul`
    margin-top: 1rem;
    display: flex;
    margin-top: 1rem;

    li {
      list-style-type: none;
      font-weight: 600;
    }

    li:not(:last-child) {
      margin-right: 2rem;
    }

    @media (max-width: ${props => props.theme.mobile}) {
      flex-direction: column;

      li {
        margin: 0;
      }
    }
  `

  const logo = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "kroa-transparent.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Nav>
      <List>
        <li>Intro</li>
        <li>Tjenester</li>
      </List>
      <div
        style={{
          width: `220px`,
          marginBottom: `1.45rem`,
          marginLeft: `1.8rem`,
        }}
      >
        <Image fluid={logo.placeholderImage.childImageSharp.fluid} />
      </div>
      <List>
        <li>Galleri</li>
        <li>Om oss</li>
        <li>Kontakt oss</li>
      </List>
    </Nav>
  )
}
