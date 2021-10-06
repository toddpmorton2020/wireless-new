import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import bannerMobile from "../images/todd-wireless-outdoor-cinema.png"
import frameMobile from "../images/outdoor-movie-theater-frame.jpg"
import standMobile from "../images/outdoor-movie-projector-stand.jpg"
import signatureWhite from "../images/signature_white.png"
import signatureBlack from "../images/signature_black.png"

import "../css/about.css"

function About() {
  return (
    <Layout>
      <SEO title="About" />
      {/* <div> */}
      <div className="container mx-auto">
        <div className="pt-4">
          <div className="flex items-center text-sm">
            <Link to="/" className="text-blue-600 sm:text-black cursor-pointer">
              Home
            </Link>
            <span className="mx-1 sm:mx-2">&gt;</span>
            <span to="#">About</span>
          </div>
        </div>
      </div>
      <div className="mt-4 md:hidden">
        <img src={bannerMobile} className="w-full" />
      </div>
      <div className="container max-w-4xl mx-auto top-heading">
        <h1 className="text-orange-500 text-5xl ml-0 mt-6">
          <span className="about">About</span>
        </h1>
      </div>
      {/* </div> */}
      <div className="container max-w-4xl mx-auto xl:pt-4 desktop">
        <img src="/first.png" alt="" />
        <p className="image-text-color image-text-press-1 text-sm pt-3 ml-2">
          Todd Morton, founder of the Wireless Outdoor Cinema Company fishing on
          Woods Pond in Bridgton, ME.
        </p>
      </div>
      <div className="container max-w-4xl mx-auto mobile-padding">
        <div className="pt-1 mt-6">
          <p className="mb-4 xl:ml-2">
            Welcome! Thank you for stopping by – I appreciate your interest in
            learning more about me and my Wireless Outdoor Cinema business.
          </p>
          <p className="text-2xl font-bold mb-2 xl:ml-2">Growing up</p>
          <p className="mb-4 xl:ml-2">
            I’m originally from Vermont, and growing up; I split my time between
            Vermont and Maine. My childhood memories are filled with
            unforgettable times spent with my family and friends outdoors –
            exploring in the woods, observing wildlife, swimming, fishing,
            hiking, and camping outside.
          </p>
          <p className="mb-4 xl:ml-2">
            When I was young, I started learning about the construction trade
            watching my grandfather and father do miscellaneous projects and
            repairs around our house and at the summer camp in Bridgton, Maine.
            Watching my Dad and Grandfather build and fix things piqued my
            interest, and my Dad started to teach me the basics. By the time I
            was a teen, I was building waterfront dock systems, decks and
            repairing things for neighbors and friends.
          </p>
          <p className="text-2xl font-bold mb-2 xl:ml-2">
            Learning from the best
          </p>
          <p className="mb-4 xl:ml-2">
            In high school, I had a great Woodshop Teacher named David Tieff – a
            master woodcarver and woodworker. I was inspired by his work and
            took every available woodshop class he offered. Mr. Tieff taught me
            how to build furniture, wood carve, and use every type of
            woodworking power tool and machine available in a state-of-art
            woodshop. I remember always dreaming of having my own woodshop
            someday. After high school, I worked for various home builders and
            quickly learned the building trade. I even helped build a couple of
            log homes, one of which I built with my family and now live in it
            full-time in beautiful Bridgton, Maine.
          </p>
          <div className="xl:pt-4 desktop">
            <img src="/second.png" alt="" />
            <p className="image-text-color image-text-press-1 text-sm pt-3 xl:ml-2">
              Todd Morton preparing cuts on a table saw at his property in
              Bridgton, ME.
            </p>
          </div>
          <p className="text-2xl font-bold mb-2 mt-6 xl:ml-2">
            My professional career
          </p>
          <p className="mb-4 xl:ml-2">
            At age 23, I took business and marketing courses at Champlain
            College in Burlington, Vermont, to help expand my business knowledge.
            After college, I self-taught myself all about the emerging internet
            and built my first website, while starting to learn about search engine optimization and how to get websites found online. I then moved into
            the Internet Marketing field and had the opportunity to work for
            some well-known high technology companies such as Lycos – the
            internet search company (remember the Black Lab?) and Dragon
            Software (the voice-to-text software), a division of Nuance
            Communications – now owned by Microsoft.
          </p>
          {/* <p className="xl:text-2xl font-bold mb-2 xl:ml-2">The Outdoor Movie Theater idea</p> */}
          <p className="xl:ml-2">
            After 25 years of working in the Internet Marketing field, my desire
            to return to my roots frequently occupied my thoughts. I decided to
            take time off from the corporate world and strategized on my next
            career move. I knew I wanted to work for myself and be outside in
            nature versus being tethered to a desk in an unhealthy corporate
            environment.
          </p>
        </div>
      </div>
      <div className="quote-box mt-8 sm:mt-16 quote-background mobile">
        <div className="container mx-auto text-lg sm:text-3xl leading-tight pt-1 quote py-6 when-build">
          When I built my first outdoor movie theater in my backyard, I knew
          other homeowners would love this as much as I do. Today, I am
          providing big-screen entertainment to homeowners and businesses and
          passionate about what I do.
          {/* I’m looking forward to helping you reach */}
          {/* your dream of owning the best outdoor movie theater available on the */}
          {/* market. */}
        </div>
        <img
          src={signatureWhite}
          className="h-10 mt-3 mx-auto signature-white"
        />
        <img
          src={signatureBlack}
          className="h-10 mt-3 mx-auto signature-black"
        />
      </div>
      <div className="container max-w-4xl mx-auto mobile-padding">
        <div className="sm:pt-16 xl:pt-5 xl:ml-2">
          <h2 className="sm:mb-4 xl:mb-3 text-xl sm:text-2xl font-bold product-title heading-outdoor">
            The Outdoor Movie Theater{" "}
            <span className="solution-orange">idea</span>
          </h2>
          <p className="mb-4">
            My entrepreneurial wheels started to turn. I wanted to set up an
            outdoor movie in my backyard for years and started researching
            online companies that provided outdoor cinemas. Unfortunately, the
            companies I found online only sold inflatable air screen cinemas and
            wanted a better solution that was easy to set up and start watching
            without a lengthy setup. I spent two years researching and testing
            different outdoor cinema equipment and fine-tuning my outdoor movie
            theater solution. Finally, I developed a simple to use, high-quality
            outdoor movie theater that could be used year-round – even in the
            cold winter months.
          </p>
          <p className="mb-4">
            I created a weather-resistant movie screen frame built from
            pressure-treated 4” x 4” wood posts and added post and beam hardware
            so it would never rust. The final product is strong, durable, can
            handle any weather condition Mother Nature throws at it and looks
            fantastic on my property. The movie screen frame never has to be
            broken down and stays up for year-round use, making it easy to
            attach and remove the cinematic screen when you want to watch
            movies. After a year of designing and building various frame
            systems, I developed one that I knew homeowners would love.
          </p>
        </div>
      </div>
      <div className="">
        <div
          className="about-image w-full relative bg-cover bg-bottom mt-8 mobile mobile-tree"
          style={{ backgroundImage: `url(${frameMobile})` }}
        />
      </div>
      <div className="container max-w-4xl mx-auto xl:pt-8 desktop">
        <img src="/third.png" alt="" />
        <p className="image-text-color image-text-press-1 text-sm pt-3 ml-2">
          New Timberline Outdoor Cinema 150” Big Moose wired option package
          located on site of the Wireless Outdoor Cinema Company property in
          Bridgton, ME.
        </p>
      </div>
      <div className="container max-w-4xl mx-auto mobile-padding">
        <div className="pt-8 xl:ml-2">
          <p className="mb-4">
            After developing a solid frame system, the next challenge was
            figuring out how to organize all of my cinema equipment, such as the
            projector, DVD player, streaming media player, digital tuner,
            transmitter, speakers, and more. I searched endlessly online for an
            outdoor projector and equipment stand solution and only found tripod
            projector stands with enough room to hold an outdoor projector and
            nothing else.
          </p>
          <p className="mb-4">
            Discouraged with the results I found online for projector stand
            solutions, I began designing various outdoor projector stands that
            could hold all of the cinema electronic components on. I built over
            ten different projector stand models and tested them over a year.
            The final result was a beautiful cedar wood projector and equipment
            stand that neatly organized all of my cinema equipment. In addition,
            the projector stand is lightweight, easy to carry,
            weather-resistant, and has an adjustable projector shelf to get the
            proper viewing angle to reach the cinematic screen – the only one of
            its kind on the market.
          </p>
        </div>
      </div>
      <div className="">
        <div
          className="about-image w-full relative bg-cover bg-bottom mt-8 mobile standMobile"
          style={{ backgroundImage: `url(${standMobile})` }}
        />
      </div>
      <div className="container max-w-4xl mx-auto xl:pt-4 desktop">
        <img src="/fourth.png" alt="" />
        <p className="image-text-color image-text-press-1 text-sm pt-3 ml-2">
          New Outdoor Projector Stand located on site of the Wireless Outdoor
          Cinema Company property in Bridgton, ME.
        </p>
      </div>
      <div className="container max-w-4xl mx-auto mobile-padding thankyou">
        <div className="pt-8 xl:pt-8 sm:pt-16 xl:ml-2">
          <p className="mb-4">
            The cinema equipment stays on the projector stand and never needs to
            be removed - similar to an entertainment center inside your home.
            Store the projector stand with everything on it inside your house,
            and when you want to have a movie night, carry the stand outside,
            power it on, and start watching immediately. After the movie, you’ll
            need to take the projector stand back inside, as the cinema
            equipment is not waterproof.
          </p>
          <p className="mb-4">
            I’ve been thrilled with the positive feedback on my wireless outdoor
            cinema business from customers, family, friends, and the media. I
            hope we get an opportunity to get to know each other and explore the
            possibilities of building your very own dream backyard movie
            theater.
          </p>
          <p className="mb-4">
            Thanks for taking the time to read about me, and don’t hesitate to
            reach out with any questions you might have.
          </p>
          <p className="mb-4">My best,</p>
          <img src={signatureBlack} className="h-10 mb-16" />
        </div>
      </div>
    </Layout>
  )
}

export default About
