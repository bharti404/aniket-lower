// import React from "react";
// import { Link } from "react-router-dom";

// import LowercaseeventsLogo from "../assests/LowercaseLogoRect.png";
// import "./Navbartoplogo.css";

// const Navbartoplogo = () => {
//   return (
//     <>
//       <div className="navbar_with_top_logo">
//         <div className="navbar-logo">
//           <Link to="/">
//             <img src={LowercaseeventsLogo} alt="" />
//           </Link>
//         </div>
//         <div className="navbar-bar_wtl">
//           <Link to="/" className="navbar-items">
//             HOME
//           </Link>

//           <Link to="/events" className="navbar-items">
//             EVENTS
//           </Link>
//           <Link to="/albums" className="navbar-items">
//             ALBUMS
//           </Link>
//           <Link to="/artists" className="navbar-items">
//             ARTISTS
//           </Link>
//         </div>
//       </div>

//       <div className="navbar-spacer"></div>
//     </>
//   );
// };

// export default Navbartoplogo;

// bharti

import React, { useState } from "react";
import { Link } from "react-router-dom";

import LowercaseeventsLogo from "../assests/LowercaseLogoRect.png";
import "./Navbartoplogo.css";

const Navbartoplogo = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="navbar_with_top_logo">
        <div className="navbar-top-row">
          <div className="navbar-logo">
            <Link to="/">
              <img src={LowercaseeventsLogo} alt="Lowercase Events" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div
            className={`menu-btn ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div className={`navbar-bar_wtl ${menuOpen ? "active" : ""}`}>
          <Link to="/" className="navbar-items" onClick={() => setMenuOpen(false)}>HOME</Link>
          <Link to="/events" className="navbar-items" onClick={() => setMenuOpen(false)}>EVENTS</Link>
          <Link to="/albums" className="navbar-items" onClick={() => setMenuOpen(false)}>ALBUMS</Link>
          <Link to="/artists" className="navbar-items" onClick={() => setMenuOpen(false)}>ARTISTS</Link>
        </div>
      </div>

      <div className="navbar-spacer"></div>
    </>
  );
};

export default Navbartoplogo;
