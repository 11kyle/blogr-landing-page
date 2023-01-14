import React from "react"
import logo from "../assets/logo.svg"

export default function Footer() {
  return (
    <footer className="flex flex-col lg:flex-row lg:items-start lg:justify-between items-center bg-[#24242C] rounded-tr-[100px] py-20 lg:px-40">
      <img className="w-[100px]" src={logo} alt="logo" />
      <ul className="flex flex-col justify-center text-white text-opacity-75 mt-10 lg:mt-0">
        <li className="text-lg text-opacity-100 font-medium mb-5">Product</li>
        <li>Overview</li>
        <li>Pricing</li>
        <li>Marketplace</li>
        <li>Features</li>
        <li>Integrations</li>
      </ul>
      <ul className="flex flex-col justify-center text-white text-opacity-75 mt-10 lg:mt-0">
        <li className="text-lg text-opacity-100 font-medium mb-5">Company</li>
        <li>About</li>
        <li>Team</li>
        <li>Blog</li>
        <li>Careers</li>
      </ul>
      <ul className="flex flex-col justify-center text-white text-opacity-75 mt-10 lg:mt-0">
        <li className="text-lg text-opacity-100 font-medium mb-5">Connect</li>
        <li>Contact</li>
        <li>Newsletter</li>
        <li>LinkedIn</li>
      </ul>
    </footer>
  )
}
