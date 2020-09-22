import React from "react"
import Helmet from "react-helmet"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default function blottoTemplate({
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
            <h1>Blotto Origins</h1>

            <p>
              After years of tinkering with the game engine Unity, I decided it
              was time to commit to a project that I could develop and publish
              within a few months. I've discussed making games with a few close
              friends in the past and I finally convinced one that we were both
              capable of launching a game on the app store. The friend I
              convinced is an Optometrist by trade so I gave him a crash course
              on Unity over a weekend and we decided he would be in charge of
              game design, while I would be in charge of development. After
              spending a few weeks understanding our limitations we arrived at
              Blotto.
            </p>

            <p>
              Blotto is British slang for drunk and it alludes to soaking up
              alcohol the way blotting paper soaks up ink. Blotto is a drinking
              card game filled with challenges for all above 21 years of age to
              enjoy.
            </p>

            <a
              href="https://play.google.com/store/apps/details?id=com.MultiverseEchoes.Blotto"
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
