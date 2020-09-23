import React from "react"
import Helmet from "react-helmet"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default function fourthBranchTemplate({
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
            <h1 className="heading">What is The Fourth Branch?</h1>

            <p>
              The Fourth Branch summarizes bills being debated in Congress,
              allows users to vote on the summaries, and compare their votes to
              their Congressmen.
            </p>

            {/* <h2 className="heading">Business Overview</h2>

            <p>
              I put together this presentation in the Fall of 2016 in
              preparation for a round of fundraising. The presentation
              identifies the need for the platform, a preview of some
              functionality, the team makeup, the market, revenue streams and a
              two-year marketing plan for the 2018 election.
            </p>
            <p>-----------Placeholder-----------</p> */}

            <h2 className="heading"> Demo</h2>
            <p>
              The video below is a demo I recorded of the final product for
              desktops.
            </p>

            <video src="/assets/the-fourth-branch-review.mp4" controls />
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
