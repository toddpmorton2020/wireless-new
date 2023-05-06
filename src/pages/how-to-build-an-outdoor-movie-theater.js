import React, { useState } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Background from "../images/timberline-outdoor-movie-theater-1920px-x-1080px.jpg"

function HowToBuildAnOutdoorMovieTheater() {
  const Accordion = ({ title, className, children }) => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleAccordion = () => {
      setIsOpen(!isOpen)
    }

    return (
      <div className={`accordion text-white ${className}`}>
        <div
          className="accordion-header h-16 container flex items-center text-sm"
          onClick={toggleAccordion}
        >
          <div className="w-full flex-1 flex justify-between pr-3">
            <h3>{title}</h3>
            <button>{isOpen ? "-" : "+"}</button>
          </div>
          <a
            href="#"
            className="px-2 py-0 xl:px-4 ml-1 xl:ml-4 flex-0 button-orng"
          >
            Get Now
          </a>
        </div>
        <div
          className={`accordion-content container w-full absolute ${
            isOpen ? "accordion-content-open border-b border-grey-subnav" : ""
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

  const SubNav = () => {
    return (
      <>
        <Accordion
          title="How-to build a professional outdoor movie theater"
          className="mobile-subnav z-10 sticky top-0 block sm:hidden"
        >
          <ul className="flex flex-col justify-between w-full py-3">
            <li className="py-2 border-b border-grey-subnav text-sm">
              <a href="#">What You Get</a>
            </li>
            <li className="py-2 border-b border-grey-subnav text-sm">
              <a href="#">Frame Systems</a>
            </li>
            <li className="py-2 border-b border-grey-subnav text-sm">
              <a href="#">Cinema Uses</a>
            </li>
            <li className="py-2 border-b border-grey-subnav text-sm">
              <a href="#">Features</a>
            </li>
            <li className="py-2 border-b border-grey-subnav text-sm">
              <a href="#">Comparison</a>
            </li>
            <li className="pt-2 pb-6 text-sm">
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
                  <a href="#" className="px-2 py-1 xl:px-4 button-orng">
                    Get Now
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </>
    )
  }

  const Hero = () => {
    return (
      <div className="black-back relative text-white sm:top-0 sm:-mt-10">
        <img className="mx-auto" src={Background} alt=""></img>
        <div className="container py-4 mx-auto">
          <div className="xl:absolute xl:mt-32 2xl:mt-64 sm:top-0 h-full">
            <p className="font-semibold xl:text-3xl">
              Get the only <span className="text-orng">DIY</span> on
            </p>
            <h1 className="text-4xl xl:text-6xl font-semibold leading-9 xl:leading-none pb-3 xl:pb-5 xl:w-3/6">
              <span className="text-orng">How-to build a</span> professional
              outdoor movie theater
              <sup className="pl-1 text-2xl xl:text-3xl">©</sup>
            </h1>
            <p className="xl:text-3xl">How-to DIY bundle valued at $3,000</p>
            <p className="xl:text-3xl">Regular price $199</p>
            <p className="xl:text-3xl">
              On sale for $99* <span className="text-orng">(50% off)</span>
            </p>
            <p className="my-4 xl:text-2xl xl:mt-8">
              <a href="#" className="px-8 py-1 xl:px-16 xl:py-2 button-orng">
                Get the DIY now
              </a>
            </p>
          </div>
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
      <SubNav />
      <Hero />
    </Layout>
  )
}

export default HowToBuildAnOutdoorMovieTheater
