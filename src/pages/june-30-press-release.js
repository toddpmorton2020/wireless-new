import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../css/responsive.css"
import "../css/index.css"

import homeImage from "../images/june-8.png"

function June30PressRelease() {
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
              <span to="#">June 30 Press Release</span>
            </div>
            <div className="md:hidden h-64 w-full full-bleed-mobile max-h-screen relative mb-6 mt-6 bg-center">
              <img
                className="w-full h-full absolute object-cover "
                src={homeImage}
              />
            </div>
            <div className="press-release-padding pt-12">
              <p className="text-xl">Press Release Announcement</p>
              <p className="text-xl">June 30, 2021</p>
            </div>
            <div>
              <h1 className="text-14 pt-10 press-release-padding press-line-height">
                Wireless Outdoor Cinema Company Brings to Market the 1st Outdoor
                Cinema Projector Stand
              </h1>
            </div>
            <div className="press-release-padding pt-10">
              <p className="text-23 font-extralight pb-5">
                <strong>
                  BRIDGTON, MAINE – June 30, 2021 – The Wireless Outdoor Cinema
                  Company
                </strong>{" "}
                today announced the unveiling of the new Outdoor Cinema
                Projector and Equipment Stand for homeowners and businesses who
                have or want an outdoor movie theater setup. The Outdoor
                Projector Stand is the first one introduced into the
                marketplace.
              </p>
              <p className="text-23 font-extralight pb-5">
                The projector and equipment stand allows you to organize your
                Projector, Media Player, DVD player, Tuner, Transmitter, Gaming
                Console, and other equipment on the various shelves located on
                the stand. The projector stand is made from lightweight 5/4”
                thick cedar wood and acts as an entertainment center that you
                would have inside your home. The cinema components stay
                organized on the projector stand, and you never have to break it
                down or remove any of the equipment after watching a movie
                outside.
              </p>
              <p className="text-23 font-extralight pb-5">
                "When I searched the internet last year to find a projector
                stand to go with my wireless outdoor cinemas, there were no
                options other than flimsy tripod projector stands," said Todd
                Morton, owner of the Wireless Outdoor Cinema Company. "The
                tripod projector stands available online only have enough space
                to hold the projector and no other cinema equipment. After a
                year of designing, building, and testing various outdoor
                projector stands in my woodshop, I came up with my latest design
                that I now include with all my outdoor cinemas."
              </p>
              <p className="text-23 font-extralight pb-5">
                <strong>
                  Features and benefits of the Wireless Outdoor Cinema include:
                </strong>
              </p>
              <p className="text-23 font-extralight pb-5 ml-8 indent">
                • Organizes all of your cinema equipment making it easy and fast
                to start watching your favorite entertainment outside
              </p>
              <p className="text-23 font-extralight pb-5 ml-8 indent">
                • Light weight and easy to carry
              </p>
              <p className="text-23 font-extralight pb-5 ml-8 indent">
                • Made from cedar wood that is naturally resistant to rot, decay
                and insect attacks
              </p>
              <p className="text-23 font-extralight pb-5 ml-8 indent">
                • Looks beautiful and will last for years
              </p>
              <p className="text-23 font-extralight pb-5">
                The Outdoor Cinema Projector and Equipment Stand will be
                available to purchase online worldwide starting October 1, 2021
                on the Wireless Outdoor Cinema Company’s website at:
                www.wirelessoutdoorcinema.com
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

export default June30PressRelease
