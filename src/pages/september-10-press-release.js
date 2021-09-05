import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../css/responsive.css"
import "../css/index.css"

import homeImage from "../images/june-8.png"

function Sept10PressRelease() {
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
              <span to="#">September 10 Press Release</span>
            </div>
            <div className="md:hidden h-64 w-full full-bleed-mobile max-h-screen relative mb-6 mt-6 bg-center">
              <img
                className="w-full h-full absolute object-cover "
                src={homeImage}
              />
            </div>
            <div className="press-release-padding pt-12">
              <p className="text-xl">Press Release Announcement</p>
              <p className="text-xl">September 10, 2020</p>
            </div>
            <div>
              <h1 className="text-14 pt-10 press-release-padding press-line-height">
                Wireless Outdoor Cinema Company Partners with Binnie Media on
                Pro Football Challenge
              </h1>
            </div>
            <div className="press-release-padding pt-10">
              <p className="text-23 font-extralight pb-5">
                <strong>
                  BRIDGTON, MAINE – September 10, 2020 – The Wireless Outdoor
                  Cinema Company
                </strong>{" "}
                today announced the partnership with Binnie Media on running a
                promotional giveaway for 107.5 Frank FM Fantasy Pro Football
                Challenge. The Wireless Outdoor Cinema Company will give away
                their premier 150” Big Moose Outdoor Cinema package to the
                winner of the Fantasy Pro Football Challenge.
              </p>
              <p className="text-23 font-extralight pb-5">
                The Pro Football Challenge will start on September 10, 2020, and
                the person who accumulates the most points throughout the Pro
                Football Challenge will win the 150” Big Moose Outdoor Cinema
                package at the end of the scheduled Pro Football season.
              </p>
              <p className="text-23 font-extralight pb-5">
                The 107.5 Frank FM Pro Football Challenge contest works by
                determining which Pro Football teams will win each week and by
                how many points. Participants who are the closest to guessing
                what Pro Football teams win each week and by the final score
                will get points that will be tallied up week-over-week until the
                season ends. Then, the person who receives the most points wins
                the giveaway contest.
              </p>
              <p className="text-23 font-extralight pb-5">
                "I'm excited about this opportunity to work with Jon Sundberg,
                VP Sales, of Binnie Media, and giveaway my 150" Big Moose
                Outdoor Cinema," said Todd Morton, owner of the Wireless Outdoor
                Cinema Company." "Maine is full of football fans, and to allow
                one of these fans to watch the Super Bowl on the 150" Big Moose
                Outdoor Cinema, would give them an incredible experience."
              </p>
              <p className="text-23 font-extralight pb-5">
                The winner of the Pro Football Challenge will be announced on
                January 3, 2021 over the 107.5 Frank FM radio station and will
                be reached by phone from Binnie Media. The Wireless Outdoor
                Cinema Company will announce the winner on their website and
                notify the winner to schedule the install of the 150” Big Moose
                Outdoor Cinema.
              </p>
              <p className="text-23 font-extralight pb-5">
                <strong>About Binnie Media</strong> <br /> Media is Maine and
                New Hampshire’s largest privately owned and locally managed
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

export default Sept10PressRelease
