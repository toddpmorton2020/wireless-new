import React from "react"
export const Header = ({ children, className }) => {
  return (
    <h2
      className={`text-2xl md:text-4xl font-semibold leading-c18 md:leading-none md:pb-3 ${className}`}
    >
      {children}
    </h2>
  )
}

export const SubHeader = ({ children, className }) => {
  return (
    <p
      className={`txt-xl font-bold md:text-2xl pb-4 xl:pb-5  md:leading-none leading-c14 ${className}`}
    >
      <span className="text-orng">{children}</span>
    </p>
  )
}
