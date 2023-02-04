import React from "react";
import "./About.css";
import Heading from "./Heading";
import HorizontalRule from "./HorizontalRule";
export default function About() {
  return (
    <>
      <div className="about">
        <Heading text="About" main="litopia" />
        <div className="about-text">
          <p>
            Litopia, an ideal imaginary place for every reader's fictional
            escape. With this being the concept and a carnival, we envision it
            to be one of the grandest literary fests of the university.
          </p>
          <p>
            In this two-day event, we are delivering numerous contests that will
            not only gain the interest of the masses but will also excite them
            to explore further in the caves of Litopia.
          </p>
          <p>
            Know more about{" "}
            <a
              className="link"
              href="https://instagram.com/sahityik_mu?igshid=YmMyMTA2M2Y="
              target="_blank"
              rel="noopener noreferrer"
            >
              Litopia
            </a>
            .
          </p>
        </div>
        <div className="about-link-div">
          <div className="about-link-text">
            <p>Connect With Us</p>
          </div>
          <div className="about-link">
            <a href="https://instagram.com/sahityik_mu?igshid=YmMyMTA2M2Y=" target="_blank" rel="noreferrer">
              {" "}
              <i className="bx bxl-instagram-alt"></i>

            </a>
            <a href="https://api.whatsapp.com/send?phone=8889140648" target="_blank" rel="noreferrer">
              {" "}
              <i className="bx bxl-whatsapp"></i>

            </a>
            <a href="https://discord.gg/JeSjSWSFgf"  target="_blank" rel="noreferrer">
              {" "}
              <i className="bx bxl-discord-alt"></i>

            </a>
            <a href="mailto: thesahityikclub@gmail.com" target="_blank" rel="noreferrer">
              {" "}
              <i class='bx bxs-envelope'></i>

            </a>
          </div>
        </div>
        <HorizontalRule />
      </div>
    </>
  );
}
