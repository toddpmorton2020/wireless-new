/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import GiveawayBanner from "./giveawaybanner"
import Header from "./header"
import Footer from "./footer"
import Cookies from "./cookies"
import "./layout.css"
import { Helmet } from "react-helmet"

const Layout = ({ children }) => {
  const [showCookie, setShowCookie] = useState(true)
  const [cookie, setCookie] = useState(undefined)
  useEffect(() => {
    setCookie(localStorage.getItem("cookie"))
  }, [])
  const data = graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `

  return (
    <>
      <Helmet>
        {/* <!-- HTML Meta Tags --> */}
        <title>Home</title>
        <meta
          name="description"
          content="The Backyard Drive-In Cinema. Get a year-round wireless outdoor movie cinema and start creating unforgettable memories."
        />

        {/* <!-- Facebook Meta Tags --> */}
        <meta
          property="og:url"
          content="https://www.wirelessoutdoorcinema.com/"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Home" />
        <meta
          property="og:description"
          content="The Backyard Drive-In Cinema. Get a year-round wireless outdoor movie cinema and start creating unforgettable memories."
        />
        <meta
          property="og:image"
          content="https://i.ibb.co/56pJxXh/image.png"
        />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="wirelessoutdoorcinema.com" />
        <meta
          property="twitter:url"
          content="https://www.wirelessoutdoorcinema.com/"
        />
        <meta name="twitter:title" content="Home" />
        <meta
          name="twitter:description"
          content="The Backyard Drive-In Cinema. Get a year-round wireless outdoor movie cinema and start creating unforgettable memories."
        />
        <meta
          name="twitter:image"
          content="https://i.ibb.co/56pJxXh/image.png"
        />
      </Helmet>
      <Header />
      <main>{children}</main>
      {!cookie && showCookie ? (
        <Cookies
          setCookies={() => {
            localStorage.setItem("cookie", true)
            setShowCookie(false)
          }}
        />
      ) : (
        ""
      )}
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
