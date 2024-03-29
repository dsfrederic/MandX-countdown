import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

/** @jsx jsx */
import { jsx, Divider, Flex, Box } from "theme-ui"

const Header = ({ siteTitle }) => {
  return (
    <header
      sx={{
        // backgroundColor: "primary",
        marginBottom: `1.45rem`,
        fontFamily: "heading",
        margin: 0
      }}
    >

      <Flex
        sx={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
          color: `white`,
          justifyContent: "space-between",
          flexWrap: "nowrap",
          flexDirection: ['column', 'column', 'row', 'row'],
        }}
      >
        <Flex sx={{
          fontFamily: "heading",
          textAlign: "center",
          alignItems: 'center',
          margin: 0, 
          flexDirection: "column"
        }}>
          <h1 style={{marginBottom: 0, paddingBottom: 0}}>
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
          <p style={{marginTop: 0, paddingTop: 0}}>16 . 07 . 2022 </p>
          
        </Flex>
        <Flex 
        sx={{
          marginBottom: `1.45rem`,
          fontFamily: "heading",
          textAlign: "center",
          alignItems: 'center',
          justifyContent: "center",
          flexDirection: "row",
          margin: 0,
          color: "primary"
        }}>
          <Link
            to="/faq"
            activeClassName="active"
            sx={{
              textDecoration: "none",
              color: 'inherit',
              margin: "0 5px",
              '&:hover': {
                color: "white"
              },
              '&.active': {
                fontWeight: 'bolder',
                color: "white"
              },
            }}
          >
            Praktische info
          </Link>
          |
          {/* <Link
            to="/rsvp"
            activeClassName="active"
            sx={{
              textDecoration: "none",
              color: 'inherit',
              margin: "0 5px",
              '&:hover': {
                color: "white"
              },
              '&.active': {
                fontWeight: 'bolder',
                color: "white"
              },
            }}
          >
            RSVP
          </Link>
          | */}
          <Link
            to="/"
            activeClassName="active"
            sx={{
              textDecoration: "none",
              color: 'inherit',
              margin: "0 5px",
              '&:hover': {
                color: "white"
              },
              '&.active': {
                fontWeight: 'bolder',
                color: "white"
              },
            }}
          >
            Countdown
          </Link>
          <Link
            to="/rsvp"
            activeClassName="active"
            sx={{
              textDecoration: "none",
              color: 'inherit',
              margin: "0 5px",
              '&:hover': {
                color: "white"
              },
              '&.active': {
                fontWeight: 'bolder',
                color: "white"
              },
            }}
          >
            RSVP
          </Link>
        </Flex>

      </Flex>
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
