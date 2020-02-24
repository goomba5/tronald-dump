import React from "react"

import Layout from "../components/layout"
import Quote from "../components/quotes"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Quote/>
    <p>You are reading random quotes from a used orange peel. Enjoy.</p>
  </Layout>
)

export default IndexPage
