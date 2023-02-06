import React from "react";
import "./Home.css";
import introLogo from "../images/logo.svg";
import uniLogo from "../images/medicaps_logo.png"
import clubLogo from "../images/sahityik_logo.png"
import years25 from "../images/Logo_25.png"
import Heading from "./Heading";

export default function Home() {
  return (
    <>
      <div className="home-div" id="home">
        <div className="home-container">
        <img src={introLogo} alt="brand" className="intro" />
        <Heading main="The Literature Fest" />
        {/* द-Sahityik */}
        {/* <h2>द - Sahityik</h2> */}
        <h2>Presented by</h2>
        {/* <h3>Literary Club of Medi-Caps University, Indore</h3> */}
        <div className="img-container">
          <div className="presented-logo">
            <img src={uniLogo} alt="medicaps-logo" />
          </div>
          <div className="year-logo">
            <img src={years25} alt="24-years-logo" />
          </div>
          <div className="presented-logo">
          <img src={clubLogo} alt="club-logo" />
          </div>
        </div>
        </div>
      </div>
    </>
  );
}
