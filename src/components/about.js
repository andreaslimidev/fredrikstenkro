import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import styled from "styled-components"
import { Topbar } from "../components/topbar"
import { Landing } from "../components/landing"
import { Tjenester } from "../components/tjenester"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 7rem;
  align-items: center;
  text-align: center;

  h1 {
    font-weight: 600;
  }

  p {
    font-size: 1.2rem;

    span {
      color: black;
      font-weight: 600;
    }
  }

  span {
    color: ${props => props.theme.main};
  }

  @media (max-width: ${props => props.theme.mobile}) {
    font-size: 0.7rem;
  }
`

const Cards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 4rem;

  @media (max-width: ${props => props.theme.mobile}) {
    grid-template-columns: 1fr;
  }
`

const Card = styled.div`
  background-color: ${props => props.theme.main};
  color: #fefefe;
  padding: 3rem 1.9rem;
  max-width: 330px;
  text-align: left;

  h2 {
    font-size: 2rem;
  }

  p {
  }
`

const LeftColumn = styled.div`
  position: relative;

  div {
    :nth-child(1) {
      position: absolute;
      left: -8%;
    }
    :nth-child(2) {
      position: absolute;
      left: 30%;
      top: 49%;
    }
  }
`
const RightColumn = styled.div`
  div {
    max-width: 500px;
    margin-left: 4rem;
  }
`

export const About = () => (
  <Container>
    <h1>
      Litt om oss på <span>Kroa</span>
    </h1>
    <Cards>
      <LeftColumn>
        <Card>
          <h2>Hvem?</h2>
          <p>
            Integer ac risus unge, pharetra lacus sed, convallis lacus. Nunc
            vitae mi congue, vestibulum nisi sit amet, fleksible felis.
          </p>
        </Card>
        <Card>
          <h2>Hvor?</h2>
          <p>
            Integer ac risus unge, pharetra lacus sed, convallis lacus. Nunc
            vitae mi congue, vestibulum nisi sit amet, fleksible felis.
          </p>
        </Card>
      </LeftColumn>
      <RightColumn>
        <Card>
          <h2>Hvor?</h2>
          <p>
            Integer ac risus unge, pharetra lacus sed, convallis lacus. Nunc
            vitae mi congue, vestibulum nisi sit amet, fleksible felis. Integer
            ac risus unge, pharetra lacus sed, convallis lacus. Nunc vitae mi
            congue, vestibulum nisi sit amet, fleksible felis.
          </p>
          <p>
            Integer ac risus unge, pharetra lacus sed, convallis lacus. Nunc
            vitae mi congue, vestibulum nisi sit amet, fleksible felis.
          </p>
        </Card>
      </RightColumn>
    </Cards>
  </Container>
)
