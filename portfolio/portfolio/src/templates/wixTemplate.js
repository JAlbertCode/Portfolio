import React from "react"
import Helmet from "react-helmet"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default function wixTemplate({
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
            <h1>Freelance Work</h1>
            <p>
              While searching for my next career, I reached out to a few friends
              and family letting everyone know that I was open to new
              opportunities. During that time, a friend connected me with a
              couple of businesses that were looking to create websites for
              their services. The following are the businesses I worked with and
              the websites I delivered using wix website builder.
            </p>
            <div className="row heading">
              <div className="column" alignItems="center">
                <img src="assets/spike.png" />
              </div>
              <div className="column websites">
                <h1>Health Shield Solutions</h1>
                <p>
                  Health Shield Solutions’ unique two-step process disinfects to
                  kill existing viruses, bacteria and other pathogens on
                  surfaces and then immediately re-surfaces the entire area and
                  objects with a nano barrier protectant that provides
                  continuous protection from re-infection for 30-90 days
                </p>
                <a
                  href="https://www.healthshieldsolutions.com/"
                  target="_blank"
                  className="button -primary"
                  rel="noopener noreferrer"
                >
                  Visit the Website &rarr;
                </a>
              </div>
            </div>

            <div className="row heading">
              <div className="column" alignItems="center">
                <img src="assets/rt.png" />
              </div>
              <div className="column websites">
                <h1>RT Advisory Team</h1>

                <p>
                  RT Advisory Team is a growth and compliance consulting firm.
                  The firm's services include consulting for patents, branding,
                  product manufacturing, product placement, and much more.
                </p>
                <a
                  href="https://www.rtadvisoryteam.com/"
                  target="_blank"
                  className="button -primary"
                  rel="noopener noreferrer"
                >
                  Visit the Website &rarr;
                </a>
              </div>
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
