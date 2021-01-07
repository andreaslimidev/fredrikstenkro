import PropTypes from "prop-types"
import React, { useState } from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Image from "./image"
import img from "../images/gatsby-icon.png"
import { Link } from "react-scroll"
import { Link as Linker } from "gatsby"
import { globalHistory } from "@reach/router"

const Nav = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  @media (max-width: ${props => props.theme.mobile}) {
    flex-direction: column;
    position: fixed;
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

  a {
    text-decoration: none;
    color: black;
  }
`

export const Items = ({ open, setOpen, location }) => {
  const Image = styled(Img)`
    margin: 0;
  `

  const List = styled.ul`
    margin-top: 1rem;
    display: flex;
    margin-top: 1rem;
    text-align: center;
    font-size: 1.1rem;

    li {
      list-style-type: none;
      font-weight: 600;

      :hover {
        cursor: pointer;
      }
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

  const closeMenu = () => setOpen(false)

  // change links if not on indexpage
  const path = globalHistory.location.pathname

  if (path === "/") {
    return (
      <Nav open={open}>
        <List>
          <li>
            <Link spy={true} onClick={closeMenu} smooth={true} to="landing">
              Intro
            </Link>
          </li>
          <li>
            <Link onClick={closeMenu} spy={true} smooth={true} to="tjenester">
              Tjenester
            </Link>
          </li>
        </List>
        <div
          style={{
            width: `220px`,
            marginBottom: `1.45rem`,
            marginLeft: `5rem`,
          }}
        >
          <Image fluid={logo.placeholderImage.childImageSharp.fluid} />
        </div>
        <List>
          <li>
            <Linker to="/galleri/">Galleri</Linker>
          </li>
          <li>
            <Link onClick={closeMenu} spy={true} smooth={true} to="about">
              Om oss
            </Link>
          </li>
          <li>
            <Link onClick={closeMenu} spy={true} smooth={true} to="contact">
              Kontakt oss
            </Link>
          </li>
        </List>
      </Nav>
    )
  }

  return (
    <Nav open={open}>
      <List>
        <li>
          <Linker to="/">Intro</Linker>
        </li>
        <li>
          <Linker to="/#tjenester">Tjenester</Linker>
        </li>
      </List>
      <div
        style={{
          width: `220px`,
          marginBottom: `1.45rem`,
          marginLeft: `5rem`,
        }}
      >
        <Image fluid={logo.placeholderImage.childImageSharp.fluid} />
      </div>
      <List>
        <li>
          <Linker to="/galleri/">Galleri</Linker>
        </li>
        <li>
          <Linker to="/#about">Om oss</Linker>
        </li>
        <li>
          <Linker to="/#contact">Kontakt oss</Linker>
        </li>
      </List>
    </Nav>
  )
}
