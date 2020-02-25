import React from "react"

import Layout from "../components/layout"
import Quote from "../components/quotes"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <div className="tagline">
    <p>The following quotes you are about to read are real.</p>
    <p> These are 100% <em>not</em> fake news. Enjoy.</p>
    </div>
    <SEO title="Home" />
    <Quote/>
  </Layout>
)

export default IndexPage;