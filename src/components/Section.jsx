import React from "react"

export default function Section({ heading, body }) {
  return (
    <div className="text-center lg:text-left max-w-[540px] mt-10">
      <h1 className="text-[#1F3E5A] text-2xl font-semibold px-20 lg:px-0 mb-4">
        {heading}
      </h1>
      <p className="text-[#4C5862] text-base leading-7 font-normal px-6 lg:px-0">
        {body}
      </p>
    </div>
  )
}
