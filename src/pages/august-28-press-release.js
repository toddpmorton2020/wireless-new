import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../css/responsive.css"
import "../css/index.css"

import homeImage from "../images/june-8.png"

function Aug28PressRelease() {
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
              <span to="#">August 28 Press Release</span>
            </div>
            <div className="md:hidden h-64 w-full full-bleed-mobile max-h-screen relative mb-6 mt-6 bg-center">
              <img
                className="w-full h-full absolute object-cover "
                src={homeImage}
              />
            </div>
            <div className="press-release-padding pt-12">
              <p className="text-xl">Press Release Announcement</p>
              <p className="text-xl">August 28, 2021</p>
            </div>
            <div>
              <h1 className="text-14 pt-10 press-release-padding press-line-height">
                Wireless Outdoor Cinema Company Announces new Timberline Series
              </h1>
            </div>
            <div className="press-release-padding pt-10">
              <p className="text-23 font-extralight pb-5">
                <strong>
                  BRIDGTON, MAINE – August 28, 2021 – The Wireless Outdoor
                  Cinema Company
                </strong>{" "}
                today announced the new Timberline Outdoor Cinema Series with a
                new and improved frame system to attach the cinematic screen to.
                The new frame system is more sturdy and durable than the
                original frame that was introduced last year.
              </p>
              <p className="text-23 font-extralight pb-5">
                The new frame system was redesigned to give the frame more
                stability if unexpected strong wind gusts hit the screen while
                attached to the frame. In addition, the bottom supports to the
                frame were improved by adding front bottom 45-degree angle
                supports and new heavy-duty post and beam weather-resistant
                hardware.
              </p>
              <p className="text-23 font-extralight pb-5">
                "I'm excited about the new development changes made to the 4" x
                4" pressure-treated wood frame system. The new changes
                rock-solid frame has made it rock solid in any weather Mother
                Nature throws at it," said Todd Morton, owner of the Wireless
                Outdoor Cinema Company. "The new frame design will last as long
                as your outside deck attached to your home will."
              </p>
              <p className="text-23 font-extralight pb-5">
                <strong>
                  Features and benefits of the Timberline Outdoor Cinema Series
                  Frame System
                </strong>
              </p>
              <p className="text-23 font-extralight pb-5 ml-8 indent">
                • Made from pressure-treated wood and is naturally resistant to
                rot, decay, and insect attacks
              </p>
              <p className="text-23 font-extralight pb-5 ml-8 indent">
                • Only outdoor cinema frame that you never have to break down,
                shove in a box, or deflate – it stays up on your property
                year-round
              </p>
              <p className="text-23 font-extralight pb-5 ml-8 indent">
                • Allows for the fastest setup time by using inside hook screws
                where the grommet hole cinematic screen attaches to
              </p>
              <p className="text-23 font-extralight pb-5 ml-8 indent">
                • The frame is moveable so that you can place it anywhere on
                your property
              </p>
              <p className="text-23 font-extralight pb-5">
                The new frame systems are now available and included with all
                new purchases of the Timberline Outdoor Cinemas. All of the
                outdoor cinema frame systems built prior for clients will
                receive the new additions to their frame.
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

export default Aug28PressRelease
