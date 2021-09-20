import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import sitemap from "../images/sitemap.png"

function Sitemap() {
  return (
    <Layout>
      <SEO title="Sitemap" />
      <div className="gray-back pb-24">
        <div className="container mx-auto">
          <div className="sm:py-6 xl:pt-4 change">
            <div className="flex flex-wrap items-center text-sm breadcrums-margin">
              <Link
                to="/"
                className="text-blue-600 sm:text-black cursor-pointer"
              >
                Home
              </Link>
              <span className="mx-2">&gt;</span>
              <span to="#">Sitemap</span>
            </div>
            <div className="md:hidden h-64 w-full full-bleed-mobile max-h-screen relative mt-6 mb-6">
              <img className="w-full h-full object-cover " src={sitemap} />
            </div>
            <div className="mt-8 xl:px-6">
              <h1 className="text-center sm:text-left text-black sm:text-orange-500 privacy-heading xl:text-5xl leading-none relative">
                Site <span className="text-orange-500 sm:text-black">Map</span>
              </h1>
            </div>
            <div className="sm:mt-8 xl:px-6">
              <div className="xl:text-3xl text-base sitemap-sub xl:-mt-6 sm:mt-0 news-subtitle site-map-sub">
                <h3>Search Engines Crawl Away</h3>
              </div>
              <div className="mt-6">
                <div className="hidden sm:block font-bold text-2xl">
                  <h3>Pages</h3>
                </div>
                <div className="flex flex-col mt-4">
                  <Link to="/" className="link mb-1">
                    Home
                  </Link>
                  <Link to="/about" className="link mb-1">
                    About
                  </Link>
                  <Link to="/comparison" className="link mb-1">
                    Cinema Comparison
                  </Link>
                  <Link
                    to="/timberline-cinema-packages/96-jedi-bobcat-cinema"
                    className="link mb-1"
                  >
                    96" Jedi Bobcat Wireless Outdoor Cinema
                  </Link>
                  <Link
                    to="/timberline-cinema-packages/120-bella-bear-cinema"
                    className="link mb-1"
                  >
                    120" Bella Bear Wireless Outdoor Cinema
                  </Link>
                  <Link
                    to="/timberline-cinema-packages/150-big-moose-cinema"
                    className="link mb-1"
                  >
                    150" Big Moose Wireless Outdoor Cinema
                  </Link>
                  <Link to="/accessory" className="link mb-1">
                    Outdoor Cinema Accessories
                  </Link>
                  <Link to="/in-the-news" className="link mb-1">
                    In the News
                  </Link>
                  <Link to="/august-28-press-release" className="link mb-1">
                    > August 28, 2021 Press Release
                  </Link>
                  <Link to="/june-30-press-release" className="link mb-1">
                    > June 30, 2021 Press Release
                  </Link>
                  <Link to="/january-04-press-release" className="link mb-1">
                    > January 04, 2021 Press Release
                  </Link>
                  <Link to="/september-10-press-release" className="link mb-1">
                    > September 10, 2020 Press Release
                  </Link>
                  <Link
                    to="/june-25-bridgton-news-article"
                    className="link mb-1"
                  >
                    > June 25, 2020 Press Release
                  </Link>
                  <Link to="/june-08-press-release" className="link mb-1">
                    > June 08, 2020 Press Release
                  </Link>
                  <Link to="/faq" className="link mb-1">
                    FAQ
                  </Link>
                  <Link to="/connect" className="link mb-1">
                    Connect
                  </Link>
                  <Link to="/sitemap" className="link mb-1">
                    Sitemap
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Sitemap
