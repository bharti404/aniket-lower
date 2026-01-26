import React, { useEffect, useRef, useState } from "react";
import "./Homepage.css";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import LowerCaseLogo from "../assests/LowercaseLogoRect.png";
import Brandslogocarousel from "../brandscarousel/Brandslogocarousel";
import Artists from "./Artistshome";

import Prefooter from "../footer/Prefooter";

import HomeNewGallery from "./HomeNewGallery";

import InstagramEmbed from "../Insta/Insta";
import Modernphotos from "../photos/Modernphotos";
import Lowercaseticketwidget from "../LowercaseTicket/Lowercaseticketwidget";
import BrandCreator from "./BrandCreator";

const Homepage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);


  useEffect(() => {

    setTimeout(() => {
      setIsVisible(true);
      
    }, 2000);

    setTimeout(() => {
      setIsVisible(false);
    }, 10000);




  }, []);
  return (
    <div className="homepage-container">
      <Navbar />

      <div className="belownavbar">
        <video
          className="background-video"
          src={
            "https://res.cloudinary.com/doph28x3i/video/upload/v1729323634/Lowercase%20Events/jwm2qahfxoikoudl7kkc.mp4"
          }
          autoPlay
          loop
          muted
        ></video>

        <div
          className={`vdo_home_content_main ${isVisible ? "visible" : ""}`}
          ref={sectionRef}
        >
          <div className="vdo_home_content_logo">
            <img
              src={LowerCaseLogo}
              alt="Lowercase Logo"
              className="rotating-logo"
            />
          </div>

          <div className="vdo_home_content_text">
            <p className="vdoheadhomepage">
              Transforming The scene, one Event <br /> at a Time since 2010 _
            </p>
            <p className="vdohome_contentone">
            Lowercase Events exists for the nights you remember and the ones you don’t. We blend the right music, the right crowd, and the right atmosphere to create experiences that feel authentic, culturally relevant, and intentional.

            </p>

            <p className="vdohome_contenttwo">
            Trusted by leading venues, artists, and partners.
            </p>
          </div>
        </div>
      </div>

      <Brandslogocarousel />
      <Lowercaseticketwidget />

      <Modernphotos />

      <HomeNewGallery />

      <BrandCreator />

      <Artists />

      <InstagramEmbed />

      <Prefooter />

      <Footer />
    </div>
  );
};

export default Homepage;
