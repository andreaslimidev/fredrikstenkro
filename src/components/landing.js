import React, { useState } from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Container = styled.div`
  display: flex;
  padding-top: 3rem;
  font-family: Eczar, serif !important;

  @media (max-width: ${props => props.theme.mobile}) {
      flex-direction: column;
      font-size: 0.7rem;
      align-items: center;

    
`

const ImageContainer = styled.div`
  width: 300px;

  @media (max-width: ${props => props.theme.mobile}) {
    width: 500px;
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
    color: red;
    margin-bottom: 0.4rem;
    font-weight: 400;
  }

  span {
    font-weight: 700;
  }

  p {
    font-size: 1.1rem;
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
    left: 0;
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
    <Container>
      <Content>
        <h3>Åpent hver søndag 12:00 - 16:00</h3>
        <h1>Velkommen til Fredriksten Kro</h1>
        <p>
          På Fredriksten Festning, høyt over den vakre empirbyen Halden, finner
          du <span>Fredriksten Kro </span>. Dette gamle tøyhuset er i dag et
          mangfoldig spisested for alle <span>livets anledninger</span>. Kontakt
          oss for en uforpliktende samtale om din neste <span>begivenhet</span>.
        </p>
      </Content>
      <ImageContainer>
        <Image fluid={logo.placeholderImage.childImageSharp.fluid} />
      </ImageContainer>
    </Container>
  )
}
