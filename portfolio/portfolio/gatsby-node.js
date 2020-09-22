const path = require(`path`)

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const blogPostTemplate = path.resolve(`src/templates/blogTemplate.js`)
  const fourthBranchTemplate = path.resolve(
    `src/templates/fourthBranchTemplate.js`
  )
  const memorialWebsiteTemplate = path.resolve(
    `src/templates/memorialWebsiteTemplate.js`
  )
  const trafficJamVrTemplate = path.resolve(
    `src/templates/trafficJamVrTemplate.js`
  )

  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            id
            frontmatter {
              path
            }
          }
        }
      }
    }
  `)

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    if (node.frontmatter.path === "/fourth-branch") {
      createPage({
        path: node.frontmatter.path,
        component: fourthBranchTemplate,
        context: {} // additional data can be passed via context
      })
    } else if (node.frontmatter.path === "/memorial-website") {
      createPage({
        path: node.frontmatter.path,
        component: memorialWebsiteTemplate,
        context: {} // additional data can be passed via context
      })
    } else if (node.frontmatter.path === "/traffic-jam-vr") {
      createPage({
        path: node.frontmatter.path,
        component: trafficJamVrTemplate,
        context: {} // additional data can be passed via context
      })
    } else {
      createPage({
        path: node.frontmatter.path,
        component: blogPostTemplate,
        context: {} // additional data can be passed via context
      })
    }
  })
}
