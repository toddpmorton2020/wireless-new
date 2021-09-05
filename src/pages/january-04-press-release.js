import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../css/responsive.css"
import "../css/index.css"

import homeImage from "../images/june-8.png"

function Jan04PressRelease() {
  return (
    <Layout>
      <SEO
        title="Press Release Announcement. September 10 Press Release. Introducing the Wireless Outdoor Cinema Company. Turn Your Backyard into a Year-Round Drive-in"
        description="The Wireless Outdoor Cinema Company today announced the unveiling of their new line of Outdoor Cinema Packages for homeowners and businesses throughout Maine and New Hampshire. The Wireless Outdoor Cinema is a year-round, weather-resistant, pressure-treated wood movie screen frame that comes with a removable cinematic screen, an HD Wi-Fi Projector, Off-Grid Battery Pack and a Wireless Surround Bar Speaker. The Wireless Outdoor Cinema offers a new way for homeowners to enjoy their backyards, year-round, under the stars and moon watching their favorite movie, TV show, sporting event, or playing video games on a larger than life screen."
      />

      <div className="white-back pb-8">
        <div className="container mx-auto">
          <div className="container-insider">
            <div className="flex items-center text-sm flex-wrap change">
              <Link to="/" className="cursor-pointer">
                Home
              </Link>
              <span className="mx-2">&gt;</span>
              <Link to="/in-the-news">In the News</Link>
              <span className="mx-2">&gt;</span>
              <span to="#">January 04 Press Release</span>
            </div>
            <div className="md:hidden h-64 w-full full-bleed-mobile max-h-screen relative mb-6 mt-6 bg-center">
              <img
                className="w-full h-full absolute object-cover "
                src={homeImage}
              />
            </div>
            <div className="press-release-padding pt-12">
              <p className="text-xl">Press Release Announcement</p>
              <p className="text-xl">January 04, 2021</p>
            </div>
            <div>
              <h1 className="text-14 pt-10 press-release-padding press-line-height">
                Wireless Outdoor Cinema Company Announces Winner to the 107.5
                Frank FM Fantasy Football Challenge
              </h1>
            </div>
            <div className="press-release-padding pt-10">
              <p className="text-23 font-extralight pb-5">
                <strong>
                  BRIDGTON, MAINE – January 4, 2021 – The Wireless Outdoor
                  Cinema Company
                </strong>{" "}
                today announced the winner of the promotional giveaway for the
                107.5 Frank FM Fantasy Pro Football Challenge. The Pro Football
                Challenge started on September 10, 2020. The person who
                accumulates the most points throughout the end of the Pro
                Football Challenge will win the 150” Big Moose Outdoor Cinema
                package at the end of the scheduled Pro Football season.
              </p>
              <p className="text-23 font-extralight pb-5">
                107.5 Frank FM (one of the radio stations owned by Binnie Media)
                announced today over the air on and on their website that Justin
                from Lewiston, Maine was selected as the Pro Football Challenge
                winner who received the overall most points from the Pro
                Football season, which ended January 3, 2021. The Wireless
                Outdoor Cinema Company will reach out to Justin this week to
                schedule his new 150” Big Moose Wireless Outdoor Cinema
                installation.
              </p>
              <p className="text-23 font-extralight pb-5">
                "When I called Justin to confirm he was the winner to the 150"
                Big Moose Wireless Outdoor Cinema package, he was excited about
                the news and couldn't wait to use it," said Todd Morton, owner
                of the Wireless Outdoor Cinema Company. "Providing an
                opportunity for people to win one of my premier wireless outdoor
                cinemas is exciting and a great way to bring families and
                friends together to watch their favorite entertainment outside
                on a massive 12' widescreen."
              </p>
              <p className="text-23 font-extralight pb-5">
                <strong>About Binnie Media</strong> <br /> Binnie Media is Maine
                and New Hampshire’s largest privately owned and locally managed
                media company. Between radio, digital, and outdoor advertising
                mediums, Binnie Media engages with over 1.5 million people every
                week.
              </p>
              <p className="text-23 font-extralight pb-5">
                <strong>About The Wireless Outdoor Cinema Company</strong>{" "}
                <br /> The Wireless Outdoor Cinema Company provides homeowners
                and businesses with a complete outdoor movie theater solution to
                enjoy big-screen entertainment year-round. The cinema packages
                are designed to help achieve a fast and easy setup every time
                you want to go outside and enjoy your favorite entertainment.
                Cinema packages include a Pressure-treated Frame to attach the
                screen to, a Cinematic Screen, 1080p LED Projector, Sound
                System, Roku 4k Media Player, and a light-weight custom cedar
                wood Projector and Equipment Stand.
              </p>
            </div>
            <div className="press-release-padding pt-5">
              <div className="border-b border-gray-400" />
              <h2 className="text-31 pb-5 pt-5">Press Contact</h2>
              <p className="text-23">
                Wireless Outdoor Cinema Company
                <br />
                Todd Morton – owner
              </p>
              <p className="text-blue-600 text-23">
                todd@wirelessoutdoorcinema.com
              </p>
              <p className="text-23">(207) 647-8759</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Jan04PressRelease
