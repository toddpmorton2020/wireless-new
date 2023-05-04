import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Background from "../images/background-how-to.png"

function HowToBuildAnOutdoorMovieTheater() {
  return (
    <Layout>
      <SEO
        title="HowToBuildAnOutdoorMovieTheater"
        description="HowToBuildAnOutdoorMovieTheater"
      />
      <div
        className="z-10 sticky top-0"
        style={{ backgroundColor: "rgba(0,0,0,0.8)" }}
      >
        <div className="container mx-auto h-10">
          <div className="flex justify-between text-white content-center h-full">
            <div className="hidden xl:flex text-lg h-full items-center">
              <span>How-to build a professional outdoor movie theater</span>
            </div>
            <ul className="flex justify-between xl:justify-end text-xs xl:text-sm h-full items-center w-full xl:w-auto">
              <li className="mr-1 xl:mr-4">
                <span className="hidden lg:block">What You Get</span>
                <span className="block lg:hidden">What You Get</span>
              </li>
              <li className="mx-1 xl:mx-4">
                <span className="hidden lg:block">Frame Systems</span>
                <span className="block lg:hidden">Frames</span>
              </li>
              <li className="mx-1 xl:mx-4">
                <span className="hidden lg:block">Cinema Uses</span>
                <span className="block lg:hidden">Uses</span>
              </li>
              <li className="mx-1 xl:mx-4">Features</li>
              <li className="mx-1 xl:mx-4">Comparison</li>
              <li className="mx-1 xl:mx-4">FAQ</li>
              <li
                className="px-2 xl:px-4 ml-1 xl:ml-4"
                style={{ backgroundColor: "#ff5400", borderRadius: "7px" }}
              >
                Get Now
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="black-back text-white top-0 -mt-10">
        <img className="absolute" src={Background} alt=""></img>
        <div className="container mx-auto">
          <h1>TITLE</h1>
          <p>content</p>
          <p>content</p>
          <p>content</p>
          <p>content</p>
          <p>content</p>
          <p>content</p>
          <p>content</p>
          <p>content</p>
          <p>content</p>
          <p>content</p>
          <p>content</p>
          <p>content</p>
          <p>content</p>
          <p>content</p>
          <p>content</p>
          <p>content</p>
          <p>content</p>
          <p>content</p>
          <p>content</p>
          <p>content</p>
          <p>content</p>
          <p>content</p>
          <p>content</p>
          <p>content</p>
          <p>content</p>
          <p>content</p>
          <p>content</p>
          <p>content</p>
          <p>content</p>
          <p>content</p>
          <p>content</p>
        </div>
      </div>
    </Layout>
  )
}

export default HowToBuildAnOutdoorMovieTheater
