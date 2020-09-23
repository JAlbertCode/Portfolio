import React from "react"
import Helmet from "react-helmet"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default function thoughtCardTemplate({
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
            <div className="row margin">
              <div className="column">
                <h1>Augmented Business Card</h1>

                <p>
                  After sharing some Augmented Reality ideas with a friend, he
                  requested that I augment his business card. Over several years
                  he compiled quotes that he felt moved by and wanted to share
                  the quotes with the people who had his business card. He
                  called the idea a "Thought Card".
                </p>

                <p>
                  After a couple of weeks, I was able to include the quotes
                  using an image target and I decided to include a virtual
                  button that would link viewers to a store where they could
                  purchase the book. The links can be swapped out for affiliated
                  marketing links, allowing the card owner to profit from
                  viewers who bought the book.
                </p>
              </div>
              {/* <img
                src="/assets/pixel.png"
                className="thoughtPhone"
                width="60%"
                height="60%"
                display="inline"
              /> */}
              <video
                src="/assets/thought-card.mp4"
                width="40%"
                height="40%"
                autoplay
                controls
                className="margin"
              />
            </div>
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
