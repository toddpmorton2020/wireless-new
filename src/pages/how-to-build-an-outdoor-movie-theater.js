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

import FlexingImage from "../images/icon-arm-flexing-130px-x-98px.png"
import StampImage from "../images/icon-original-stamp-144px-x-98px.png"
import WatchImage from "../images/icon-stop-watch-144px-x-98px.png"
import YearImage from "../images/icon-year-round-130px-x-98px.png"

import ImpressiveImage1 from "../images/setup-time-photo-805px-x-512px.jpg"
import ImpressiveImage2 from "../images/strongest-frame-system-photo-805px-x-512px.jpg"
import ImpressiveImage3 from "../images/equipment-stand-photo-805px-x-512px.jpg"
import ImpressiveImage4 from "../images/theater-in-snow-photo-805px-x-512px.jpg"

import YearroundImage from "../images/icon-year-round-402px-138px.png"
import AffordableImage from "../images/icon-affordable-401px-138px.png"
import MovableImage from "../images/icon-moveable-frame-402px-138px.png"
import SturdyImage from "../images/icon-sturdy-402px-138px.png"

import PermanentImage from "../images/icon-permanent-402px-x-138px.png"
import AttractiveImage from "../images/icon-attractive-402px-x-138px.png"
import BudgetImage from "../images/icon-budget-friendly-401px-x-138px.png"
import LastingImage from "../images/icon-built-to-last-402px-x-138px.png"

import AirscreenImage from "../images/airscreen-frame-photo-423px-x-307px.png"
import AluminumImage from "../images/aluminum-frame-photo-423px-x-307px.png"
import TimberlineImage from "../images/timberline-frame-photo-423px-x-307px.png"

import DownloadPDF from "../images/icon-pdf-download-play-button-107px-x-99px.png"

import QuoteImage from "../images/quote-photo-1920px-x-1080px.jpg"
import SignatureImage from "../images/todd-morton-founder-signature-743px-x-87px.png"

import { ColdNightIcon } from "../components/svg/HeresWhatYouGet/cold-night-extras-icon"
import { DesignPlanIcon } from "../components/svg/HeresWhatYouGet/design-plan-icon"
import { EquipmentListIcon } from "../components/svg/HeresWhatYouGet/equipment-list-icon"
import { FirePitIcon } from "../components/svg/HeresWhatYouGet/fire-pit-ideas-icon"
import { HowVideoIcon } from "../components/svg/HeresWhatYouGet/how-to-video-icon"
import { MaterialListIcon } from "../components/svg/HeresWhatYouGet/material-list-icon"
import { TheaterSeatingIcon } from "../components/svg/HeresWhatYouGet/theater-seating-icon"
import { TipsTechniquesIcon } from "../components/svg/HeresWhatYouGet/tips-and-techniques-icon"
import { ToolsNeededIcon } from "../components/svg/HeresWhatYouGet/tools-needed-icon"

import { SpeakerIcon } from "../components/svg/CinemaCapabilities/speaker-icon"
import { StreamingIcon } from "../components/svg/CinemaCapabilities/streaming-device-icon"
import { ConsoleIcon } from "../components/svg/CinemaCapabilities/video-game-console-icon"
import { SmartphoneIcon } from "../components/svg/CinemaCapabilities/smartphone-icon"
import { LaptopIcon } from "../components/svg/CinemaCapabilities/laptop-icon"
import { DvdIcon } from "../components/svg/CinemaCapabilities/dvd-icon"
import { TunerIcon } from "../components/svg/CinemaCapabilities/tuner-icon"
import { HeadphonesIcon } from "../components/svg/CinemaCapabilities/headphones-icon"
import { BatteryIcon } from "../components/svg/CinemaCapabilities/battery-icon"
import { CablesIcon } from "../components/svg/CinemaCapabilities/cables-icon"
import { VideoGameConsoleIcon } from "../components/svg/PerfectFor/video-game-console"
import { SportStadiumIcon } from "../components/svg/PerfectFor/sport-stadium-icon"
import { RegularUseIcon } from "../components/svg/PerfectFor/regular-use-icon"
import { GroupofPeopeIcon } from "../components/svg/PerfectFor/group-of-people-icon"
import { FamilyMovieIcon } from "../components/svg/PerfectFor/family-movie-icon"
import { BackyardIcon } from "../components/svg/PerfectFor/backyard-icon"

import { AssemblyIcon } from "../components/svg/FAQ/assembly-icon"
import { EquipmentStandIcon } from "../components/svg/FAQ/equipment-stand-icon"
import { FrameIcon } from "../components/svg/FAQ/frame-icon"
import { PriceTagIcon } from "../components/svg/FAQ/price-tag-icon"
import { ScreenIcon } from "../components/svg/FAQ/screen-icon"

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
              <a href="#whatyouget">What You Get</a>
            </li>
            <li className="py-2 border-b border-grey-subnav text-sm">
              <a href="#framesystems">Frame Systems</a>
            </li>
            <li className="py-2 border-b border-grey-subnav text-sm">
              <a href="#cinemauses">Cinema Uses</a>
            </li>
            <li className="py-2 border-b border-grey-subnav text-sm">
              <a href="#features">Features</a>
            </li>
            <li className="py-2 border-b border-grey-subnav text-sm">
              <a href="#comparison">Comparison</a>
            </li>
            <li className="pt-2 pb-6 text-sm">
              <a href="#faq">FAQ</a>
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
                  <a href="#whatyouget">
                    <span className="hidden lg:block">What You Get</span>
                    <span className="block lg:hidden">What You Get</span>
                  </a>
                </li>
                <li className="mx-1 xl:mx-4">
                  <a href="#framesystems">
                    <span className="hidden lg:block">Frame Systems</span>
                    <span className="block lg:hidden">Frames</span>
                  </a>
                </li>
                <li className="mx-1 xl:mx-4">
                  <a href="#cinemauses">
                    <span className="hidden lg:block">Cinema Uses</span>
                    <span className="block lg:hidden">Uses</span>
                  </a>
                </li>
                <li className="mx-1 xl:mx-4">
                  <a href="#features">Features</a>
                </li>
                <li className="mx-1 xl:mx-4">
                  <a href="#comparison">
                    <span className="hidden lg:block">Comparison</span>
                    <span className="block lg:hidden">Compare</span>
                  </a>
                </li>
                <li className="mx-1 xl:mx-4">
                  <a href="#faq">FAQ</a>
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
        img: (
          <DesignPlanIcon className="my-3 h-16 pb-3 lg:pb-0 lg:w-64 mx-auto dynamic-svg design-plan-svg" />
        ),
        title: "Design Plans",
        text:
          "Design plans on how-to build the cinema frame and equipment stand.",
        bonus: false,
      },
      {
        id: 1,
        img: (
          <MaterialListIcon className="my-3 h-16 pb-3 lg:pb-0 lg:w-64 mx-auto dynamic-svg material-list-svg" />
        ),
        title: "Material Lists",
        text: "Building material lists include hardware, fasteners, and wood.",
        bonus: false,
      },
      {
        id: 2,
        img: (
          <ToolsNeededIcon className="my-3 h-16 pb-3 lg:pb-0 lg:w-64 mx-auto dynamic-svg" />
        ),
        title: "Tools Needed",
        text:
          "Tools will be covered in depth, from essential handheld and power tools.",
        bonus: false,
      },
      {
        id: 3,
        img: (
          <EquipmentListIcon className="my-3 h-16 pb-3 lg:pb-0 lg:w-64 mx-auto dynamic-svg" />
        ),
        title: "Equipment Lists",
        text:
          "Recommended cinema equipment to use for wireless and wired cinema systems.",
        bonus: false,
      },
      {
        id: 4,
        img: (
          <HowVideoIcon className="my-3 h-16 pb-3 lg:pb-0 lg:w-64 mx-auto dynamic-svg" />
        ),
        title: "How-To Videos",
        text:
          "Video access on how to build, assemble and set up your outdoor movie theater.",
        bonus: false,
      },
      {
        id: 5,
        img: (
          <TipsTechniquesIcon className="my-3 h-16 pb-3 lg:pb-0 lg:w-64 mx-auto dynamic-svg" />
        ),
        title: "Tips & Techniques",
        text:
          "Get the most out of your outdoor movie theater with expert advice.",
        bonus: false,
      },
      {
        id: 6,
        img: (
          <FirePitIcon className="my-3 h-16 pb-3 lg:pb-0 lg:w-64 mx-auto dynamic-svg" />
        ),
        title: "Fire Pit Ideas",
        text:
          "Get recommendations on the best fire pits and the ones you should avoid.",
        bonus: true,
      },
      {
        id: 7,
        img: (
          <TheaterSeatingIcon className="my-3 h-16 pb-3 lg:pb-0 lg:w-64 mx-auto dynamic-svg" />
        ),
        title: "Theater Seating",
        text:
          "Ideas on how to make your outdoor movie theater seating area comfortable.",
        bonus: true,
      },
      {
        id: 8,
        img: (
          <ColdNightIcon className="my-3 h-16 pb-3 lg:pb-0 lg:w-64 mx-auto dynamic-svg" />
        ),
        title: "Cold Night Extras",
        text:
          "Great products to keep you extra warm outside at night while watching movies.",
        bonus: true,
      },
    ]

    return (
      <div
        className="black-back relative text-white border-b md:border-none border-grey-subnav"
        id="whatyouget"
      >
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
              <div
                className="col-span-3 md:col-span-2 rollover-svg-item"
                key={item.id}
              >
                {item.bonus && (
                  <img src={BonusBanner} className="bonus-banner-image" />
                )}
                <div className="border rounded-md border-grey-theater p-4 md:p-8 text-center h-full">
                  {item.img}
                  <p className="font-bold md:text-2xl mb-3 rollover-color-title">
                    {item.title}
                  </p>
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
      <div
        className="black-back relative text-white border-b md:border-none border-grey-subnav"
        id="framesystems"
      >
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
              <div>
                <img src={MovableImage} alt="" className="w-full" />
                <p className="text-xs xl:text-2xl">Movable</p>
              </div>
              <div>
                <img src={SturdyImage} alt="" className="w-full" />
                <p className="text-xs xl:text-2xl">Sturdy</p>
              </div>
              <div>
                <img src={YearroundImage} alt="" className="w-full" />
                <p className="text-xs xl:text-2xl">Year-round use</p>
              </div>
              <div>
                <img src={AffordableImage} alt="" className="w-full" />
                <p className="text-xs xl:text-2xl">Affordable</p>
              </div>
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
              <div>
                <img src={PermanentImage} alt="" className="w-full" />
                <p className="text-xs xl:text-2xl">Permanent</p>
              </div>
              <div>
                <img src={AttractiveImage} alt="" className="w-full" />
                <p className="text-xs xl:text-2xl">Attractive</p>
              </div>
              <div>
                <img src={LastingImage} alt="" className="w-full" />
                <p className="text-xs xl:text-2xl">Built-to-last</p>
              </div>
              <div>
                <img src={BudgetImage} alt="" className="w-full" />
                <p className="text-xs xl:text-2xl">Budget-friendly</p>
              </div>
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
        img: (
          <BackyardIcon className="grid-icon my-3 mx-auto w-full md:w-auto md:h-32 p-4" />
        ),
        text: "Homeowners with a backyard",
      },
      {
        id: 1,
        img: (
          <RegularUseIcon className="grid-icon my-3 mx-auto w-full md:w-auto md:h-32 p-4" />
        ),
        text: "Regular use for outdoor entertainment",
      },
      {
        id: 2,
        img: (
          <FamilyMovieIcon className="grid-icon my-3 mx-auto w-full md:w-auto md:h-32 p-4" />
        ),
        text: "Family blockbuster movie night",
      },
      {
        id: 3,
        img: (
          <SportStadiumIcon className="grid-icon my-3 mx-auto w-full md:w-auto md:h-32 p-4" />
        ),
        text: "Sporting event parties with friends and family",
      },
      {
        id: 4,
        img: (
          <GroupofPeopeIcon className="grid-icon my-3 mx-auto w-full md:w-auto md:h-32 p-4" />
        ),
        text: "Special events and family reunions",
      },
      {
        id: 5,
        img: (
          <VideoGameConsoleIcon className="grid-icon my-3 mx-auto w-full md:w-auto md:h-32 p-4" />
        ),
        text: "Video game parties with friends and family",
      },
    ]

    return (
      <div
        className="black-back relative text-white border-b md:border-none border-grey-subnav pt-10"
        id="cinemauses"
      >
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
                <div className="md:border rounded-md border-grey-theater p-4 md:p-12 text-center h-full rollover-svg-item">
                  {item.img}
                  <p className="xl:text-3xl">{item.text}</p>
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
        img: (
          <SpeakerIcon className="white-svg h-16 pb-3 lg:pb-0 lg:w-10 mx-auto lg:mx-3" />
        ),
        text: "External Speakers",
      },
      {
        id: 1,
        img: (
          <StreamingIcon className="white-svg h-16 pb-3 lg:pb-0 lg:w-10 mx-auto lg:mx-3" />
        ),
        text: "Streaming Devices",
      },
      {
        id: 2,
        img: (
          <ConsoleIcon className="white-svg h-16 pb-3 lg:pb-0 lg:w-10 mx-auto lg:mx-3" />
        ),
        text: "Gaming Consoles",
      },
      {
        id: 3,
        img: (
          <SmartphoneIcon className="white-svg h-16 pb-3 lg:pb-0 lg:w-10 mx-auto lg:mx-3" />
        ),
        text: "Smartphones (IOS & Andriod)",
      },
      {
        id: 4,
        img: (
          <LaptopIcon className="white-svg h-16 pb-3 lg:pb-0 lg:w-10 mx-auto lg:mx-3" />
        ),
        text: "PCs, Laptops & Tablets",
      },
      {
        id: 5,
        img: (
          <DvdIcon className="white-svg h-16 pb-3 lg:pb-0 lg:w-10 mx-auto lg:mx-3" />
        ),
        text: "DVD Players",
      },
      {
        id: 6,
        img: (
          <TunerIcon className="white-svg h-16 pb-3 lg:pb-0 lg:w-10 mx-auto lg:mx-3" />
        ),
        text: "Receivers & FM Tuners",
      },
      {
        id: 7,
        img: (
          <HeadphonesIcon className="white-svg h-16 pb-3 lg:pb-0 lg:w-10 mx-auto lg:mx-3" />
        ),
        text: "Bluetooth Headphones",
      },
      {
        id: 8,
        img: (
          <BatteryIcon className="white-svg h-16 pb-3 lg:pb-0 lg:w-10 mx-auto lg:mx-3" />
        ),
        text: "Off-Grid Battery Stations",
      },
      {
        id: 9,
        img: (
          <CablesIcon className="white-svg h-16 pb-3 lg:pb-0 lg:w-10 mx-auto lg:mx-3" />
        ),
        text: "HDMI, USB, VGA & Audio",
      },
    ]

    return (
      <div
        className="black-back relative text-white border-b md:border-none border-grey-subnav"
        id="features"
      >
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
                  className="orng-overlay col-span-3 md:col-span-2 self-center h-full"
                  key={item.id}
                >
                  <div className="md:border rounded-md border-grey-theater p-4 md:p-8 text-center flex flex-col h-full justify-start">
                    {item.img}
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
                      {item.img}
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

  const ImpressiveOutdoor = () => {
    const gridItems = [
      {
        id: 0,
        img: ImpressiveImage1,
        icon: WatchImage,
        text: "2-minute setup time",
        align: "start",
      },
      {
        id: 1,
        img: ImpressiveImage2,
        icon: FlexingImage,
        text: "Strongest frame system",
        align: "end",
      },
      {
        id: 2,
        img: ImpressiveImage3,
        icon: StampImage,
        text: "Custom equipment stand",
        align: "start",
      },
      {
        id: 3,
        img: ImpressiveImage4,
        icon: YearImage,
        text: "Year-round use",
        align: "end",
      },
    ]

    return (
      <div className="black-back relative text-white border-b md:border-none border-grey-subnav pt-10">
        <div className="container mx-auto pb-8 xl:py-16 flex flex-col xl:grid xl:grid-cols-12 w-full">
          <div className="text-center xl:col-span-12 xl:text-xl">
            <h2 className="text-3xl xl:text-5xl font-semibold leading-9 xl:leading-none pb-3 xl:pb-3">
              Impressive outdoor movie theater features
            </h2>
            <p className="text-lg xl:text-3xl pb-4 xl:pb-5 text-orng">
              Fastest setup. Strongest frame system. Custom equipment stand.
              Year-round use.
            </p>
            <p>
              After researching and testing all of the outdoor movie theaters
              you can buy online, I found four main areas for improvement. My
              benchmark testing focused on setup time, durability of frame
              systems, cinema equipment organization and storage, and the
              ability to use year-round in cold climates states like Maine.
            </p>
            <br />
            <p>
              As a result, all of my Timberline Series Outdoor Movie Theaters
              are the easiest and fastest to set up and start watching, have the
              most robust frame system, comes with a custom cinema equipment
              stand, and can be used year-round.
            </p>
          </div>
          <div className="col-span-12 grid grid-cols-12 lg:gap-2 mt-16">
            {gridItems.map(item => (
              <div className="col-span-12 lg:col-span-6" key={item.id}>
                <div className="text-center h-full relative">
                  <img src={item.img} alt={item.text} className="grid-image" />
                  <div
                    className={`lg:absolute w-full flex justify-center lg:justify-${item.align} my-8 lg:my-0`}
                    style={{ top: "70%" }}
                  >
                    <div className="flex flex-col lg:flex-row bg-opacity-gray items-center relative">
                      <img
                        src={item.icon}
                        alt=""
                        className={`lg:absolute w-40 ${
                          item.align === "start"
                            ? "lg:order-1 lg:pl-4"
                            : "lg:order-2 lg:right-0 lg:pr-4"
                        }`}
                      />
                      <p
                        className={`text-xl xl:text-3xl p-3 ${
                          item.align === "start"
                            ? "lg:order-2 lg:pl-40"
                            : "lg:order-1 lg:pr-40"
                        }`}
                      >
                        {item.text}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  const Comparison = () => {
    return (
      <div className="black-back relative text-white pt-10" id="comparison">
        <div className="container mx-auto">
          <div className="text-center xl:col-span-12 xl:text-xl">
            <h2 className="text-3xl xl:text-5xl font-semibold leading-9 xl:leading-none pb-3 xl:pb-3">
              Outdoor movie theater comparison
            </h2>
            <p className="text-lg xl:text-3xl pb-4 xl:pb-5 text-orng">
              How does the competition stack up to the Timberline Series 150"
              Big Moose?
            </p>
            <p>
              There are only three types of outdoor movie theater systems
              available for homeowners to buy; the aluminum frame cinema systems
              (made in China), the inflatable air screens (made in China), and
              the solid, year-round, pressure-treated frame cinema system
              (designed and built in Maine by the Wireless Outdoor Cinema
              Company).
            </p>
          </div>
          <div className="block lg:hidden">
            <div className="grid grid-cols-12 mt-16 text-center items-center">
              <div className="col-span-6">
                <img src={AluminumImage} alt="" className="w-80 mx-auto" />
                <h1 className="md:py-3 text-sm md:text-31 font-medium">
                  <p className="font-semibold">Aluminum System</p>
                </h1>
                <p className="text-xs md:text-xl text-grey-bdbbba">
                  Cinema equipment included
                </p>
                <p className="text-sm md:text-xl md:pt-3 pb-6">
                  $1,500 - 3,000
                </p>
                <hr className="mx-4 border-gray-500" />
              </div>
              <div className="col-span-6">
                <img src={TimberlineImage} alt="" className="w-80 mx-auto" />
                <h1 className="md:py-3 text-sm md:text-31 font-medium">
                  <p className="text-orange-1000 font-semibold">
                    Timberline Big Moose
                  </p>
                </h1>
                <p className="text-xs md:text-xl text-grey-bdbbba">
                  Cinema equipment included
                </p>
                <p className="text-sm md:text-xl md:pt-3 pb-6">
                  $2,900 - 3,000
                </p>
                <hr className="mx-4 border-gray-500" />
              </div>
            </div>
            <div className="py-5 border-b border-gray-500">
              <div className="grid grid-cols-12 my-6 text-center items-center">
                <div className="col-span-6 font-extralight">
                  <h1 className="text-sm text-center">Frame System Size</h1>
                  <p className="text-sm text-center text-grey-bdbbba">
                    11 ft wide x 10' ft high
                  </p>
                </div>
                <div className="col-span-6 font-extralight">
                  <h1 className="text-sm text-center">Frame System Size</h1>
                  <p className="text-sm text-center text-grey-bdbbba">
                    12 ft wide x 10' ft high
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-12 my-6 text-center items-center">
                <div className="col-span-6 font-extralight">
                  <h1 className="text-sm text-center">Cinematic Screen Size</h1>
                  <p className="text-sm text-center text-grey-bdbbba">
                    150" diagonal screen
                  </p>
                </div>
                <div className="col-span-6 font-extralight">
                  <h1 className="text-sm text-center">Cinematic Screen Size</h1>
                  <p className="text-sm text-center text-grey-bdbbba">
                    150" diagonal screen
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-12 my-6 text-center items-center">
                <div className="col-span-6 font-extralight">
                  <h1 className="text-sm text-center">1080p Projector</h1>
                  <p className="text-sm text-center text-grey-bdbbba">Yes</p>
                </div>
                <div className="col-span-6 font-extralight">
                  <h1 className="text-sm text-center">1080p Projector</h1>
                  <p className="text-sm text-center text-grey-bdbbba">Yes</p>
                </div>
              </div>

              <div className="grid grid-cols-12 my-6 text-center items-center">
                <div className="col-span-6 font-extralight">
                  <h1 className="text-sm text-center">Sound System</h1>
                  <p className="text-sm text-center text-grey-bdbbba">Yes</p>
                </div>
                <div className="col-span-6 font-extralight">
                  <h1 className="text-sm text-center">Sound System</h1>
                  <p className="text-sm text-center text-grey-bdbbba">Yes</p>
                </div>
              </div>

              <div className="grid grid-cols-12 my-6 text-center items-center">
                <div className="col-span-6 font-extralight">
                  <h1 className="text-sm text-center">Cinema Packages</h1>
                  <p className="text-sm text-center text-grey-bdbbba">
                    Wired equipment only
                  </p>
                </div>
                <div className="col-span-6 font-extralight">
                  <h1 className="text-sm text-center">Cinema Packages</h1>
                  <p className="text-sm text-center text-green-1f8f13">
                    Wireless & Wired equipment
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-12 my-6 text-center items-center">
                <div className="col-span-6 font-extralight">
                  <h1 className="text-sm text-center">Setup Time</h1>
                  <p className="text-sm text-center text-red-b20000">
                    10-15 minutes
                  </p>
                </div>
                <div className="col-span-6 font-extralight">
                  <h1 className="text-sm text-center">Setup Time</h1>
                  <p className="text-sm text-center text-green-1f8f13">
                    2-5 minutes
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-12 my-6 text-center items-center">
                <div className="col-span-6 font-extralight">
                  <h1 className="text-sm text-center">
                    Custom Equipment Stand
                  </h1>
                  <p className="text-sm text-center text-red-b20000">No</p>
                </div>
                <div className="col-span-6 font-extralight">
                  <h1 className="text-sm text-center">
                    Custom Equipment Stand
                  </h1>
                  <p className="text-sm text-center text-green-1f8f13">Yes</p>
                </div>
              </div>

              <div className="grid grid-cols-12 my-6 text-center items-center">
                <div className="col-span-6 font-extralight">
                  <h1 className="text-sm text-center">Year-Round Use</h1>
                  <p className="text-sm text-center text-red-b20000">
                    Not in snow climates
                  </p>
                </div>
                <div className="col-span-6 font-extralight">
                  <h1 className="text-sm text-center">Year-Round Use</h1>
                  <p className="text-sm text-center text-green-1f8f13">
                    Yes - even in snow climates
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-12 my-6 text-center items-center">
                <div className="col-span-6 font-extralight">
                  <h1 className="text-sm text-center">
                    Frame System After Use
                  </h1>
                  <p className="text-sm text-center text-red-b20000">
                    Needs to be broken down
                  </p>
                </div>
                <div className="col-span-6 font-extralight">
                  <h1 className="text-sm text-center">
                    Frame System After Use
                  </h1>
                  <p className="text-sm text-center text-green-1f8f13">
                    Stays up year-round
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-12 my-6 text-center items-center">
                <div className="col-span-6 font-extralight">
                  <h1 className="text-sm text-center">
                    Frame System Durability
                  </h1>
                  <p className="text-sm text-center text-red-b20000">
                    Not sturdy
                  </p>
                </div>
                <div className="col-span-6 font-extralight">
                  <h1 className="text-sm text-center">
                    Frame System Durability
                  </h1>
                  <p className="text-sm text-center text-green-1f8f13">
                    Strongest frame system
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-12 mt-16 text-center items-center">
              <div className="col-span-6">
                <img src={AirscreenImage} alt="" className="w-80 mx-auto" />
                <h1 className="text-sm md:py-3 md:text-31 font-medium">
                  <p className="font-semibold">Inflatable Air Screen</p>
                </h1>
                <p className="text-xs md:text-xl text-grey-bdbbba">
                  Cinema equipment included
                </p>
                <p className="text-sm md:text-xl md:pt-3 pb-6">
                  $3,500 - 4,500
                </p>
                <hr className="mx-4 border-gray-500" />
              </div>
              <div className="col-span-6">
                <img src={TimberlineImage} alt="" className="w-80 mx-auto" />
                <h1 className="text-sm md:py-3 md:text-31 font-medium">
                  <p className="text-orange-1000 font-semibold">
                    Timberline Big Moose
                  </p>
                </h1>
                <p className="text-xs md:text-xl text-grey-bdbbba">
                  Cinema equipment included
                </p>
                <p className="text-sm md:text-xl md:pt-3 pb-6">
                  $2,900 - 3,000
                </p>
                <hr className="mx-4 border-gray-500" />
              </div>
            </div>
            <div className="py-5">
              <div className="grid grid-cols-12 my-6 text-center items-center">
                <div className="col-span-6 font-extralight">
                  <h1 className="text-sm text-center">Frame System Size</h1>
                  <p className="text-sm text-center text-grey-bdbbba">
                    13 ft wide x 11' ft high
                  </p>
                </div>
                <div className="col-span-6 font-extralight">
                  <h1 className="text-sm text-center">Frame System Size</h1>
                  <p className="text-sm text-center text-grey-bdbbba">
                    12 ft wide x 10' ft high
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-12 my-6 text-center items-center">
                <div className="col-span-6 font-extralight">
                  <h1 className="text-sm text-center">Cinematic Screen Size</h1>
                  <p className="text-sm text-center text-grey-bdbbba">
                    150" diagonal screen
                  </p>
                </div>
                <div className="col-span-6 font-extralight">
                  <h1 className="text-sm text-center">Cinematic Screen Size</h1>
                  <p className="text-sm text-center text-grey-bdbbba">
                    150" diagonal screen
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-12 my-6 text-center items-center">
                <div className="col-span-6 font-extralight">
                  <h1 className="text-sm text-center">1080p Projector</h1>
                  <p className="text-sm text-center text-grey-bdbbba">Yes</p>
                </div>
                <div className="col-span-6 font-extralight">
                  <h1 className="text-sm text-center">1080p Projector</h1>
                  <p className="text-sm text-center text-grey-bdbbba">Yes</p>
                </div>
              </div>

              <div className="grid grid-cols-12 my-6 text-center items-center">
                <div className="col-span-6 font-extralight">
                  <h1 className="text-sm text-center">Sound System</h1>
                  <p className="text-sm text-center text-grey-bdbbba">Yes</p>
                </div>
                <div className="col-span-6 font-extralight">
                  <h1 className="text-sm text-center">Sound System</h1>
                  <p className="text-sm text-center text-grey-bdbbba">Yes</p>
                </div>
              </div>

              <div className="grid grid-cols-12 my-6 text-center items-center">
                <div className="col-span-6 font-extralight">
                  <h1 className="text-sm text-center">Cinema Packages</h1>
                  <p className="text-sm text-center text-grey-bdbbba">
                    Wired equipment only
                  </p>
                </div>
                <div className="col-span-6 font-extralight">
                  <h1 className="text-sm text-center">Cinema Packages</h1>
                  <p className="text-sm text-center text-green-1f8f13">
                    Wireless & Wired equipment
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-12 my-6 text-center items-center">
                <div className="col-span-6 font-extralight">
                  <h1 className="text-sm text-center">Setup Time</h1>
                  <p className="text-sm text-center text-red-b20000">
                    25-30 minutes
                  </p>
                </div>
                <div className="col-span-6 font-extralight">
                  <h1 className="text-sm text-center">Setup Time</h1>
                  <p className="text-sm text-center text-green-1f8f13">
                    2-5 minutes
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-12 my-6 text-center items-center">
                <div className="col-span-6 font-extralight">
                  <h1 className="text-sm text-center">
                    Custom Equipment Stand
                  </h1>
                  <p className="text-sm text-center text-red-b20000">No</p>
                </div>
                <div className="col-span-6 font-extralight">
                  <h1 className="text-sm text-center">
                    Custom Equipment Stand
                  </h1>
                  <p className="text-sm text-center text-green-1f8f13">Yes</p>
                </div>
              </div>

              <div className="grid grid-cols-12 my-6 text-center items-center">
                <div className="col-span-6 font-extralight">
                  <h1 className="text-sm text-center">Year-Round Use</h1>
                  <p className="text-sm text-center text-red-b20000">
                    Not in snow climates
                  </p>
                </div>
                <div className="col-span-6 font-extralight">
                  <h1 className="text-sm text-center">Year-Round Use</h1>
                  <p className="text-sm text-center text-green-1f8f13">
                    Yes - even in snow climates
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-12 my-6 text-center items-center">
                <div className="col-span-6 font-extralight">
                  <h1 className="text-sm text-center">
                    Frame System After Use
                  </h1>
                  <p className="text-sm text-center text-red-b20000">
                    Needs to be broken down
                  </p>
                </div>
                <div className="col-span-6 font-extralight">
                  <h1 className="text-sm text-center">
                    Frame System After Use
                  </h1>
                  <p className="text-sm text-center text-green-1f8f13">
                    Stays up year-round
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-12 my-6 text-center items-center">
                <div className="col-span-6 font-extralight">
                  <h1 className="text-sm text-center">
                    Frame System Durability
                  </h1>
                  <p className="text-sm text-center text-red-b20000">
                    Can potentially get air leaks
                  </p>
                </div>
                <div className="col-span-6 font-extralight">
                  <h1 className="text-sm text-center">
                    Frame System Durability
                  </h1>
                  <p className="text-sm text-center text-green-1f8f13">
                    Strongest frame system
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-12 my-6 text-center items-center">
                <div className="col-span-6 font-extralight">
                  <h1 className="text-sm text-center">DIY Available</h1>
                  <p className="text-sm text-center text-red-b20000">No</p>
                </div>
                <div className="col-span-6 font-extralight">
                  <h1 className="text-sm text-center">DIY Available</h1>
                  <p className="text-sm text-center text-green-1f8f13">Yes</p>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="grid grid-cols-12 mt-16 text-center items-center">
              <div className="col-span-12 lg:col-span-4">
                <img src={AluminumImage} alt="" className="w-80 mx-auto" />
                <h1 className="py-3 text-31 font-medium">
                  <p className="font-semibold">Aluminum System</p>
                </h1>
                <p className="text-xl text-grey-bdbbba">
                  Cinema equipment included
                </p>
                <p className="text-xl pt-3 pb-6">$1,500 - 3,000</p>
                <hr className="mx-4 border-gray-500" />
              </div>
              <div className="col-span-12 lg:col-span-4">
                <img src={AirscreenImage} alt="" className="w-80 mx-auto" />
                <h1 className="py-3 text-31 font-medium">
                  <p className="font-semibold">Inflatable Air Screen</p>
                </h1>
                <p className="text-xl text-grey-bdbbba">
                  Cinema equipment included
                </p>
                <p className="text-xl pt-3 pb-6">$3,500 - 4,500</p>
                <hr className="mx-4 border-gray-500" />
              </div>
              <div className="col-span-12 lg:col-span-4">
                <img src={TimberlineImage} alt="" className="w-80 mx-auto" />
                <h1 className="py-3 text-31 font-medium">
                  <p className="text-orange-1000 font-semibold">
                    Timberline Big Moose
                  </p>
                </h1>
                <p className="text-xl text-grey-bdbbba">
                  Cinema equipment included
                </p>
                <p className="text-xl pt-3 pb-6">$2,900 - 3,000</p>
                <hr className="mx-4 border-gray-500" />
              </div>
            </div>
            <div className="py-10">
              <div className="grid grid-cols-12 my-10 text-center items-center">
                <div className="col-span-12 lg:col-span-4 font-extralight text-23">
                  <h1 className="text-2xl text-center">Frame System Size</h1>
                  <p className="text-2xl text-center text-grey-bdbbba">
                    11 ft wide x 10' ft high
                  </p>
                </div>
                <div className="col-span-12 lg:col-span-4 font-extralight text-23">
                  <h1 className="text-2xl text-center">Frame System Size</h1>
                  <p className="text-2xl text-center text-grey-bdbbba">
                    13 ft wide x 11' ft high
                  </p>
                </div>
                <div className="col-span-12 lg:col-span-4 font-extralight text-23">
                  <h1 className="text-2xl text-center">Frame System Size</h1>
                  <p className="text-2xl text-center text-grey-bdbbba">
                    12 ft wide x 10' ft high
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-12 my-10 text-center items-center">
                <div className="col-span-12 lg:col-span-4 font-extralight text-23">
                  <h1 className="text-2xl text-center">
                    Cinematic Screen Size
                  </h1>
                  <p className="text-2xl text-center text-grey-bdbbba">
                    150" diagonal screen
                  </p>
                </div>
                <div className="col-span-12 lg:col-span-4 font-extralight text-23">
                  <h1 className="text-2xl text-center">
                    Cinematic Screen Size
                  </h1>
                  <p className="text-2xl text-center text-grey-bdbbba">
                    150" diagonal screen
                  </p>
                </div>
                <div className="col-span-12 lg:col-span-4 font-extralight text-23">
                  <h1 className="text-2xl text-center">
                    Cinematic Screen Size
                  </h1>
                  <p className="text-2xl text-center text-grey-bdbbba">
                    150" diagonal screen
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-12 my-10 text-center items-center">
                <div className="col-span-12 lg:col-span-4 font-extralight text-23">
                  <h1 className="text-2xl text-center">1080p Projector</h1>
                  <p className="text2-xl text-center text-grey-bdbbba">Yes</p>
                </div>
                <div className="col-span-12 lg:col-span-4 font-extralight text-23">
                  <h1 className="text-2xl text-center">1080p Projector</h1>
                  <p className="text2-xl text-center text-grey-bdbbba">Yes</p>
                </div>
                <div className="col-span-12 lg:col-span-4 font-extralight text-23">
                  <h1 className="text-2xl text-center">1080p Projector</h1>
                  <p className="text2-xl text-center text-grey-bdbbba">Yes</p>
                </div>
              </div>

              <div className="grid grid-cols-12 my-10 text-center items-center">
                <div className="col-span-12 lg:col-span-4 font-extralight text-23">
                  <h1 className="text-2xl text-center">Sound System</h1>
                  <p className="text2-xl text-center text-grey-bdbbba">Yes</p>
                </div>
                <div className="col-span-12 lg:col-span-4 font-extralight text-23">
                  <h1 className="text-2xl text-center">Sound System</h1>
                  <p className="text2-xl text-center text-grey-bdbbba">Yes</p>
                </div>
                <div className="col-span-12 lg:col-span-4 font-extralight text-23">
                  <h1 className="text-2xl text-center">Sound System</h1>
                  <p className="text2-xl text-center text-grey-bdbbba">Yes</p>
                </div>
              </div>

              <div className="grid grid-cols-12 my-10 text-center items-center">
                <div className="col-span-12 lg:col-span-4 font-extralight text-23">
                  <h1 className="text-2xl text-center">Cinema Packages</h1>
                  <p className="text2-xl text-center text-grey-bdbbba">
                    Wired equipment only
                  </p>
                </div>
                <div className="col-span-12 lg:col-span-4 font-extralight text-23">
                  <h1 className="text-2xl text-center">Cinema Packages</h1>
                  <p className="text2-xl text-center text-grey-bdbbba">
                    Wired equipment only
                  </p>
                </div>
                <div className="col-span-12 lg:col-span-4 font-extralight text-23">
                  <h1 className="text-2xl text-center">Cinema Packages</h1>
                  <p className="text2-xl text-center text-green-1f8f13">
                    Wireless & Wired equipment
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-12 my-10 text-center items-center">
                <div className="col-span-12 lg:col-span-4 font-extralight text-23">
                  <h1 className="text-2xl text-center">Setup Time</h1>
                  <p className="text2-xl text-center text-red-b20000">
                    10-15 minutes
                  </p>
                </div>
                <div className="col-span-12 lg:col-span-4 font-extralight text-23">
                  <h1 className="text-2xl text-center">Setup Time</h1>
                  <p className="text2-xl text-center text-red-b20000">
                    25-30 minutes
                  </p>
                </div>
                <div className="col-span-12 lg:col-span-4 font-extralight text-23">
                  <h1 className="text-2xl text-center">Setup Time</h1>
                  <p className="text2-xl text-center text-green-1f8f13">
                    2-5 minutes
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-12 my-10 text-center items-center">
                <div className="col-span-12 lg:col-span-4 font-extralight text-23">
                  <h1 className="text-2xl text-center">
                    Custom Equipment Stand
                  </h1>
                  <p className="text2-xl text-center text-red-b20000">No</p>
                </div>
                <div className="col-span-12 lg:col-span-4 font-extralight text-23">
                  <h1 className="text-2xl text-center">
                    Custom Equipment Stand
                  </h1>
                  <p className="text2-xl text-center text-red-b20000">No</p>
                </div>
                <div className="col-span-12 lg:col-span-4 font-extralight text-23">
                  <h1 className="text-2xl text-center">
                    Custom Equipment Stand
                  </h1>
                  <p className="text2-xl text-center text-green-1f8f13">Yes</p>
                </div>
              </div>

              <div className="grid grid-cols-12 my-10 text-center items-center">
                <div className="col-span-12 lg:col-span-4 font-extralight text-23">
                  <h1 className="text-2xl text-center">Year-Round Use</h1>
                  <p className="text2-xl text-center text-red-b20000">
                    Not in snow climates
                  </p>
                </div>
                <div className="col-span-12 lg:col-span-4 font-extralight text-23">
                  <h1 className="text-2xl text-center">Year-Round Use</h1>
                  <p className="text2-xl text-center text-red-b20000">
                    Not in snow climates
                  </p>
                </div>
                <div className="col-span-12 lg:col-span-4 font-extralight text-23">
                  <h1 className="text-2xl text-center">Year-Round Use</h1>
                  <p className="text2-xl text-center text-green-1f8f13">
                    Yes - even in snow climates
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-12 my-10 text-center items-center">
                <div className="col-span-12 lg:col-span-4 font-extralight text-23">
                  <h1 className="text-2xl text-center">
                    Frame System After Use
                  </h1>
                  <p className="text2-xl text-center text-red-b20000">
                    Needs to be broken down
                  </p>
                </div>
                <div className="col-span-12 lg:col-span-4 font-extralight text-23">
                  <h1 className="text-2xl text-center">
                    Frame System After Use
                  </h1>
                  <p className="text2-xl text-center text-red-b20000">
                    Needs to be broken down
                  </p>
                </div>
                <div className="col-span-12 lg:col-span-4 font-extralight text-23">
                  <h1 className="text-2xl text-center">
                    Frame System After Use
                  </h1>
                  <p className="text2-xl text-center text-green-1f8f13">
                    Stays up year-round
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-12 my-10 text-center items-center">
                <div className="col-span-12 lg:col-span-4 font-extralight text-23">
                  <h1 className="text-2xl text-center">
                    Frame System Durability
                  </h1>
                  <p className="text2-xl text-center text-red-b20000">
                    Not sturdy
                  </p>
                </div>
                <div className="col-span-12 lg:col-span-4 font-extralight text-23">
                  <h1 className="text-2xl text-center">
                    Frame System Durability
                  </h1>
                  <p className="text2-xl text-center text-red-b20000">
                    Can potentially get air leaks
                  </p>
                </div>
                <div className="col-span-12 lg:col-span-4 font-extralight text-23">
                  <h1 className="text-2xl text-center">
                    Frame System Durability
                  </h1>
                  <p className="text2-xl text-center text-green-1f8f13">
                    Strongest frame system
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-12 my-6 text-center items-center">
                <div className="col-span-6 font-extralight">
                  <h1 className="text-sm text-center">DIY Available</h1>
                  <p className="text-sm text-center text-red-b20000">No</p>
                </div>
                <div className="col-span-6 font-extralight">
                  <h1 className="text-sm text-center">DIY Available</h1>
                  <p className="text-sm text-center text-green-1f8f13">Yes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const BannerCallout = () => {
    return (
      <div className="bg-gray-990 relative text-white">
        <div className="container mx-auto pt-8 pb-6 xl:pt-16 xl:pb-12 flex grid grid-cols-12 w-full">
          <div className="col-span-1">
            <img
              src={DownloadPDF}
              alt=""
              className="h-5 mt-2 xl:mt-0 xs:h-8 sm:h-10 md:h-12 lg:h-16 xl:h-20"
            />
          </div>
          <div className="col-span-7 flex flex-col">
            <p className="text-xxs sm:text-xs md:text-base lg:text-2xl xl:text-3xl font-semibold">
              <span className="text-orng">Get the</span> only DIY{" "}
              <span className="text-orng">on how-to build a professional</span>
            </p>
            <p className="text-base sm:text-2xl md:text-3xl lg:text-5xl xl:text-6xl font-semibold">
              Outdoor Movie Theater
            </p>
          </div>
          <div className="col-start-9 col-span-3 lg:col-start-10 lg:col-span-2 flex flex-col justify-around text-center">
            <p className="text-xxs sm:text-xs md:text-base lg:text-2xl xl:text-3xl">
              Now only $99*
            </p>
            <a
              href="#"
              className="px-1 md:px-2 py-1 md:py-2 xl:py-5 xl:px-4 flex-0 button-orng text-xxs sm:text-xs md:text-base lg:text-xl xl:text-2xl"
            >
              Get the DIY now
            </a>
          </div>
        </div>
      </div>
    )
  }

  const Quote = () => {
    return (
      <div className="black-back relative text-white border-b md:border-none border-grey-subnav">
        <img className="mx-auto w-full max-w-2400" src={QuoteImage} alt="" />
        <div className="container mx-auto py-4 xl:py-16">
          <div className="flex flex-col lg:hidden">
            <div className="block col-span-12 mb-5 text-center relative">
              <p className="text-xs sm:text-base quote-todd">
                My wireless outdoor movie theaters take less time to set up and
                start watching than it does to pop a bag of popcorn.
              </p>
              <img src={SignatureImage} alt="" className="w-64 mx-auto mt-5" />
            </div>
          </div>
          <div className="block h-full container">
            <div className="absolute container mt-16 top-0 hidden lg:grid grid-cols-12">
              <div className="flex flex-col col-start-7 col-span-6 text-center">
                <p className="text-2xl xl:text-4xl quote-todd">
                  My wireless outdoor movie theaters take less time to set up
                  and start watching than it does to pop a bag of popcorn.
                </p>
                <img
                  src={SignatureImage}
                  alt=""
                  className="w-full px-10 mx-auto mt-5"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const FAQ = () => {
    const faqList = [
      {
        id: 0,
        icon: <PriceTagIcon className="w-12 h-fit" />,
        text: "Outdoor Movie Theater Costs",
        questions: [
          {
            id: "01",
            question:
              "What is the lumber cost for the frame systems and equipment stand?",
            answer: (
              <>
                The recommended wood for the frame system is pressure-treated
                4x4s. And the recommended timber to build the custom equipment
                stand is Cedar, and you can also use pine wood. These two types
                of wood keep the equipment stand's weight light, making it
                easier to carry. However, when using hardwood like maple or oak,
                the equipment stand's weight will stress your lower back and
                neck when moving.
                <br />
                <br />
                The cost will vary depending on your location, and lumber is
                usually more cost- friendly at your local HomeDepot or Lowes
                stores.
                <br />
                <br />
                <strong>Streamline Frame System:</strong> Average cost is
                between $150-175.
                <br />
                <br />
                <strong>Movable Frame System:</strong> Average cost is between
                $175-225.
                <br />
                <br />
                <strong>Cedar Custom Equipment Stand:</strong> Average cost is
                between $70-$90.
                <br />
                <br />
                <strong>Pine Custom Equipment Stand:</strong> Average cost is
                between $65-$85.
              </>
            ),
          },
          {
            id: "02",
            question: "How much does the frame system hardware cost?",
            answer: (
              <>
                <strong>Streamline Frame System:</strong> The weather- resistant
                hardware costs between $275-300.
                <br />
                <br />
                <strong>Movable Frame System:</strong> The weather- resistant
                hardware costs between $300–325.
              </>
            ),
          },
          {
            id: "03",
            question: "How much does the cinema equipment cost?",
            answer: (
              <>
                The cinema equipment I offer with my Timberline Premium Wireless
                150” Big Moose Package costs between $600 and $ 700.
                <br />
                <br />
                You can also choose whatever electronic components and brand
                names you want as long as they are compatible with the
                recommended equipment setup.
                <br />
                <br />
                For example, if you want to use a different projector or speaker
                system, the cost will go up depending on your needs. And the
                price will decrease if you already have some compatible
                electronic components.
                <br />
                <br />
                <strong>Wireless Cinema Cost:</strong> $600
                <br />
                <br />
                <strong>Wired Cinema Equipment:</strong> $700
              </>
            ),
          },
          {
            id: "04",
            question:
              "What is the price difference between wireless and wired cinemas?",
            answer: (
              <>
                The wireless cinema package is less expensive than the wired
                cinema by $100 and costs, on average, $600. And the wired cinema
                equipment costs roughly $700.
              </>
            ),
          },
          {
            id: "05",
            question:
              "What is the cost for a professional outdoor movie theater?",
            answer: (
              <>
                The overall cost to build your own professional outdoor movie
                theater is between $1,100 and $1,400.
                <br />
                <br />
                The cost will be less if you already have lumber and some
                compatible cinema equipment.
              </>
            ),
          },
        ],
      },
      {
        id: 1,
        icon: <FrameIcon className="w-12 h-fit" />,
        text: "Frame System",
        questions: [
          {
            id: "11",
            question:
              "How much space do I need to install the frame system on my property?",
            answer:
              "The recommended space needed for an outdoor movie theater setup is roughly 12 ft x 12 ft, which includes space for seating.",
          },
          {
            id: "12",
            question:
              "How difficult is building the frame system, and what tools do I need?",
            answer: (
              <>
                Anyone can easily build, assemble, and install the different
                frame systems by following the instructions in the 'how-to'
                manual. Essential tools include a hand saw, Skilsaw or compound
                saw, drill, box level, and other standard household tools.
                <br />
                <br />
                After purchasing the downloadable 'how-to' guide, the necessary
                tools are covered in depth. If you don't have some of these
                tools, you can rent them at your local hardware store or do what
                most homeowners do - borrow them from your neighbors.
              </>
            ),
          },
          {
            id: "13",
            question:
              "What are the dimensions for the different frame systems?",
            answer: (
              <>
                <strong>Streamline Frame System:</strong> 12' ft wide x 10' ft
                high x 4" depth.
                <br />
                <br />
                <strong>Movable Frame System:</strong> 12' ft wide x 10' ft high
                x 5' ft depth.
              </>
            ),
          },
          {
            id: "14",
            question:
              "How much do the Movable and Streamline Frame Systems weigh?",
            answer: (
              <>
                <strong>Streamline Frame System:</strong> weighs between 80-100
                lbs.
                <br />
                <br />
                <strong>Movable Frame System:</strong> weighs between 175-200
                lbs.
                <br />
                <br />
                The weight of the frame system will vary as most new
                pressure-treated lumber is wet and heavy and eventually dries
                out and becomes lighter over six months.
              </>
            ),
          },
          {
            id: "15",
            question: "How long will the frame system last after being built?",
            answer: (
              <>
                The Timberline Frame Systems will last as long as your deck
                outside and even longer if you apply a coat of stain every other
                year.
              </>
            ),
          },
        ],
      },
      {
        id: 2,
        icon: <ScreenIcon className="w-12 h-fit" />,
        text: "Cinematic Screen",
        questions: [
          {
            id: "21",
            question: "Can I use a bed sheet instead of a cinematic screen?",
            answer: (
              <>
                You can if you’d like the worst viewing screen for your
                professional outdoor movie theater. Bed sheets allow too much
                light transmission White Eastern Cedar 5/4” thick x 6” wide, or
                you can use 1” thick x 6” wide Pinewood. You can also build the
                equipment stand using pressure-treated wood. through the
                material, causing the screen to look dull.
                <br />
                <br />
                Cinematic screens are made of unique materials to prevent light
                transmission giving you a sharp and crisp viewing experience.
                The more light transmission that goes through the screen, the
                more visual quality you’ll lose through the projector.
                <br />
                <br />
                Outdoor cinematic screens cost roughly $10 more than a bedsheet.
              </>
            ),
          },
          {
            id: "22",
            question:
              "What are the overall dimensions of the cinematic screen?",
            answer:
              "150” diagonal. The dimensions are 9’ ft. 3” wide x 5’ ft. 10” high.",
          },
          {
            id: "23",
            question: "How do I attach the screen to the frame system?",
            answer: (
              <>
                Most outdoor cinematic screens have grommet holes along the
                edges of the screen that get attached to screw hooks on the
                inside of the frame system.
                <br />
                <br />
                There are two ways of hanging the screen; running a black nylon
                cord through the grommet holes and tying it off at the ends of
                the frame for a clean straight line appearance or hanging the
                screen on the screw hooks inside the frame system, giving the
                screen edges a slight spider web appearance that you won't see
                while watching your favorite entertainment outside.
              </>
            ),
          },
          {
            id: "24",
            question: "Is the outdoor cinematic screen machine-washable?",
            answer: (
              <>
                Most screen manufacturers do not recommend washing your screen
                in your washing machine. Instead, it's recommended to
                spot-cleaning your cinematic screen when it gets dirty with
                Woolite and running through a dryer for 5-10 minutes.
              </>
            ),
          },
          {
            id: "25",
            question: "Can the cinematic screen stay outside year-round?",
            answer: (
              <>
                No. It is recommended to take your screen down after each use
                outside. Try to avoid getting the cinematic screen wet from the
                rain.
                <br />
                <br />
                <strong>Warning:</strong> If you leave your cinematic screen
                attached to the Movable frame system with strong wind gusts, the
                wind will fill up your screen like a sail on a sailboat and
                topple the heavy frame system over, crushing anything in front
                of it. The wind will also stress the grommets on the edges of
                the screen and eventually rip them out.
              </>
            ),
          },
        ],
      },
      {
        id: 3,
        icon: <EquipmentStandIcon className="w-12 h-fit" />,
        text: "Custom Equipment Stand",
        questions: [
          {
            id: "31",
            question:
              "What type of wood is recommended for cinema equipment stand?",
            answer: (
              <>
                White Eastern Cedar 5/4” thick x 6” wide, or you can use 1”
                thick x 6” wide Pinewood. You can also build the equipment stand
                using pressure-treated wood. Pressure-treated wood costs much
                less but weighs significantly more than cedar and pine wood.
                <br />
                <br />
                To protect your equipment stand, you should always apply a coat
                of a semi-transparent stain.
              </>
            ),
          },
          {
            id: "32",
            question:
              "What tools are necessary to build the cinema equipment stand?",
            answer: (
              <>
                You will need a circular or compound saw, bar clamps, sanding
                block, random orbital sander, and drill. If you don’t have these
                tools, do what most homeowners do — borrow some tools from your
                neighbors, or you can rent them at a low cost from most hardware
                stores.
              </>
            ),
          },
          {
            id: "33",
            question: "What is the size of the equipment stand?",
            answer: (
              <>
                The equipment stand's overall dimensions depend on the equipment
                you want to use for your cinema setup. Over the years of
                building outdoor movie theaters for customers, every cinema
                equipment stand I've made is a different size.
                <br />
                <br />
                There are exact calculations for you to follow in the DIY to
                help you determine the proper size to build your custom cinema
                equipment stand.
              </>
            ),
          },
          {
            id: "34",
            question:
              "How difficult is it to build the custom cinema equipment stand?",
            answer: (
              <>
                For the beginner with no furniture building experience, the
                'how-to' DIY will show you how easy it is to build and assemble
                the stand, where you can do it in a day.
                <br />
                <br />
                If you have a full woodshop and have built furniture before, the
                design plans are straightforward, and you'll easily conquer this
                project.
              </>
            ),
          },
          {
            id: "35",
            question: "Can I use an aluminum tripod projector stand instead?",
            answer: (
              <>
                No. There is not enough space on the tripod projector stand
                shelf to hold all of the necessary electronic components, as it
                only has enough space to hold a projector and nothing else. And
                you want to avoid stacking your equipment on top of each.
                <br />
                <br />
                The Timberline Series Custom Cinema Equipment Stand is a
                portable entertainment center where all your equipment stays
                neatly organized and never has to be disconnected or broken
                down, just like the entertainment center inside your home.
              </>
            ),
          },
        ],
      },
      {
        id: 4,
        icon: <EquipmentListIcon className="w-12 h-fit" />,
        text: "Cinema Equipment",
        questions: [
          {
            id: "41",
            question:
              "Does the cinema equipment allow for daytime movies outside?",
            answer: (
              <>
                The recommended projector I provide in the DIY does not support
                daytime use due to the higher cost of a daytime projector.
                However, you can customize your cinema equipment and get a
                daytime projector to fit your needs.
                <br />
                <br />
                Daytime projectors range in cost from $800 and up and can be
                found online by searching for ‘outdoor daytime projectors.’ The
                DIY covers outdoor daytime projectors and which ones are the
                best based on online reviews if cost is not an issue.
              </>
            ),
          },
          {
            id: "42",
            question: "Is the recommended cinema equipment customizable?",
            answer: (
              <>
                Absolutely. You can customize your cinema equipment to fit your
                needs by choosing what you’d like for electronics and brands.
                The how-to DIY provides the cinema equipment I use for my
                customers in Maine and works as a framework to help you
                understand how everything works and gets connected.
              </>
            ),
          },
          {
            id: "43",
            question:
              "Can I play video games outside with the cinema equipment?",
            answer: (
              <>
                Yes. With the wired cinema setup, you can play video games all
                night under the stars and moon. Just plug your XboxTM,
                PlayStation®, or WiiTM console into the projector and start
                gaming away on a massive 150" diagonal screen. Unfortunately,
                the wireless cinema is not powerful enough for gaming systems.
              </>
            ),
          },
          {
            id: "44",
            question:
              "Does the DIY cover both wireless and wired cinema packages?",
            answer: (
              <>
                Yes – the DIY covers the recommended cinema equipment for
                wireless and wired packages.
              </>
            ),
          },
          {
            id: "45",
            question: "Will the wireless cinema package work with PA Speakers?",
            answer: (
              <>
                No. You can only use the wired cinema setup to run powerful PA
                Speakers through. The wireless cinema setup is not capable of
                powering high-end sound systems. However, you can use great
                Bluetooth speakers with the wireless cinema setup.
              </>
            ),
          },
          {
            id: "46",
            question:
              "Can I use Bluetooth Wireless Headphones with the cinema equipment?",
            answer: (
              <>
                Yes. With the wired cinema system, you can use Bluetooth
                Wireless Headphones to listen to your entertainment, so it
                doesn’t disrupt your neighbors. Not compatible with the wireless
                cinema setup.
              </>
            ),
          },
          {
            id: "47",
            question: "Is the recommended cinema equipment waterproof?",
            answer: (
              <>
                No. The cinema equipment is the same as the electronics inside
                your home – avoid getting them wet by rain.
              </>
            ),
          },
        ],
      },
      {
        id: 5,
        icon: <AssemblyIcon className="w-12 h-fit" />,
        text: "Assembly and Installation",
        questions: [
          {
            id: "51",
            question:
              "Do I need a building permit to install an outdoor movie theater?",
            answer: (
              <>
                Each state and town have its own zoning codes. The Timberline
                Movable Frame System is not considered a permanent structure and
                falls under a similar category of an outdoor residential
                playground and should not require any zoning permit.
                <br />
                <br />
                The Timberline Streamline Frame System gets cemented into the
                ground and is also similar to an outdoor residential playground
                that may not require any zoning permit. However, it’s
                recommended to call your local town office and speak to the
                zoning commissioner to verify that installing the frame system
                is permittable.
                <br />
                <br />
                <strong>Important:</strong> always call Dig Safe before digging
                into the ground.
              </>
            ),
          },
          {
            id: "52",
            question:
              "What are my options if I don’t have a flat area to install the frame?",
            answer: (
              <>
                Use the Timberline Streamline Frame System for uneven ground.
                <br />
                <br />
                If you have ledge stone under your lawn or have other
                obstructions, use 2’ ft wide x 2’ ft high x 2’ft deep plywood
                form boxes. Place the frame posts in the boxes, then pour cement
                into them. After the cement cures, remove the plywood frame, and
                you can apply bricks or veneer stone around them to create a
                beautiful decorative look.
              </>
            ),
          },
          {
            id: "53",
            question:
              "What tools do I need to assemble and install the frame systems?",
            answer: (
              <>
                <strong>Streamline Frame System:</strong> 1/4” or 1⁄2” drive
                ratchet socket wrench and sockets, hammer, drill, 6’ ft box
                level, and shovel.
                <br />
                <br />
                <strong>Movable Frame System:</strong> 1/4” or 1⁄2” drive
                ratchet socket wrench and sockets, hammer, drill, and 6’ ft box
                level.
              </>
            ),
          },
          {
            id: "54",
            question:
              "How difficult is it to install the different frame systems?",
            answer: (
              <>
                I install all of my client's cinemas by myself and recommend you
                have two people to help assemble and install your frame system
                for the first time – it will go much easier and faster.
              </>
            ),
          },
          {
            id: "55",
            question:
              "How long does it take to install the different frame systems?",
            answer: (
              <>
                The overall time to assemble and install the frame system should
                take you a day - even faster with two people. Both frame systems
                take roughly the same amount of time to install.
              </>
            ),
          },
          {
            id: "56",
            question:
              "What if the ground where the equipment stand goes is uneven?",
            answer: (
              <>
                It's recommended to make the area as flat and level as possible
                for the custom cinema equipment stand to rest on. Picking up
                8-10 stone pavers at your local box store to place the equipment
                stand on will make the setup faster as you know exactly where
                the stand will go whenever you want to enjoy your favorite
                entertainment outside on the big screen.
                <br />
                <br />
                If you don't have a level area to place the cinema equipment
                stand on due to ledge stone and rocks, use an angle grinder with
                a diamond tip blade and grind down the stone until it's level.
                Always use protective eye goggles when using an angle grinder.
              </>
            ),
          },
          {
            id: "57",
            question:
              "How far away does the equipment stand need to be from the frame?",
            answer: (
              <>
                The distance from the projector to the cinema screen is the
                throw distance. Each projector has a recommended throw distance
                and will be covered in the 'how-to' DIY.
              </>
            ),
          },
        ],
      },
    ]

    return (
      <div
        className="black-back relative text-white border-b md:border-none border-grey-subnav pt-10"
        id="faq"
      >
        <div className="container mx-auto pb-8 xl:py-16 flex flex-col xl:grid xl:grid-cols-12 w-full">
          <div className="text-center xl:col-span-12 xl:text-xl">
            <h2 className="text-3xl xl:text-5xl font-semibold leading-9 xl:leading-none pb-3 xl:pb-3">
              Frequently asked questions
            </h2>
            <p className="text-lg xl:text-3xl pb-4 xl:pb-5 text-orng">
              Common questions on how-to build a professional outdoor movie
              theater
            </p>
            <p>
              Below are the most frequently asked questions from customers over
              the years to help you quickly find the answers you are searching
              for broken down by category. Feel free to{" "}
              <Link to="/connect" style={{ color: "#2ea8df" }}>
                connect
              </Link>{" "}
              if you have a question that isn’t here.
            </p>
          </div>
          <div className="col-span-12 grid grid-cols-12 gap-5 mt-16">
            {faqList.map(item => (
              <div
                className="col-span-12 lg:col-span-6 border rounded-md p-3 py-5 orng-rollover-overlay rollover-svg-item"
                key={item.id}
              >
                <div className="flex items-center pb-3">
                  {item.icon}
                  {/* <img src={item.icon} alt="" className="w-12 h-fit" /> */}
                  <p className="text-md lg:text-xl px-3 text-orng">
                    {item.text}
                  </p>
                </div>
                {item.questions.map(qa => (
                  <article className="faq-accordion" key={qa.id}>
                    <input
                      type="checkbox"
                      className="tgg-title"
                      id={`tgg-title-${qa.id}`}
                    />
                    <div className="faq-accordion-title">
                      <label htmlFor={`tgg-title-${qa.id}`}>
                        <p className="faq-accordion-header p1 text-sm lg:text-lg">
                          {qa.question}
                        </p>
                      </label>
                    </div>
                    <div className="faq-accordion-content">
                      <p className="py-2 px-4 text-sm lg:text-lg text-grey-bdbbba">
                        {qa.answer}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  const Copy = () => {
    return (
      <div className="black-back relative text-white border-b md:border-none border-grey-subnav pt-10">
        <div className="container mx-auto pb-8 xl:py-16">
          <div className="text-left">
            <p>
              * The how-to build a professional outdoor movie theater DIY offer
              expires on July 1, 2023.
            </p>
            <br />
            <p>
              XboxTM, PlayStation®, and WiiTM gaming consoles are registered
              Trademarks of their respective owners.
            </p>
            <br />
            <p>
              The Wireless Outdoor Cinema’s Timberline DIY on how-to build a
              professional outdoor movie theater is copyright protected and
              punishable by federal law if you distribute the contents, resell,
              or use it to start a business selling outdoor movie theaters.
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
      <Video />
      <HeresWhatYouGet />
      <FrameSystemsThatWork />
      <PerfectFor />
      <PowerfulCinema />
      <ImpressiveOutdoor />
      <Comparison />
      <BannerCallout />
      <Quote />
      <FAQ />
      <Copy />
    </Layout>
  )
}

export default HowToBuildAnOutdoorMovieTheater
