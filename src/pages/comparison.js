import React from "react"
import { Link, navigate } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import bellaBear from "../images/bella-bear.png"
import bigMoose from "../images/big-moose.png"
import jediBobcat from "../images/jedi-bobcat.png"

const Comparison = () => {
  return (
    <>
      <SEO title="Comparison" />
      <Layout>
        <div>
          <div>
            <div className="container mx-auto">
              <div className="sm:pt-6 change">
                <div className="flex items-center sm:text-sm text-sm">
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
              <div>
                <h1 className="xl:text-5xl text-3xl text-center pt-4">
                  <span className="text-orange-500">Compare</span> Timberline
                  Outdoor Cinemas
                </h1>
                <p className="xl:text-2xl text-xl text-center">
                  Get help choosing which cinema is best for you.{" "}
                  <span
                    className="text-blu-100 cursor-pointer"
                    onClick={() => navigate("/connect")}
                  >
                    Connect.
                  </span>
                </p>
              </div>
              <div className="xl:flex pt-16 xl:space-x-4 text-center items-center px-10">
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
                <div className="xl:pt-0 pt-8">
                  <img
                    src={bellaBear}
                    alt=""
                    width="450px"
                    className="mx-auto"
                  />
                  <h1 className="py-6 text-31 font-medium">
                    <span className="text-purple-1000">120” Bella Bear</span>
                    <br /> Backyard Outdoor <br />
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
                <div className="xl:pt-0 pt-8">
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
              <div className="pt-20 pb-10 px-24">
                <div className="">
                  <h1 className="text-31 pb-5">Wooden Frame size</h1>
                  <hr />
                  <div className="xl:flex xl:space-x-32 pt-5">
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
                  <div className="xl:flex xl:space-x-32 pt-5">
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
                  <div className="xl:flex xl:space-x-32 pt-5">
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
                  <div className="xl:flex xl:space-x-32 pt-5">
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
                  <div className="xl:flex xl:space-x-32 pt-5">
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
                  <div className="xl:flex xl:space-x-32 pt-5">
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
                  <div className="xl:flex xl:space-x-32 pt-5">
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
                  <div className="xl:flex xl:space-x-32 pt-5">
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
                  <div className="xl:flex xl:space-x-32 pt-5">
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
                  <div className="xl:flex xl:space-x-32 pt-5">
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
                  <div className="xl:flex xl:space-x-32 pt-5">
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
                  <div className="xl:flex xl:space-x-32 pt-5">
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
