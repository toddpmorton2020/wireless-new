import React, { useState } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Background from "../images/timberline-outdoor-movie-theater-1920px-x-1080px.jpg"

function HowToBuildAnOutdoorMovieTheater() {
  function Accordion({ title, className, children }) {
    const [isOpen, setIsOpen] = useState(false)

    const toggleAccordion = () => {
      setIsOpen(!isOpen)
    }

    return (
      <div className={`accordion text-white ${className}`}>
        <div
          className="accordion-header h-10 container flex items-center text-sm"
          onClick={toggleAccordion}
        >
          <div className="w-full flex-1 flex justify-between pr-3">
            <h3>{title}</h3>
            <button>{isOpen ? "-" : "+"}</button>
          </div>
          <a
            href="#"
            className="px-2 py-1 xl:px-4 ml-1 xl:ml-4 flex-0 button"
            style={{ backgroundColor: "#ff5400", borderRadius: "7px" }}
          >
            Get Now
          </a>
        </div>
        <div
          className={`accordion-content container w-full absolute ${
            isOpen ? "accordion-content-open border-b" : ""
          }`}
          style={{
            maxHeight: isOpen ? "500px" : "0",
          }}
        >
          {children}
        </div>
      </div>
    )
  }

  return (
    <Layout>
      <SEO
        title="HowToBuildAnOutdoorMovieTheater"
        description="HowToBuildAnOutdoorMovieTheater"
      />

      <Accordion
        title="How-to build a theater"
        className="mobile-subnav z-10 sticky top-0 block sm:hidden"
      >
        <ul className="flex flex-col justify-between w-full">
          <li className="py-2 border-b text-sm">
            <a href="#">What You Get</a>
          </li>
          <li className="py-2 border-b text-sm">
            <a href="#">Frame Systems</a>
          </li>
          <li className="py-2 border-b text-sm">
            <a href="#">Cinema Uses</a>
          </li>
          <li className="py-2 border-b text-sm">
            <a href="#">Features</a>
          </li>
          <li className="py-2 border-b text-sm">
            <a href="#">Comparison</a>
          </li>
          <li className="pt-2 pb-4 text-sm">
            <a href="#">FAQ</a>
          </li>
        </ul>
      </Accordion>
      <div className="desktop-subnav z-10 sticky top-0 hidden sm:block">
        <div className="container mx-auto h-10">
          <div className="flex justify-between text-white content-center h-full">
            <div className="hidden xl:flex text-lg h-full items-center">
              <span>How-to build a professional outdoor movie theater</span>
            </div>
            <ul className="flex justify-between xl:justify-end text-xs xl:text-sm h-full items-center w-full xl:w-auto">
              <li className="mr-1 xl:mr-4">
                <a href="#">
                  <span className="hidden lg:block">What You Get</span>
                  <span className="block lg:hidden">What You Get</span>
                </a>
              </li>
              <li className="mx-1 xl:mx-4">
                <a href="#">
                  <span className="hidden lg:block">Frame Systems</span>
                  <span className="block lg:hidden">Frames</span>
                </a>
              </li>
              <li className="mx-1 xl:mx-4">
                <a href="#">
                  <span className="hidden lg:block">Cinema Uses</span>
                  <span className="block lg:hidden">Uses</span>
                </a>
              </li>
              <li className="mx-1 xl:mx-4">
                <a href="#">Features</a>
              </li>
              <li className="mx-1 xl:mx-4">
                <a href="#">
                  <span className="hidden lg:block">Comparison</span>
                  <span className="block lg:hidden">Compare</span>
                </a>
              </li>
              <li className="mx-1 xl:mx-4">
                <a href="#">FAQ</a>
              </li>
              <li className="ml-1 xl:ml-4">
                <a
                  href="#"
                  className="px-2 py-1 xl:px-4 button"
                  style={{ backgroundColor: "#ff5400", borderRadius: "7px" }}
                >
                  Get Now
                </a>
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
