import React from "react"
import PlayIcon from "../icons/PlayIcon"
import { SubHeader, Header } from "./Header"

const Video = () => {
  return (
    <div className="black-back py-6 xl:py-16">
      <div className="max-w-2xl mx-auto">
        <div className=" flex md:flex-col flex-col-reverse  container mx-auto how-to">
          <div className="pb-6 text-white ">
            <Header className="md:block hidden">
              Timberline Outdoor Movie Theater
            </Header>
            <Header className="md:hidden">
              <span className="text-xl block">Timberline</span>
              Outdoor Movie Theater
            </Header>
            <SubHeader>
              Watch your favorite entertainment nightly in the fresh air
            </SubHeader>
            <p>
              This revolutionary outdoor movie theater has the fastest setup
              time, the most durable frame system, never has to be broken down,
              and is built to be used year-round. Turn your backyard into an
              entertainment destination.
            </p>
            <div className="flex items-center">
              <PlayIcon className="h-4 mr-2" />
              <p className="text-blue-500">Watch to learn more.</p>
            </div>
          </div>
          <div className="responsive-video h-full video-adjusted mb-4 md:mb-0">
            <video
              controls={true}
              playsInline={false}
              id="mobile_vid"
              className="w-full h-full mx-auto"
              style={{
                maxWidth: "1280px",
                maxHeight: "720px",
                objectFit: "cover",
              }}
            >
              <source src="/homePageVideo.mp4#t=0.1" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Video
