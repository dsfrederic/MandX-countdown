import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

/** @jsx jsx */
import { jsx } from "theme-ui"



const Header = ({ siteTitle }) => (
  <header
    sx={{
      backgroundColor: "primary",
      marginBottom: `1.45rem`,
      fontFamily: "heading",
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ 
        margin: 0, 
        textAlign: "center" 
      }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
