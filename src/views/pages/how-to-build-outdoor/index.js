import React, { useState } from "react"
import { Link } from "gatsby"
import Background from "./images/timberline-outdoor-movie-theater-1920px-x-800px.jpg"
import Moose from "./images/timberline-big-moose-791px-x-755px.png"
import FrameSystemsMovable from "./images/timberline-movable-frame-1617px-x-750px.jpg"
import FrameSystemsTimberline from "./images/timberline-streamline-frame-1617px-x-750px.jpg"
import PowerfulBackground from "./images/timberline-cinema-stand-1617px-x-750px.jpg"
import PowerfulBackgroundMobile from "./images/mobile-timberline-projector-stand-429px-x-266px.jpg"
import BonusBanner from "./images/bonus-corner-banner-141px-x-121px.png"
import FlexingImage from "./images/icon-arm-flexing-130px-x-98px.png"
import StampImage from "./images/icon-original-stamp-144px-x-98px.png"
import WatchImage from "./images/icon-stop-watch-144px-x-98px.png"
import YearImage from "./images/icon-year-round-130px-x-98px.png"
import ImpressiveImage1 from "../../../images/setup-time-photo-805px-x-512px.jpg"
import ImpressiveImage2 from "../../../images/strongest-frame-system-photo-805px-x-512px.jpg"
import ImpressiveImage3 from "../../../images/equipment-stand-photo-805px-x-512px.jpg"
import ImpressiveImage4 from "../../../images/theater-in-snow-photo-805px-x-512px.jpg"
import ImpressiveImage1M from "../../../images/mobile-setup-time-photo-429px-x-266px.jpg"
import ImpressiveImage2M from "../../../images/mobile-strongest-frame-system-429px-x-266px.jpg"
import ImpressiveImage3M from "../../../images/mobile-equipment-stand-photo-429px-x-266px.jpg"
import ImpressiveImage4M from "../../../images/mobile-winter-outdoor-movie-theater-429px-x-266px.jpg"

import YearroundImage from "../../../images/icon-year-round-402px-138px.png"
import AffordableImage from "../../../images/icon-affordable-401px-138px.png"
import MovableImage from "../../../images/icon-moveable-frame-402px-138px.png"
import SturdyImage from "../../../images/icon-sturdy-402px-138px.png"

import PermanentImage from "../../../images/icon-permanent-402px-x-138px.png"
import AttractiveImage from "../../../images/icon-attractive-402px-x-138px.png"
import BudgetImage from "../../../images/icon-budget-friendly-401px-x-138px.png"
import LastingImage from "../../../images/icon-built-to-last-402px-x-138px.png"

import AirscreenImage from "../../../images/airscreen-frame-photo-423px-x-307px.png"
import AluminumImage from "../../../images/aluminum-frame-photo-423px-x-307px.png"
import TimberlineImage from "../../../images/timberline-frame-photo-423px-x-307px.png"

import DownloadPDF from "../../../images/icon-pdf-download-play-button-107px-x-99px.png"

import QuoteImage from "../../../images/quote-photo-1920px-x-1080px.jpg"
import SignatureImage from "../../../images/todd-morton-founder-signature-743px-x-87px.png"

import { ColdNightIcon } from "../../../components/svg/HeresWhatYouGet/cold-night-extras-icon"
import { DesignPlanIcon } from "../../../components/svg/HeresWhatYouGet/design-plan-icon"
import { EquipmentListIcon } from "../../../components/svg/HeresWhatYouGet/equipment-list-icon"
import { FirePitIcon } from "../../../components/svg/HeresWhatYouGet/fire-pit-ideas-icon"
import { HowVideoIcon } from "../../../components/svg/HeresWhatYouGet/how-to-video-icon"
import { MaterialListIcon } from "../../../components/svg/HeresWhatYouGet/material-list-icon"
import { TheaterSeatingIcon } from "../../../components/svg/HeresWhatYouGet/theater-seating-icon"
import { TipsTechniquesIcon } from "../../../components/svg/HeresWhatYouGet/tips-and-techniques-icon"
import { ToolsNeededIcon } from "../../../components/svg/HeresWhatYouGet/tools-needed-icon"

import { SpeakerIcon } from "../../../components/svg/CinemaCapabilities/speaker-icon"
import { ConsoleIcon } from "../../../components/svg/CinemaCapabilities/video-game-console-icon"
import { SmartphoneIcon } from "../../../components/svg/CinemaCapabilities/smartphone-icon"
// import { LaptopIcon } from "../../../components/svg/CinemaCapabilities/laptop-icon"
// import { DvdIcon } from "../../../components/svg/CinemaCapabilities/dvd-icon"
import { TunerIcon } from "../../../components/svg/CinemaCapabilities/tuner-icon"
// import { CablesIcon } from "../../../components/svg/CinemaCapabilities/cables-icon"
import { VideoGameConsoleIcon } from "../../../components/svg/PerfectFor/video-game-console"
import { SportStadiumIcon } from "../../../components/svg/PerfectFor/sport-stadium-icon"
import { RegularUseIcon } from "../../../components/svg/PerfectFor/regular-use-icon"
import { GroupofPeopeIcon } from "../../../components/svg/PerfectFor/group-of-people-icon"
import { FamilyMovieIcon } from "../../../components/svg/PerfectFor/family-movie-icon"
import { BackyardIcon } from "../../../components/svg/PerfectFor/backyard-icon"

import { AssemblyIcon } from "../../../components/svg/FAQ/assembly-icon"
import { EquipmentStandIcon } from "../../../components/svg/FAQ/equipment-stand-icon"
import { FrameIcon } from "../../../components/svg/FAQ/frame-icon"
import { PriceTagIcon } from "../../../components/svg/FAQ/price-tag-icon"
import { ScreenIcon } from "../../../components/svg/FAQ/screen-icon"
import Video from "./components/video"
import PerfectForO from "./components/PerfectFor"
import { Header, SubHeader } from "./components/Header"
import HookStyleScreen from "./images/hook-style-screen.jpg"
import StraightStyleScreen from "./images/straight-line-screen.jpg"
import RopeIcon from "./icons/RopeIcon"
import BatteryIcon from "./icons/BatteryIcon"
import HeadphonesIcon from "./icons/HeadphoneIcon"
import StreamingIcon from "./icons/StreamingIcon"
import SmartPhoneIcon from "./icons/SmartPhone"
import DvdIcon from "./icons/DVDIcon"
import CablesIcon from "./icons/CableIcon"
import LaptopIcon from "./icons/LaptopIcon"
import WirelessCinema from "./images/wireless-cinema-package-1398px-x-658px.jpg"
import WiredCinema from "./images/wired-cinema-package-1398px-x-658px.jpg"
import ProjectorStand from "./images/timberline-projector-stand-1398px-x-658px.jpg"

import PageWrapper from "./components/PageWrapper"
import HeadPhoneWirelessIcon from "./icons/HeadphonesWirelessIcon"
import PencilIcon from "./icons/PencilIcon"
import ArrowIcon from "./icons/ArrowIcon"
import ElectronicsIcon from "./icons/Electronics"
import LightWeightIcon from "./icons/LightWeight"
import LumberIcon from "./icons/LumberIcon"
import PaintIcon from "./icons/PaintIcon"
import HouseIcon from "./icons/HouseIcon"
import WarnIcon from "./icons/WarnIcon"
import MobileWireless from "./images/mobile-wireless-cinema-package-480px-x-340px.jpg"
import MobileWired from "./images/mobile-wired-cinema-package-480px-x-340px2.jpg"
import MobileProjectorStand from "./images/mobile-projector-stand-480px-460px.jpg"
import YearRoundIcon from "./icons/YearRoundIcon"
import StrongIcon from "./icons/StrongIcon"
import StopWatchIcon from "./icons/StopWatch"
import AffordableIcon from "./icons/Affordable"
import BudgetIcon from "./icons/BudgetIcon"
import SturdyIcon from "./icons/SturdyIcon"
import MovableIcon from "./icons/MovableIcon"
import BuiltIcon from "./icons/BuiltIcon"
import FireIcon from "./icons/FireIcon"
import PermanentIcon from "./icons/PermanetIcon"
import MobileHero from "./images/mobile-timberline-outdoor-movie-theater-480x240.jpg"
import MobileQuotePhoto from "./images/quote-photo-480px-420px.jpg"
import MobileQuoteSig from "./images/mobile-quote-signature.png"

function HowToBuildAnOutdoorMovieTheaterView() {
  return (
    <>
      <SubNav />
      <Hero />
      <Video />
      <HeresWhatYouGet />
      <PerfectFor />
      <PowerfulCinema />
      <FrameSystemsThatWork />
      <PowerfulHanging />
      <CustomProjector />
      <ImpressiveOutdoor />
      <Comparison />
      <FAQ />
      <BannerCallout />
      <Quote />
      <Copy />
    </>
  )
}

export default HowToBuildAnOutdoorMovieTheaterView

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
        className="mobile-subnav z-30 sticky top-0 block sm:hidden"
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
      <div className="desktop-subnav z-30 sticky top-0 hidden sm:block">
        <div className="container mx-auto h-12">
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
    <div className="black-back relative text-white sm:top-0 sm:-mt-12 ">
      <img
        className="mx-auto w-full hidden lg:block  max-w-2400"
        src={Background}
        alt=""
      />
      <img className="mx-auto w-full md:hidden" src={MobileHero} alt="" />
      {/* <div class="absolute inset-0 bg-black opacity-50"></div> */}
      <div className="container pb-4 xl:pb-16 mx-auto px-2  max-w-6xl ">
        <div className="xl:absolute xl:mt-32 2xl:pt-10 sm:top-0 h-full">
          <div className="relative xl:w-4/6 2xl:w-3/6 z-20 px-4 mt-4  xl:mt-0">
            <p className="font-semibold text-xl md:text-3xl">
              Get the only <span className="text-orng">DIY</span> on
            </p>
            <h1 className="md:text-5xl text-3xl mb-4 font-semibold leading-8 md:leading-none ">
              <span className="text-orng">How-to build a</span> professional
              outdoor movie theater
              <sup
                style={{
                  transform: "translateY(5px)",
                }}
                className="pl-1 inline-block lg:text-3xl"
              >
                ©
              </sup>
            </h1>

            <div className="md:flex-col-reverse flex-col flex">
              <div>
                <p className="tet-xl  md:text-2xl hero-line-height">
                  How-to DIY bundle valued at $3,000
                </p>
                <p className="tet-xl md:text-2xl hero-line-height ">
                  On sale for $99* (Reg. Price $199.50% off)
                </p>
              </div>
              <div>
                <p className="my-4 text-lg md:text-xl xl:my-8">
                  <a
                    href="#"
                    className="px-8 py-1 xl:px-16 xl:py-2 button-orng"
                  >
                    Get the DIY now
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const HeresWhatYouGet = () => {
  const gridItems = [
    {
      id: 0,
      img: DesignPlanIcon,
      title: "Design Plans",
      text:
        "Design plans on how to build the cinema frame and equipment stand.",
      bonus: false,
    },
    {
      id: 1,
      img: MaterialListIcon,
      title: "Material Lists",
      text: "The material list includes hardware, fasteners, and wood.",
      bonus: false,
    },
    {
      id: 2,
      img: ToolsNeededIcon,
      title: "Tools Needed",
      text:
        "All tools will be covered, from essential handheld and power tools.",
      bonus: false,
    },
    {
      id: 3,
      img: EquipmentListIcon,
      title: "Equipment Lists",
      text: "Recommended electronics or wireless and wired systems.",
      bonus: false,
    },
    {
      id: 4,
      img: HowVideoIcon,
      title: "How-To Videos",
      text: "How to videos on assembling and installing your movie theater.",
      bonus: true,
    },
    {
      id: 5,
      img: TipsTechniquesIcon,
      title: "Tips & Techniques",
      text:
        "Get the most out of your outdoor movie theater with expert advice.",
      bonus: true,
    },
    // {
    //   id: 6,
    //   img: (
    //     <FirePitIcon className="my-3 h-16 pb-3 lg:pb-0 md:w-auto md:h-24 mx-auto dynamic-svg" />
    //   ),
    //   title: "Fire Pit Ideas",
    //   text: "Get recommendations on fire pits and the ones you should avoid.",
    //   bonus: true,
    // },
    // {
    //   id: 7,
    //   img: (
    //     <TheaterSeatingIcon className="my-3 h-16 pb-3 lg:pb-0 lg:w-64 mx-auto dynamic-svg" />
    //   ),
    //   title: "Theater Seating",
    //   text:
    //     "Ideas on how to make your outdoor movie theater seating area comfortable.",
    //   bonus: true,
    // },
    // {
    //   id: 8,
    //   img: (
    //     <ColdNightIcon className="my-3 h-16 pb-3 lg:pb-0 md:w-auto md:h-24 mx-auto dynamic-svg" />
    //   ),
    //   title: "Cold Night Extras",
    //   text: "Products to keep you warm outside at night while watching movies.",
    //   bonus: true,
    // },
  ]

  return (
    <div
      className="bg-gray-990 relative text-white  py-12 xl:py-16  border-grey-subnav"
      id="whatyouget"
    >
      <PageWrapper>
        <div className="container mx-auto  flex flex-col xl:grid xl:grid-cols-12 w-full">
          <div className="col-span-5 md:hidden">
            <img
              className="mx-auto px-10 xl:px-0 pb-5 xl:pb-0 w-full"
              src={Moose}
              alt=""
            />
          </div>

          <div className="text-center xl:col-span-7 xl:text-left xl:text-xl pb-12 xl:pb-10 xl:mb-10">
            <Header>Here's what you get</Header>
            <SubHeader className="text-white">
              <span className="text-orng">
                Timberline Series 150" Big Moose
              </span>{" "}
              DIY
            </SubHeader>

            <div className="max-w-xl text-center md:text-justify">
              <p className="text-lg md:txt-2xl mb-4 ">
                Introducing the only professional how-to build an outdoor movie
                theater DIY for homeowners. This jammed-pack DIY is full of
                detailed diagrams, photographs, access to assembly and
                installation videos, recommended material and equipment lists,
                tools needed, wireless and wired cinema setups, different frame
                styles, tips and techniques, and bonuses.
              </p>
              <p className="text-lg md:txt-2xl ">
                You will receive a professional DIY content and video bundle
                package for just $99* (50% Off. Regularly $199. A bundle valued
                at $3,000). This offer expires on July 1, 2023.
              </p>
            </div>
          </div>
          <div className="col-span-5 hidden md:block">
            <img
              className="mx-auto px-10 xl:px-0 pb-5 xl:pb-0 w-full"
              src={Moose}
              alt=""
            />
          </div>

          <div className="col-span-12 justify-center grid grid-cols-12 gap-6  xl:mt-10 t-6">
            {gridItems.map(item => {
              const Image = item.img
              return (
                <div
                  className="col-span-12 md:col-span-6 xl:col-span-2 mx-auto  rollover-svg-item"
                  key={item.id}
                >
                  {item.bonus && (
                    <img src={BonusBanner} className="bonus-banner-image" />
                  )}
                  <div className="border wblock  rounded-md border-grey-theater  px-2 text-center h-full flex flex-col justify-start">
                    <div className="flex justify-center">
                      <Image
                        style={{
                          maxWidt: "",
                        }}
                        className="my-3 pb-3 lg:pb-0 md:w-auto lg:h-10 h-16 mx-auto dynamic-svg
          design-plan-svg"
                      />
                    </div>
                    <p className="font-bold text-lg md:txt-2xl mb-3 rollover-color-title">
                      {item.title}
                    </p>
                    <p className="mb-2 text-sm">{item.text}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </PageWrapper>
    </div>
  )
}

const PowerfulHanging = () => {
  return (
    <div className="black-back text-white py-12 xl:py-16">
      <PageWrapper>
        <div>
          <Header>Cinematic screen-hanging methods</Header>
          <SubHeader>
            Hang the screen directly to hooks or use rope for a straight line
            look.
          </SubHeader>
          <div>
            <p className="mb-4">
              The cinematic screen allows you to hang it from the frame system
              using two different methods; hanging with screw hooks through the
              screen’s grommet holes, which are attached to the inside of the
              frame system, or using a black nylon cord (supplied with the
              screen) and run through the grommet holes attached to the screen
              and tie off to the side posts.
            </p>
            <p className="mb-4">
              <WarnIcon className="h-4 mr-2 inline-flex" />
              There are many options when buying your outdoor cinematic screen,
              as they are made from different materials—the ‘how-to’ manual
              covers which screens to stay away from and the best ones to use.
              There are also exact calculations needed when hanging the screen,
              which is also included with the manual and instructions.
            </p>
          </div>
        </div>
        <div className="md:grid grid-cols-12 gap-2">
          <div className="col-span-6  mb-3 md:mb-0 relative">
            {" "}
            <img className="mx-auto z-10 w-full" src={HookStyleScreen} alt="" />
            <div
              style={{
                bottom: "8%",
              }}
              className="px-3 absolute flex items-center  z-20 left-0 bg-black opacity-75 "
            >
              <img
                className="mx-auto wfull md:h-10 h-6"
                src={WatchImage}
                alt=""
              />
              <span>Quick hanging method with hooks</span>
            </div>
          </div>
          <div className="col-span-6 relative">
            {" "}
            <img
              className="mx-auto w-full z-10"
              src={StraightStyleScreen}
              alt=""
            />
            <div
              style={{
                bottom: "8%",
              }}
              className=" px-3 absolute flex items-center  z-20 right-0 bg-black opacity-75 "
            >
              <span>Straight line method with rope</span>
              <RopeIcon className="md:h-10 h-6 ml-2" />
            </div>
          </div>
        </div>
      </PageWrapper>
    </div>
  )
}

const FrameSystemsThatWork = () => {
  return (
    <div
      className="bg-gray-990 text-white  border-grey-subnav py-12 xl:py-16"
      id="framesystems"
    >
      <PageWrapper>
        <div className=" ">
          <div className="text-center md:text-left xl:text-xl xl:pb-10 xl:mb-10">
            <Header>Durable and long-lasting frame systems</Header>
            <SubHeader>
              Introducing the Timberline Movable and Streamline Frame Systems.
            </SubHeader>
            <p className="text-lg md:txt-2xl md:mb-0 mb-10">
              Everyone homeowner has a different landscape on their property,
              and the Timberline Movable and Streamline Frame System was
              developed to address every challenge when installing a backyard
              movie theater. Choose the Movable Frame System if you have a flat
              lawn allowing you to position the frame anywhere on your property
              and change up where you’d like to watch your favorite
              entertainment. The Streamline Frame System was designed for uneven
              landscapes and backyards with ledge stone and other obstacles.
            </p>
          </div>
          <div className=" md:grid flex flex-col-reverse items-stretch gap-4 grid-cols-12 pb-12 xl:pb-10 xl:mb-10 relative">
            <div className="col-span-4 md:text-left text-center">
              <Header className="md:text-4xl">Movable Frame</Header>
              <SubHeader className="md:text-xl">
                Perfect for flat lawns
              </SubHeader>
              <p className="mb-4">
                The Timberline Movable Frame System is designed for flat lawns
                allowing homeowners to position it anywhere on their property.
                The Movable frame is the most versatile, built out of
                pressure-treated wood and weather-resistance hardware.
              </p>
              <p className="">
                <WarnIcon className="h-4 mr-2 inline-flex" />
                Before you start building the Movable Frame System, there are
                exact calculations you need to make for the cinematic screen to
                fit correctly in the frame opening, which is covered in the
                ‘how-to’ manual.
              </p>
            </div>
            <div className="col-span-8">
              <img
                className="mx-auto w-full"
                src={FrameSystemsMovable}
                alt=""
              />
              <div className="py-3 flex justify-around text-center ">
                <div>
                  <MovableIcon className="w-full h-8 xl:h-12 p-1" />

                  <p className="text-xs xl:text-2xl">Movable</p>
                </div>
                <div>
                  <SturdyIcon className="w-full h-8 xl:h-12 p-1" />
                  <p className="text-xs xl:text-2xl">Sturdy</p>
                </div>
                <div>
                  <YearRoundIcon className="w-full h-8 xl:h-12 p-1" />
                  <p className="text-xs xl:text-2xl">Year-round use</p>
                </div>
                <div>
                  <AffordableIcon className="w-full h-8 xl:h-12 p-1" />
                  <p className="text-xs xl:text-2xl">Affordable</p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:grid gap-10 items-stretch grid-cols-12  relative">
            <div className="col-span-8 text-center">
              <img
                className="mx-auto w-full"
                src={FrameSystemsTimberline}
                alt=""
              />
              <div className="bg-gray-990 py-3 flex justify-around">
                <div>
                  <PermanentIcon className="w-full h-8 xl:h-12 p-1" />

                  <p className="text-xs xl:text-2xl">Permanent</p>
                </div>
                <div>
                  <FireIcon className="w-full h-8 xl:h-12 p-1" />
                  <p className="text-xs xl:text-2xl">Attractive</p>
                </div>
                <div>
                  <BuiltIcon className="w-full h-8 xl:h-12 p-1" />

                  <p className="text-xs xl:text-2xl">Built-to-last</p>
                </div>
                <div>
                  <BudgetIcon className="w-full h-8 xl:h-12 p-1" />

                  <p className="text-xs xl:text-2xl">Budget-friendly</p>
                </div>
              </div>
            </div>
            <div className="col-span-4 md:mt-0 mt-6  md:text-left text-center">
              <div>
                <Header>Streamline Frame</Header>
                <SubHeader>Ideal for any backyard</SubHeader>
              </div>
              <p className="mb-4">
                The Timberline Streamline Frame System looks great and can be
                installed in the most challenging areas on a property.
              </p>

              <p className="mb-4">
                You can dig into the ground and cement the posts, or if you have
                ledge stone and other obstacles and can’t dig, use plywood form
                boxes, place the posts in the boxes, and pour the cement. After,
                remove the plywood and add a classic look of brick or stone.
              </p>
              <p>
                The Streamline Frame System’s installation instructions are
                covered in the ‘how-to’ manual.
              </p>
            </div>
          </div>
        </div>
      </PageWrapper>
    </div>
  )
}

const PerfectFor = () => {
  const gridItems = [
    {
      id: 0,
      img: (
        <BackyardIcon className="grid-icon mx-auto w-full md:w-auto h-16 md:h-18 p-4" />
      ),
      title: "Backyards",
      text: "Great for homeowners with a backyard who love the outdoors.",
    },
    // {
    //   id: 1,
    //   img: (
    //     <RegularUseIcon className="grid-icon my-3 mx-auto w-full md:w-auto md:h-32 p-4" />
    //   ),
    //   text: "Regular use for outdoor entertainment",
    // },
    {
      id: 2,
      img: (
        <FamilyMovieIcon className="grid-icon  mx-auto w-full md:w-auto h-18 md:h-16 p-4" />
      ),
      title: "Movie Night",
      text:
        "Enjoy a blockbuster movie on the big screen with family and friends",
    },
    {
      id: 3,
      img: (
        <SportStadiumIcon className="grid-icon mx-auto w-full md:w-auto h-18 md:h-16 p-4" />
      ),
      title: "Sporting Events",
      text:
        "Gather all your friends together and enjoy your favorite teams play.",
    },
    // {
    //   id: 4,
    //   img: (
    //     <GroupofPeopeIcon className="grid-icon my-3 mx-auto w-full md:w-auto md:h-32 p-4" />
    //   ),
    //   text: "Special events and family reunions",
    // },
    {
      id: 5,
      img: (
        <VideoGameConsoleIcon className="grid-icon  mx-auto w-full md:w-auto h-18 md:h-16 p-4" />
      ),
      title: "Video Games",
      text: "Play life-size video games on a massive cinematic screen.",
    },
  ]

  return (
    <div
      className="black-back relative text-white border-b md:border-none border-grey-subnav py-10 xl:py-16"
      id="cnemauses"
    >
      <PageWrapper>
        <div className="mx-auto py-0 xl:py-0 flex flex-col xl:grid xl:grid-cols-12 w-full "></div>
        <div className="flex  flex-col-reverse col-span-12 items-center justify-center lg:grid grid-cols-12 gap-6 xl:gap-8 px-8 md:px-0 xl:mt-10 mt-6">
          <div className="col-span-4">
            <div className="grid grid-cols-4 gap-3">
              {gridItems.map(item => (
                <div className="orng-overlay col-span-2 gap-2" key={item.id}>
                  <div className="md:border rounded-md border-grey-theater md:mb-0 mb-4 md:p-2 text-center rollover-svg-item">
                    {item.img}
                    <p className="font-bold text-lg md:txt-2xl mb-3 rollover-color-title text-orng md:text-white">
                      {item.title}
                    </p>
                    <p className="">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-span-8">
            <div className="xl:text-xl pb-3">
              <div className="hidden md:block">
                <Header>Outdoor movie theater perfect for</Header>
                <SubHeader>
                  Homeowners who have a backyard. Regular use. Events and
                  parties.
                </SubHeader>
              </div>

              <div className="block md:hidden">
                <Header>Perfect for</Header>
                <SubHeader>
                  Homeowners with a backyard who loves the outdoors.
                </SubHeader>
              </div>
              <p className="text-lg md:txt-2xl mb-4">
                The Timberline Outdoor Movie Theater is designed to be an
                extension of your living room where you can enjoy your favorite
                entertainment outside regularly with an easy and fast setup
                every time. The cinema equipment stays on the custom projector
                stand — just like the entertainment center inside your home and
                never has to be broken down.
              </p>

              <p className="text-lg md:txt-2xl">
                The frame system stays up on your property year-round, where you
                only need to hang the cinematic screen when you want to watch
                movies, sporting events, concerts, stream your favorite shows,
                or play video games outside. Then, when your entertainment is
                over, pick up the portable projector stand and bring it inside
                to protect the equipment from moisture and rain. The cinematic
                screen can be removed in the morning during daylight.
              </p>
            </div>
          </div>
        </div>
      </PageWrapper>
    </div>
  )
}

const PowerfulCinema = () => {
  const gridItems = [
    {
      id: 0,
      img: BatteryIcon,
      text: "Off-Grid Battery Stations",
    },
    {
      id: 1,
      img: HeadphonesIcon,
      text: "Bluetooth Speakers",
    },
    {
      id: 2,
      img: StreamingIcon,

      text: "Streaming Devices",
    },
    {
      id: 3,
      img: DvdIcon,
      text: "DVD Players ",
    },
    {
      id: 4,
      img: SmartPhoneIcon,
      text: "Cast movies from your IOS or Android",
    },
    {
      id: 5,
      img: CablesIcon,
      text: <>HDMI, USB, VGA & Audio</>,
    },
  ]

  const gridItems2 = [
    {
      id: 0,
      img: HeadphonesIcon,
      text: "External Speakers",
    },
    {
      id: 1,
      img: StreamingIcon,
      text: "Streaming Devices",
    },
    {
      id: 2,
      img: TunerIcon,
      text: "DVD Players, Receivers, and Tuners",
    },
    {
      id: 3,
      img: ConsoleIcon,
      text: "Gaming Consoles",
    },
    {
      id: 4,
      img: LaptopIcon,
      text: "PCs, Laptops & Tablets",
    },
    {
      id: 5,
      img: SmartPhoneIcon,
      text: "Cast Speakers from your IOS or Android",
    },

    {
      id: 6,
      img: HeadPhoneWirelessIcon,
      text: "Wireless Headphones",
    },
    {
      id: 7,
      img: CablesIcon,
      text: <>HDMI, USB, VGA & Audio</>,
    },
  ]

  return (
    <div
      className="black-back relative text-white border-grey-subnav py-6 xl:py-16"
      id="features"
    >
      <PageWrapper>
        <div className="container mx-auto flex flex-col xl:grid xl:grid-cols-12 w-full">
          <div className="text-left xl:col-span-12 xl:text-xl pb-12 xl:pb-10 xl:mb-10">
            <Header>Powerful wireless and wired cinema packages</Header>
            <SubHeader>
              Go wireless with no extension cords. Go wired for unlimited
              options.
            </SubHeader>
            <p className="text-lg md:txt-2xl">
              The Timberline Outdoor Movie Theaters come in two different
              options - wireless and wired packages. The revolutionary wireless
              outdoor movie theater is powered by an off-grid battery allowing
              you to watch your favorite entertainment without running extension
              cords from your home to the cinema equipment with an easy and fast
              setup every time. The wired cinema package provides more options
              to give your outdoor movie theater a robust experience by adding
              receivers, tuners, PA speakers, and the ability to play video
              games on a massive cinematic screen.
            </p>
          </div>

          <div className="flex flex-col lg:hidden">
            <div>
              {" "}
              <img
                className="mx-auto w-full mb-3"
                src={MobileWireless}
                alt=""
              />
            </div>
            <div className="">
              <h3 className="text-2xl">Go Wireless</h3>
              <h3 className="font-bold">
                No extensions cords. Fast setup every time.{" "}
              </h3>

              <h3 className=" text-orng">Connect to: </h3>
              <ul className="">
                {gridItems.map(item => {
                  const Image = item.img
                  return (
                    <li className="flex items-center my-4 " key={item.id}>
                      <Image className="white-svg p-0 h-8  pb-3 lg:pb-0 lg:w-10 x-auto lg:ml-0" />
                      <span className="ml-2 font-bold">{item.text}</span>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
          <div
            className="col-span-12 mx-auto w-full text-center relative hidden lg:block"
            style={{
              backgroundImage: `url(${WirelessCinema})`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
            }}
          >
            <div className="relative w-full mx-auto flex flex-start">
              <div className="block text-left py-2 p-10 bg-black bg-opacity-50">
                <div className="container mx-auto">
                  <h3 className="text-3xl">Go Wireless</h3>
                  <h3 className="text-2xl">No extensions cords. </h3>
                  <h3 className="text-2xl">Fast setup every time. </h3>
                  <h3 className="text-xl text-orng mb-2">Connect to: </h3>
                  <ul className="text-xl ">
                    {gridItems.map(item => {
                      const Image = item.img
                      return (
                        <li className="flex items-center mb-5 " key={item.id}>
                          <Image className="white-svg p-0 h-8  pb-3 lg:pb-0 lg:w-10 x-auto lg:ml-0" />
                          <span className="ml-2">{item.text}</span>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="block lg:hidden col-span-12 ">
            <div>
              <img className="mx-auto w-full mb-3" src={MobileWired} alt="" />
            </div>
            <div className="">
              <h3 className="text-xl font-bold">Go Wired</h3>
              <h3 className="font-bold">
                Unlimited connection options. Play video games{" "}
              </h3>
              <h3 className=" text-orng">Connect to: </h3>
              <ul className="">
                {gridItems2.map(item => {
                  const Image = item.img
                  return (
                    <li className="flex items-center my-4 " key={item.id}>
                      <Image className="white-svg h-12 p-3 pl-0 x-auto" />
                      <span className="ml-2 font-bold">{item.text}</span>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
          <div
            className=" mx-auto w-full  relative hidden lg:block"
            style={{
              backgroundImage: `url(${WiredCinema})`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
            }}
          >
            <div className="reltive w-fill mx-auto  flex justify-end">
              <div className="block text-left py-2 p-10 bg-blck-size-128 bg-black bg-opacity-50">
                <div className="cotainer mx-auo">
                  <h3 className="text-3xl">Go Wired</h3>
                  <h3 className="text-2xl">Unlimited connection options. </h3>
                  <h3 className="text-2xl">Play video games and more. </h3>
                  <h3 className="text-xl text-orng">Connect to: </h3>
                  <ul className="text-xl ">
                    {gridItems2.map(item => {
                      const Image = item.img
                      return (
                        <li className="flex items-center my-4 " key={item.id}>
                          <Image className="white-svg p-0 h-8 pb-3 lg:pb-0 lg:w-10 x-auto lg:ml-0" />
                          <span className="ml-2">{item.text}</span>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageWrapper>
    </div>
  )
}

const CustomProjector = () => {
  const gridItems = [
    {
      id: 0,
      img: PencilIcon,
      text: "Custom-built for your equipment",
    },
    {
      id: 1,
      img: ArrowIcon,

      text: "A portable entertainment center",
    },
    {
      id: 2,
      img: ElectronicsIcon,
      text: "Electronics always stay on the stand",
    },
    {
      id: 3,
      img: LightWeightIcon,
      text: "Light-weight and easy to carry",
    },
    {
      id: 4,
      img: LumberIcon,
      text: "Attractive solid wood projector stand",
    },
    {
      id: 5,
      img: PaintIcon,
      text: "Apply polyurethane or stain to protect",
    },
    {
      id: 7,
      img: HouseIcon,
      text: "Store inside when not using",
    },
  ]

  return (
    <div
      className="black-back relative text-white border-grey-subnav py-6 xl:py-16"
      id="features"
    >
      <PageWrapper>
        <div className="">
          <div className="text-left xl:col-span-12 xl:text-xl pb-12 xl:pb-10 xl:mb-10">
            <Header className="hidden md:block">
              Timberline custom projector stand built just for you
            </Header>

            <Header className="md:hidden ">
              <span className="block  text-xl "> Timberline </span>
              Custom projector stand built just for you
            </Header>
            <SubHeader>
              The only projector stand designed for your backyard outdoor movie
              theater setup.
            </SubHeader>
            <p className="text-lg md:txt-2xl mb-4">
              The Timberline custom project stand was designed because one size
              does not fit all. Every homeowner has a different property
              landscape and cinema equipment needs. The height of the projector
              stand must be aligned perfectly with the cinematic screen for the
              projector to cast the entertainment you want to watch outside at
              the right height and level.
            </p>
            <p className="text-lg md:txt-2xl ">
              <WarnIcon className="h-4 mr-2 inline-flex" />
              Several calculations need to be made when building your custom
              projector stand to ensure that it aligns correctly with the screen
              and landscape of your property. All of the measurements are
              covered in the ‘how-to’ manual.
            </p>
          </div>
        </div>
        <div className="md:hidden">
          <img src={MobileProjectorStand} alt="" className=" mx-auto mb-4" />
          <div>
            <Header>Custom projector stand</Header>
            <SubHeader>A light-weight portable entertainment center</SubHeader>

            <ul>
              {gridItems.map((item, index) => {
                const Image = item.img
                return (
                  <li
                    className={`flex items-center mb-4 ${
                      index === 0 ? "mt-4" : ""
                    }`}
                    key={item.id}
                  >
                    <Image className="white-svg h-8 p-1  x-auto " />
                    <span className="ml-2 font-bold">{item.text}</span>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
        <div
          className=" mx-auto w-full  relative hidden lg:block"
          style={{
            backgroundImage: `url(${ProjectorStand})`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
          }}
        >
          <div className="reltive w-fill mx-auto  flex justify-end">
            <div className="block text-left py-2 p-10 bg-blck-size-128 bg-black bg-opacity-50">
              <div>
                <h3 className="text-3xl">Projector Stand </h3>
                <h3 className="text-2xl">Solid wood. Easy to build. </h3>

                <ul className="text-xl ">
                  {gridItems.map(item => {
                    const Image = item.img
                    return (
                      <li className="flex items-center my-4 " key={item.id}>
                        <Image className="white-svg p-0 h-8 pb-3 lg:pb-0 lg:w-10 x-auto lg:ml-0" />
                        <span className="ml-2">{item.text}</span>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </PageWrapper>
    </div>
  )
}

const ImpressiveOutdoor = () => {
  const gridItems = [
    {
      id: 0,
      img: ImpressiveImage1,
      icon: StopWatchIcon,
      text: "2-minute setup time",
      align: "start",
    },
    {
      id: 1,
      img: ImpressiveImage2,
      icon: StrongIcon,
      text: "Strongest frame system",
      align: "end",
    },
    {
      id: 2,
      img: ImpressiveImage3,
      icon: PencilIcon,
      text: "Custom projector stand",
      align: "start",
    },
    {
      id: 3,
      img: ImpressiveImage4,
      icon: YearRoundIcon,
      text: "Enjoy movies year-round",
      align: "end",
    },
  ]

  return (
    <div className="bg-gray-990 relative text-white border-grey-subnav py-12 xl:py-16">
      <PageWrapper>
        <div className="mx-auto flex flex-col xl:grid xl:grid-cols-12 w-full">
          <div className="md:text-center xl:col-span-12 xl:text-xl pb-12 xl:pb-10 xl:mb-10">
            <Header className="">
              Impressive outdoor movie theater features
            </Header>

            <SubHeader className="mb-0">
              Time-saving and industry-leading features.
            </SubHeader>
            <SubHeader>
              Fastest setup. Strongest frame system. Custom equipment stand.
              Year-round use.
            </SubHeader>

            <p className="text-lg md:tet-2xl">
              After researching and testing all of the outdoor movie theaters
              you can buy online, I found four main areas for improvement. My
              benchmark testing focused on setup time, the durability of frame
              systems, cinema equipment organization, and the ability to use
              year-round in cold climates states like Maine. As a result, all of
              my Timberline Series Outdoor Movie Theaters are the easiest and
              fastest to set up and start watching, have the strongest frame
              system, comes with a custom cinema equipment stand, and can be
              used year-round.
            </p>
          </div>
          <div className="col-span-12 grid grid-cols-12 lg:gap-2">
            {gridItems.map(item => {
              const Icon = item.icon
              return (
                <div
                  className="col-span-12 lg:col-span-6 mb-10 lg:mb-0"
                  key={item.id}
                >
                  <div className="text-center h-full relative block">
                    <img
                      src={item.img}
                      alt={item.text}
                      className="grid-image"
                    />

                    <div
                      style={{
                        bottom: "1rem",
                      }}
                      className={`bg-black bg-opacity-50 flex p-2 absolute lg:hidden items-center ${
                        item.align === "start" ? "" : "right-0 flex-row-reverse"
                      }`}
                    >
                      <div>
                        <Icon
                          className={`h-6 ${
                            item.align === "start" ? "mr-1" : "ml-1"
                          }`}
                        />
                      </div>
                      <div>{item.text}</div>
                    </div>

                    <div
                      className={`absolute w-full lg:flex justify-center hidden large-justify-${item.align} top-1/2 xl:py-24 y-4 lg:my-0`}
                    >
                      <div className="flex flex-row bg-opacity-gray items-center relative">
                        <Icon
                          className={`absolute lg:h-10 ${
                            item.align === "start"
                              ? "order-1 left-0 pl-4"
                              : "order-2 right-0 pr-4"
                          }`}
                        />
                        <p
                          className={`tet-xl xl:tet-3xl p-3 ${
                            item.align === "start"
                              ? "order-2 pl-20"
                              : "order-1 pr-20"
                          }`}
                        >
                          {item.text}
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* <div className="text-center h-full relative block lg:hidden">
                    <img
                      src={item.imgM}
                      alt={item.text}
                      className="grid-image relative"
                    />
                    <div
                      className={`relative lg:absolute w-full flex justify-center large-justify-${item.align} lg:top-1/2 lg:pt-16 xl:py-24 my-3 lg:my-0`}
                    >
                      <div className="flex flex-col lg:flex-row bg-opacity-gray items-center relative">
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
                  </div> */}
                </div>
              )
            })}
          </div>
        </div>
      </PageWrapper>
    </div>
  )
}

const Comparison = () => {
  return (
    <div
      className="black-back relative text-white py-12 xl:py-16"
      id="comparison"
    >
      <PageWrapper>
        <div className="mx-auto ">
          <div className="xl:col-span-12 xl:text-xl">
            <Header className="md:hidden">
              Outdoor
              <span className="block">movie theater</span>
              comparison
            </Header>

            <Header className="hidden md:block">
              Outdoor movie theater comparison
            </Header>

            <SubHeader>
              How does the competition stack up to the Timberline Series 150”
              Big Moose?
            </SubHeader>
            <p className="text-lg md:tet-2xl">
              There are only three types of outdoor movie theater systems
              available for homeowners to buy; the aluminum frame cinema systems
              (made in China), the inflatable air screens (made in China), and
              the solid, year-round, pressure-treated frame cinema system
              (designed and handcrafted in Maine by the Wireless Outdoor Cinema
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
                    Wired only
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
                    Custom Projector Stand
                  </h1>
                  <p className="text-sm text-center text-red-b20000">No</p>
                </div>
                <div className="col-span-6 font-extralight">
                  <h1 className="text-sm text-center">
                    Custom Projector Stand
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
                  <h1 className="text-sm text-center">Frame Storage</h1>
                  <p className="text-sm text-center text-red-b20000">
                    Needs to be broken down
                  </p>
                </div>
                <div className="col-span-6 font-extralight">
                  <h1 className="text-sm text-center">Frame Storage</h1>
                  <p className="text-sm text-center text-green-1f8f13">
                    Stays up year-round
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-12 my-6 text-center items-center">
                <div className="col-span-6 font-extralight">
                  <h1 className="text-sm text-center">Frame Durability</h1>
                  <p className="text-sm text-center text-red-b20000">
                    Not sturdy
                  </p>
                </div>
                <div className="col-span-6 font-extralight">
                  <h1 className="text-sm text-center">Frame Durability</h1>
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
                    Custom Projector Stand
                  </h1>
                  <p className="text-sm text-center text-red-b20000">No</p>
                </div>
                <div className="col-span-6 font-extralight">
                  <h1 className="text-sm text-center">
                    Custom Projector Stand
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
                  <p className="text-sm text-center text-green-1f8f13">Yes</p>
                </div>
              </div>

              <div className="grid grid-cols-12 my-6 text-center items-center">
                <div className="col-span-6 font-extralight">
                  <h1 className="text-sm text-center">Frame Storage</h1>
                  <p className="text-sm text-center text-red-b20000">
                    Needs to be broken down
                  </p>
                </div>
                <div className="col-span-6 font-extralight">
                  <h1 className="text-sm text-center">Frame Storage</h1>
                  <p className="text-sm text-center text-green-1f8f13">
                    Stays up year-round
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-12 my-6 text-center items-center">
                <div className="col-span-6 font-extralight">
                  <h1 className="text-sm text-center">Frame Durability</h1>
                  <p className="text-sm text-center text-red-b20000">
                    Can potentially get air leaks
                  </p>
                </div>
                <div className="col-span-6 font-extralight">
                  <h1 className="text-sm text-center">Frame Durability</h1>
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
                  <h1 className="text-2xl text-center">Frame Durability</h1>
                  <p className="text2-xl text-center text-red-b20000">
                    Not sturdy
                  </p>
                </div>
                <div className="col-span-12 lg:col-span-4 font-extralight text-23">
                  <h1 className="text-2xl text-center">Frame Durability</h1>
                  <p className="text2-xl text-center text-red-b20000">
                    Can potentially get air leaks
                  </p>
                </div>
                <div className="col-span-12 lg:col-span-4 font-extralight text-23">
                  <h1 className="text-2xl text-center">Frame Durability</h1>
                  <p className="text2-xl text-center text-green-1f8f13">
                    Strongest frame system
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-12 my-10 text-center items-center">
                <div className="col-span-12 lg:col-span-4 font-extralight text-23">
                  <h1 className="text-2xl text-center">DIY Available</h1>
                  <p className="text2-xl text-center text-red-b20000">No</p>
                </div>
                <div className="col-span-12 lg:col-span-4 font-extralight text-23">
                  <h1 className="text-2xl text-center">DIY Available</h1>
                  <p className="text2-xl text-center text-red-b20000">No</p>
                </div>
                <div className="col-span-12 lg:col-span-4 font-extralight text-23">
                  <h1 className="text-2xl text-center">DIY Available</h1>
                  <p className="text2-xl text-center text-green-1f8f13">Yes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageWrapper>
    </div>
  )
}

const BannerCallout = () => {
  return (
    <div className="bg-gray-990 relative text-white hidden md:block">
      <div className="container mx-auto pt-8 pb-6 xl:pt-12 xl:pb-6 grid grid-cols-12 w-full">
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
        <div className="col-start-9 col-span-3 lg:col-start-10 lg:col-span-2 flex flex-col justify-start text-center">
          <p className="text-xxs sm:text-xs md:text-base lg:text-2xl xl:text-3xl md:mb-2 lg:mb-5">
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
    <div className="black-back relative text-white  border-grey-subnav py-8 xl:py-16">
      <img
        className="mx-auto w-full hidden md:block max-w-2400 mb-4"
        src={QuoteImage}
        alt=""
      />
      <img
        className="mx-auto w-full md:hidden max-w-2400 mb-4"
        src={MobileQuotePhoto}
        alt=""
      />

      <div className="container mx-auto w-full">
        <div className="flex flex-col lg:hidden">
          <div className="block col-span-12 mb-5 text-center relative">
            <p className="text-xs relative sm:text-base quote-todd">
              My wireless outdoor movie theaters take less time to set up and
              start watching than it does to pop a bag of popcorn.
            </p>
            <img
              src={MobileQuoteSig}
              alt=""
              className="w-full px-10 mx-auto mt-5 md:hidden"
            />
          </div>
        </div>
        <div className="block h-full container">
          <div className="absolute container mx-auto w-full mt-32 top-0 hidden lg:grid grid-cols-12">
            <div className="flex flex-col col-start-7 col-span-6 text-center">
              <p className="text-2xl xl:text-4xl quote-todd">
                My wireless outdoor movie theaters take less time to set up and
                start watching than it does to pop a bag of popcorn.
              </p>

              <img
                src={SignatureImage}
                alt=""
                className="w-full px-10 mx-auto mt-5 hidden md:block"
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
      icon: <PriceTagIcon className="md:h-13 md:w-13 mr-2 h-16" />,
      text: "Outdoor Movie Theater Costs",
      questions: [
        {
          id: "01",
          question:
            "What is the lumber cost for the frame systems and equipment stand?",
          answer: (
            <>
              <div className="mb-3">
                The recommended wood for the frame system is pressure-treated
                4x4 posts. And the recommended timber to build the custom
                projector stand is Cedar, and you can also use pine wood. These
                two types of wood keep the projector stand's weight light,
                making it easier to carry. However, when using hardwood like
                maple or oak, the equipment stand's weight will be heavier.
              </div>
              <div className="mb-3">
                The cost will vary depending on your location, and lumber is
                usually more cost-friendly at your local HomeDepot or Lowes
                stores.
              </div>
              <div className="mb-3">
                <strong>Streamline Frame System:</strong> Average cost is
                between $150-175.
              </div>
              <div className="mb-2">
                <strong>Movable Frame System:</strong> Average cost is between
                $175-225.
              </div>
              <div className="mb-2">
                <strong>Cedar Custom Projector Stand:</strong> Average cost is
                between $70-$90.
              </div>
              <div className="mb-2">
                <strong>Pine Custom Projector Stand:</strong> Average cost is
                between $65-$85.
              </div>
              <strong>Pressure-treated Projector:</strong> Average cost is
              between $24-$30.
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
              You can also choose whatever electronic components and brand names
              you want as long as they are compatible with the recommended
              equipment setup.
              <br />
              <br />
              For example, if you want to use a different projector or speaker
              system, the cost might decrease or increase depending on your
              preference. And the price will decrease if you already have some
              compatible electronic components.
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
      icon: <FrameIcon className="md:h-13 md:w-13 mr-2 h-16" />,
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
              Anyone can easily build, assemble, and install the different frame
              systems by following the instructions in the 'how-to' manual.
              Essential tools include a hand saw, Skilsaw or compound saw,
              drill, box level, and other standard household tools.
              <br />
              <br />
              After purchasing the downloadable 'how-to' guide, the necessary
              tools are covered in depth. If you don't have some of these tools,
              you can rent them at your local hardware store or do what most
              homeowners do - borrow them from your neighbors.
            </>
          ),
        },
        {
          id: "13",
          question: "What are the dimensions for the different frame systems?",
          answer: (
            <>
              <strong>Streamline Frame System:</strong> Rough dimensions are 12'
              ft wide x 10' ft high x 4" depth. Exact measurements are covered
              in the manual.
              <br />
              <br />
              <strong>Movable Frame System:</strong>Rough dimensions are 12' ft
              wide x 10' ft high x 5' ft depth. Exact measurements are covered
              in the manual.
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
              <strong>Movable Frame System:</strong> weighs between 175-200 lbs.
              <br />
              <br />
              The weight of the frame system will vary as most new
              pressure-treated lumber is wet and heavy and eventually dries out
              and becomes lighter over six months.
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
      icon: <ScreenIcon className="h-13 w-13" />,
      text: "Cinematic Screen",
      questions: [
        {
          id: "21",
          question: "Can I use a bed sheet instead of a cinematic screen?",
          answer: (
            <>
              Bed sheets allow too much light transmission through the material,
              causing the screen to look dull.
              <br />
              <br />
              Cinematic screens are made of unique materials to prevent light
              transmission giving you a sharp and crisp viewing experience. The
              more light transmission that goes through the screen, the more
              visual quality you’ll lose through the projector.
              <br />
              <br />
              Outdoor cinematic screens cost roughly $10 more than a bedsheet.
            </>
          ),
        },
        {
          id: "22",
          question: "What are the overall dimensions of the cinematic screen?",
          answer:
            "150” diagonal. The dimensions are 9’ ft. 3” wide x 5’ ft. 10” high.",
        },
        {
          id: "23",
          question: "How do I attach the screen to the frame system?",
          answer: (
            <>
              Most outdoor cinematic screens have grommet holes along the edges
              of the screen that get attached to screw hooks on the inside of
              the frame system.
              <br />
              <br />
              There are two ways of hanging the screen; running a black nylon
              cord through the grommet holes and tying it off at the ends of the
              frame for a clean straight line appearance or hanging the screen
              on the screw hooks inside the frame system, giving the screen
              edges a slight spider web appearance that you won't see while
              watching your favorite entertainment outside.
            </>
          ),
        },
        {
          id: "24",
          question: "Is the outdoor cinematic screen machine-washable?",
          answer: (
            <>
              Most screen manufacturers do not recommend washing your screen in
              your washing machine. Instead, it's recommended to spot-cleaning
              your cinematic screen when it gets dirty with Woolite and running
              through a dryer for 5-10 minutes.
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
              wind will fill up your screen like a sail on a sailboat and topple
              the heavy frame system over, crushing anything in front of it. The
              wind will also stress the grommets on the edges of the screen and
              eventually rip them out.
            </>
          ),
        },
      ],
    },
    {
      id: 3,
      icon: <EquipmentStandIcon className="h-13 w-13" />,
      text: "Custom Projector Stand",
      questions: [
        {
          id: "31",
          question: "What type of wood is recommended for the projector stand?",
          answer: (
            <>
              White Eastern Cedar 5/4” thick x 6” wide, or you can use 1” thick
              x 6” wide Pinewood. You can also build the projector stand using
              pressure-treated wood. Pressure-treated wood costs much less but
              weighs more than cedar and pine wood.
              <br />
              <br />
              To protect your projector stand, you should always apply a coat of
              a semi-transparent stain.
            </>
          ),
        },
        {
          id: "32",
          question: "What tools are necessary to build the projector stand?",
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
          question: "What are the measurements for the projector stand?",
          answer: (
            <>
              The projector stand's overall dimensions depend on the equipment
              you want to use for your cinema setup and the landscaping on your
              property. Over the years of building outdoor movie theaters for
              customers, every projector stand I've made is a different size.
              <br />
              <br />
              There are exact calculations for you to follow in the DIY to help
              you determine the proper size to build your custom cinema
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
              No. There is not enough space on the tripod projector stand shelf
              to hold all of the necessary electronic components, as it only has
              enough space to hold a projector and nothing else. And you want to
              avoid stacking your equipment on top of each.
              <br />
              <br />
              The Timberline Series Custom Cinema Equipment Stand is a portable
              entertainment center where all your equipment stays neatly
              organized and never has to be disconnected or broken down, just
              like the entertainment center inside your home.
            </>
          ),
        },
      ],
    },
    {
      id: 4,
      icon: <EquipmentListIcon className="h-13 w-13" />,
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
              However, you can customize your cinema equipment and get a daytime
              projector to fit your needs.
              <br />
              <br />
              Daytime projectors range in cost from $800 and up and can be found
              online by searching for ‘outdoor daytime projectors.’ The DIY
              covers outdoor daytime projectors and which ones are the best
              based on online reviews if cost is not an issue.
            </>
          ),
        },
        {
          id: "42",
          question: "Is the recommended cinema equipment customizable?",
          answer: (
            <>
              Absolutely. You can customize your cinema equipment to fit your
              needs by choosing what you’d like for electronics and brands. The
              how-to DIY provides the cinema equipment I use for my customers in
              Maine and works as a framework to help you understand how
              everything works and gets connected.
            </>
          ),
        },
        // {
        //   id: "43",
        //   question: "Can I play video games outside with the cinema equipment?",
        //   answer: (
        //     <>
        //       Yes. With the wired cinema setup, you can play video games all
        //       night under the stars and moon. Just plug your XboxTM,
        //       PlayStation®, or WiiTM console into the projector and start gaming
        //       away on a massive 150" diagonal screen. Unfortunately, the
        //       wireless cinema is not powerful enough for gaming systems.
        //     </>
        //   ),
        // },
        {
          id: "44",
          question:
            "Does the DIY cover both wireless and wired cinema packages?",
          answer: (
            <>
              Yes – the DIY covers the recommended cinema equipment for wireless
              and wired packages.
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
            "Can I use Bluetooth Wireless Head- phones with the cinema equipment?",
          answer: (
            <>
              Yes. With the wired cinema system, you can use Bluetooth Wireless
              Headphones to listen to your entertainment, so it doesn’t disrupt
              your neighbors. Not compatible with the wireless cinema setup.
            </>
          ),
        },
        // {
        //   id: "47",
        //   question: "Is the recommended cinema equipment waterproof?",
        //   answer: (
        //     <>
        //       No. The cinema equipment is the same as the electronics inside
        //       your home – avoid getting them wet by rain.
        //     </>
        //   ),
        // },
      ],
    },
    {
      id: 5,
      icon: <AssemblyIcon className="h-13 w-13" />,
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
              that may not require any zoning permit. However, it’s recommended
              to call your local town office and speak to the zoning
              commissioner to verify that installing the frame system is
              permittable.
              <br />
              <br />
              <strong>Important:</strong> always call Dig Safe before digging
              into the ground.
            </>
          ),
        },
        // {
        //   id: "52",
        //   question:
        //     "What are my options if I don’t have a flat area to install the frame?",
        //   answer: (
        //     <>
        //       Use the Timberline Streamline Frame System for uneven ground.
        //       <br />
        //       <br />
        //       If you have ledge stone under your lawn or have other
        //       obstructions, use 2’ ft wide x 2’ ft high x 2’ft deep plywood form
        //       boxes. Place the frame posts in the boxes, then pour cement into
        //       them. After the cement cures, remove the plywood frame, and you
        //       can apply bricks or veneer stone around them to create a beautiful
        //       decorative look.
        //     </>
        //   ),
        // },
        {
          id: "53",
          question:
            "What tools do I need to assemble and install the frame systems?",
          answer: (
            <>
              <strong>Streamline Frame System:</strong> 1/4” or 1⁄2” drive
              ratchet socket wrench and sockets, hammer, drill, 6’ ft box level,
              and shovel.
              <br />
              <br />
              <strong>Movable Frame System:</strong> 1/4” or 1⁄2” drive ratchet
              socket wrench and sockets, hammer, drill, and 6’ ft box level.
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
              have two people to help assemble and install your frame system for
              the first time – it will go much easier and faster.
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
        // {
        //   id: "56",
        //   question:
        //     "What if the ground where the equipment stand goes is uneven?",
        //   answer: (
        //     <>
        //       It's recommended to make the area as flat and level as possible
        //       for the custom cinema equipment stand to rest on. Picking up 8-10
        //       stone pavers at your local box store to place the equipment stand
        //       on will make the setup faster as you know exactly where the stand
        //       will go whenever you want to enjoy your favorite entertainment
        //       outside on the big screen.
        //       <br />
        //       <br />
        //       If you don't have a level area to place the cinema equipment stand
        //       on due to ledge stone and rocks, use an angle grinder with a
        //       diamond tip blade and grind down the stone until it's level.
        //       Always use protective eye goggles when using an angle grinder.
        //     </>
        //   ),
        // },
        {
          id: "57",
          question:
            "How far away does the equipment stand need to be from the frame?",
          answer: (
            <>
              The distance from the projector to the cinema screen is the throw
              distance. Each projector has a recommended throw distance and will
              be covered in the 'how-to' DIY.
            </>
          ),
        },
      ],
    },
  ]

  return (
    <div
      className="black-back relative text-white  border-grey-subnav py-12 xl:py-16"
      id="faq"
    >
      <PageWrapper>
        <div className="container mx-auto flex flex-col xl:grid xl:grid-cols-12 w-full">
          <div className="text-center xl:col-span-12 xl:text-xl">
            <h2 className="text-4xl md:text-6xl font-semibold leading-9 md:leading-none pb-3 xl:pb-3"></h2>
            <Header className="hidden md:block">
              Frequently asked questions
            </Header>
            <Header className="md:hidden">Faqs</Header>
            <SubHeader className="md:block hidden">
              Common questions on how-to build a professional outdoor movie
              theater
            </SubHeader>

            <SubHeader className="md:hidden">
              Frequently asked questions on how-to build a professional outdoor
              movie theater
            </SubHeader>

            <p className="text-lg md:tet-2xl">
              Below are the most frequently asked questions from customers over
              the years to help you quickly find the answers you are searching
              for broken down by category. Feel free to{" "}
              <Link to="/connect" style={{ color: "#9647f7" }}>
                connect
              </Link>{" "}
              if you have a question that isn’t here.
            </p>
          </div>
          <div className="col-span-12 xl:col-span-10 xl:col-start-2 grid grid-cols-12 gap-5 mt-16">
            {faqList.map(item => (
              <div
                className="col-span-12 lg:col-span-4 border rounded-md p-3 m-1 lg:py-15 orng-rollover-overlay rollover-svg-item"
                key={item.id}
              >
                <div className="flex items-center pb-3">
                  {item.icon}
                  <p className="text-lg md:txt-2xl px-3 text-orng font-semibold">
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
                        <p className="faq-accordion-header p1 txt-lg md:text-xl">
                          {qa.question}
                        </p>
                      </label>
                    </div>
                    <div className="faq-accordion-content">
                      <p className="py-2 txt-lg md:text-xl">{qa.answer}</p>
                    </div>
                  </article>
                ))}
              </div>
            ))}
          </div>
        </div>
      </PageWrapper>
    </div>
  )
}

const Copy = () => {
  return (
    <div className="black-back relative text-white border-b md:border-none border-grey-subnav">
      <div className="container mx-auto py-8 xl:py-16 xl:px-32">
        <div className="">
          <p className="text-lg">
            * The how-to build a professional outdoor movie theater DIY offer
            expires on September 15, 2023.
          </p>
          <br />
          <p className="text-lg">
            XboxTM, PlayStation®, and WiiTM gaming consoles are registered
            Trademarks of their respective owners.
          </p>
          <br />
          <p className="text-lg">
            The Wireless Outdoor Cinema’s Timberline DIY on how-to build a
            professional outdoor movie theater is copyright protected and
            punishable by federal law if you distribute the contents, resell, or
            use it to start a business selling outdoor movie theaters.
          </p>
        </div>
      </div>
    </div>
  )
}
