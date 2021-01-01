import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

import { Items } from "./items"
import { Burger } from "./burger"

const Container = styled.header`
  display: flex;
`

export const Topbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <Container>
      <Items open={open} />
      <Burger open={open} setOpen={setOpen} />
    </Container>
  )
}
