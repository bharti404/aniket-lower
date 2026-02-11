import React from "react";
import { Typewriter } from "react-simple-typewriter";
import "./Lowercaseticketwidget.css";
import FatsomaIframe from "./FatsomaIframe";

const FatsomaWidget = () => {
  return (
    <div className="fatsoma_tkt_widget">
      <div className="tkt_events_wdgts_top">
        <div className="tkt_events_wdgts_top_left">
          <p className="tkt_event_wdgt_btn">EVENTS THIS WEEK</p>
        </div>

        <div className="tkt_events_wdgts_top_right">
          <Typewriter
            words={["see our full event schedule here!"]}
            loop={5}
            cursor={false}
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </div>
      </div>


<FatsomaIframe />
    </div>
  );
};

export default FatsomaWidget;
