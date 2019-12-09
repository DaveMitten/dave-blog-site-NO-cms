import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
// import Image from 'gatsby-image'

// import { rhythm } from '../utils/typography'

function Bio() {

  // const proj = useRef(null);
  // const projSection =  this.proj.current;
  // const blg = useRef(null);
  // const blgSection =  this.blg.current;
  // onClick={() => projSection.scrollIntoView()}
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author, social } = data.site.siteMetadata
        return (
          <div
            style={{
              display: `flex`,
              /* marginBottom: rhythm(2.5), */
              flexDirection: `column`,
              alignItems: `center`,
              height: '100vh',
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
            <div data-aos="zoom-in" data-aos-duration="1000"
              style={{ marginBottom: 40 }}>
              {/* Hi, I am <strong>{author}</strong>.  */}
              <br />I live and work in <strong>London</strong> currently, but I
              love to travel when I can.
              <br />I make frontends.
              <br />
              Currently using <strong>React</strong> as my primary Language
              library/framework.
              <br />
              <br />
              <div>
                You should follow me on{' '}
                <a
                  className="aLinkStyle"
                  href={`https://twitter.com/${social.twitter}`}
                >
                  Twitter
                </a>{' '}
                or drop me a{' '}
                <a className="aLinkStyle" href="mailto:davidmitten88@gmail.com">
                  message
                </a>
                .
              {/* </div>
              <div>If you're interested, you can take a peak at my <a href="../content/assets/cv.pdf">cv</a>.</div> */}
              </div>
              {/* <button
              className='buttonStyle'
            >
              <div className='buttonInnerStyle'>Projects</div>
            </button> */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  height: '1px',
                  marginTop: '50px',
                  alignItems: 'center',
                }}
              >
                <div
                  style={{
                    borderBottom: '2px dashed black',
                    width: '40%',
                    textAlign: 'center',
                  }}
                >
                  {/* Projects */}
                </div>
                <div className="bounce" style={{ textAlign: 'center', width: '20%' }}>
                  <span >&#8595;</span>
                </div>
                <div
                  style={{
                    borderBottom: '2px dashed black',
                    width: '40%',
                    textAlign: 'center',
                  }}

                >
                  {/* Blog */}
                </div>
              </div>
            </div>
          </div>
        )
      }}
    />
  )
}

const bioQuery = graphql`
  query BioQuery {
  
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
// avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
//   childImageSharp {
//     fixed(width: 50, height: 50) {
//       ...GatsbyImageSharpFixed
//     }
//   }
// }
export default Bio;
