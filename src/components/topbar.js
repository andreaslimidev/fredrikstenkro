import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

import { Items } from "./items"

const Container = styled.header`
  display: flex;
`

export const Topbar = () => {
  return (
    <Container>
      <Items />
    </Container>
  )
}
