import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { Gallery } from "../components/gallery"

const GalleryPage = () => (
  <Layout>
    <SEO title="Hjem" />
    <Gallery />

    {/* <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link> */}
  </Layout>
)

export default GalleryPage
