import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"


const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#D7A3AB`,
      marginBottom: `1.45rem`,
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
            fontFamily: "British Shorthair"
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
