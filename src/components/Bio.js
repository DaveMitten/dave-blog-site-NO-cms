import React from 'react'
import Fade from 'react-reveal/Fade';
// import scrollToComponent from 'react-scroll-to-component';


import { StaticQuery, graphql } from 'gatsby'
import TechUsed from '../components/TechUsed'


function Bio() {

    // scrollToComponent(this.BlogScroll, { offset: 0, align: 'middle', duration: 500, ease: 'inCirc' });
    // scrollToComponent(this.ProjectScroll, { offset: 0, align: 'middle', duration: 500, ease: 'inCirc' });


  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author, social } = data.site.siteMetadata
        return (
          <div
            style={{
              display: `flex`,
              flexDirection: `column`,
              alignItems: `center`,
              minHeight: '80vh',
              textAlign: 'center',
            }}
          >

            <Fade delay={1000} duration={3000}>
              <div
                style={{ marginBottom: 40 }}
              >
                <br />I am a <strong>Javascript frontend developer</strong>  specialising in <strong>react</strong> and <strong>webpack</strong>
                <br />I live and work in <strong>London</strong> currently, but I
                love to travel when I can.
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
                </div>

                <TechUsed />
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
                    /* onClick={() => {
                      scrollToComponent(this.ProjectScroll,
                        { offset: 0, align: 'bottom', duration: 500, ease: 'inExpo' }
                      );
                    }} */

                    style={{
                      borderBottom: '2px dashed black',
                      width: '40%',
                      textAlign: 'center',
                    }}
                  >
                    {/* Projects */}
                  </div>
                  <div
                    className="bounce"
                    style={{ textAlign: 'center', width: '20%' }}
                  >
                    <span>&#8595;</span>
                  </div>
                  <div
                    /* onClick={() => {
                      scrollToComponent(this.BlogScroll,
                        { offset: 0, align: 'bottom', duration: 500, ease: 'inExpo' }
                      );
                    }
                    } */
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
            </Fade>
          </div >
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
export default Bio
