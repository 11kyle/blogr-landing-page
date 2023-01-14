import React, { useEffect, useRef, useState } from "react"
import Button from "./Button"
import iconArrowLight from "../assets/icon-arrow-light.svg"

export default function DropdownMenu({ btn, menuItems }) {
  const [show, setShow] = useState(false)
  const dropdownRef = useRef(null)
  useOnClickOutside(dropdownRef, () => setShow(false))

  function handleClick() {
    setShow(!show)
  }

  return (
    <div className="relative">
      <button
        onClick={handleClick}
        className="flex items-center justify-center text-white border-none rounded-none px-2 py-3 mx-1 hover:underline underline-offset-4"
      >
        {btn}
        <img
          className={`${
            show ? "rotate-180" : "rotate-0"
          } transition-all duration-300 ml-3`}
          src={iconArrowLight}
          alt="arrow"
        />
      </button>
      {/* Dropdown menu */}
      {show && (
        <div
          ref={dropdownRef}
          className="z-10 absolute top-full bg-white rounded drop-shadow p-6 w-[168px] cursor-pointer"
        >
          <ul>
            {menuItems.map((item) => (
              <li
                key={item}
                className="text-[#2D2E40] text-[15px] leading-8 hover:font-bold"
              >
                {item}
              </li>
            ))}
            {/* <li className="text-[#2D2E40] text-[15px] leading-8 hover:font-bold">
              Overview
            </li>
            <li className="text-[#2D2E40] text-[15px] leading-8 hover:font-bold">
              Pricing
            </li>
            <li className="text-[#2D2E40] text-[15px] leading-8 hover:font-bold">
              Marketplace
            </li>
            <li className="text-[#2D2E40] text-[15px] leading-8 hover:font-bold">
              Features
            </li>
            <li className="text-[#2D2E40] text-[15px] leading-8 hover:font-bold">
              Integrations
            </li> */}
          </ul>
        </div>
      )}
    </div>
  )
}

// Hook
function useOnClickOutside(ref, handler) {
  useEffect(
    () => {
      const listener = (event) => {
        // Do nothing if clicking ref's element or descendent elements
        if (!ref.current || ref.current.contains(event.target)) {
          return
        }
        handler(event)
      }
      document.addEventListener("mousedown", listener)
      document.addEventListener("touchstart", listener)
      return () => {
        document.removeEventListener("mousedown", listener)
        document.removeEventListener("touchstart", listener)
      }
    },
    // Add ref and handler to effect dependencies
    // It's worth noting that because passed in handler is a new ...
    // ... function on every render that will cause this effect ...
    // ... callback/cleanup to run every render. It's not a big deal ...
    // ... but to optimize you can wrap handler in useCallback before ...
    // ... passing it into this hook.
    [ref, handler]
  )
}
