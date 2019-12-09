import React from 'react'
import { Link } from 'gatsby'

import { rhythm, scale } from '../utils/typography'
// import AOS from 'aos';

// import 'aos/dist/aos.css'

class Layout extends React.Component {
  
 
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header
    // AOS.refresh()

    if (location.pathname === rootPath) {
      header = (
        <div
          style={{
            display: `flex`,
            alignItems: `center`,
            justifyContent: 'center',
            textAlign: `center`,
          }}
        >
          <h1
            data-aos="zoom-in"
            data-aos-duration="1000"
            style={{
              ...scale(1.5),
              marginBottom: rhythm(1.5),
              marginTop: 0,
            }}
          >
            <Link
              style={{
                boxShadow: `none`,
                textDecoration: `none`,
                color: `inherit`,
              }}
              to={`/`}
            >
              Hi, I'm {title}.
            </Link>
          </h1>
        </div>
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: `Montserrat, sans-serif`,
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            <button className="aLinkStyle">Home</button>
          </Link>
        </h3>
      )
    }
    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        {header}
        {children}
        <footer />
      </div>
    )
  }
}

export default Layout
