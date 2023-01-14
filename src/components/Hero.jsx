import React from "react"
import Button from "./Button"

export default function Hero({ title, lead }) {
  return (
    <div className="text-center text-white pt-24 pb-[156px]">
      <h1 className="text-4xl lg:text-6xl lg:leading-[98px] font-semibold">
        A modern publishing platform{title}
      </h1>
      <p className="text-lg font-normal px-8 mb-10">
        Grow your audience and build your online brand{lead}
      </p>
      <div className="flex justify-center gap-x-4">
        <Button variant="contained">Start for Free</Button>
        <Button variant="outlined">Learn More</Button>
      </div>
    </div>
  )
}
