import React from 'react'

export const Hero = ({ children, content }) => {
  return (
    <div className="box-shadow angle-left-right position-relative">
      {children}

      <div className="position-absolute top-25 left-50 container w-100 absolute-center">
        {content}
      </div>
    </div>
  )
}
