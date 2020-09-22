import React from "react"
import Helmet from "react-helmet"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"

export default function memorialWebsiteTemplate({
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
            <p>
              My Uncle Eric was an amazing man who found himself in unfortunate
              circumstances. It is hard to find people who match his creativity
              and talent which included drawing, dancing, composing music and
              storytelling. He brightened every room he walked into and sought
              to be everyone's greatest advocate.
            </p>
            <p>
              When Tio Eddie passed away, my father took care of the funeral
              arrangements. The funeral home offered us a package that included
              a website where people can go to pay their respects and share
              memories. My father and I thought it was a unique idea and we
              decided we would make it ourselves. My father shared some of
              hihref ideas for the website and I used Wix to create it. We
              created the website to reflect Tio Eddie's interests in music, his
              experiences, his family, and his friends.
            </p>
            <a
              href="https://jonathanalbert0115.wixsite.com/ferlesmemorial"
              target="_blank"
              className="button -primary"
            >
              Visit the Website &rarr;
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
