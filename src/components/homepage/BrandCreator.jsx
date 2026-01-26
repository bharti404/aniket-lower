import React from 'react'
import './BrandCreator.css'


const items = [
  "ARE YOU A CREATOR ?",
  "GET IN TOUCH",
  "ARE YOU A CREATOR ?",
  "GET IN TOUCH"
];

const BrandCreator = () => {


      
  return (
    <div className="strip-wrapper">
      <div className="scroll-container">
        <div className="scroll-content">
          {items.map((item, i) => (
            <React.Fragment key={i}>
              <span>{item}</span>
              <span className="dot">|</span>
            </React.Fragment>
          ))}

          {/* Duplicate for infinite looping */}
          {items.map((item, i) => (
            <React.Fragment key={`dup-${i}`}>
              <span>{item}</span>
              <span className="dot">|</span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  )
}

export default BrandCreator