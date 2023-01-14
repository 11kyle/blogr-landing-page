import React from "react"

export default function Button({ children, onClick, variant }) {
  let buttonVariant = ""
  switch (variant) {
    case "text":
      buttonVariant = "btn-text"
      break
    case "contained":
      buttonVariant = "btn-contained"
      break
    case "outlined":
      buttonVariant = "btn-outlined"
      break

    default:
      break
  }

  return (
    <button
      className={`btn ${buttonVariant} flex items-center justify-center`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
