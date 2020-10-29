import React from "react"
import Helmet from "react-helmet"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default function mobileVendorTemplate({
  data // this prop will be injected by the GraphQL query below.
}) {
  const { site, markdownRemark } = data // data.markdownRemark holds your post data
  const { siteMetadata } = site
  const { frontmatter } = markdownRemark
  return (
    <Layout>
      <Helmet>
        <title>
          {frontmatter.title} | {siteMetadata.title}
        </title>
        <meta name="description" content={frontmatter.metaDescription} />
      </Helmet>
      <div className="blog-post-container">
        <article className="post">
          {!frontmatter.thumbnail && (
            <div className="post-thumbnail">
              <h1 className="post-title">{frontmatter.title}</h1>
              <div className="post-meta">{frontmatter.date}</div>
            </div>
          )}
          {!!frontmatter.thumbnail && (
            <div
              className="post-thumbnail"
              style={{ backgroundImage: `url(${frontmatter.thumbnail})` }}
            >
              <h1 className="post-title">{frontmatter.title}</h1>
              <div className="post-meta">{frontmatter.date}</div>
            </div>
          )}
          <div className="blog-post-content">
            <h1>The On-Demand Economy</h1>
            <p>
              Consumers are increasingly expecting an on demand experience for
              every product and service they engage with. Amazon set the tone
              for 2 day deliveries for products and is working on reducing turn
              around time from days to hours. To deliver products and services
              within hours of request, companies will begin to manage mobile
              distribution centers and mobile service providers.
            </p>
            <h1>Application Preview</h1>
            <p>
              The following preview is the product of a week of research and
              development.
            </p>
            <div className="center blog-post-container heading">
              <video src="/assets/Mobile Vendor.mp4" autoplay controls />
            </div>
            <h1 className="heading">Toyota's Vision</h1>
            <p>
              Toyota is already anticipating mobile distributon centers and
              mobile service providers. The video below shares the full vision
              of a Mobile Electronic Marketplace (MEM).
            </p>
            <div className="center blog-post-container heading">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/XmoPQuMlOYE"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
            </div>
            <p className="heading">
              As several companies work on autonomous vehicles I see an
              opportunity to spring up a third party service that can be
              deployed now and can integrate with future autonomous systems.
            </p>
          </div>
        </article>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        thumbnail
        metaDescription
      }
    }
  }
`
