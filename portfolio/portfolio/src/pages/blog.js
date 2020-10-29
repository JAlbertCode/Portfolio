// import React from "react"
// import Helmet from "react-helmet"
// import { graphql } from "gatsby"
// import Layout from "../components/layout"
// import PostLink from "../components/post-link"
// import HeroHeader from "../components/heroHeader"

// const Blog = ({
//   data: {
//     site,
//     allMarkdownRemark: { edges }
//   }
// }) => {
//   const Posts = edges
//     .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
//     .map(edge => <PostLink key={edge.node.id} post={edge.node} />)

//   return (
//     <Layout>
//       <h1>Thoughts of a White Rabbit</h1>

//       <h2 className="grids animate__animated animate__bounce">Blogs &darr;</h2>
//       <div className="grids animate__animated animate__fadeIn">{Posts}</div>
//     </Layout>
//   )
// }

// export default Blog
// export const pageQuery = graphql`
//   query blogQuery {
//     site {
//       siteMetadata {
//         title
//         description
//       }
//     }
//     allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
//       edges {
//         node {
//           id
//           excerpt(pruneLength: 250)
//           frontmatter {
//             date(formatString: "MMMM DD, YYYY")
//             path
//             title
//             thumbnail
//             metaDescription
//           }
//         }
//       }
//     }
//   }
// `
