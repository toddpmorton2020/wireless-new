import React, { useState } from "react"
import { Link, navigate } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ProductSection from "../components/ProductSection"

import bellaBear from "../images/bella-bear.png"
import bigMoose from "../images/big-moose.png"
import jediBobcat from "../images/jedi-bobcat.png"

const Comparison = () => {
  const [open, setOpen] = useState(false)
  const [open1, setOpen1] = useState(false)
  const [open2, setOpen2] = useState(false)
  let arrowClassName = "w-4 transition-transform transform duration-300"
  if (!open) arrowClassName += " -rotate-90"
  else arrowClassName += " rotate-0"
  let answerClassName = "transform duration-300 overflow-hidden"
  if (open) answerClassName += " open-ps"
  else answerClassName += " closed-ps pb-0"

  let arrowClassName1 = "w-4 transition-transform transform duration-300"
  if (!open1) arrowClassName1 += " -rotate-90"
  else arrowClassName1 += " rotate-0"
  let answerClassName1 = "transform duration-300 overflow-hidden"
  if (open1) answerClassName1 += " open-ps"
  else answerClassName1 += " closed-ps pb-0"

  let arrowClassName2 = "w-4 transition-transform transform duration-300"
  if (!open2) arrowClassName2 += " -rotate-90"
  else arrowClassName2 += " rotate-0"
  let answerClassName2 = "transform duration-300 overflow-hidden"
  if (open2) answerClassName2 += " open-ps"
  else answerClassName2 += " closed-ps pb-0"

  return (
    <>
      <SEO title="Comparison" />
      <Layout>
        <div>
          <div>
            <div className="container mx-auto">
              <div className="sm:pt-6 xl:pt-4 change">
                <div className="flex items-center sm:text-sm text-sm md:px-6 lg:px-10">
                  <Link
                    to="/"
                    className="text-blue-600 sm:text-black cursor-pointer"
                  >
                    Home
                  </Link>
                  <span className="mx-2 sm:mx-2">&gt;</span>
                  <span to="#">Cinema Comparison</span>
                </div>
              </div>
              <div className="md:px-6 lg:px-10">
                <h1 className="text-5xl privacy-heading text-center leading-none mt-6">
                  <span className="text-orange-500">Compare</span> Timberline
                  Outdoor Cinemas
                </h1>
                <p className="text-3xl hide text-center">
                  Get help choosing which cinema is best for you.{" "}
                  <span
                    className="text-blu-100 cursor-pointer"
                    onClick={() => navigate("/connect")}
                  >
                    Connect.
                  </span>
                </p>
              </div>
              <div className="hidden lg:flex lg:pt-16 hide pt-8 lg:space-x-4 text-center items-center md:px-6 lg:px-10">
                <div>
                  <img
                    src={jediBobcat}
                    alt=""
                    width="450px"
                    className="mx-auto"
                  />
                  <h1 className="py-6 text-31 font-medium">
                    <span className="text-orange-1000">96" Jedi Bobcat</span>
                    <br /> Outdoor Gaming <br />
                    Cinema
                  </h1>
                  <hr className="mx-12 border-gray-500" />
                  <p className="text-2xl py-6">Just $2,499</p>
                  <button
                    className="text-2xl text-white bg-orange-1000 rounded-md px-10 py-1"
                    onClick={() =>
                      navigate(
                        "/timberline-cinema-packages/96-jedi-bobcat-cinema"
                      )
                    }
                  >
                    Learn more
                  </button>
                </div>
                <div className="lg:pt-0 pt-8">
                  <img
                    src={bellaBear}
                    alt=""
                    width="450px"
                    className="mx-auto"
                  />
                  <h1 className="py-6 text-31 font-medium">
                    <span className="text-purple-1000">120” Bella Bear</span>
                    <br />
                    Backyard Outdoor <br />
                    Cinema
                  </h1>
                  <hr className="mx-12 border-gray-500" />
                  <p className="text-2xl py-6">Starting at $2,399*</p>
                  <button
                    className="text-2xl text-white bg-purple-1000 rounded-md px-10 py-1"
                    onClick={() =>
                      navigate(
                        "/timberline-cinema-packages/120-bella-bear-cinema"
                      )
                    }
                  >
                    Learn more
                  </button>
                </div>
                <div className="lg:pt-0 pt-8">
                  <img
                    src={bigMoose}
                    alt=""
                    width="450px"
                    className="mx-auto"
                  />
                  <h1 className="py-6 text-31 font-medium">
                    <span className="text-orange-1000">150” Big Moose</span>
                    <br /> Premium Outdoor <br />
                    Cinema
                  </h1>
                  <hr className="mx-12 border-gray-500" />
                  <p className="text-2xl py-6">Starting at $2,899*</p>
                  <button
                    className="text-2xl text-white bg-orange-1000 rounded-md px-10 py-1"
                    onClick={() =>
                      navigate(
                        "/timberline-cinema-packages/150-big-moose-cinema"
                      )
                    }
                  >
                    Learn more
                  </button>
                </div>
              </div>
              <div className="lg:hidden text-center pt-6 md:px-6 lg:px-10">
                <div>
                  <img
                    src="/mobile-jedi-bobcat-compare-396x356.png"
                    alt=""
                    width="396px"
                    className="mx-auto"
                  />
                  <h1 className="py-6 text-31 font-medium">
                    <span className="text-orange-1000">96" Jedi Bobcat</span>
                    <br /> Outdoor Gaming <br />
                    Cinema
                  </h1>
                  <hr className="mx-1 border-gray-500" />
                  <p className="text-3xl py-4">Just $2,499</p>
                  <button
                    className="text-2xl text-white bg-orange-1000 rounded-md px-10 py-1"
                    onClick={() =>
                      navigate(
                        "/timberline-cinema-packages/96-jedi-bobcat-cinema"
                      )
                    }
                  >
                    Learn more
                  </button>
                  <div className="py-1 included-btn mt-6 mb-4 comparison-details mx-auto rounded-md comparison-detail-border text-left">
                    <div className="flex-1 px-3">
                      <div
                        className="flex justify-between lg:justify-around items-center w-full sm:w-auto px-3 sm:px-0"
                        onClick={() => setOpen(!open)}
                      >
                        <h2 className="text-2xl text-orange-1000">
                          What's included?
                        </h2>
                        <img
                          src={open ? "/minus.png" : "/plus.png"}
                          className="w-4 sm:w-8 md:w-auto md:h-5 cursor-pointer sm:pl-4 ml-4 sm:ml-0"
                        />
                      </div>
                    </div>
                    <div className={answerClassName}>
                      <div className="px-3 pt-6 text-left">
                        <h1 className="text-31 text-font pb-5">Wooden Frame</h1>
                        <hr className="border-gray-500" />
                        <div className="pt-5">
                          <div className="font-extralight text-23">
                            <p>8’ ft. Wide Frame</p>
                            <br />
                            <p>Actual size: 87.5” High x 96” Wide</p>
                          </div>
                        </div>
                      </div>
                      <div className="pt-8 px-3 text-left">
                        <h1 className="text-31 text-font pb-5">
                          Cinematic Screen
                        </h1>
                        <hr className="border-gray-500" />
                        <div className="pt-5">
                          <div className="font-extralight text-23">
                            <p>
                              96” Diagonal Screen
                              <br />
                              <br />
                              Actual size: 47” High x 84” Wide
                              <br />
                              <br />
                              Wrinkle-free, double layer cinematic screen with
                              black backing to prevent light transmission
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="pt-8 px-3 text-left">
                        <h1 className="text-31 text-font pb-5">Wired Option</h1>
                        <hr className="border-gray-500" />
                        <div className="pt-5">
                          <div className="font-extralight text-23">
                            <p>
                              Wired option is only available for the Jedi Bobcat
                              Outdoor Gaming Cinema
                              <br />
                              <br />
                              With the wired gaming cinema, your options below
                              will be identified as wired, and you won’t be able
                              to use any of the wireless options below due to
                              power consumption limitations on the Battery
                              Station
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="pt-8 px-3 text-left">
                        <h1 className="text-31 text-font pb-5">Projector</h1>
                        <hr className="border-gray-500" />
                        <div className="pt-5">
                          <div className="font-extralight text-23">
                            <p>
                              HD 1080p LED Projector with 4,000 Lumens
                              Brightness
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="pt-8 px-3 text-left">
                        <h1 className="text-31 text-font pb-5">Speakers</h1>
                        <hr className="border-gray-500" />
                        <div className="pt-5">
                          <div className="font-extralight text-23">
                            <p>
                              Wired option only: Rockville 8” Dual Powered PA
                              System Speakers with Tripod Stands
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="pt-8 px-3 text-left">
                        <h1 className="text-31 text-font pb-5">
                          Digital FM Transmitter
                        </h1>
                        <hr className="border-gray-500" />
                        <div className="pt-5">
                          <div className="font-extralight text-23">
                            <p>
                              Wired option only: Rolls Digital FM Transmitter
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="pt-8 px-3 text-left">
                        <h1 className="text-31 text-font pb-5">
                          Digital FM Tuner
                        </h1>
                        <hr className="border-gray-500" />
                        <div className="pt-5">
                          <div className="font-extralight text-23">
                            <p>Wired option only: Rolls Digital FM Tuner</p>
                          </div>
                        </div>
                      </div>
                      <div className="pt-8 px-3 text-left">
                        <h1 className="text-31 text-font pb-5">
                          Roku 4k Player
                        </h1>
                        <hr className="border-gray-500" />
                        <div className="pt-5">
                          <div className="font-extralight text-23">
                            <p>
                              Roku Express 4k player with voice control to
                              access movies and apps
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="pt-8 px-3 text-left">
                        <h1 className="text-31 text-font pb-5">
                          Battery Station
                        </h1>
                        <hr className="border-gray-500" />
                        <div className="pt-5">
                          <div className="font-extralight text-23">
                            <p>
                              Wireless option only: chargeable off-grid battery
                              station
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="pt-8 px-3 text-left">
                        <h1 className="text-31 text-font pb-5">
                          Projector Stand
                        </h1>
                        <hr className="border-gray-500" />
                        <div className="pt-5">
                          <div className="font-extralight text-23">
                            <p>
                              Comes with wireless and wired options: Custom,
                              light-weight cedar wood projector and equipment
                              stand
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="pt-8 px-3 text-left">
                        <h1 className="text-31 text-font pb-5">
                          Miscellaneous
                        </h1>
                        <hr className="border-gray-500" />
                        <div className="pt-5">
                          <div className="font-extralight text-23">
                            <p>
                              Wired Option Only: 25’ ft. green extension cord
                              and waterproof surge protector power strip
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="pt-8 pb-6 px-3 text-left">
                        <h1 className="text-31 text-font pb-5">Installation</h1>
                        <hr className="border-gray-500" />
                        <div className="pt-5">
                          <div className="font-extralight text-23">
                            <p>
                              Comes with wireless and wired options:
                              professional and friendly installation of frame,
                              projector stand, equipment setup, review on how to
                              use, and testing to ensure everything works
                              properly{" "}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pt-8">
                  <img
                    src="/mobile-bella-bear-compare-396x356.png"
                    alt=""
                    width="396px"
                    className="mx-auto"
                  />
                  <h1 className="py-6 text-31 font-medium">
                    <span className="text-purple-1000">120” Bella Bear</span>
                    <br />
                    Backyard Outdoor <br />
                    Cinema
                  </h1>
                  <hr className="mx-1 border-gray-500" />
                  <p className="text-3xl py-6">Starting at $2,399*</p>
                  <button
                    className="text-2xl text-white bg-orange-1000 rounded-md px-10 py-1"
                    onClick={() =>
                      navigate(
                        "/timberline-cinema-packages/120-bella-bear-cinema"
                      )
                    }
                  >
                    Learn more
                  </button>
                  <div className="py-1 included-btn mt-6 mb-4 comparison-details mx-auto rounded-md comparison-detail-border-p text-left">
                    <div className="flex-1 px-3">
                      <div
                        className="flex justify-between lg:justify-around items-center w-full sm:w-auto px-3 sm:px-0"
                        onClick={() => setOpen1(!open1)}
                      >
                        <h2 className="text-2xl text-purple-1000">
                          What's included?
                        </h2>
                        <img
                          src={open1 ? "/minus.png" : "/plus.png"}
                          className="w-4 sm:w-8 md:w-auto md:h-5 cursor-pointer sm:pl-4 ml-4 sm:ml-0"
                        />
                      </div>
                    </div>
                    <div className={answerClassName1}>
                      <div className="px-3 pt-6 text-left">
                        <h1 className="text-31 text-font pb-5">Wooden Frame</h1>
                        <hr className="border-gray-500" />
                        <div className="pt-5">
                          <div className="font-extralight text-23">
                            <p>10’ ft. Wide Frame</p>
                            <br />
                            <p>Actual size: 87.5” High x 120” Wide</p>
                          </div>
                        </div>
                      </div>
                      <div className="pt-8 px-3 text-left">
                        <h1 className="text-31 text-font pb-5">
                          Cinematic Screen
                        </h1>
                        <hr className="border-gray-500" />
                        <div className="pt-5">
                          <div className="font-extralight text-23">
                            <p>
                              120” Diagonal Screen
                              <br />
                              <br />
                              Actual size: 72” High x 105” Wide
                              <br />
                              <br />
                              Wrinkle-free, double layer cinematic screen with
                              black backing to prevent light transmission
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="pt-8 px-3 text-left">
                        <h1 className="text-31 text-font pb-5">
                          Wireless or Wired Option
                        </h1>
                        <hr className="border-gray-500" />
                        <div className="pt-5">
                          <div className="font-extralight text-23">
                            <p>
                              This cinema allows you to choose from either
                              Wireless or Wired packages
                              <br />
                              <br />
                              If you select a wireless cinema, your options
                              below will be identified as wireless, and you
                              won’t be able to use any of the wired options due
                              to power consumption limitations on the Battery
                              Station
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="pt-8 px-3 text-left">
                        <h1 className="text-31 text-font pb-5">Projector</h1>
                        <hr className="border-gray-500" />
                        <div className="pt-5">
                          <div className="font-extralight text-23">
                            <p>
                              HD 1080p LED Projector with 4,000 Lumens
                              Brightness
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="pt-8 px-3 text-left">
                        <h1 className="text-31 text-font pb-5">Speakers</h1>
                        <hr className="border-gray-500" />
                        <div className="pt-5">
                          <p className="font-extralight text-23">
                            Wireless option: Avantree Bluetooth Soundbar Speaker
                            <br />
                            <br />
                            Wired option: Rockville 8” Dual Powered PA System
                            Speakers with Tripod Stands
                          </p>
                        </div>
                      </div>
                      <div className="pt-8 px-3 text-left">
                        <h1 className="text-31 text-font pb-5">
                          Digital FM Transmitter
                        </h1>
                        <hr className="border-gray-500" />
                        <div className="pt-5">
                          <div className="font-extralight text-23">
                            <p>
                              Wired option only: Rolls Digital FM Transmitter
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="pt-8 px-3 text-left">
                        <h1 className="text-31 text-font pb-5">
                          Digital FM Tuner
                        </h1>
                        <hr className="border-gray-500" />
                        <div className="pt-5">
                          <div className="font-extralight text-23">
                            <p>Wired option only: Rolls Digital FM Tuner</p>
                          </div>
                        </div>
                      </div>
                      <div className="pt-8 px-3 text-left">
                        <h1 className="text-31 text-font pb-5">
                          Roku 4k Player
                        </h1>
                        <hr className="border-gray-500" />
                        <div className="pt-5">
                          <div className="font-extralight text-23">
                            <p>
                              Roku Express 4k player with voice control to
                              access movies and apps
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="pt-8 px-3 text-left">
                        <h1 className="text-31 text-font pb-5">
                          Battery Station
                        </h1>
                        <hr className="border-gray-500" />
                        <div className="pt-5">
                          <div className="font-extralight text-23">
                            <p>
                              Wireless option only: chargeable off-grid battery
                              station
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="pt-8 px-3 text-left">
                        <h1 className="text-31 text-font pb-5">
                          Projector Stand
                        </h1>
                        <hr className="border-gray-500" />
                        <div className="pt-5">
                          <div className="font-extralight text-23">
                            <p>
                              Comes with wireless and wired options: Custom,
                              light-weight cedar wood projector and equipment
                              stand
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="pt-8 px-3 text-left">
                        <h1 className="text-31 text-font pb-5">
                          Miscellaneous
                        </h1>
                        <hr className="border-gray-500" />
                        <div className="pt-5">
                          <div className="font-extralight text-23">
                            <p>
                              Wired Option Only: 25’ ft. green extension cord
                              and waterproof surge protector power strip
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="pt-8 pb-6 px-3 text-left">
                        <h1 className="text-31 text-font pb-5">Installation</h1>
                        <hr className="border-gray-500" />
                        <div className="pt-5">
                          <div className="font-extralight text-23">
                            <p>
                              Comes with wireless and wired options:
                              professional and friendly installation of frame,
                              projector stand, equipment setup, review on how to
                              use, and testing to ensure everything works
                              properly{" "}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pt-8">
                  <img
                    src="/mobile-big-moose-compare-396x356.png"
                    alt=""
                    width="396px"
                    className="mx-auto"
                  />
                  <h1 className="py-6 text-31 font-medium">
                    <span className="text-orange-1000">150” Big Moose</span>
                    <br /> Premium Outdoor <br />
                    Cinema
                  </h1>
                  <hr className="mx-1 border-gray-500" />
                  <p className="text-3xl py-6">Starting at $2,899*</p>
                  <button
                    className="text-2xl text-white bg-orange-1000 rounded-md px-10 py-1"
                    onClick={() =>
                      navigate(
                        "/timberline-cinema-packages/150-big-moose-cinema"
                      )
                    }
                  >
                    Learn more
                  </button>
                  <div className="py-1 included-btn mt-6 mb-4 comparison-details mx-auto rounded-md comparison-detail-border text-left">
                    <div className="flex-1 px-3">
                      <div
                        className="flex justify-between lg:justify-around items-center w-full sm:w-auto px-3 sm:px-0"
                        onClick={() => setOpen2(!open2)}
                      >
                        <h2 className="text-2xl text-orange-1000">
                          What's included?
                        </h2>
                        <img
                          src={open2 ? "/minus.png" : "/plus.png"}
                          className="w-4 sm:w-8 md:w-auto md:h-5 cursor-pointer sm:pl-4 ml-4 sm:ml-0"
                        />
                      </div>
                    </div>
                    <div className={answerClassName2}>
                      <div className="px-3 pt-6 text-left">
                        <h1 className="text-31 text-font pb-5">Wooden Frame</h1>
                        <hr className="border-gray-500" />
                        <div className="pt-5">
                          <div className="font-extralight text-23">
                            <p>12’ ft. Wide Frame</p>
                            <br />
                            <p>Actual size: 120” High x 150” Wide</p>
                          </div>
                        </div>
                      </div>
                      <div className="pt-8 px-3 text-left">
                        <h1 className="text-31 text-font pb-5">
                          Cinematic Screen
                        </h1>
                        <hr className="border-gray-500" />
                        <div className="pt-5">
                          <div className="font-extralight text-23">
                            <p>
                              150” Diagonal Screen
                              <br />
                              <br />
                              Actual size: 74” High x 131” Wide
                              <br />
                              <br />
                              Wrinkle-free, double layer cinematic screen with
                              black backing to prevent light transmission
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="pt-8 px-3 text-left">
                        <h1 className="text-31 text-font pb-5">
                          Wireless or Wired Option
                        </h1>
                        <hr className="border-gray-500" />
                        <div className="pt-5">
                          <div className="font-extralight text-23">
                            <p>
                              This cinema allows you to choose from either
                              Wireless or Wired packages
                              <br />
                              <br />
                              If you select a wireless cinema, your options
                              below will be identified as wireless, and you
                              won’t be able to use any of the wired options due
                              to power consumption limitations on the Battery
                              Station
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="pt-8 px-3 text-left">
                        <h1 className="text-31 text-font pb-5">Projector</h1>
                        <hr className="border-gray-500" />
                        <div className="pt-5">
                          <div className="font-extralight text-23">
                            <p>
                              HD 1080p LED Projector with 4,000 Lumens
                              Brightness
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="pt-8 px-3 text-left">
                        <h1 className="text-31 text-font pb-5">Speakers</h1>
                        <hr />
                        <div className="pt-5">
                          <p className="font-extralight text-23">
                            Wireless option: Avantree Bluetooth Soundbar Speaker
                            <br />
                            <br />
                            Wired option: Rockville 8” Dual Powered PA System
                            Speakers with Tripod Stands
                          </p>
                        </div>
                      </div>
                      <div className="pt-8 px-3 text-left">
                        <h1 className="text-31 text-font pb-5">
                          Digital FM Transmitter
                        </h1>
                        <hr className="border-gray-500" />
                        <div className="pt-5">
                          <div className="font-extralight text-23">
                            <p>
                              Wired option only: Rolls Digital FM Transmitter
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="pt-8 px-3 text-left">
                        <h1 className="text-31 text-font pb-5">
                          Digital FM Tuner
                        </h1>
                        <hr className="border-gray-500" />
                        <div className="pt-5">
                          <div className="font-extralight text-23">
                            <p>Wired option only: Rolls Digital FM Tuner</p>
                          </div>
                        </div>
                      </div>
                      <div className="pt-8 px-3 text-left">
                        <h1 className="text-31 text-font pb-5">
                          Roku 4k Player
                        </h1>
                        <hr className="border-gray-500" />
                        <div className="pt-5">
                          <div className="font-extralight text-23">
                            <p>
                              Roku Express 4k player with voice control to
                              access movies and apps
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="pt-8 px-3 text-left">
                        <h1 className="text-31 text-font pb-5">
                          Battery Station
                        </h1>
                        <hr className="border-gray-500" />
                        <div className="pt-5">
                          <div className="font-extralight text-23">
                            <p>
                              Wireless option only: chargeable off-grid battery
                              station
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="pt-8 px-3 text-left">
                        <h1 className="text-31 text-font pb-5">
                          Projector Stand
                        </h1>
                        <hr className="border-gray-500" />
                        <div className="pt-5">
                          <div className="font-extralight text-23">
                            <p>
                              Comes with wireless and wired options: Custom,
                              light-weight cedar wood projector and equipment
                              stand
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="pt-8 px-3 text-left">
                        <h1 className="text-31 text-font pb-5">
                          Miscellaneous
                        </h1>
                        <hr className="border-gray-500" />
                        <div className="pt-5">
                          <div className="font-extralight text-23">
                            <p>
                              Wired Option Only: 25’ ft. green extension cord
                              and waterproof surge protector power strip
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="pt-8 px-3 pb-6 text-left">
                        <h1 className="text-31 text-font pb-5">Installation</h1>
                        <hr className="border-gray-500" />
                        <div className="pt-5">
                          <div className="font-extralight text-23">
                            <p>
                              Comes with wireless and wired options:
                              professional and friendly installation of frame,
                              projector stand, equipment setup, review on how to
                              use, and testing to ensure everything works
                              properly{" "}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-8 mb-6">
                  <p className="text-left">
                    * Starting price for wireless option on 120" Bella Bear and
                    150" Big Moose Cinemas.
                  </p>
                </div>
              </div>
              <div className="pt-20 pb-10 md:px-6 lg:px-10 hidden lg:block">
                <div className="">
                  <h1 className="text-31 pb-5">Wooden Frame size</h1>
                  <hr />
                  <div className="lg:flex lg:space-x-16 xl:space-x-32 pt-5">
                    <div className="font-extralight text-23">
                      <p>8’ ft. Wide Frame</p>
                      <br />
                      <p>Actual size: 87.5” High x 96” Wide</p>
                    </div>
                    <div className="font-extralight text-23">
                      <p>10’ ft. Wide Frame</p>
                      <br />
                      <p>Actual size: 87.5” High x 120” Wide</p>
                    </div>
                    <div className="font-extralight text-23">
                      <p>12’ ft. Wide Frame</p>
                      <br />
                      <p>Actual size: 120” High x 150” Wide</p>
                    </div>
                  </div>
                </div>
                <div className="pt-16">
                  <h1 className="text-31 pb-5">Cinematic Screen size</h1>
                  <hr />
                  <div className="lg:flex lg:space-x-16 xl:space-x-32 pt-5">
                    <div className="font-extralight text-23">
                      <p>
                        96” Diagonal Screen
                        <br />
                        <br />
                        Actual size: 47” High x 84” Wide
                        <br />
                        <br />
                        Wrinkle-free, double layer cinematic screen with black
                        backing to prevent light transmission
                      </p>
                    </div>
                    <div className="font-extralight text-23">
                      <p>
                        120” Diagonal Screen
                        <br />
                        <br />
                        Actual size: 72” High x 105” Wide
                        <br />
                        <br />
                        Wrinkle-free, double layer cinematic screen with black
                        backing to prevent light transmission
                      </p>
                    </div>
                    <div className="font-extralight text-23">
                      <p>
                        150” Diagonal Screen
                        <br />
                        <br />
                        Actual size: 74” High x 131” Wide
                        <br />
                        <br />
                        Wrinkle-free, double layer cinematic screen with black
                        backing to prevent light transmission
                      </p>
                    </div>
                  </div>
                </div>
                <div className="pt-16">
                  <h1 className="text-31 pb-5">Wireless or Wired Option</h1>
                  <hr />
                  <div className="lg:flex lg:space-x-16 xl:space-x-32 pt-5">
                    <div className="font-extralight text-23">
                      <p>
                        Wired option is only available for the Jedi Bobcat
                        Outdoor Gaming Cinema
                        <br />
                        <br />
                        With the wired gaming cinema, your options below will be
                        identified as wired, and you won’t be able to use any of
                        the wireless options below due to power consumption
                        limitations on the Battery Station
                      </p>
                    </div>
                    <div className="font-extralight text-23">
                      <p>
                        This cinema allows you to choose from either Wireless or
                        Wired packages
                        <br />
                        <br />
                        If you select a wireless cinema, your options below will
                        be identified as wireless, and you won’t be able to use
                        any of the wired options due to power consumption
                        limitations on the Battery Station
                      </p>
                    </div>
                    <div className="font-extralight text-23">
                      <p>
                        This cinema allows you to choose from either Wireless or
                        Wired packages
                        <br />
                        <br />
                        If you select a wireless cinema, your options below will
                        be identified as wireless, and you won’t be able to use
                        any of the wired options due to power consumption
                        limitations on the Battery Station
                      </p>
                    </div>
                  </div>
                </div>
                <div className="pt-16">
                  <h1 className="text-31 pb-5">Projector</h1>
                  <hr />
                  <div className="lg:flex lg:space-x-16 xl:space-x-32 pt-5">
                    <div className="font-extralight text-23">
                      <p>HD 1080p LED Projector with 4,000 Lumens Brightness</p>
                    </div>
                    <div className="font-extralight text-23">
                      <p>HD 1080p LED Projector with 4,000 Lumens Brightness</p>
                    </div>
                    <div className="font-extralight text-23">
                      <p>HD 1080p LED Projector with 4,000 Lumens Brightness</p>
                    </div>
                  </div>
                </div>
                <div className="pt-16">
                  <h1 className="text-31 pb-5">Speakers</h1>
                  <hr />
                  <div className="lg:flex lg:space-x-16 xl:space-x-32 pt-5">
                    <div className="font-extralight text-23">
                      <p>
                        Wired option only: Rockville 8” Dual Powered PA System
                        Speakers with Tripod Stands
                      </p>
                    </div>
                    <p className="font-extralight text-23">
                      Wireless option: Avantree Bluetooth Soundbar Speaker
                      <br />
                      <br />
                      Wired option: Rockville 8” Dual Powered PA System Speakers
                      with Tripod Stands
                    </p>
                    <p className="font-extralight text-23">
                      Wireless option: Avantree Bluetooth Soundbar Speaker
                      <br />
                      <br />
                      Wired option: Rockville 8” Dual Powered PA System Speakers
                      with Tripod Stands
                    </p>
                  </div>
                </div>
                <div className="pt-16">
                  <h1 className="text-31 pb-5">Digital FM Transmitter</h1>
                  <hr />
                  <div className="lg:flex lg:space-x-16 xl:space-x-32 pt-5">
                    <div className="font-extralight text-23">
                      <p>Wired option only: Rolls Digital FM Transmitter</p>
                    </div>
                    <div className="font-extralight text-23">
                      <p>Wired option only: Rolls Digital FM Transmitter</p>
                    </div>
                    <div className="font-extralight text-23">
                      <p>Wired option only: Rolls Digital FM Transmitter</p>
                    </div>
                  </div>
                </div>
                <div className="pt-16">
                  <h1 className="text-31 pb-5">Digital FM Tuner</h1>
                  <hr />
                  <div className="lg:flex lg:space-x-16 xl:space-x-32 pt-5">
                    <div className="font-extralight text-23">
                      <p>Wired option only: Rolls Digital FM Tuner</p>
                    </div>
                    <div className="font-extralight text-23">
                      <p>Wired option only: Rolls Digital FM Tuner</p>
                    </div>
                    <div className="font-extralight text-23">
                      <p>Wired option only: Rolls Digital FM Tuner</p>
                    </div>
                  </div>
                </div>
                <div className="pt-16">
                  <h1 className="text-31 pb-5">Roku Express 4k Player</h1>
                  <hr />
                  <div className="lg:flex lg:space-x-16 xl:space-x-32 pt-5">
                    <div className="font-extralight text-23">
                      <p>
                        Roku Express 4k player with voice control to access
                        movies and apps
                      </p>
                    </div>
                    <div className="font-extralight text-23">
                      <p>
                        Roku Express 4k player with voice control to access
                        movies and apps
                      </p>
                    </div>
                    <div className="font-extralight text-23">
                      <p>
                        Roku Express 4k player with voice control to access
                        movies and apps
                      </p>
                    </div>
                  </div>
                </div>
                <div className="pt-16">
                  <h1 className="text-31 pb-5">Battery Station</h1>
                  <hr />
                  <div className="lg:flex lg:space-x-16 xl:space-x-32 pt-5">
                    <div className="font-extralight text-23">
                      <p>
                        Wireless option only: chargeable off-grid battery
                        station
                      </p>
                    </div>
                    <div className="font-extralight text-23">
                      <p>
                        Wireless option only: chargeable off-grid battery
                        station
                      </p>
                    </div>
                    <div className="font-extralight text-23">
                      <p>
                        Wireless option only: chargeable off-grid battery
                        station
                      </p>
                    </div>
                  </div>
                </div>
                <div className="pt-16">
                  <h1 className="text-31 pb-5">Projector Stand</h1>
                  <hr />
                  <div className="lg:flex lg:space-x-16 xl:space-x-32 pt-5">
                    <div className="font-extralight text-23">
                      <p>
                        Comes with wireless and wired options: Custom,
                        light-weight cedar wood projector and equipment stand
                      </p>
                    </div>
                    <div className="font-extralight text-23">
                      <p>
                        Comes with wireless and wired options: Custom,
                        light-weight cedar wood projector and equipment stand
                      </p>
                    </div>
                    <div className="font-extralight text-23">
                      <p>
                        Comes with wireless and wired options: Custom,
                        light-weight cedar wood projector and equipment stand
                      </p>
                    </div>
                  </div>
                </div>
                <div className="pt-16">
                  <h1 className="text-31 pb-5">Miscellaneous</h1>
                  <hr />
                  <div className="lg:flex lg:space-x-16 xl:space-x-32 pt-5">
                    <div className="font-extralight text-23">
                      <p>
                        Wired Option Only: 25’ ft. green extension cord and
                        waterproof surge protector power strip
                      </p>
                    </div>
                    <div className="font-extralight text-23">
                      <p>
                        Wired option only: 25’ ft. green extension cord and
                        waterproof surge protector power strip
                      </p>
                    </div>
                    <div className="font-extralight text-23">
                      <p>
                        Wired option only: 25’ ft. green extension cord and
                        waterproof surge protector power strip
                      </p>
                    </div>
                  </div>
                </div>
                <div className="pt-16">
                  <h1 className="text-31 pb-5">Professional Installation</h1>
                  <hr />
                  <div className="lg:flex lg:space-x-16 xl:space-x-32 pt-5">
                    <div className="font-extralight text-23">
                      <p>
                        Comes with wireless and wired options: professional and
                        friendly installation of frame, projector stand,
                        equipment setup, review on how to use, and testing to
                        ensure everything works properly{" "}
                      </p>
                    </div>
                    <div className="font-extralight text-23">
                      <p>
                        Comes with wireless and wired options: professional and
                        friendly installation of frame, projector stand,
                        equipment setup, review on how to use, and testing to
                        ensure everything works properly{" "}
                      </p>
                    </div>
                    <div className="font-extralight text-23">
                      <p>
                        Comes with wireless and wired options: professional and
                        friendly installation of frame, projector stand,
                        equipment setup, review on how to use, and testing to
                        ensure everything works properly{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="pt-16">
                  <p>
                    * Starting price for the Bella Bear and Big Moose Timberline
                    Outdoor Cinemas are the wireless package option.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Comparison
