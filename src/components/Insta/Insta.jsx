import React from 'react'
import './Insta.css'
import { Typewriter } from 'react-simple-typewriter';

const Insta = () => {
  return (
<div className='insta_main_container'>

                 <div className="bottom_row">
                    <div className="left_text">FOLLOW US ON INSTAGRAM</div>
        
                            <div className="rightt_text">
                      
                              <Typewriter
                                words={[ '@lowercaseevents']}
                                loop={50}
                                cursor
                                cursorStyle='_'
                                typeSpeed={300}
                                deleteSpeed={100}
                                delaySpeed={1000}
                     
                    
                              />
                            </div>
                  </div>
                <div className='insta_container'>
                <iframe
                  src="https://www.instagram.com/lowercaseevents/embed/"
                  width="100%"
                  height="900"
                  frameBorder="0"
                  scrolling="yes"
                  allowTransparency="true"
                  title='fatsoma'
                  >
                </iframe>
                </div>
 </div>
  )
}

export default Insta