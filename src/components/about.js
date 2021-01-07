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
    font-size: 3rem;
  }

  @media (max-width: ${props => props.theme.mobile}) {
    margin: 0 auto;
    max-width: 500px;

    :not(:first-child) {
      margin-top: 2rem;
    }
  }
`

const LeftColumn = styled.div`
  position: relative;
  width: 100%;

  div {
    :nth-child(1) {
      position: absolute;
      left: -8%;
    }
    :nth-child(2) {
      position: absolute;
      left: 30%;
      top: 49%;
      border: 2px solid #fefefe;
    }
  }

  @media (max-width: ${props => props.theme.mobile}) {
    position: static;
    display: flex;
    flex-direction: column;

    div {
      position: static !important;
    }
  }
`
const RightColumn = styled.div`
  div {
    max-width: 500px;
    margin-left: 4rem;
    padding-top: 6rem;
    position: relative;

    h2 {
      font-size: 3rem;
      position: absolute;
      top: 7%;
      left: -21%;

      span {
        color: black;
      }
    }

    @media (max-width: ${props => props.theme.mobile}) {
      margin: 0;
      margin-top: 2rem;

      h2 {
        position: static;
        span {
          color: #fefefe;
        }
      }
  }

  
`

export const About = () => (
  <Container id="about">
    <h1>
      Litt om oss på <span>Kroa</span>
    </h1>
    <Cards>
      <LeftColumn>
        <Card>
          <h2>Hvem?</h2>
          <p>
            Kroa har vært drevet i en årrekke av Magne og Solfrid. De får også
            god hjelp fra en rekke andre kroverter.
          </p>
        </Card>
        <Card>
          <h2>Hvor?</h2>
          <p>
            Kroa ligger i hjertet av Fredriksten Festning, rett over gressplenen
            fra parkeringen.
          </p>
        </Card>
      </LeftColumn>
      <RightColumn>
        <Card>
          <h2>
            <span>Tra</span>disjoner
          </h2>
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
