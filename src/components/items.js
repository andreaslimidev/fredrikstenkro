import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Image from "./image"
import img from "../images/gatsby-icon.png"

const Nav = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  @media (max-width: ${props => props.theme.mobile}) {
    flex-direction: column;
    position: absolute;
    height: 1600px;
    background-color: white;
    z-index: 999;
    justify-content: start;
    left: 0;
    top: 0;
    padding-top: 2rem;
    align-items: center;
    transition: transform 0.5s ease-in-out;

    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};

    div {
      order: -1;
      margin: 0;
      margin-right: 6rem;
      width: 300px;
    }
  }
`

export const Items = ({ open }) => {
  const Image = styled(Img)`
    margin: 0;
  `

  const List = styled.ul`
    margin-top: 1rem;
    display: flex;
    margin-top: 1rem;
    text-align: center;

    li {
      list-style-type: none;
      font-weight: 600;
    }

    li:not(:last-child) {
      margin-right: 2rem;
    }

    @media (max-width: ${props => props.theme.mobile}) {
      flex-direction: column;
      margin: 0;

      li:not(:last-child) {
        margin-right: 0;
      }

      li {
        margin-top: 2.3rem;
        text-transform: uppercase;
        font-size: 2rem;
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
    <Nav open={open}>
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
