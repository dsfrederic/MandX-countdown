import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

/** @jsx jsx */
import { jsx } from "theme-ui"



const Header = ({ siteTitle }) => {
  return (
    <header
      sx={{
        backgroundColor: "primary",
        marginBottom: `1.45rem`,
        fontFamily: "heading",
        margin: 0
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
          textAlign: "center",
          color: `white`,
        }}
      >
        <h1>
          <Link
            to="/"
            style={{
              textDecoration: `none`,
              color: `white`,
            }}
          >
            {siteTitle}
          </Link>
        </h1>
        <p>16 . 07 . 22</p>
        <div>
        <Link
            to="/faq"
            activeClassName="active"
            sx={{
              textDecoration: "none",
              color: 'inherit',
              margin: "0 5px",
              '&:hover': {
                textDecoration: "underline",
              },
              '&.active': {
                fontWeight: 'bolder',
              },
            }}
          >
            Praktische info
          </Link>
          <Link
            to="/rsvp"
            activeClassName="active"
            sx={{
              textDecoration: "none",
              color: 'inherit',
              margin: "0 5px",
              '&:hover': {
                textDecoration: "underline",
              },
              '&.active': {
                fontWeight: 'bolder',
              },
            }}
          >
            RSVP
          </Link>
          <Link
            to="/countdown"
            activeClassName="active"
            sx={{
              textDecoration: "none",
              color: 'inherit',
              margin: "0 5px",
              '&:hover': {
                textDecoration: "underline",
              },
              '&.active': {
                fontWeight: 'bolder',
              },
            }}
          >
            Countdown
          </Link>

        </div>

      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
