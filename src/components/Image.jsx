import React from "react"

export default function Image({ desktopSrc, mobileSrc }) {
  return (
    <picture>
      <source media="(min-width: 1280px)" srcSet={desktopSrc} />
      <img src={mobileSrc} alt="image" />
    </picture>
  )
}
