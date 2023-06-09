import React from "react"
export const Header = ({ children, className }) => {
  return (
    <h2
      className={`text-2xl md:text-4xl font-semibold leading-c18 md:leading-none md:pb-3 pb-2 ${className}`}
    >
      {children}
    </h2>
  )
}

export const SubHeader = ({ children, className }) => {
  return (
    <p className={`txt-xl font-bold md:text-2xl pb-4 xl:pb-5   ${className}`}>
      <span className="text-orng md:leading-none  leading-c14">{children}</span>
    </p>
  )
}
