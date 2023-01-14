import React from "react"
import bgPatternIntroDesktop from "../assets/bg-pattern-intro-desktop.svg"
import bgPatternIntroMobile from "../assets/bg-pattern-intro-mobile.svg"

export default function Header({ children }) {
  return (
    <div className="bg-center bg-hero-pattern rounded-bl-[100px] pt-14">
      {children}
    </div>
  )
}
