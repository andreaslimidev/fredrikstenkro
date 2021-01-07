import React, { useState } from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { ArrowLeft, RotateCcw } from "react-feather"

const Container = styled.div`
  display: flex;
  padding-top: 30vh;
  font-family: Eczar, serif !important;

  @media (max-width: ${props => props.theme.mobile}) {
      flex-direction: column;
      font-size: 0.7rem;
      align-items: center;
      padding-top: 10rem;

    
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
    font-weight: 600;

    span {
      color: ${props => props.theme.main};
    }
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
    padding-right: 30%;
  }

  @media (max-width: ${props => props.theme.mobile}) {
    text-align: center;

    p {
      padding: 0 6%;
    }
  }
`

const Image = styled(Img)`
  width: 550px;
  position: absolute;
  top: -15%;
  left: -40%;

  @media (max-width: ${props => props.theme.mobile}) {
    position: static;
    width: 100%;

    left: 0;
  }
`

export const Contact = () => {
  const [open, setOpen] = useState(false)

  const logo = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "party.png" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Container id="contact">
      <Content>
        <h1>
          Kom i <span>kontakt</span> med oss
        </h1>
        <p>
          Vi gleder oss til å høre om din neste <span>begivenhet</span>. Kontakt
          oss for en uforpliktende samtale.
        </p>
        <p>
          Du kan enten sende oss en mail på <span>post@fredrikstenkro.no</span>
        </p>
        <h1>eller...</h1>
        <p>
          ring nummeret <span>27428492</span> for en uforpliktende samtale.
        </p>
      </Content>
      <ImageContainer>
        <Image fluid={logo.placeholderImage.childImageSharp.fluid} />
      </ImageContainer>
    </Container>
  )
}
