import React from "react"
import { FamilyMovieIcon } from "@components/svg/PerfectFor/family-movie-icon"
import { BackyardIcon } from "@components/svg/PerfectFor/backyard-icon"
import { SportStadiumIcon } from "@components/svg/PerfectFor/sport-stadium-icon"
import { VideoGameConsoleIcon } from "@components/svg/PerfectFor/video-game-console"

const PerfectFor = () => {
  const gridItems = [
    {
      id: 0,
      img: (
        <BackyardIcon className="grid-icon my-3 mx-auto w-full md:w-auto h-24 md:h-32 p-4" />
      ),
      text: "Homeowners with a backyard",
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
        <FamilyMovieIcon className="grid-icon my-3 mx-auto w-full md:w-auto h-24 md:h-32 p-4" />
      ),
      text: "Family blockbuster movie night",
    },
    {
      id: 3,
      img: (
        <SportStadiumIcon className="grid-icon my-3 mx-auto w-full md:w-auto h-24 md:h-32 p-4" />
      ),
      text: "Sporting event parties with friends",
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
        <VideoGameConsoleIcon className="grid-icon my-3 mx-auto w-full md:w-auto h-24 md:h-32 p-4" />
      ),
      text: "Video game parties with friends",
    },
  ]

  return (
    <div
      className="black-back relative text-white border-b md:border-none border-grey-subnav"
      id="cinemauses"
    >
      <div className="container mx-auto py-6 xl:py-16 flex flex-col xl:grid xl:grid-cols-12 w-full">
        <div className="text-center xl:col-span-12 xl:text-xl pb-3">
          <h2 className="text-4xl md:text-6xl font-semibold leading-9 md:leading-none pb-3 xl:pb-3">
            Outdoor movie theater perfect for
          </h2>
          <p className="text-2xl md:text-4xl pb-4 xl:pb-5 text-orng leading-8">
            Homeowners who have a backyard. Regular use. Events and parties.
          </p>
          <p className="text-lg md:text-2xl">
            The DIY on how-to build an outdoor movie theater was developed for
            homeowners by a homeowner. If you've been dreaming of owning an
            outdoor movie theater, you can get the only DIY on how-to build a
            professional outdoor movie theater for just $99 (50% Off. Regularly
            $199. A DIY bundle valued at $3,000).
          </p>
          <br />
          <p className="text-lg md:text-2xl">
            My outdoor movie theaters were designed to be an extension of your
            living room where you can enjoy your favorite entertainment outside
            regularly with an easy setup every time.
          </p>
        </div>
        <div className="col-span-12 grid grid-cols-4 gap-5 xl:gap-20 mt-12 xl:mt-16">
          {gridItems.map(item => (
            <div
              className="orng-overlay col-span-2 sm:col-span-1"
              key={item.id}
            >
              <div className="md:border rounded-md border-grey-theater py-0 px-5 md:p-5 text-center h-full rollover-svg-item">
                {item.img}
                <p className="text-lg md:text-2xl leading-6">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PerfectFor
