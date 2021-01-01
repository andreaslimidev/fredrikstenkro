import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { Topbar } from "../components/topbar"
import { Landing } from "../components/landing"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 7rem;
  font-family: Eczar, serif !important;
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

const Cloud = styled.div`
  height: 500px;
  width: 100%;
  position: relative;
  margin-top: 3rem;

  span {
      color: ${props => props.theme.main}
      font-weight: 600;
  }


  h3:hover {
      transform: scale(1.5);
      transition: all 0.3s linear;
  }

  h3 {
    transition: all 0.3s linear;
    transform: scale(1);  

    :nth-child(1) {
      position: absolute;
      top: 20%;
      right: 17%;
    }
    :nth-child(2) {
      position: absolute;
      top: 13%;
      right: 40%;
      font-size: 2.5rem;
      color: ${props => props.theme.main}
    }
    :nth-child(3) {
      position: absolute;
      top: 37%;
      left: 50%;
      font-size: 2.5rem;
      color: ${props => props.theme.main}
    }
    :nth-child(4) {
        position: absolute;
        top: 25%;
        left 15%;
      }
      :nth-child(5) {
        position: absolute;
        top: 48%;
        left 30%;
      }
      :nth-child(6) {
        position: absolute;
        top: 0;
        left: 24%;
      }
      :nth-child(7) {
        position: absolute;
        top: 5%;
        right: 23%;
      }
  }

  @media (max-width: ${props => props.theme.mobile}) {
    h3 {
        :nth-child(2), :nth-child(3) {
            position: absolute;
            font-size: 1.5rem;
            color: ${props => props.theme.main}
    }
    :nth-child(4) {
        position: absolute;
        top: 29%;
        left: 15%;
      }
      :nth-child(3) {
        position: absolute;
        top: 38%;
        left: 45%;
      }
    :nth-child(6) {
        position: absolute;
        top: 0;
        left: 20%;
      }
      :nth-child(7) {
        position: absolute;
        top: 6%;
        right: 10%;
      }
  }
`

export const Tjenester = () => {
  return (
    <Container>
      <h1>
        Hvilke <span>tjenester</span> kan vi tilby?
      </h1>
      <p>
        Kroa er et sted for alle <span>livets fester</span>. Vi har lang
        erfaring med en rekke forskjellige argumenter. Kontakt oss og fortell om
        din <span>begivenhet</span>.
      </p>
      <Cloud>
        <h3>Selskap</h3>
        <h3>Bryllupp</h3>
        <h3>Konfirmasjon</h3>
        <h3>Minnestund</h3>
        <h3>Servering</h3>
        <h3>Catering</h3>
        <h3>Bursdager</h3>
      </Cloud>
      <div>
        <h2>Ser du ikke ditt neste arrangement her?</h2>
        <h3>
          Ta <span>kontakt</span> da vel!
        </h3>
      </div>
    </Container>
  )
}
