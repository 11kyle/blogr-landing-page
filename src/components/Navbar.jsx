import React from "react"
import logo from "../assets/logo.svg"
import iconHamburger from "../assets/icon-hamburger.svg"
import DropdownMenu from "./DropdownMenu"
import Button from "./Button"

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 md:mx-10 lg:mx-20">
      <img src={logo} alt="logo" />
      <div className="hidden lg:flex lg:ml-10">
        <DropdownMenu
          btn="Product"
          menuItems={[
            "Overview",
            "Pricing",
            "Marketplace",
            "Features",
            "Integrations",
          ]}
        />
        <DropdownMenu
          btn="Company"
          menuItems={["About", "Team", "Blog", "Careers"]}
        />
        <DropdownMenu
          btn="Connect"
          menuItems={["Contact", "Newsletter", "LinkedIn"]}
        />
      </div>
      <img className="lg:hidden" src={iconHamburger} alt="menu" />
      <div className="hidden lg:flex ml-auto">
        <Button variant="text">Login</Button>
        <Button variant="text">Sign Up</Button>
      </div>
    </nav>
  )
}
