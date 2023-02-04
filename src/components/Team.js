import React from "react";
import Card from "./Card";
import Heading from "./Heading";
import HorizontalRule from "./HorizontalRule";
import "./Team.css";
import logo from "../images/logo.png";
import shipraMam from "../images/teamImages/Shipra_Ahuja.svg";
import { CouncileTeamData } from "./CouncileTeamData";

export default function Team() {
  return (
    <>
      <div className="team">
        <div className="team-heading">
          <img src={logo} alt="brand" className="logo-img" />
          <Heading text="our" main="Team" />
        </div>
        <HorizontalRule />
        <div className="members">
          <Heading text="Faculty" main="Coordinator" />
          <div className="members-container">
            <Card
              url={shipraMam}
              initial="S"
              name="Dr. Shipra Ahuja Joshi"
              post="Faculty Coordinator"
              // linkedin="/"
              // instagram="/"
            />
          </div>
        </div>

        <HorizontalRule />
        {/* councile team */}
        <div className="members">
          <Heading text="Organizing" main="Committee" />

          <div className="members-container">
            {CouncileTeamData.map((person) => {
              return (
                <Card
                  url={person.url}
                  initial={person.initial}
                  name={person.name}
                  post={person.post}
                  linkedin={person.linkedin}
                  instagram={person.instagram}
                />
              );
            })}
          </div>
        </div>
        <HorizontalRule />
        


      </div>
    </>
  );
}
