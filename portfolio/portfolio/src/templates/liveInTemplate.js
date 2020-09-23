import React from "react"
import Helmet from "react-helmet"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default function liveInTemplate({
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
            <h1>LiveIn Vision</h1>

            <p>
              LIVEIN sought to allow real estate buyers and renters to discover
              available units within a building by scanning the facade of the
              building using their smartphone. Potential clients would then be
              offered augmented reality tours and an opportunity to book a
              viewing via mobile application. Once a client finds a property
              that suits their needs, they would be able to make an offer and
              come to an agreement with the owner via the app, eliminating the
              need for a broker and reducing the cost to transact.
            </p>

            {/* <p>Choosing a place to live is much more than choosing a
place where you will sleep. It’s about the schools you and
your kids will learn in, the parks you will play in, the shops
you will browse in, the bars you will drink in, the
restaurants you will eat in; it’s about the place you will
LIVEIN!</p> */}
            <a
              href="https://www.instagram.com/liveinar/"
              target="_blank"
              className="button -primary"
              rel="noopener noreferrer"
            >
              Instagram &rarr;
            </a>
            <a
              href="https://www.facebook.com/liveinar/"
              target="_blank"
              className="button -primary"
              rel="noopener noreferrer"
            >
              Facebook &rarr;
            </a>
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
