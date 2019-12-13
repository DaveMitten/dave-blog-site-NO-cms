import React from 'react'
import Fade from 'react-reveal/Fade';

import { Link, graphql } from 'gatsby'

// import classNames from 'classnames';
// import { Watch } from 'scrollmonitor-react';
// import AOS from 'aos';

// import 'aos/dist/aos.css'




import Bio from '../components/Bio'
import Projects from '../components/Projects'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import { rhythm } from '../utils/typography'

class BlogIndex extends React.Component {
  render() {
    // AOS.init();

    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    const blogListStyle = {
      height: '100vh',
      overflow: 'auto',
      border: '2px solid black',
      padding: '15px',
      marginBottom: '20',
    }
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="All posts"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />

        <Bio />
        <Projects />
        <div style={{ margin: 'auto' }}>
          <h2 style={{ borderBottom: '2px solid black' }}>Blog posts</h2>

          <div>
            {posts.map(({ node }) => {
              const title = node.frontmatter.title || node.fields.slug
              return (

                  <div


                    key={node.fields.slug}
                  >
                    {console.log('node.fields.slug', node)}
                    <h3
                      style={{
                        marginBottom: rhythm(1 / 4),
                      }}
                    >
                      <Link
                        className="aLinkStyle"
                        style={{ boxShadow: `none` }}
                        to={node.fields.slug}
                      >
                        {title}
                      </Link>
                    </h3>
                    <small>{node.frontmatter.date}</small>
                    <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
                  </div>
              )
            })}
          </div>
        </div>
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`
