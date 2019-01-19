import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'

import { rhythm } from '../utils/typography'

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author, social } = data.site.siteMetadata
        return (
          <div
            style={{
              display: `flex`,
              marginBottom: rhythm(2.5),
              height: `100vh`
            }}
          >
            {/* <Image
              fixed={data.avatar.childImageSharp.fixed}
              alt={author}
              style={{
                marginRight: rhythm(1 / 2),
                marginBottom: 0,
                minWidth: 50,
                borderRadius: `100%`,
              }}
              imgStyle={{
                borderRadius: `50%`,
              }}
            /> */}
            <p>
               {/* Hi, I am <strong>{author}</strong>.  */}
               <br />I live and work in <strong>London</strong> currently, but I love to travel when I can.   
               <br />I make frontends.  
               <br />Currently using <strong>React</strong> as my primary Language library/framework. 
             
              
              <br />
              <br />
              <div>
              You should follow me on {' '}
              <a  href={`https://twitter.com/${social.twitter}`}>
              Twitter
              </a>
              {' '}
              or drop me a {' '}
              <a  href='mailto:davidmitten@gmail.com'>
              message
              </a>.
              </div>
              <br />
              <div>  This site was created using {' '}  
              <a href='https://www.gatsbyjs.org/'>
              Gatsby JS
              </a>
              </div>
            </p>
          </div>
        )
      }}
    />
  )
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          twitter
        }
      }
    }
  }
`

export default Bio
