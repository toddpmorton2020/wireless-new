import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../css/responsive.css"
import "../css/index.css"
import toddMortonSunJournal from "../images/todd-morton-sun-journal.png"
import mobileToddMortonSunJournal from "../images/mobile-in-the-news-todd-414px-x-327px.png"

function October10PressRelease() {
  return (
    <Layout>
      <SEO
        title="October 10 Sun Journal News Article"
        description="Film Buff's Inspiration Inspires Backyard Theater Business By Kathryn Skelton – Staff Writer for the Sun Journal"
      />
      <div className="sm:bg-white bg-grey-10 pb-12">
        <div className="pt-5 overflow-hidden">
          <div className="container mx-auto">
            <div className="flex items-center text-sm flex-wrap sm:text-black text-white mb-10 sm:mb-20">
              <Link to="/" className="cursor-pointer">
                Home
              </Link>
              <span className="sm:mx-2 mx-1">&gt;</span>
              <Link to="/in-the-news">In the News</Link>
              <span className="sm:mx-2 mx-1">&gt;</span>
              <span to="#">October 10, 2021 Sun Journal News Article</span>
            </div>
            <div className="sm:hidden block text-center">
              <h3 className="text-grey-100 pt-6 grey-text-spacing">
                SUN JOURNAL | October 10, 2021
              </h3>
              <h3 className="text-grey-100">
                By Kathryn Skelton – Staff Writer for the Sun Journal
              </h3>
              <h1 className="press-release-heading pt-5 text-white font-extrabold pb-3">
                Film buff's inspiration inspires backyard theater business
              </h1>
            </div>
            <div className="sm:hidden full-bleed-mobile relative mb-6 mt-6 bg-center">
              <img
                className="press-main-image absolute object-cover "
                src={mobileToddMortonSunJournal}
              />
            </div>
            <p className="text-grey-100 image-text-press text-sm sm:hidden block pt-10">
              Interview with Kathryn Skelton from the Sun Journal and Todd
              Morton, owner of the Wireless Outdoor Cinema Company
            </p>
            <div className="press-release-padding sm:block hidden">
              <p className="text-xl image-text-color">SUN JOURNAL</p>
              <p className="text-xl image-text-color">October 10, 2021</p>
              <p className="text-xl pt-5 image-text-color">
                By Kathryn Skelton – Staff Writer for the Sun Journal
              </p>
            </div>
            <div className="hidden sm:block">
              <h1 className="main-heading font-semibold sm:pt-6 pt-8 press-release-padding press-line-height hide">
                Film buff's inspiration inspires backyard theater business
              </h1>
            </div>
            <div className="hidden sm:block press-release-padding">
              <h2 className="sm:pt-4 main-image-upper-text-1">
                Interview with Kathryn Skelton from the Sun Journal and Todd
                Morton, owner of the Wireless Outdoor Cinema Company
              </h2>
              <img src={toddMortonSunJournal} alt="" className="pt-6" />
              <p className="image-text-color image-text-press-1 text-sm pt-3 text-grey-100 sm:text-gray-700">
                Todd Morton, the Wireless Outdoor Cinema Company owner, was
                interviewed at his home in Bridgton, Maine, on October 10, 2021.
              </p>
            </div>
            <div className="press-release-padding sm:pt-10 pt-6 sm:text-black text-white">
              <p className="sm:text-23 text-base press-text font-extralight pb-5">
                <strong>October 10, 2021 — BRIDGTON — </strong>Todd Morton
                wanted the perfect outdoor screen to watch movies next to a
                bonfire and under the stars with friends at his Woods Pond home.
              </p>
              <p className="sm:text-23 text-base press-text font-extralight pb-5">
                Inflatable offerings took 30 minutes to blow up with a
                compressor and didn't seem rugged enough. Telescoping tripods
                blew over with a stiff wind.
              </p>
              <p className="sm:text-23 text-base press-text font-extralight pb-5">
                He hit his wood shop and built a business.
              </p>
              <p className="sm:text-23 text-base press-text font-extralight pb-5">
                The Wireless Outdoor Cinema Company launched in the spring of
                2020 after a year of experimenting with the right setup.
              </p>
              <p className="sm:text-23 text-base press-text font-extralight pb-5">
                For 15 years, Morton, 49, had commuted from Bridgton to an
                internet marketing job in Burlington, Massachusetts, three days
                a week, nearly three hours each way.
              </p>
              <p className="sm:text-23 text-base press-text font-extralight pb-5">
                After a massive layoff four years ago, "I took a break," he
                said. "I knew I wanted to do something different in my career,
                and get more in tune with building again, being outside. This
                idea just kind of laid into that at the right time. I love what
                I do. I'm growing it."
              </p>
              <p className="sm:text-23 text-base press-text font-extralight pb-5">
                Step one was deciding screens on the market didn't fit his movie
                viewing vision.
              </p>
              <p className="sm:text-23 text-base press-text font-extralight pb-5">
                "I know from past experience, getting anything inflatable, has a
                short shelf life before a little tear or leak happens within the
                seams and knew the air screen cinemas on the market was not
                going to make the cut'" Morton said.
              </p>
              <p className="sm:text-23 text-base press-text font-extralight pb-5">
                Step two was deciding projector stands on the market didn't fit
                that vision either.
              </p>
              <p className="sm:text-23 text-base press-text font-extralight pb-5">
                "The projector fit perfect on there, and the tripod stand really
                allowed you to find the different heights and angles to adjust
                once it was on there," but there wasn't room for anything else,
                he said.
              </p>
              <p className="sm:text-23 text-base press-text font-extralight pb-5">
                Like a DVD player, laptop, receiver or tuner.
              </p>
              <p className="sm:text-23 text-base press-text font-extralight pb-5">
                "I would bring out milk crates, I would bring out a Home Depot
                bucket and I would make sure that it wasn't sitting on the
                ground," Morton said. "It didn't look aesthetically pleasing to
                the eye with that setup and that's when I started to think,
                'Well, maybe I can design an outdoor projector stand that would
                hold all of these components and make it act almost like an
                entertainment system that's inside your house where you have to
                never remove everything, it stays plugged in, and when you're
                ready to watch movies, you just carry this projector stand out
                with all of the equipment to get it set up in front of the movie
                screen.'"
              </p>
              <p className="sm:text-23 text-base press-text font-extralight pb-5">
                He sells frames between 8- and 12-feet wide to fit 96-inch to
                150-inch diagonal screens. Once the frames are set up outdoors,
                they're built to stay out year-round but remain moveable around
                the yard. Screens hang on a grommet system and take less than
                two minutes to attach, Morton said.
              </p>
              <p className="sm:text-23 text-base press-text font-extralight pb-5">
                Frames and projector stands are built out of a lightweight cedar
                in his wood shop and take two to three days. Sales so far have
                been within Maine, but he's able to travel within a four-hour
                radius to New Hampshire, Massachusetts and Vermont to deliver
                and setup.
              </p>
              <p className="sm:text-23 text-base press-text font-extralight pb-5">
                Packages, which include projectors and equipment, in wired and
                wireless versions, start at $2,399.
              </p>
              <p className="sm:text-23 text-base press-text font-extralight pb-5">
                Next month, he plans to start selling how-to manuals and
                blueprints for customers to build their own frames and stands.
              </p>
              <p className="sm:text-23 text-base press-text font-extralight pb-5">
                Especially with a fire pit nearby, they're good for year-round
                outdoor viewing, Morton said.
              </p>
              <p className="sm:text-23 text-base press-text font-extralight pb-5">
                His favorite two movies to watch under the stars are "Lost
                Boys," "which brings me back to being a teenager hanging out
                with my friends and family watching Halloween movies," and
                "Tombstone," "which brings me back to my youth watching western
                cowboy movies with my dad."
              </p>
            </div>
            <div className="press-release-padding pt-8 sm:text-black text-white">
              <div className="border-b border-gray-400" />
              <h2 className="sm:text-31 text-2xl sm:pb-5 pb-4 sm:pt-5 pt-8 press-contact">
                Press Contact
              </h2>
              <p className="sm:text-23 text-base contact-det">
                Wireless Outdoor Cinema Company
                <br />
                Todd Morton – owner
              </p>
              <a
                className="text-blue-600 sm:text-23 text-base contact-det"
                href="mailto:todd@wirelessoutdoorcinema.com"
              >
                todd@wirelessoutdoorcinema.com
              </a>
              <br />
              <a
                className="sm:text-23 phone-color text-base contact-det"
                href="tel:207-647-8759"
              >
                (207) 647-8759
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default October10PressRelease
