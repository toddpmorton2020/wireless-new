import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../css/responsive.css"
import "../css/index.css"

import toddMobile from "../images/todd-wireless-outdoor-cinema.png"

function June25PressRelease() {
  return (
    <Layout>
      <SEO
        title="June 25 Bridgton News Article"
        description="Bring Movies and Gaming Outdoors By Wayne E. Rivet – Staff Writer for the Bridgton News"
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
              <span to="#">June 25 Bridgton News Article</span>
            </div>
            <div className="md:hidden h-64 w-full full-bleed-mobile max-h-screen relative mt-6 mb-6">
              <img className="w-full h-full object-cover " src={toddMobile} />
            </div>
            <div className="press-release-padding pt-12">
              <p className="text-xl">Press Release Announcement</p>
              <p className="text-xl">June 25, 2020</p>
              <p className="text-xl pt-5">
                By Wayne E. Rivet – Staff Writer for the Bridgton News
              </p>
            </div>
            <div>
              <h1 className="text-14 pt-10 press-release-padding">
                Bring Movies and Gaming Outdoors
              </h1>
            </div>
            <div className="press-release-padding pt-10">
              <p className="text-23 font-extralight pb-5">
                Todd Morton has had a diverse working career. He has done
                construction, finish carpentry and built a couple of log homes.
                And he worked 25 years as an Internet marketer and website
                designer. Now he hopes to add the Wireless Outdoor Cinema
                Company to his professional accomplishments.
              </p>
              <p className="text-23 font-extralight pb-5">
                “I want to create an outdoor experience that the entire family
                will enjoy,” he said.
              </p>
              <p className="text-23 font-extralight pb-5">
                Todd has always had a great appreciation for the outdoors and
                grew up in northern Vermont. His true passions have always been
                working outdoors and nature. For years, Todd thought about
                putting up a backyard movie screen for years and started testing
                various outdoor set ups that turned out to be flimsy or too
                cumbersome to setup and watch.
              </p>
              <p className="text-23 font-extralight pb-5">
                During the winter, Todd continued researching outdoor cinema
                setups but found most failed to hold up due to uneven ground
                conditions and wind. “I brainstormed for months how I could set
                up a sturdy, rugged stationary movie screen frame, that I
                wouldn’t have to inflate or deflate at the end of the movie and
                make it look aesthetically clean on my property,” he said.
              </p>
              <p className="text-23 font-extralight pb-5">
                Todd built a pressure-treated movie screen frame, which can
                easily be moved by two people. All hardware used on the outdoor
                wooden frame is weather-resistant galvanized and stainless
                steel. “This frame is built to last,” he said. The cinematic
                polyester screens come in three sizes – 96”, 120” and 150” and
                attach to the frame with grommet holes and stainless steel
                hooks. To put the screen on the frame takes less time than it
                does to pop a bag of popcorn in the microwave, Todd said.
              </p>
              <p className="text-23 font-extralight pb-5">
                “You can set up the wireless outdoor cinema anywhere on your
                property. After watching my first movie outside, I knew other
                homeowners would love this experience. Being outside in the
                fresh air seeing the galaxy of stars and moon is incredible,
                nothing beats the experience,” he said. I envision people
                watching movies outside with family and friends, having
                Halloween parties in October, watching the Super Bowl, all you
                need to stay warm in the cooler months is a good old fashion
                campfire or a propane heat lamp. And with social distancing, you
                can spread out lawn chairs and still safely watch a movie,
                sporting event, play video games together with friends.”
              </p>
              <p className="text-23 font-extralight pb-5">
                The HD Wi-Fi projector (which is positioned six to seven feet
                away from the screen) sets on either a projector stand or a
                custom-build cedar projector stand with shelves. The off-grid
                battery station powers the outdoor cinema where there’s no need
                to run any extension cords out to the electronic components. And
                the off-grid battery comes with a built-in flashlight to help
                with finding your way back inside.
              </p>
              <p className="text-23 font-extralight pb-5">
                He offers three packages: 96” Jedi Bobcat, perfect for the
                ultimate gaming experience, $2,499; the 120” Bella Bear, best
                for watching movies and streaming your favorite shows, $2,399;
                and 150” Big Moose, a great option for restaurants and bars with
                outdoor seating, and other outdoor seating venues such as summer
                camps, $2,899.
              </p>
            </div>
            <div className="press-release-padding pt-10">
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

export default June25PressRelease
