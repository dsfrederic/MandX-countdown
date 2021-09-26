/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "normalize.css"

/** @jsx jsx */
import { jsx } from "theme-ui"

const Layout = ({ bgColor = "backgroudn", txtColor="text", children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div sx={{
      fontFamily: "body", 
      backgroundColor: bgColor,
      color: txtColor,
      minHeight: "100vh",
      paddingBottom: "30px"
    }}>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
        style={{
          margin: `0px auto`,
          paddingTop: '2rem',
          maxWidth: 960
        }}
      >
        <main>{children}</main>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
