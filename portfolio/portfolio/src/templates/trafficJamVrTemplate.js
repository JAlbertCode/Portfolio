import React from "react"
import Helmet from "react-helmet"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default function trafficJamTemplate({
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
            <h1>Virtual Reality Game Jam</h1>

            <p>
              I find Virtual and Augmented Reality to be fascinating and I spend
              endless nights considering the possibilities and implications for
              humanity. I want to enter the space and I joined a meetup group
              for Virtual Reality to learn about development. The group posted
              an event called "VR Game Jam" and sought to bring together
              developers, digital artists, and audiographers to compete to make
              the best virtual reality game in 48 hours. The theme of the game
              jam was to make everyday life interesting, and our team decided to
              make a game out of a traffic cop's experience. Our idea was to
              have the user stand in the middle of an intersection and control
              the flow of traffic with the goal of avoiding a collision and
              losing the game. Each car would have varying speeds and wait times
              before they choose to ignore the traffic controller and proceed on
              their own.
            </p>

            <p>
              I initially joined the team as a developer but two other members
              of our team had strong development backgrounds and I took the
              opportunity to learn about the other roles. I was exposed to Unity
              and was tasked with placing the digital assets for the map,
              finding audio clips for the cars, and helping with the game
              design.
            </p>

            <a
              href="https://coreygreen1108gmailcom.itch.io/traffic-jam-vr"
              target="_blank"
              className="button -primary"
              rel="noopener noreferrer"
            >
              Download the Game &rarr;
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
