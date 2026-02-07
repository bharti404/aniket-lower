import React from "react";
import "./Brandslogocarousel.css";
// import Alpha from "../assests/Brands/Brandsforalbumspage/alpha.png";
import Canon from "../assests/Brands/Brandsforalbumspage/canon.png";
import Dji from "../assests/Brands/Brandsforalbumspage/dji.png";
import fujifilm from "../assests/Brands/Brandsforalbumspage/fujifilm.png";
import Gopro from "../assests/Brands/Brandsforalbumspage/gopro.png";
import Instasx from "../assests/Brands/Brandsforalbumspage/instatsx.png";
import Kodak from "../assests/Brands/Brandsforalbumspage/kodak.png";
import Leica from "../assests/Brands/Brandsforalbumspage/leica.png";
import Lumix from "../assests/Brands/Brandsforalbumspage/lumix.png";

import Nikon from "../assests/Brands/Brandsforalbumspage/nikon.png";
import Panasonic from "../assests/Brands/Brandsforalbumspage/panasonic.png";

import Polaroid from "../assests/Brands/Brandsforalbumspage/polaroid.png";

import Tellpro from "../assests/Brands/Brandsforalbumspage/Tellpro.png";



import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const logos = [
    // Alpha,
    Canon,
    Dji,
    fujifilm,
    Gopro,
    Instasx,
    Kodak,

    Leica,
    Lumix,
    Nikon,
    Panasonic,
    Polaroid,
    Tellpro

  // add more logos as needed
];

const BrandLogoCarouselforAlbum = () => {
  const settings = {
    infinite: true,
    speed: 2000, // Adjust the speed for smooth scrolling
    slidesToShow: 5, // Number of logos visible at a time
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 0, // Continuous autoplay speed
    cssEase: "linear", // Smooth linear transition
    variableWidth: true, // Allow each logo to adjust its width
    arrows: false, // Hide navigation arrows
    pauseOnHover: true, // Keeps autoplaying even when hovered

      responsive: [

    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]

  };
  return (
    <div className="logo-slider-album_page">
      <Slider {...settings}>
        {logos.map((logo, index) => (
          <div key={index} className="slider-item">
            <img src={logo} alt={`Logo ${index}`} style={{ width: "50px" }} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BrandLogoCarouselforAlbum;
