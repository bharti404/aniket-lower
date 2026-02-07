// import React from 'react'
// import { Link } from 'react-router-dom'
// import './Navbar.css'


// const Navbar = () => {
//   return (
//     <div className="navbar">
                
//                 <div className="navbar-bar">
                    
//                     <Link  to='/' className='navbar-items'>HOME</Link>

//                     <Link  to='/events' className='navbar-items'>EVENTS</Link>
//                     <Link  to='/albums' className='navbar-items'>ALBUMS</Link>
                    
//                       <Link  to='/artists' className='navbar-items'>ARTISTS</Link>
                    


                 
//                 </div>
//             </div>
//   )
// }

// export default Navbar


import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="navbar">
      <div className="navbar-bar">

        {/* Menu Button */}
        <div 
          className={`menu-btn ${menuOpen ? 'open' : ''}`} 
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Nav Links */}
        <div className={`navbar-links ${menuOpen ? 'active' : ''}`}>
          <Link to='/' className='navbar-items' onClick={() => setMenuOpen(false)}>HOME</Link>
          <Link to='/events' className='navbar-items' onClick={() => setMenuOpen(false)}>EVENTS</Link>
          <Link to='/albums' className='navbar-items' onClick={() => setMenuOpen(false)}>ALBUMS</Link>
          <Link to='/artists' className='navbar-items' onClick={() => setMenuOpen(false)}>ARTISTS</Link>
        </div>

      </div>
    </div>
  )
}

export default Navbar