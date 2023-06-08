import React from "react"

const PageWrapper = ({ children, className }) => {
  return (
    <div className={`max-w-6xl md:px-3 px-5 mx-auto ${className}`}>
      {children}
    </div>
  )
}

export default PageWrapper
