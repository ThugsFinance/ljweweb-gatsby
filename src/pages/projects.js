import React, { useContext } from "react"
import { graphql } from "gatsby"
import { PageLayout, PageTitle, ProjectLink } from "../components"
import {GatsbyImage, getImage } from "gatsby-plugin-image"
import ThemeContext from "../utils/theme"
import { Image } from "react-bootstrap"
import { SEO, Utils } from "../utils"
import Container from "react-bootstrap/Container"

var path = require("path")

export default ({ data }) => {
  // const allProjects = data.allMarkdownRemark.edges || []
  const newProjects = data.allMdx.edges || []
  const allFeaturedImages = data.allFile.edges || []
  const regex = /^(.+)\/([^]+)$/
  const featuredImageMap = Utils.getImageMap(allFeaturedImages, regex, true, 3)
  const { dark } = useContext(ThemeContext)

  console.log(allFeaturedImages)

  return (
    <PageLayout>
      <SEO title="Projects" />
      <PageTitle title="Projects" />
      <Container>
        <Image
          fluid
          style={{ minWidth: "200px" }}
          src={
            dark
              ? "../../icons/projects-dark.png"
              : "../../icons/projects-light.png"
          }
          alt="Projects"
        />
        <section>
          {newProjects.map(({ node }) => (
            <div key={node.id} className="p-3">
              <ProjectLink
                to={path.basename(node.slug)}
                featuredImages={featuredImageMap[node.slug.replace(/\/+$/, "")]}
                title={node.frontmatter.title}
                tags={node.frontmatter.tags}
                excerpt={node.excerpt}
              />
              <hr />
            </div>
          ))}
        </section>
      </Container>
    </PageLayout>
  )
}

export const query = graphql`
  query {
    allFile(
      filter: {
        extension: { eq: "png" }
        relativeDirectory: { regex: "/content/projects/" }
      }
    ) {
      edges {
        node {
          childImageSharp {
            gatsbyImageData(width: 200) 
          }
          relativeDirectory
        }
      }
    }
    allMdx(
      filter: { fileAbsolutePath: { regex: "/content/projects/" } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          body
          excerpt
          frontmatter {
            title
            tags
          }
          slug
          id
        }
      }
    }
  }
`
