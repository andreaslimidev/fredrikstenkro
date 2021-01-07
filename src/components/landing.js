import React, { useState } from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { ArrowLeft, RotateCcw } from "react-feather"
import { Link } from "react-scroll"

const Container = styled.div`
  display: flex;
  padding-top: 7rem;
  font-family: Eczar, serif !important;

  @media (max-width: ${props => props.theme.mobile}) {
      flex-direction: column;
      font-size: 0.7rem;
      align-items: center;
      padding-top: 2rem;

    
`

const ImageContainer = styled.div`
  width: 300px;

  @media (max-width: ${props => props.theme.mobile}) {
    width: 100%;
    left: 0;
  }
`

const Content = styled.div`
  h1 {
    font-size: 2rem;
    margin-top: 0;
    font-weight: 500;
  }

  h3 {
    font-size: 1.1rem;
    color: ${props => props.theme.main};
    margin-bottom: 0.4rem;
    font-weight: 400;
  }

  span {
    font-weight: 700;
  }

  p {
    font-size: 1.2rem;
    padding-right: 1.5rem;
  }
`

const Image = styled(Img)`
  width: 460px;
  position: absolute;
  top: -15%;
  left: -12%;

  @media (max-width: ${props => props.theme.mobile}) {
    position: static;
    width: 100%;
    margin-top: 3rem;
    left: 0;
  }
`

const Button = styled.button`
  background-color: ${props => props.theme.main};
  border: 0;
  padding: 0.4rem 2rem;
  padding-right: 1.2rem;
  font-weight: 500;
  color: #fefefe;
  display: flex;
  align-items: center;
  font-size: 1rem;
  transition: all 0.2s linear;

  :focus {
    outline: none;
  }

  :active {
  }

  :hover {
    background-color: #701919;
    transform: scale(1.05);
    cursor: pointer;
  }
`

export const Landing = () => {
  const [open, setOpen] = useState(false)

  const logo = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "meal.png" }) {
        childImageSharp {
          fluid(maxWidth: 560) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Container id="landing">
      <Content>
        <h3>Åpent hver søndag 12:00 - 16:00</h3>
        <h1>Velkommen til Fredriksten Kro</h1>
        <p>
          På Fredriksten Festning, høyt over den vakre empirbyen Halden, finner
          du <span>Fredriksten Kro </span>. Dette gamle tøyhuset er i dag et
          mangfoldig spisested for alle <span>livets anledninger</span>. Kontakt
          oss for en uforpliktende samtale om din neste <span>begivenhet</span>.
        </p>
        <Link spy={true} smooth={true} to="contact">
          <Button>
            Kontakt oss{" "}
            <ArrowLeft
              style={{
                transform: `rotate(180deg)`,
                marginBottom: `3px`,
                marginLeft: `12px`,
              }}
            />
          </Button>
        </Link>
      </Content>
      <ImageContainer>
        <Image fluid={logo.placeholderImage.childImageSharp.fluid} />
      </ImageContainer>
    </Container>
  )
}
