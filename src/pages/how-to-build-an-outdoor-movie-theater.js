import React, { useState, useRef } from "react"
import { Link } from "gatsby"

import PlayButton from "../images/play-button-162px-x-182px.png"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Background from "../images/timberline-outdoor-movie-theater-1920px-x-1080px.jpg"
import Moose from "../images/timberline-big-moose-791px-x-755px.png"
import FrameSystemsMovable from "../images/moveable-outdoor-movie-theater-frame-1617px-x-1000px.jpg"
import FrameSystemsTimberline from "../images/timberline-streamline-outdoor-movie-theater-frame-1617px-x-1000px.jpg"

import BonusBanner from "../images/bonus-corner-banner-141px-x-121px.png"

import PowerfulBackground from "../images/outdoor-movie-projector-stand-1920px-x-1080px.jpg"

import PowerfulBattery from "../images/icon-battery-white-75px-x-55px.png"
import PowerfulCables from "../images/icon-cables-white-75px-x-55px.png"
import PowerfulDVD from "../images/icon-dvd-white-75px-x-55px.png"
import PowerfulGaming from "../images/icon-gaming-console-white-75px-x-55px.png"
import PowerfulHeadphones from "../images/icon-headphones-white-75px-x-55px.png"
import PowerfulLaptop from "../images/icon-laptop-white-75px-x-55px.png"
import PowerfulReceiver from "../images/icon-receiver-white-75px-x-55px.png"
import PowerfulSmartphone from "../images/icon-smartphone-white-75px-x-55px.png"
import PowerfulSpeaker from "../images/icon-speaker-white-75px-x-55px.png"
import PowerfulStreaming from "../images/icon-streaming-device-white-75px-x-55px.png"

import SvgImage1 from "../images/svg/icon-year-round-402px-138px.png"
import SvgImage2 from "../images/svg/icon-affordable-401px-138px.png"
import SvgImage3 from "../images/svg/icon-moveable-frame-402px-138px.png"
import { ExampleSvg } from "../components/svg/example"

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
          <button className="flex-1 flex justify-around mr-8">
            <h3 className="text-left">{title}</h3>
            <div className={`ml-4 mt-4 arrow ${isOpen ? "open" : ""}`}></div>
          </button>
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
        <img className="mx-auto w-full max-w-2400" src={Background} alt="" />
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

  const Video = () => {
    const [playFlag, setPlayFlag] = useState(true)
    const videoRef = useRef(null)

    const onMobileVideoEnded = () => {
      setPlayFlag(true)
      videoRef.current.currentTime = 0
    }

    const onMobileVideoPlay = () => {
      setPlayFlag(false)
    }

    const onMobileVideoPause = () => {
      setPlayFlag(true)
    }
    const videoAct = () => {
      let videoElement = videoRef.current
      videoElement.play()
      setPlayFlag(false)
    }

    return (
      <div className="black-back">
        <div className="container mx-auto py-16 how-to">
          <div className="responsive-video h-full">
            {playFlag && (
              <div className="play-button-wrapper">
                <img
                  src={PlayButton}
                  className="play-button-png"
                  onClick={e => videoAct(e)}
                />
              </div>
            )}
            <video
              controls={false}
              playsInline={false}
              id="mobile_vid"
              ref={videoRef}
              onPlay={onMobileVideoPlay}
              onPause={onMobileVideoPause}
              onEnded={onMobileVideoEnded}
              className="w-full h-full"
            >
              <source src="/homePageVideo.mp4#t=0.1" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    )
  }

  const HeresWhatYouGet = () => {
    const gridItems = [
      {
        id: 0,
        img: SvgImage1,
        title: "Design Plans",
        text:
          "Design plans on how-to build the cinema frame and equipment stand.",
        bonus: false,
      },
      {
        id: 1,
        img: SvgImage2,
        title: "Material Lists",
        text: "Building material lists include hardware, fasteners, and wood.",
        bonus: false,
      },
      {
        id: 2,
        img: SvgImage3,
        title: "Tools Needed",
        text:
          "Tools will be covered in depth, from essential handheld and power tools.",
        bonus: false,
      },
      {
        id: 3,
        img: SvgImage1,
        title: "Equipment Lists",
        text:
          "Recommended cinema equipment to use for wireless and wired cinema systems.",
        bonus: false,
      },
      {
        id: 4,
        img: SvgImage2,
        title: "How-To Videos",
        text:
          "Video access on how to build, assemble and set up your outdoor movie theater.",
        bonus: false,
      },
      {
        id: 5,
        img: SvgImage3,
        title: "Tips & Techniques",
        text:
          "Get the most out of your outdoor movie theater with expert advice.",
        bonus: false,
      },
      {
        id: 6,
        img: SvgImage1,
        title: "Fire Pit Ideas",
        text:
          "Get recommendations on the best fire pits and the ones you should avoid.",
        bonus: true,
      },
      {
        id: 7,
        img: SvgImage2,
        title: "Theater Seating",
        text:
          "Ideas on how to make your outdoor movie theater seating area comfortable.",
        bonus: true,
      },
      {
        id: 8,
        img: SvgImage3,
        title: "Cold Night Extras",
        text:
          "Great products to keep you extra warm outside at night while watching movies.",
        bonus: true,
      },
    ]

    return (
      <div className="black-back relative text-white border-b xl:border-none border-grey-subnav">
        <div className="container mx-auto pb-8 xl:py-16 flex flex-col xl:grid xl:grid-cols-12 w-full">
          <div className="col-span-5">
            <img
              className="mx-auto px-10 xl:px-0 pb-5 xl:pb-0 w-full"
              src={Moose}
              alt=""
            />
          </div>
          <div className="text-center xl:col-span-7 xl:text-left xl:text-xl">
            <h2 className="text-3xl xl:text-5xl font-semibold leading-9 xl:leading-none pb-3 xl:pb-3">
              Here's what you get
            </h2>
            <p className="text-lg xl:text-3xl pb-4 xl:pb-5">
              <span className="text-orng">
                Timberline Series 150" Big Moose
              </span>{" "}
              DIY
            </p>
            <p>
              Introducing the only professional how-to build an outdoor movie
              theater DIY for homeowners. This jammed-pack DIY is full of
              detailed diagrams, photographs, access to assembly and
              installation videos, recommended material and equipment lists,
              tools needed, wireless and wired cinema setups, different frame
              styles, tips and techniques, and bonuses.
            </p>
            <br />
            <p>
              I have been building and installing wireless and wired outdoor
              movie theaters for three years and have implemented my knowledge
              into an easy-to-follow DIY that homeowners will love.
            </p>
            <br />
            <p>
              You will receive a professional DIY content and video bundle
              package for just $99* (50% Off. Regularly $199. A bundle valued at
              $3,000). This offer expires on July 1, 2023.
            </p>
          </div>
          <div className="col-span-12 grid grid-cols-6 gap-5 xl:gap-20 mt-16">
            {gridItems.map(item => (
              <div className="col-span-3 md:col-span-2" key={item.id}>
                {item.bonus && (
                  <img src={BonusBanner} className="bonus-banner-image" />
                )}
                <div className="border rounded-md border-grey-theater p-4 md:p-8 text-center h-full">
                  <img src={item.img} alt={item.title} className="my-3" />
                  <p className="font-bold md:text-2xl mb-3">{item.title}</p>
                  <p className="md:text-2xl">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  const FrameSystemsThatWork = () => {
    return (
      <div className="black-back relative text-white border-b xl:border-none border-grey-subnav">
        <div className="container mx-auto py-8 xl:py-16 flex flex-col xl:grid xl:grid-cols-12 w-full">
          <div className="text-left xl:col-span-12 xl:text-xl pb-10">
            <h2 className="text-3xl xl:text-5xl font-semibold leading-9 xl:leading-none pb-3 xl:pb-3">
              Frame systems that work with your backyard
            </h2>
            <p className="text-lg xl:text-3xl pb-4 xl:pb-5 text-orng">
              Movable Frame System for flat lawns. Streamline Stationary Frame
              System.
            </p>
            <p>
              The Timberline Frame Systems allows you to choose the frame that
              works best with your property. If you have ledge stone or other
              obstructions in the area where you would like to install your
              frame and can’t dig into the ground, the Streamline Frame System
              can be cemented into 2’ft wide by 2’ft high by 2’ft length plywood
              form boxes. The plywood boxes get removed after the cement cures,
              and you can add bricks or stone veneer around the cement giving
              your frame system base a decorative ‘one-of-a- kind’ look. Full
              instructions are covered in the How-to DIY.
            </p>
          </div>
          <div className="col-span-12 pb-10 mb-10 text-center relative">
            <div className="pt-2 hidden xl:block absolute text-right w-full pr-12 pt-6">
              <p className="text-6xl font-semibold">Movable Frame System</p>
              <p className="text-4xl w-5/12 float-right">
                Perfect for flat lawns allowing you to watch anyplace on your
                property.
              </p>
            </div>
            <img className="mx-auto w-full" src={FrameSystemsMovable} alt="" />
            <div className="bg-gray-990 py-10 flex justify-between">
              <img src={SvgImage1} alt="" className="w-full" />
              <img src={SvgImage2} alt="" className="w-full" />
              <img src={SvgImage3} alt="" className="w-full" />
              <img src={SvgImage1} alt="" className="w-full" />
            </div>
            <div className="pt-2 block xl:hidden">
              <p className="text-orng text-xl">Movable Frame System</p>
              <p>
                Perfect for flat lawns allowing you to watch anyplace on your
                property.
              </p>
            </div>
          </div>
          <div className="col-span-12 pb-10 text-center relative">
            <div className="pt-2 hidden xl:block absolute text-left w-full pl-12 pt-6">
              <p className="text-6xl font-semibold">Streamline Frame System</p>
              <p className="text-4xl w-7/12">
                Ideal for flat, uneven, or rocky backyards.
              </p>
            </div>
            <img
              className="mx-auto w-full"
              src={FrameSystemsTimberline}
              alt=""
            />
            <div className="bg-gray-990 py-10 flex justify-between">
              <img src={SvgImage1} alt="" className="w-full" />
              <img src={SvgImage2} alt="" className="w-full" />
              <img src={SvgImage3} alt="" className="w-full" />
              <img src={SvgImage1} alt="" className="w-full" />
            </div>
            <div className="pt-2 block xl:hidden">
              <p className="text-orng text-xl">Streamline Frame System</p>
              <p>Ideal for flat, uneven, or rocky backyards.</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const PerfectFor = () => {
    const gridItems = [
      {
        id: 0,
        img: SvgImage1,
        text: "Homeowners with a backyard",
      },
      {
        id: 1,
        img: SvgImage2,
        text: "Regular use for outdoor entertainment",
      },
      {
        id: 2,
        img: SvgImage3,
        text: "Family blockbuster movie night",
      },
      {
        id: 3,
        img: SvgImage1,
        text: "Sporting event parties with friends and family",
      },
      {
        id: 4,
        img: SvgImage2,
        text: "Special events and family reunions",
      },
      {
        id: 5,
        img: SvgImage3,
        text: "Video game parties with friends and family",
      },
    ]

    return (
      <div className="black-back relative text-white border-b xl:border-none border-grey-subnav pt-10">
        <div className="container mx-auto pb-8 xl:py-16 flex flex-col xl:grid xl:grid-cols-12 w-full">
          <div className="text-center xl:col-span-12 xl:text-xl">
            <h2 className="text-3xl xl:text-5xl font-semibold leading-9 xl:leading-none pb-3 xl:pb-3">
              Outdoor movie theater perfect for
            </h2>
            <p className="text-lg xl:text-3xl pb-4 xl:pb-5 text-orng">
              Homeowners who have a backyard. Regular use. Events and parties.
            </p>
            <p>
              The DIY on how-to build an outdoor movie theater was developed for
              homeowners by a homeowner. If you've been dreaming of owning an
              outdoor movie theater, you can get the only DIY on how-to build a
              professional outdoor movie theater for just $99 (50% Off.
              Regularly $199. A DIY bundle valued at $3,000).
            </p>
            <br />
            <p>
              My outdoor movie theaters were designed to be an extension of your
              living room where you can enjoy your favorite entertainment
              outside regularly with an easy setup every time.
            </p>
          </div>
          <div className="col-span-12 grid grid-cols-6 gap-5 xl:gap-20 mt-16">
            {gridItems.map(item => (
              <div
                className="orng-overlay col-span-3 md:col-span-2"
                key={item.id}
              >
                <div className="md:border rounded-md border-grey-theater p-4 md:p-8 text-center h-full">
                  <ExampleSvg
                    alt={item.text}
                    className="grid-icon my-3 mx-auto"
                  />
                  <p className="md:text-2xl">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  const PowerfulCinema = () => {
    const gridItems = [
      {
        id: 0,
        img: PowerfulSpeaker,
        text: "External Speakers",
      },
      {
        id: 1,
        img: PowerfulStreaming,
        text: "Streaming Devices",
      },
      {
        id: 2,
        img: PowerfulGaming,
        text: "Gaming Consoles",
      },
      {
        id: 3,
        img: PowerfulSmartphone,
        text: "Smartphones (IOS & Andriod)",
      },
      {
        id: 4,
        img: PowerfulLaptop,
        text: "PCs, Laptops & Tablets",
      },
      {
        id: 5,
        img: PowerfulDVD,
        text: "DVD Players",
      },
      {
        id: 6,
        img: PowerfulReceiver,
        text: "Receivers & FM Tuners",
      },
      {
        id: 7,
        img: PowerfulHeadphones,
        text: "Bluetooth Headphones",
      },
      {
        id: 8,
        img: PowerfulBattery,
        text: "Off-Grid Battery Stations",
      },
      {
        id: 9,
        img: PowerfulCables,
        text: "HDMI, USB, VGA & Audio",
      },
    ]

    return (
      <div className="black-back relative text-white border-b xl:border-none border-grey-subnav">
        <div className="container mx-auto py-8 xl:py-16 flex flex-col xl:grid xl:grid-cols-12 w-full">
          <div className="text-left xl:col-span-12 xl:text-xl pb-10">
            <h2 className="text-3xl xl:text-5xl font-semibold leading-9 xl:leading-none pb-3 xl:pb-3">
              Powerful cinema equipment capabilities
            </h2>
            <p className="text-lg xl:text-3xl pb-4 xl:pb-5 text-orng">
              Tons of connections. Access everything. High-rated name-brand
              products.
            </p>
            <p>
              The outdoor movie theater cinema equipment allows you to connect
              to almost any audio, gaming, streaming, and video device. The
              cinema equipment delivers impressive entertainment no matter what
              you're watching on the massive 150" diagonal screen. Experience
              the new revolution of watching movies, sporting events, playing
              video games, and streaming your favorite shows outside under the
              stars and moon, breathing in the fresh air - all in the privacy of
              your backyard.
            </p>
          </div>
          <div className="block lg:hidden col-span-12 pb-10 mb-10 text-center relative">
            <img className="mx-auto w-full" src={PowerfulBackground} alt="" />

            <p className="text-2xl mt-10 text-orng">Projector Connections:</p>
            <div className="col-span-12 grid grid-cols-6 gap-5 xl:gap-20 mt-8">
              {gridItems.map(item => (
                <div
                  className="orng-overlay col-span-3 md:col-span-2"
                  key={item.id}
                >
                  <div className="md:border rounded-md border-grey-theater p-4 md:p-8 text-center h-full">
                    <img
                      src={item.img}
                      alt={item.text}
                      className="grid-icon my-3 mx-auto"
                    />
                    <p className="md:text-2xl">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          className="mx-auto w-full max-w-2400 text-center relative hidden lg:block"
          style={{
            backgroundImage: `url(${PowerfulBackground})`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
          }}
        >
          <div className="relative w-full mx-auto">
            <div className="block text-left py-20 p-10 bg-black-size-128">
              <div className="container mx-auto">
                <p className="text-3xl font-semibold text-orng">
                  Projector Connections:
                </p>
                <ul className="text-2xl">
                  {gridItems.map(item => (
                    <li className="flex items-center my-8" key={item.id}>
                      <img src={item.img} alt={item.text} className="" />
                      {item.text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
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
      <Video />
      <HeresWhatYouGet />
      <FrameSystemsThatWork />
      <PerfectFor />
      <PowerfulCinema />
    </Layout>
  )
}

export default HowToBuildAnOutdoorMovieTheater
